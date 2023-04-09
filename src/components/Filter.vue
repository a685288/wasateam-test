<template>
  <div id="Filter">
    <div v-for="(item, index) in filterData" :key="index">
      <div v-if="item.type == 'input'" class="item">
        <div class="title">{{ item.title }}</div>
        <input type="text" v-model="selectedValue[item.name]"/>
      </div>
      <div v-else-if="item.type == 'radio'" class="item">
        <div class="title">{{ item.title }}</div>
        <div v-for="option in item.options">
          <input type="radio" :name="item.name" :value="option" v-model="selectedValue[item.name]"/>
          {{ option }}
        </div>
      </div>
      <div v-else-if="item.type == 'select'" class="item">
        <div class="title">{{ item.title }}</div>
        <select name="item.name" v-model="selectedValue[item.name]">
          <option v-for="(item, index) in item.options" :key="index">{{ item }}</option>
        </select>
      </div>
    </div>
    <div class="btn">
      <button @click="submit()">送出篩選結果</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    filterData: Array 
    /*
      filterData: [
        {
          type: 顯示類型 ( select 下拉選單、input 輸入框 )
          title: 顯示標題
        }
      ]
    */ 
  },
  data(){
    return {
      selectedValue: {} // 篩選結果
    }
  },
  mounted() {
    
  },
  methods: {
    submit(){ // 送出篩選資料
      console.log(this.selectedValue)
      
      this.$emit('getFilterData', this.selectedValue)
    }
  }
}
</script>
<style lang="scss">
#Filter{
  width: 500px;
  border-radius: 4px;
  background-color: $LightModebgColor2;
  margin: 0 auto;
  padding: 40px;
  line-height: 200%;
  .item{
    display: flex;
    padding: 20px;
    .title{
      font-size: 20px;
      width: 160px;
    }
  }
  .btn{
    text-align: right;
    button{
      font-size: 20px;
    }
  }
}
</style>