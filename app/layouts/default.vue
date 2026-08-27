<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import SfDemoModal from '~/components/ui/SfDemoModal.vue'
import SfFloatingAssistant from '~/components/ui/SfFloatingAssistant.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <SfDemoModal />
    <SfFloatingAssistant />
  </div>
</template>
