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

function getCompanyLogos(company: string) {
  const logos: string[] = []

  if (company.includes('Google '))
    logos.push('https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png')
  if (company.includes('BASTA'))
    logos.push('/logos/basta.png')
  if (company.includes('Big Strategy Labs'))
    logos.push('/logos/bsl.png')
  if (company.includes('Triton Software Engineering'))
    logos.push('/logos/tse.png')
  if (company.includes('NextHelper'))
    logos.push('/logos/nexthelper.png')
  if (company.includes('CSE Department'))
    logos.push('/logos/ucsd-cse.png')
  if (company.includes('Muir College Council') || company.includes('UCSD'))
    logos.push('/logos/ucsd.png')
  if (company.includes('Rosas Demolition'))
    logos.push('/logos/rosas.png')

  return logos
}
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
          <div grid="~ cols-[1fr_auto]" gap="x-6 y-1" items-baseline>
            <div class="title text-lg leading-1.2em" font-semibold flex="~ items-center gap-2">
              <span flex="~ items-center gap-1" aria-hidden="true">
                <span
                  v-for="logo in getCompanyLogos(entry.company)"
                  :key="logo"
                  class="markdown-magic-link-image"
                  :style="{ backgroundImage: `url('${logo}')` }"
                />
              </span>
              <span>{{ entry.company }}</span>
            </div>
            <div text-sm op50 ws-nowrap text-right>
              {{ formatRange(entry) }}
            </div>
            <div op80>
              {{ entry.role }}
            </div>
            <div v-if="entry.location" text-sm op40 ws-nowrap text-right>
              {{ entry.location }}
            </div>
            <div v-else />
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
