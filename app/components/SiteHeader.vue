<script setup lang="ts">
const isPlatformsOpen = ref(false)

const closePlatformsMenu = () => {
  isPlatformsOpen.value = false
}
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
        <div class="group relative hidden md:block">
          <button
            type="button"
            aria-haspopup="true"
            aria-controls="platforms-desktop-menu"
            class="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white dark:focus-visible:ring-slate-500 dark:focus-visible:ring-offset-slate-950"
          >
            Platforms
          </button>
          <div
            id="platforms-desktop-menu"
            class="invisible absolute right-0 top-full z-20 w-44 pt-2 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
          >
            <div
              class="rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <NuxtLink
                to="/platforms/bondora"
                class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Bondora
              </NuxtLink>
              <NuxtLink
                to="/platforms/mintos"
                class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Mintos
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="relative md:hidden">
          <button
            type="button"
            class="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white dark:focus-visible:ring-slate-500 dark:focus-visible:ring-offset-slate-950"
            aria-haspopup="true"
            aria-controls="platforms-mobile-menu"
            :aria-expanded="isPlatformsOpen"
            @click="isPlatformsOpen = !isPlatformsOpen"
          >
            Platforms
          </button>
          <div
            v-show="isPlatformsOpen"
            id="platforms-mobile-menu"
            class="absolute right-0 z-20 mt-2 w-44 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <NuxtLink
              to="/platforms/bondora"
              class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
              @click="closePlatformsMenu"
            >
              Bondora
            </NuxtLink>
            <NuxtLink
              to="/platforms/mintos"
              class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
              @click="closePlatformsMenu"
            >
              Mintos
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
