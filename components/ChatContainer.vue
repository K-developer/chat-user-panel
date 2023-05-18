<template>
  <div :class="chatSectionWidthClass">
    <button
      class="toggleButton bg-cyan-200"
      @click="toggleCollapseFlag"
    >
      <svg
        v-if="collapsedFlag"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    </button>

    <div v-if="collapsedFlag" class="chatItems">
      <span class="chatHeader">{{ $t('role.agent') }} {{ agentUsers.length }}</span>
      <div v-for="(user, index) in agentUsers" :key="index">
        <chat-item-collapsed :user="user" />
      </div>
      <span class="chatHeader">{{ $t('role.TL') }} {{ teamLeadUsers.length }}</span>
      <div v-for="(user, index) in teamLeadUsers" :key="index">
        <chat-item-collapsed :user="user" />
      </div>
      <span class="chatHeader">{{ $t('role.manager') }} {{ managerUsers.length }}</span>
      <div v-for="(user, index) in managerUsers" :key="index">
        <chat-item-collapsed :user="user" />
      </div>
      <span class="chatHeader">{{ $t('role.IT') }} {{ itUsers.length }}</span>
      <div v-for="(user, index) in itUsers" :key="index">
        <chat-item-collapsed :user="user" />
      </div>
    </div>
    <div v-else class="chatItems">
      <span class="chatHeader chatHeaderOpen">{{ $t('role.agent') }} {{ agentUsers.length }}</span>
      <div v-for="(user, index) in agentUsers" :key="index">
        <chat-item :user="user" />
      </div>
      <span class="chatHeader chatHeaderOpen">{{ $t('role.TL') }} {{ teamLeadUsers.length }}</span>
      <div v-for="(user, index) in teamLeadUsers" :key="index">
        <chat-item :user="user" />
      </div>
      <span class="chatHeader chatHeaderOpen">{{ $t('role.manager') }} {{ managerUsers.length }}</span>
      <div v-for="(user, index) in managerUsers" :key="index">
        <chat-item :user="user" />
      </div>
      <span class="chatHeader chatHeaderOpen">{{ $t('role.IT') }} {{ itUsers.length }}</span>
      <div v-for="(user, index) in itUsers" :key="index">
        <chat-item :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import ChatItem from '~/components/ChatItem.vue'
import ChatItemCollapsed from '~/components/ChatItemCollapsed.vue'

export default {
  name: 'ChatContainer',
  components: { ChatItem, ChatItemCollapsed },

  computed: {
    /**
     * * This is the collapsed flag from the store.
     * @return {boolean}
     */
    collapsedFlag () {
      return this.$store.state.collapsedFlag
    },
    /**
     * * This is the width class for the chat section.
     * @return {string}
     */
    chatSectionWidthClass () {
      return this.collapsedFlag ? 'col-span-1' : 'col-span-2'
    },
    /**
     * * These are lists of users seperated by role.
     * @return {array}
     */
    agentUsers () {
      return this.$store.state.users.filter(role => role.role === 'agent')
    },
    teamLeadUsers () {
      return this.$store.state.users.filter(role => role.role === 'TL')
    },
    managerUsers () {
      return this.$store.state.users.filter(role => role.role === 'manager')
    },
    itUsers () {
      return this.$store.state.users.filter(role => role.role === 'IT')
    }
  },

  methods: {
    /**
     * * This toggles the collapsed flag in the store.
     */
    toggleCollapseFlag () {
      this.$store.state.collapsedFlag = !this.$store.state.collapsedFlag
    }
  }

}
</script>

<style scoped>

.toggleButton {
  border: none;
  cursor: pointer;
  outline: none;
  width: 100%;
}

.toggleButton > svg {
  display: inline;
  width: 1.5rem;
  height: 2rem;
}

.chatItems {
  overflow-y: scroll;
  max-height: 93vh;
  margin-top: 1rem;
}

.chatHeader {
  width: 100%;
  text-align: center;
  display: block;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
}

.chatHeaderOpen {
  margin-left: 2rem;
}
</style>
