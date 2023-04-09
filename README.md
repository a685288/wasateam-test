# 網站導覽
在header區塊我建立了3個入口
- Home: 展示了 Index.vue 引入 Filter.vue 作篩選器 component 使用
- 計時器：使用 computed 作為計時器輸出的計算，並提供開始、暫停、重設功能
- 列表：使用 axios 進行列表 API 的串接，並稍微排列渲染於畫面


# 系統架構
## css部分
我建立了 ```_variables.scss```與 ```reset.scss```兩個檔案
- ```_variables.scss```處理全域變數
- ```reset.scss```規範預設樣式，以避免瀏覽器樣式影響後續開發

## components部分
我建立了```Filter.vue```與```Header.vue```
- ```Filter.vue```目前提供給```Index.vue```引入使用
  - 提供 filterData，給父層 prop 傳入資料使用
  - 提供 emit 函式可以將資料回傳給父層做顯示
- ```Header.vue```
  - 提供各頁面路徑與明暗主題色切換

## Router部分
因專案很小，所以沒有基於功能在建立其他檔案進行切分管理，只用了一個檔案進行專案內的 router 管理，檔案內各頁面路徑對應的組件都是獨立的要新增與修改都很方便
## Views部分
- ```Index.vue```
  - 使用```Filter.vue```建立篩選器，並串接 emit 函式顯示篩選器回傳資料
- ```ListUsers.vue```
  - 以表格形式粗略的顯示了API的回傳資料
- ```Timer.vue```
  - 使用 computed 方式作為計時器輸出的計算
  - 提供開始、暫停、重設功能，並分別建立函式