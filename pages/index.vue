<template>
  <div class="min-h-screen app">
    <div class="w-max h-header" />
    <div class="grid grid-cols-8 h-body">
      <section class="col-span-2" />
      <section class="bg-slate-100" :class="mainSectionWidthClass" />
      <chat-container />
    </div>
  </div>
</template>

<script>
import ChatContainer from '~/components/ChatContainer.vue'

export default {
  name: 'IndexPage',
  components: { ChatContainer },

  computed: {
    /**
     * Get the width class for the main section
     * @returns {string}
     */
    mainSectionWidthClass () {
      return this.$store.state.collapsedFlag ? 'col-span-5' : 'col-span-4'
    }
  }
}
</script>

<style scoped>
.app {
  overflow: hidden;
}

</style>
