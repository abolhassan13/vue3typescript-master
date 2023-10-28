<template>
  <form
    @keyup.enter="handelSubmit"
    autocomplete="on"
    :class="tem"
    id="formProflie"
  >
    <label>{{ t("Username") }}</label>
    <input type="text" class="username" v-model="username" required />

    <label>{{ t("Theme") }}</label>
    <select v-model="themes" required>
      <option value="blueSky">{{ t("Blue Sky") }}</option>
      <option value="SilverMoon">{{ t("Silver Moon") }}</option>
      <option value="fallOfAutumn">{{ t("Fall Of Autumn") }}</option>
      <option value="dayInSummer">{{ t("Day In Summer") }}</option>
    </select>
    <div>
      <label>{{ t("Language") }}</label>
    </div>
    <a-radio-group @change="changeLocale" v-model:value="lang" class="lang">
      <a-radio-button class="blang" value="en" :class="tem"
        >English</a-radio-button
      >
      <a-radio-button class="blang" value="fa" :class="tem"
        >فارسی</a-radio-button
      >
    </a-radio-group>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>{{ t("Accept term and conditions") }}</label>
    </div>

    <div class="submit">
      <button @click="handelSubmit" class="save" html-type="submit">
        {{ t("Save") }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import i18n from "../i18n";
import { useI18n } from "vue-i18n";

const lang = ref<"en" | "fa">("en");
const username = ref<string>("");
const terms = ref<boolean | undefined>();
const themes = ref<string>("blueSky");
let tem: string | null;
tem = localStorage.getItem("thems");

const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});
const changeLocale = (): void => {
  i18n.global.locale.value = lang.value;
};

function handelSubmit(): void {
  localStorage.setItem("username", username.value.trim());
  localStorage.setItem("lang", lang.value);
  localStorage.setItem("thems", themes.value);
}
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: #71e7e9;
  text-align: center;
  color: #4797ec;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 2px 3px 2px #719191;
}
label {
  display: inline-block;
  margin: 15px auto;
  text-transform: uppercase;
  font-weight: bold;
}
input,
select {
  color: inherit;
  display: block;
  padding: 10px 6px;
  width: 100%;
  font-size: 20px;
  text-align: center;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 15px;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
button {
  background: #f4f4f4;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: rgb(0, 0, 0);
  border-radius: 20px;
  cursor: pointer;
}
.submit {
  text-align: center;
}
.lang {
  margin: 1px;
}
.blang {
  width: 100px;
}
</style>
