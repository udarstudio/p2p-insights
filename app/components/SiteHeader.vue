<script setup lang="ts">
import { platformMenuLinks } from '~/data/platforms'
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
        <div class="nav-platforms relative">
          <NuxtLink
            to="/platforms"
            class="nav-platforms__toggle hidden cursor-pointer rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white dark:focus-visible:ring-slate-500 dark:focus-visible:ring-offset-slate-950 md:inline-flex"
            aria-controls="platforms-menu"
          >
            Platforms
          </NuxtLink>

          <details class="nav-platforms__details md:hidden">
            <summary
              class="nav-platforms__toggle inline-flex cursor-pointer rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white dark:focus-visible:ring-slate-500 dark:focus-visible:ring-offset-slate-950"
              aria-controls="platforms-menu"
            >
              Platforms
            </summary>
          </details>

          <div
            id="platforms-menu"
            class="platform-menu absolute right-0 top-full z-20 w-44 pt-2"
          >
            <ul
              class="rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <li
                v-for="link in platformMenuLinks"
                :key="link.to"
                :class="{ 'md:hidden': link.mobileOnly }"
              >
                <NuxtLink
                  :to="link.to"
                  class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss" src="~/assets/scss/components/site-header.scss"></style>
