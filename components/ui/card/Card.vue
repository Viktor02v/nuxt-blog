<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border bg-sidebarBg border-x-colorSidebar border-y-sidebarBg border-spacing-5  shadow',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
