<template>
  <a-auto-complete
    @keyup.enter="getCity"
    v-model:value="value"
    :options="options"
    ref="cityIn"
    style="width: 200px"
    placeholder="Enter city name..."
    :filter-option="filterOption"
  />
  <div class="weather">
    <a-card-grid class="card">
      <div class="details"></div>
    </a-card-grid>
  </div>
</template>

<script setup lang="ts">
import citiesIran from "../store/citiesIranDetails.json";
import weatherDetails from "../store/weatherDetails.json";
import citiesNames from "../store/cities.json";
import { getWaether } from "@/component/Weather/Weather";
import { onMounted, ref } from "vue";

interface Option {
  value: string;
}
const filterOption = (input: string, option: Option) => {
  return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
};
const value = ref("");
const options = ref<Option[]>(citiesNames);

const getCity = async (): Promise<void> => {
  const cityName = citiesIran.find((element) => element.city === value.value);
  value.value = "";
  const data: { weathercode: number; temperature: number; is_day: string } =
    await getWaether(cityName);
  updateUI(cityName?.city, data);
};

const updateUI = (
  city: string | undefined,
  data: { weathercode: number; temperature: number; is_day: string }
): void => {
  const deteils: Element | null = document.querySelector(".details");
  const card: Element | null = document.querySelector(".card");

  interface weatherCode {
    state: number;
    text: string;
  }
  let weatherCodes: weatherCode[] = weatherDetails;
  let wCode: number = data.weathercode;
  const greaterElement: weatherCode | undefined = weatherCodes.find(
    (elemet) => elemet.state === wCode
  );
  deteils!.innerHTML = `
    <div>
    <h1  style=" padding: 35px; font-size: 26px;">${city}</h1>
    <div style=" padding: 30px; font-size: 20px;"><h3>${greaterElement?.text}</h3></div>
    <h3 style=" font-size: 36px;">
        <span>${data.temperature}</span>
        <span>&deg;C</span>
    </h3>
    </div>
  `;
  if (data.is_day) {
    card?.classList.add("day");
  } else {
    card?.classList.add("night");
  }
};

const cityIn = ref<HTMLInputElement | null>(null);
onMounted(() => {
  cityIn.value?.focus();
});
</script>

<style scoped>
.night {
  background-image: url(../assets/night.svg);
  background-repeat: no-repeat;
  color: aliceblue;
  margin: auto 10px;
  display: flex;
  justify-content: center;
  height: 400px;
  width: 400px;
  border-radius: 20px;
  box-shadow: 3px 4px 3px #cfd4f4;
}

.day {
  background-image: url(../assets/day.svg);
  background-repeat: no-repeat;
  color: #070f16;
  margin: auto 10px;
  display: flex;
  justify-content: center;
  height: 400px;
  width: 400px;
  border-radius: 20px;
  box-shadow: 3px 4px 3px #cfd4f4;
}

.weather {
  display: grid;
  justify-content: center;
  height: 508px;
}
</style>
