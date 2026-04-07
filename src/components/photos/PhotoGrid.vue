<script setup lang="ts">
import type { Photo } from '../../../photos/data'
import { blurhashToGradientCssObject } from '@unpic/placeholder'

const props = defineProps<{
  photos: Photo[]
  view?: 'cover' | 'contain'
}>()

const placeholders = computed(() => Array.from({ length: 12 }, (_, i) => i))
</script>

<template>
  <div class="photos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" max-w-500 mx-auto>
    <template v-if="props.photos.length">
      <div v-for="photo, idx in props.photos" :key="idx">
        <img
          :src="photo.url"
          :alt="photo.text"
          :data-photo-index="idx"
          :style="photo.blurhash && view !== 'contain' ? blurhashToGradientCssObject(photo.blurhash) as any : ''"
          loading="lazy"
          w-full
          :class="view === 'contain' ? 'object-contain sm:aspect-square' : 'object-cover aspect-square'"
        >
      </div>
    </template>
    <template v-else>
      <div
        v-for="idx in placeholders"
        :key="idx"
        w-full
        class="bg-#8881 dark:bg-#8882"
        :class="view === 'contain' ? 'sm:aspect-square' : 'aspect-square'"
      />
    </template>
  </div>
</template>
