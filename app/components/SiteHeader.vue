<template>
  <header class="border-b border-slate-200 dark:border-slate-800/60">
    <div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
      <NuxtLink
        to="/"
        class="text-lg font-semibold tracking-wide text-slate-900 dark:text-slate-100"
      >
        P2P Insights
      </NuxtLink>

      <nav aria-label="Main navigation">
        <details class="group relative">
          <summary
            class="cursor-pointer list-none rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
          >
            Platforms
          </summary>
          <div
            class="absolute right-0 z-20 mt-2 w-44 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <NuxtLink
              to="/platforms/bondora"
              class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Bondora
            </NuxtLink>
          </div>
        </details>
      </nav>
    </div>
  </header>
</template>
