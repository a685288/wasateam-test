<template>
  <div class="app">
    <Header />
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    Header
  },
  data(){
    return {
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss">
.app{
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
}
</style>