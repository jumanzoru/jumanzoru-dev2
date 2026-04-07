<script setup lang="ts">
import type { ExperienceEntry } from '../../data/experience'
import dayjs from 'dayjs'
import { experience } from '../../data/experience'

function formatRange(entry: ExperienceEntry) {
  const start = dayjs(entry.start).format('MMM YYYY')
  const end = entry.end ? dayjs(entry.end).format('MMM YYYY') : 'Present'
  return `${start} — ${end}`
}

const items = computed(() =>
  [...experience]
    .sort((a, b) => +new Date(b.start) - +new Date(a.start)),
)

const getYear = (a: string) => new Date(a).getFullYear()
const isSameYear = (a?: string, b?: string) => a && b && getYear(a) === getYear(b)
</script>

<template>
  <ul>
    <template v-if="!items.length">
      <div py2 op50>
        { nothing here yet }
      </div>
    </template>

    <template v-for="entry, idx in items" :key="`${entry.company}-${entry.role}-${entry.start}`">
      <div
        v-if="!isSameYear(entry.start, items[idx - 1]?.start)"
        select-none relative h20 pointer-events-none slide-enter
        :style="{
          '--enter-stage': idx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span text-8em color-transparent absolute left--3rem top--2rem font-bold text-stroke-2 text-stroke-hex-aaa op10>{{ getYear(entry.start) }}</span>
      </div>

      <div
        class="slide-enter"
        :style="{
          '--enter-stage': idx,
          '--enter-step': '60ms',
        }"
      >
        <li class="no-underline mb-8 mt-2">
          <div flex="~ col md:row gap-2 md:items-center">
            <div class="title text-lg leading-1.2em" flex="~ gap-2 wrap">
              <span align-middle font-semibold>{{ entry.company }}</span>
              <span op50>·</span>
              <span align-middle>{{ entry.role }}</span>
            </div>
            <div flex="~ gap-2 items-center">
              <span text-sm op50 ws-nowrap>{{ formatRange(entry) }}</span>
              <span v-if="entry.location" text-sm op40 ws-nowrap>· {{ entry.location }}</span>
            </div>
          </div>
          <ul v-if="entry.highlights?.length" class="mt-3 pl-5 op90">
            <li v-for="(h, hidx) in entry.highlights" :key="hidx" class="mb-2">
              {{ h }}
            </li>
          </ul>
        </li>
      </div>
    </template>
  </ul>
</template>
