<script setup lang="ts">
const platformLinks = [
  { label: 'Bondora', to: '/platforms/bondora' },
  { label: 'Mintos', to: '/platforms/mintos' }
]
</script>

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
        <details class="nav-platforms relative">
          <summary
            class="nav-platforms__toggle cursor-pointer rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white dark:focus-visible:ring-slate-500 dark:focus-visible:ring-offset-slate-950"
            aria-controls="platforms-menu"
          >
            Platforms
          </summary>
          <div
            id="platforms-menu"
            class="platform-menu absolute right-0 top-full z-20 w-44 pt-2"
          >
            <ul
              class="rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <li v-for="link in platformLinks" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </details>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss" src="~/assets/scss/components/site-header.scss"></style>
