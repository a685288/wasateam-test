<template>
  <div id="ListUsers">
    <div class="list title">
      <div class="name">姓名</div>
      <div class="city">城市</div>
    </div>
    <div v-for="(item, index) in data" :key="index" class="list">
      <div class="name">{{ item.name }}</div>
      <div class="city">{{ item.city }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: []
    }
  },
  mounted(){
    axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
      .then(response => {
        console.log(response)
        
        this.data = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
  },
}
</script>
<style lang="scss">
#ListUsers{
  width: 500px;
  margin: 50px auto;
  line-height: 200%;
  .list{
    display: flex;
    font-size: 20px;
    .name,.city{
      flex: 1;
    }
    &.title{
      font-weight: bold;
    }
  }
}
</style>