<template>
  <div class="chatContainer">
    <profile-picture :status="user.status" :name="user.name" />
  </div>
</template>

<script>
import ProfilePicture from './ProfilePicture.vue'
export default {
  name: 'ChatItemCollapsed',
  components: { ProfilePicture },

  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.chatContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
