<template>
  <div class="chatContainer">
    <profile-picture :status="user.status" />
    <chat-info :user="user" />
    <div class="svgChatContainer rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="gray"
        class="svgChat svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import ProfilePicture from './ProfilePicture.vue'
import ChatInfo from './ChatInfo.vue'
export default {
  name: 'ChatItem',
  components: { ProfilePicture, ChatInfo },

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
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.svg {
  display: inline;
}

.svgChatContainer {
  height: 50px;
  width: 50px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  cursor: pointer;
}

.svgChatContainer:hover {
  outline: none;
  box-shadow: 0 0 10px red;
}

.svgChatContainer:active {
  outline: none;
  box-shadow: 0 0 10px green;
}

.svgChat {
   padding-top: 7px;
   width: 45px;
   height: 45px;
 }
</style>
