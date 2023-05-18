<template>
  <div class="chatInfo">
    <div class="chatNameTag">
      <p>{{ user.name }}</p>
      <span class="rounded-full border border-slate-300 border-solid"> {{ user.department }}</span>
    </div>
    <p>{{ $t(`location.${user.location}`) }}</p>
  </div>
</template>

<script>

export default {
  name: 'ChatInfo',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.chatInfo {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.chatNameTag {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.chatNameTag > p {
  padding-right: 0.5rem;
}

.chatNameTag > span {
  font-size: 0.7rem;
  color: #8c8c8c;
  padding: 0rem 0.3rem 0rem;
}
</style>
