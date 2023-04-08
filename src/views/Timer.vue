<template>
  <div id="Timer">
    <div class="time">{{ time }}</div>
    <button @click="startTimer" :disabled="timerRunning">開始</button>
    <button @click="stopTimer" :disabled="!timerRunning">停止</button>
    <button @click="resetTimer" :disabled="timerRunning">重設</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null, // 計時器
      startTime: null, // 開始計時時間
      elapsedTime: 0, // 計時器時間
      timerRunning: false // 計時器是否運行中
    }
  },
  computed: {
    time() {
      let hours = Math.floor(this.elapsedTime / 1000 / 60 / 60)
      let minutes = Math.floor(this.elapsedTime / 1000 / 60)
      let seconds = Math.floor(this.elapsedTime / 1000 % 60)
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    },
  },
  methods: {
    startTimer() {
      this.startTime = Date.now() - this.elapsedTime
      this.timerRunning = true
      this.timer = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime
      }, 10)
    },
    stopTimer() {
      clearInterval(this.timer)
      this.timerRunning = false
    },
    resetTimer() {
      clearInterval(this.timer)
      this.startTime = null
      this.elapsedTime = 0
      this.timerRunning = false
    }
  },
}
</script>
<style lang="scss">
#Timer{
  margin: 50px auto;
  text-align: center;
  .time{
    font-size: 30px;
    margin-bottom: 20px;
  }
  button{
    font-size: 20px;
    margin-right: 10px;
  }
}
</style>