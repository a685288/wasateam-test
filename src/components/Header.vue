<template>
  <div id="header">
    <div v-for="(item, index) in data" :key="index" class="entry">
      <a :href="item.name">{{ item.title }}</a>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      data: [
        {
          title: 'Home',
          name: '/'
        },
        {
          title: '計時器',
          name: 'Timer'
        }
      ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss">
#header{
  padding: 20px;
  display: flex;
  .entry{
    margin: 30px;
  }
}
</style>