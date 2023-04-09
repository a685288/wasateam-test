<template>
  <div id="Index">
    <Filter :filter-data="filterData" @getFilterData="getfilterData"/>
    <div class="result">
      <p>篩選結果：</p>
      <div>{{ selectedValue }}</div>
    </div>
  </div>
</template>
<script>
import Filter from '@/components/Filter.vue'
export default {
  components: {
    Filter
  },
  data(){
    return {
      filterData: [ // 篩選器傳入資料
        {
          type: 'select',
          title: '請選擇你的年齡',
          name: 'age',
          options: [
            '1-10',
            '11-20',
            '21-30'
          ]
        },
        {
          type: 'input',
          title: '請輸入姓名',
          name: 'name'
        },
        {
          type: 'radio',
          title: '請選擇聯繫方式',
          name: 'contact',
          options: [
            'mail',
            'phone',
          ]
        }
      ],
      selectedValue: {}
    }
  },
  mounted() {
  },
  methods: {
    getfilterData(selectedValue){
      this.selectedValue = selectedValue
    }
  }
}
</script>
<style lang="scss">
#Index{
  padding: 50px;
  .result{
    width: 500px;
    margin: 20px auto;
  }
}
</style>