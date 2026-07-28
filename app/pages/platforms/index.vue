<script setup lang="ts">
import { platforms } from '~/data/platforms'

useSeoMeta({
  title: 'Top P2P Platforms | P2P Insights',
  description:
    'A ranked list of top P2P investing platforms including IUVO, Mintos, Bondora Go & Grow, and Robo.cash, with concise notes and review links.'
})

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Platforms', to: '/platforms' }
]
</script>

<template>
  <main class="mx-auto max-w-5xl px-6 py-12">
    <AppBreadcrumbs :items="breadcrumbs" />

    <article class="space-y-10" aria-labelledby="platforms-title">
      <header class="space-y-3">
        <h1
          id="platforms-title"
          class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Top P2P Platforms
        </h1>
        <p class="max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          These are the top P2P platforms currently covered on P2P Insights.
          The list is ranked, and more rating details will be added as the
          platform coverage grows.
        </p>
      </header>

      <section
        class="space-y-4"
        aria-label="Ranked P2P platform reviews"
      >
        <article
          v-for="platform in platforms"
          :key="platform.to"
          class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/40"
        >
          <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-950"
                aria-label="Platform rank"
              >
                {{ platform.rank }}
              </div>
              <div>
                <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">
                  {{ platform.name }}
                </h2>
                <p class="mt-1 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {{ platform.tagline }}
                </p>
              </div>
            </div>

            <NuxtLink
              :to="platform.to"
              class="inline-flex shrink-0 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
            >
              {{ platform.reviewCta }}
            </NuxtLink>
          </div>

          <div class="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800/80">
            <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ platform.summary }}
            </p>
            <dl class="mt-4 grid gap-3 sm:grid-cols-2">
              <div
                v-for="fact in platform.facts"
                :key="fact.label"
              >
                <dt class="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                  {{ fact.label }}
                </dt>
                <dd class="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {{ fact.value }}
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </section>
    </article>
  </main>
</template>
