<template>
  <div class="dashbord">
    <span class="clock" :class="tem"> {{ Hours }}:{{ Minutes }} </span>
    <h3 class="wellcome-message">
      {{ t(`${timeMessage}`) }} <span>{{ username }}</span>
    </h3>
  </div>
  <div></div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useCurrentTime } from "@/component/Home/Time";

if (!localStorage.getItem("username")) {
  let name: string|null = prompt(
    "Please enter your name(لطفا نام خود را وارد کنید)",
    "Anan"
  );
  if (name != null) {
    localStorage.setItem("username", name);
  }
}

let tem: string | null;
tem = localStorage.getItem("thems");

let username: string | null;
username = localStorage.getItem("username");

const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});

const { currentTime } = useCurrentTime();
const Hours: number = currentTime.value.getHours();
const Minutes: string = currentTime.value
  .getMinutes()
  .toString()
  .padStart(2, "0");

let timeMessage = "";
if (Hours > 20 || Hours < 7) {
  timeMessage = "Good Night";
} else if (Hours > 17) {
  timeMessage = "Good Evining";
} else if (Hours > 12) {
  timeMessage = "Good Afternoon";
} else {
  timeMessage = "Good Morning";
}
</script>

<style>
.dashbord {
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
.wellcome-message {
  text-align: center;
  font-size: 32px;
  padding: 5px;
}
</style>
