<template>
    <div class="dashbord">
      <span class="clock" :class="tem" >{{ currentTime.getHours() }}:{{ currentTime.getMinutes().toString().padStart(2, "0") }}</span>
      <h3 class="wellcome-message">{{t(`${ timeMessage }`)}} ,<span>{{ username }}</span></h3>
    </div>
    <div></div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n"

if( !localStorage.getItem("username") ){
let name = prompt("Please enter your name(لطفا نام خود را وارد کنید)", "Anan");
if(name != null){
localStorage.setItem("username", name)
}
}

let tem : string|null
tem = localStorage.getItem("thems")

let username: string|null
username = localStorage.getItem("username")

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})

  const useCurrentTime = () => {
  const currentTime = ref(new Date());
  const updateCurrentTime = () => {
    currentTime.value = new Date();
  };
  const updateTimeInterval = setInterval(updateCurrentTime, 1000);
  onBeforeUnmount(() => {
    clearInterval(updateTimeInterval);
  });
  return {
    currentTime
  };
};
const { currentTime } = useCurrentTime();

let timeMessage = ''
if( currentTime.value.getHours() > 20 || currentTime.value.getHours() < 7){
  timeMessage = 'Good Night'
}else if( currentTime.value.getHours() > 17 ){
  timeMessage = 'Good Evining'
}else if( currentTime.value.getHours() > 12 ){
  timeMessage = 'Good Afternoon'
}else{
  timeMessage = 'Good Morning'
}
</script>

<style>
.dashbord{
  display: grid;
  height: 540px;
  justify-content: center;
  align-content: space-evenly;
  align-items: center;
  justify-items: stretch;
}
span.clock {
  text-align: center;
  margin: 10px;
  font-size: 84px;
  color: #2154d7;
  padding: 20px;
  border-radius: 20px;
  background: #3ad1f3;
  box-sizing: border-box;
}
.wellcome-message{
  text-align: center;
  font-size: 32px;
  padding: 5px;

}
</style>