<template>
  <div class="profileContainer">
    <div class="rounded-lg border-2 border-black p-2 profile bg-slate-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        :stroke="currentColor"
        class="svgProfile svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
      <p v-if="name" class="initials">
        {{ initials }}
      </p>
    </div>
    <p class="statusText">
      {{ $t(`status.${status}`) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProfilePicture',
  props: {
    status: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    /**
     * Get the initials of the user
     * @returns {string}
     */
    initials () {
      return this.name.split(' ').map(word => word[0]).join('.')
    },
    /**
     * Return the color for the status
     * @returns {string}
     */
    currentColor () {
      switch (this.status) {
        case 'troubleshooting':
          return 'green'
        case 'inMeeting':
          return 'orange'
        case 'onBreak':
          return 'red'
        default:
          return 'white'
      }
    }
  }
}
</script>

<style scoped>

.initials {
  text-align: center;
}

.profileContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 115px;
}

.svgProfile {
  width: 50px;
  height: 50px;
  padding-top: 7px;
}

.profile {
  width: 70px;
}

.statusText {
  text-align: center;
}
</style>
