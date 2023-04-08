<template>
  <div id="header">
    <div v-for="(item, index) in data" :key="index" class="entry">
      <a :href="item.name">{{ item.title }}</a>
    </div>
    <div class="switchContainer">
      <div class="switch">
        <input type="checkbox" id="toggle" v-model="isDarkMode" @change="toggleTheme">
        <label for="toggle" class="slider round"></label>
      </div>
      <span>{{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</span>
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
        },
        {
          title: '列表',
          name: 'ListUsers'
        }
      ],
      isDarkMode: false // 目前是否為暗色主題
    }
  },
  mounted() {
  },
  methods: {
    toggleTheme(){
      console.log('toggleTheme',colorMode)
      
      colorMode = colorMode == 'light' ? 'dark' : 'light'
    }
  }
}
</script>
<style lang="scss">
#header{
  padding: 20px;
  display: flex;
  .entry{
    margin: 10px 30px;
  }
  .switchContainer{
    flex: auto;
    text-align: right;
    .switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 20px;
      margin: 8px 10px;
      input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #FFA500;
        transition: .4s;
        border-radius: 20px;
        &:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }
      }
      input:checked + .slider {
        background-color: gray;
        &:before {
          transform: translateX(20px);
        }
      }
      .slider.round {
        border-radius: 20px;
        &:before {
          border-radius: 50%;
        }
      }
    }
    span{
      margin: 10px;
    }
  }
}
</style>
