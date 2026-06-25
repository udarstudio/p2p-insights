import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(rootDir, 'public');
const defaultSiteUrl = 'https://p2pinsights.com';
const defaultEndpoint = 'https://api.indexnow.org/indexnow';
const defaultPaths = ['/', '/platforms', '/platforms/bondora', '/platforms/mintos'];
const keyPattern = /^[A-Za-z0-9-]{8,128}$/;

function parseArgs(argv) {
  const args = {
    dryRun: false,
    endpoint: process.env.INDEXNOW_ENDPOINT || defaultEndpoint,
    key: process.env.INDEXNOW_KEY || '',
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || defaultSiteUrl,
    urls: [],
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--dry-run') {
      args.dryRun = true;
    } else if (arg === '--endpoint') {
      args.endpoint = argv[i + 1] || '';
      i += 1;
    } else if (arg === '--key') {
      args.key = argv[i + 1] || '';
      i += 1;
    } else if (arg === '--site-url') {
      args.siteUrl = argv[i + 1] || '';
      i += 1;
    } else {
      args.urls.push(arg);
    }
  }

  return args;
}

function normalizeSiteUrl(siteUrl) {
  if (!siteUrl) {
    throw new Error('Missing site URL.');
  }

  const parsed = new URL(siteUrl);
  return parsed.origin;
}

function toAbsoluteUrl(value, siteUrl) {
  if (/^https?:\/\//i.test(value)) {
    return new URL(value).toString();
  }

  const normalizedPath = value.startsWith('/') ? value : `/${value}`;
  return new URL(normalizedPath, siteUrl).toString();
}

async function findPublicKey() {
  const filenames = await readdir(publicDir);
  const candidates = [];

  for (const filename of filenames) {
    if (!filename.endsWith('.txt')) {
      continue;
    }

    const key = filename.slice(0, -4);
    if (!keyPattern.test(key)) {
      continue;
    }

    const contents = (await readFile(path.join(publicDir, filename), 'utf8')).trim();
    if (contents === key) {
      candidates.push(key);
    }
  }

  if (candidates.length === 1) {
    return candidates[0];
  }

  if (candidates.length > 1) {
    throw new Error(`Found multiple IndexNow key files: ${candidates.join(', ')}`);
  }

  throw new Error('No IndexNow key file found in public/.');
}

function getUrlList(inputUrls, siteUrl) {
  const urls = inputUrls.length > 0 ? inputUrls : defaultPaths;
  const siteHost = new URL(siteUrl).host;

  return [...new Set(urls.map((url) => toAbsoluteUrl(url, siteUrl)))].map((url) => {
    const parsed = new URL(url);

    if (parsed.host !== siteHost) {
      throw new Error(`IndexNow URL must belong to ${siteHost}: ${url}`);
    }

    return parsed.toString();
  });
}

async function submitUrls({ endpoint, key, siteUrl, urls }) {
  const payload = {
    host: new URL(siteUrl).host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList: urls,
  };
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });
  const responseText = await response.text();

  if (response.status !== 200 && response.status !== 202) {
    throw new Error(
      `IndexNow submission failed with ${response.status}: ${responseText || response.statusText}`
    );
  }

  return response.status;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const siteUrl = normalizeSiteUrl(args.siteUrl);
  const key = args.key || (await findPublicKey());
  const urls = getUrlList(args.urls, siteUrl);

  if (!keyPattern.test(key)) {
    throw new Error('IndexNow key must be 8 to 128 letters, numbers, or hyphens.');
  }

  console.log(`${args.dryRun ? 'Would submit' : 'Submitting'} ${urls.length} URL(s) to IndexNow:`);
  for (const url of urls) {
    console.log(`- ${url}`);
  }

  if (args.dryRun) {
    console.log('Dry run completed. No request was sent.');
    return;
  }

  const status = await submitUrls({
    endpoint: args.endpoint,
    key,
    siteUrl,
    urls,
  });

  console.log(`IndexNow accepted the submission with HTTP ${status}.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
