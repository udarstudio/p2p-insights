<script setup lang="ts">
type BreadcrumbItem = {
  label: string
  to: string
}

const props = defineProps<{
  items: BreadcrumbItem[]
}>()

const lastItemIndex = computed(() => props.items.length - 1)
const resolvedItems = props.items.map((item) => ({
  ...item,
  url: withSiteUrl(item.to)
}))

useHead(() => ({
  script: [
    {
      id: 'breadcrumb-json-ld',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: resolvedItems.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          item: item.url.value
        }))
      })
    }
  ]
}))
</script>

<template>
  <nav aria-label="Breadcrumb" class="mb-8 text-sm">
    <ol class="flex flex-wrap items-center gap-2 text-slate-600 dark:text-slate-400">
      <li
        v-for="(item, index) in items"
        :key="item.to"
        class="flex items-center gap-2"
      >
        <NuxtLink
          v-if="index < lastItemIndex"
          :to="item.to"
          class="font-medium text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
        >
          {{ item.label }}
        </NuxtLink>
        <span
          v-else
          class="font-medium text-slate-900 dark:text-white"
          aria-current="page"
        >
          {{ item.label }}
        </span>
        <span v-if="index < lastItemIndex" aria-hidden="true">/</span>
      </li>
    </ol>
  </nav>
</template>
