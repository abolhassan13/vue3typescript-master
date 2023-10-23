<template>
  <a-auto-complete
    @keyup.enter="getCity"
    v-model:value="value"
    :options="options"
    style="width: 200px"
    placeholder="Enter city name..."
    :filter-option="filterOption"
  />
  <div class="weather">
  <a-card-grid class="card">
    <div class="details"></div>
   </a-card-grid></div>
</template>

<script setup lang="ts">

import axios from 'axios'
import { ref } from 'vue';
import citiesIran from '../store/ir.json'

interface Option {
  value: string;
}
const filterOption = (input: string, option: Option) => {
  return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
};
const value = ref('');
const options = ref<Option[]>([
    {
      value: "Tehran"
    }, 
    {
      value: "Mashhad" 
    }, 
    {
      value: "Esfahan" 
   
    }, 
    {
      value: "Karaj"
    }, 
    {
      value: "Tabriz"
    },
    {
      value: "Shiraz"
    },
    {
      value: "Qom"
    }, 
    {
      value: "Ahvaz"
    }, 
    {
      value: "Kermanshah"
    }, 
    {
      value: "Orumiyeh"
    }, 
    {
      value: "Rasht"
    }, 
    {
      value: "Kerman"
    }, 
    {
      value: "Zahedan"
    }, 
    {
      value: "Eslamshahr"
    }, 
    {
      value: "Hamadan"
    }, 
    {
      value: "Yazd"
    }, 
    {
      value: "Arak"
    }, 
    {
      value: "Ardabil" 
    }, 
    {
      value: "Bandar 'Abbas"
    }, 
    {
      value: "Zanjan"
    }, 
    {
      value: "Kashan"
    }, 
    {
      value: "Qazvin"
    }, 
    {
      value: "Sanandaj"
    }, 
    {
      value: "Madan"
    }, 
    {
      value: "Khorramabad"
    }, 
    {
      value: "Gorgan"
    }, 
    {
      value: "Shahriar"
    }, 
    {
      value: "Shahr-e Qods"
    }, 
    {
      value: "Malard"
    }, 
    {
      value: "Sarta"
    }, 
    {
      value: "Dezful"
    }, 
    {
      value: "Babol"
    }, 
    {
      value: "Bukan"
    }, 
    {
      value: "Sabzevar"
    }, 
    {
      value: "Amol"
    }, 
    {
      value: "Pakdasht"
    }, 
    {
      value: "Najafabad"
    }, 
    {
      value: "Borujerd"
    }, 
    {
      value: "Qarchak"
    }, 
    {
      value: "Varamin"
    }, 
    {
      value: "Neyshabur"
    }, 
    {
      value: "Saveh"
    }, 
    {
      value: "Khomeyni Shahr"
    }, 
    {
      value: "Qa'em Shahr"
    }, 
    {
      value: "Nasim Shahr"
    }, 
    {
      value: "Bojnurd"
    }, 
    {
      value: "Bandar-e Bushehr"
    }, 
    {
      value: "Semnan"
    }, 
    {
      value: "Khowy"
    }, 
    {
      value: "Fardis"
    }, 
    {
      value: "Birjand"
    }, 
    {
      value: "Maragheh"
    }, 
    {
      value: "Sirjan"
    }, 
    {
      value: "Shahin Shahr"
    }, 
    {
      value: "Malayer"
    }, 
    {
      value: "Mahabad"
    }, 
    {
      value: "Saqqez"
    }, 
    {
      value: "Bandar-e Mahshahr"
    }, 
    {
      value: "Rafsanjan"
    }, 
    {
      value: "Shahr-e Kord"
    }, 
    {
      value: "Golmeh"
    }, 
    {
      value: "Gonbad-e Kavus"
    }, 
    {
      value: "Shahrud"
    }, 
    {
      value: "Marvdasht"
    }, 
    {
      value: "Quchan"
    }, 
    {
      value: "Jahrom"
    }, 
    {
      value: "Kamalshahr"
    }, 
    {
      value: "Torbat-e Heydariyeh"
    }, 
    {
      value: "Piranshahr"
    }, 
    {
      value: "Marivan"
    }, 
    {
      value: "Andimeshk"
    }, 
    {
      value: "Shahreza"
    }, 
    {
      value: "Zabol"
    }, 
    {
      value: "Khorramshahr"
    }, 
    {
      value: "Marand"
    }, 
    {
      value: "Jiroft"
    }, 
    {
      value: "Salmas"
    }, 
    {
      value: "Bam"
    }, 
    {
      value: "Behbahan"
    }, 
    {
      value: "Dorud"
    }, 
    {
      value: "Nazarabad"
    }, 
    {
      value: "Mohammad Shahr"
    }, 
    {
      value: "Fasa"
    }, 
    {
      value: "Bandar-e Anzali"
    }, 
    {
      value: "Borazjan"
    }, 
    {
      value: "Baneh"
    }, 
    {
      value: "Yasuj"
    }, 
    {
      value: "Chabahar"
    }, 
    {
      value: "Robat Karim"
    }, 
    {
      value: "Khak-e 'Ali"
    }, 
    {
      value: "Kashmar"
    }, 
    {
      value: "Shushtar"
    }, 
    {
      value: "Ahar"
    }, 
    {
      value: "Masjed Soleyman"
    }, 
    {
      value: "Torbat-e Jam"
    }, 
    {
      value: "Kazerun"
    }, 
    {
      value: "Khowrasgan"
    }, 
    {
      value: "Shirvan"
    }, 
    {
      value: "Meybod"
    }, 
    {
      value: "Bumahen"
    }, 
    {
      value: "Aligudarz"
    }, 
    {
      value: "Bonab"
    }, 
    {
      value: "Takestan"
    }, 
    {
      value: "Oshnaviyeh"
    }, 
    {
      value: "Bandar-e Genaveh"
    }, 
    {
      value: "Zarand"
    }, 
    {
      value: "Mahdasht"
    }, 
    {
      value: "Mobarakeh"
    }, 
    {
      value: "Esfarayen"
    }, 
    {
      value: "Damghan"
    }, 
    {
      value: "Taybad"
    }, 
    {
      value: "Zarrin Shahr"
    }, 
    {
      value: "Aran Bidgol"
    }, 
    {
      value: "Hashtpar"
    }, 
    {
      value: "Bijar"
    }, 
    {
      value: "Sardasht"
    }, 
    {
      value: "Ramhormoz"
    }, 
    {
      value: "Garmsar"
    }, 
    {
      value: "Damavand"
    }, 
    {
      value: "Golpayegan"
    }, 
    {
      value: "Azna"
    }, 
    {
      value: "Natanz"
    }, 
    {
      value: "Takab"
    }, 
    {
      value: "Darcheh"
    }, 
    {
      value: "Sarab"
    }, 
    {
      value: "Baft"
    }, 
    {
      value: "Khalkhal"
    }, 
    {
      value: "Falavarjan"
    }, 
    {
      value: "Kahrizak"
    }, 
    {
      value: "Sarpol-e Zahab"
    }, 
    {
      value: "Gerash"
    }, 
    {
      value: "Shahin Dezh"
    }, 
    {
      value: "Khvaf"
    }, 
    {
      value: "Qahderijan"
    }, 
    {
      value: "Evaz"
    }, 
    {
      value: "Bardaskan"
    }, 
    {
      value: "Hadishahr"
    }, 
    {
      value: "Fuman"
    }, 
    {
      value: "Semirom"
    }, 
    {
      value: "Mahdishahr"
    }, 
    {
      value: "Sheyban"
    }, 
    {
      value: "Kelishad va Sudarjan"
    }, 
    {
      value: "Goldasht"
    }, 
    {
      value: "Khvansar"
    }, 
    {
      value: "Kabudarahang"
    }, 
    {
      value: "Ashkezar"
    }, 
    {
      value: "Kherameh"
    }, 
    {
      value: "Taft"
    }, 
    {
      value: "Feyzabad"
    }, 
    {
      value: "Dehaqan"
    }, 
    {
      value: "Tiran"
    }, 
    {
      value: "Amlash"
    }, 
    {
      value: "Ardestan"
    }, 
    {
      value: "Famenin"
    }, 
    {
      value: "Fereydunshahr"
    }, 
    {
      value: "Rezvanshahr"
    }, 
    {
      value: "Ahram"
    }, 
    {
      value: "Poldasht"
    }, 
    {
      value: "Qasr-e Shirin"
    }, 
    {
      value: "Sorkheh"
    }, 
    {
      value: "Kaleybar"
    }, 
    {
      value: "Khondab"
    }, 
    {
      value: "Komijan"
    }, 
    {
      value: "Chadegan"
    }, 
    {
      value: "Aradan"
    }, 
    {
      value: "Khur"
    }, 
    {
      value: "Taleqan"
    }, 
    {
      value: "Chelgard"
    }, 
    {
      value: "Bahar"
    }, 
    {
      value: "Sari"
    }, 
    {
      value: "Ilam"
    }, 
    {
      value: "Eshtehard"
    }, 
    {
      value: "Alvand"
    }, 
    {
      value: "Fereydun Kenar"
    }, 
    {
      value: "Lahijan"
    }, 
    {
      value: "Mahmudabad"
    }, 
    {
      value: "Babolsar"
    }, 
    {
      value: "Bandar-e Torkaman"
    }, 
    {
      value: "Langarud"
    }, 
    {
      value: "Juybar"
    }, 
    {
      value: "Astaneh-ye Ashrafiyeh"
    }, 
    {
      value: "Kangan"
    }, 
    {
      value: "Bandar-e 'Asaluyeh"
    }, 
    {
      value: "Astara"
    }, 
    {
      value: "Sowme'eh Sara"
    }, 
    {
      value: "Bandar-e Gaz"
    }, 
    {
      value: "Hashtgerd"
    }, 
    {
      value: "Farsan"
    }, 
    {
      value: "'Ajab Shir"
    }, 
    {
      value: "Khorramdarreh"
    }, 
    {
      value: "Pishva"
    }, 
    {
      value: "Rey"
    }, 
    {
      value: "Parsabad"
    }, 
    {
      value: "Miandoab"
    }, 
    {
      value: "Narmashir"
    }, 
    {
      value: "Masal"
    }, 
    {
      value: "'Aliabad-e Katul"
    }, 
    {
      value: "Malekan"
    }, 
    {
      value: "'Abbasabad"
    }, 
    {
      value: "Abadan"
    }, 
    {
      value: "Nahavand"
    }, 
    {
      value: "Naqadeh"
    }, 
    {
      value: "Behshahr"
    }, 
    {
      value: "Azadshahr"
    }, 
    {
      value: "Javanrud"
    }, 
    {
      value: "Ramian"
    }, 
    {
      value: "Zehak"
    }, 
    {
      value: "Rudsar"
    }, 
    {
      value: "Galugah"
    }, 
    {
      value: "Ramsar"
    }, 
    {
      value: "Asadabad"
    }, 
    {
      value: "Shaft"
    }, 
    {
      value: "Neka"
    }, 
    {
      value: "Kord Kuy"
    }, 
    {
      value: "Nowshahr"
    }, 
    {
      value: "Harsin"
    }, 
    {
      value: "Galikesh"
    }, 
    {
      value: "Kavar"
    }, 
    {
      value: "Chalus"
    }, 
    {
      value: "Aq Qala"
    }, 
    {
      value: "Tonekabon"
    }, 
    {
      value: "Osku"
    }, 
    {
      value: "Qeshm"
    }, 
    {
      value: "Eslamabad-e Gharb"
    }, 
    {
      value: "Paveh"
    }, 
    {
      value: "Dust Mohammad Khan"
    }, 
    {
      value: "Minudasht"
    }, 
    {
      value: "Tuyserkan"
    }, 
    {
      value: "Mollasani"
    }, 
    {
      value: "Namin"
    }, 
    {
      value: "Abyek"
    }, 
    {
      value: "Lordegan"
    }, 
    {
      value: "Abhar"
    }, 
    {
      value: "Showt"
    }, 
    {
      value: "Torqabeh"
    }, 
    {
      value: "Dowlatabad"
    }, 
    {
      value: "Shush"
    }, 
    {
      value: "Kuhdasht"
    }, 
    {
      value: "Eyvan"
    }, 
    {
      value: "Nurabad"
    }, 
    {
      value: "Azarshahr"
    }, 
    {
      value: "Sahneh"
    }, 
    {
      value: "Kamyaran"
    }, 
    {
      value: "Shahrak-e Bakharz"
    }, 
    {
      value: "Bagh-e Malek"
    }, 
    {
      value: "Siahkal"
    }, 
    {
      value: "Shabestar"
    }, 
    {
      value: "Borujen"
    }, 
    {
      value: "Kahnuj"
    }, 
    {
      value: "Jam"
    }, 
    {
      value: "Shadegan"
    }, 
    {
      value: "Aleshtar"
    }, 
    {
      value: "Razan"
    }, 
    {
      value: "Masiri"
    }, 
    {
      value: "Sareyn"
    }, 
    {
      value: "Kalaleh"
    }, 
    {
      value: "Qarah Zia' od Din"
    }, 
    {
      value: "Shazand"
    }, 
    {
      value: "Sarvabad"
    }, 
    {
      value: "Khomeyn"
    },
    {
      value: "Minab"
    }, 
    {
      value: "Darreh Shahr"
    }, 
    {
      value: "Chenaran"
    }, 
    {
      value: "Nur"
    }, 
    {
      value: "Susangerd"
    }, 
    {
      value: "Rudan"
    }, 
    {
      value: "Gomishan"
    }, 
    {
      value: "Omidiyeh"
    }, 
    {
      value: "Tajrish"
    }, 
    {
      value: "Shalamzar"
    }, 
    {
      value: "Dehdasht"
    }, 
    {
      value: "Germi"
    }, 
    {
      value: "Pa'in-e Bazar-e Rudbar"
    }, 
    {
      value: "Ravansar"
    }, 
    {
      value: "Daran"
    }, 
    {
      value: "Meshgin Shahr"
    }, 
    {
      value: "Sonqor"
    }, 
    {
      value: "Bileh Savar"
    }, 
    {
      value: "Mohr"
    }, 
    {
      value: "Jolfa"
    }, 
    {
      value: "Qorveh"
    }, 
    {
      value: "Estahban"
    }, 
    {
      value: "Dehgolan"
    }, 
    {
      value: "Do Gonbadan"
    }, 
    {
      value: "Firuzabad"
    }, 
    {
      value: "Bostanabad"
    }, 
    {
      value: "Neqab"
    }, 
    {
      value: "Faruj"
    }, 
    {
      value: "Khalilabad"
    }, 
    {
      value: "Mianeh"
    }, 
    {
      value: "Sarableh"
    }, 
    {
      value: "Sisakht"
    }, 
    {
      value: "Sepidan"
    }, 
    {
      value: "Arsanjan"
    }, 
    {
      value: "Surak"
    }, 
    {
      value: "Sarab-e Dureh"
    }, 
    {
      value: "Joghtay"
    }, 
    {
      value: "Fariman"
    }, 
    {
      value: "Bu'in Zahra"
    }, 
    {
      value: "Darab"
    }, 
    {
      value: "Farmahin"
    }, 
    {
      value: "Ramshir"
    }, 
    {
      value: "Pol-e Sefid"
    }, 
    {
      value: "Heris"
    }, 
    {
      value: "Mahallat"
    }, 
    {
      value: "Gavbandi"
    }, 
    {
      value: "Bozghan"
    }, 
    {
      value: "Likak"
    }, 
    {
      value: "Gilan-e Gharb"
    }, 
    {
      value: "Lali"
    }, 
    {
      value: "Maku"
    }, 
    {
      value: "Sarvestan"
    }, 
    {
      value: "Charam"
    }, 
    {
      value: "Dowlatabad"
    }, 
    {
      value: "Hashtrud"
    }, 
    {
      value: "Deyr"
    }, 
    {
      value: "Seyah Cheshmeh"
    }, 
    {
      value: "Delijan"
    }, 
    {
      value: "Tazehabad"
    }, 
    {
      value: "Khomarlu"
    }, 
    {
      value: "Ardal"
    }, 
    {
      value: "Abbar"
    }, 
    {
      value: "Qal'eh-ye Khvajeh"
    }, 
    {
      value: "Rabor"
    }, 
    {
      value: "Lamerd"
    }, 
    {
      value: "Zarrinabad"
    }, 
    {
      value: "Divandarreh"
    }, 
    {
      value: "Safashahr"
    }, 
    {
      value: "Sirik"
    }, 
    {
      value: "Kerend-e Gharb"
    }, 
    {
      value: "Nir"
    }, 
    {
      value: "Maraveh Tappeh"
    }, 
    {
      value: "Bandar-e Lengeh"
    }, 
    {
      value: "Basht"
    }, 
    {
      value: "Eslamabad"
    }, 
    {
      value: "Abdanan"
    }, 
    {
      value: "Poldokhtar"
    }, 
    {
      value: "Bandar-e Deylam"
    }, 
    {
      value: "Dargaz"
    }, 
    {
      value: "Givi"
    }, 
    {
      value: "Sa'adat Shahr"
    }, 
    {
      value: "Qir"
    }, 
    {
      value: "Varazqan"
    }, 
    {
      value: "Fahraj"
    }, 
    {
      value: "Ashkhaneh"
    }, 
    {
      value: "Soltanabad"
    },
    {
      value: "Abadeh"
    }, 
    {
      value: "Sarakhs"
    }, 
    {
      value: "Bastak"
    }, 
    {
      value: "Hajjiabad"
    }, 
    {
      value: "Haftkel"
    }, 
    {
      value: "Khowrmuj"
    }, 
    {
      value: "Firuzkuh"
    }, 
    {
      value: "Shahr-e Qadim-e Lar"
    }, 
    {
      value: "Nurabad"
    }, 
    {
      value: "Rasak"
    }, 
    {
      value: "Faryab"
    }, 
    {
      value: "Hoveyzeh"
    }, 
    {
      value: "'Anbarabad"
    }, 
    {
      value: "Roshtkhvar"
    }, 
    {
      value: "Anar"
    }, 
    {
      value: "Manujan"
    }, 
    {
      value: "Bandar-e Khamir"
    }, 
    {
      value: "Arakvaz-e Malekshahi"
    }, 
    {
      value: "Arzu'iyeh"
    }, 
    {
      value: "Mamuniyeh"
    }, 
    {
      value: "Mahneshan"
    }, 
    {
      value: "Ashtian"
    }, 
    {
      value: "Garmeh"
    }, 
    {
      value: "Eqlid"
    }, 
    {
      value: "Nikshahr"
    }, 
    {
      value: "Neyriz"
    }, 
    {
      value: "Gonabad"
    }, 
    {
      value: "Kalat-e Naderi"
    }, 
    {
      value: "Surian"
    }, 
    {
      value: "Zaboli"
    }, 
    {
      value: "Qarah Aghaj"
    }, 
    {
      value: "Suran"
    }, 
    {
      value: "Konarak"
    }, 
    {
      value: "Dehloran"
    }, 
    {
      value: "Bardsir"
    }, 
    {
      value: "Qa'en"
    }, 
    {
      value: "Hajjiabad"
    }, 
    {
      value: "Mohammadabad"
    }, 
    {
      value: "Asadiyeh"
    }, 
    {
      value: "Khonj"
    }, 
    {
      value: "Iranshahr"
    }, 
    {
      value: "Hendijan"
    }, 
    {
      value: "Abarkuh"
    }, 
    {
      value: "Tafresh"
    }, 
    {
      value: "Farashband"
    }, 
    {
      value: "Qal'eh Ganj"
    }, 
    {
      value: "Khash"
    }, 
    {
      value: "Jajarm"
    }, 
    {
      value: "Ferdows"
    }, 
    {
      value: "Hajjiabad"
    }, 
    {
      value: "Bajestan"
    }, 
    {
      value: "Mehriz"
    }, 
    {
      value: "Mehran"
    }, 
    {
      value: "Shahr-e Babak"
    }, 
    {
      value: "Dalgan"
    }, 
    {
      value: "Kuhbanan"
    }, 
    {
      value: "Sardasht"
    }, 
    {
      value: "Sarbisheh"
    }, 
    {
      value: "Mayamey"
    }, 
    {
      value: "Shahr-e Herat"
    }, 
    {
      value: "Boshruyeh"
    }, 
    {
      value: "Bafq"
    }, 
    {
      value: "Jask"
    }, 
    {
      value: "Ardakan"
    }, 
    {
      value: "Sarayan"
    }, 
    {
      value: "Ravar"
    }, 
    {
      value: "Nehbandan"
    }, 
    {
      value: "Tabas"
    }, 
    {
      value: "Na'in"
    }
  ]
);

const getCity =  async() => {
const  cityName = citiesIran.find((element)=> element.city === value.value)
let city = cityName?.city
value.value = ''
const response =  await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${cityName?.lat}&longitude=${cityName?.lng}&current_weather=true`)
let data = response.data.current_weather
updateUI(city, data)
}
const updateUI = (city: string|undefined, data: { weathercode: number; temperature: number; is_day: string; }) => {
const deteils = document.querySelector('.details')
const card = document.querySelector('.card')
let weatherCodes =[
  {
  state: 0,
  text: "clear sky"
},
{
  state: 1,
  text: "partly cloudy"
},
{
  state: 2,
  text: "partly cloudy"
},
{
  state: 3,
  text: "partly cloudy"
},
{
  state: 45,
  text: "Fog"
},
{
  state: 48,
  text: "Fog"
},
{
  state: 51,
  text: "Drizzle"
},
{
  state: 53,
  text: "Drizzle"
},
{
  state: 55,
  text: "Drizzle"
},
{
  state: 56,
  text: "Drizzle"
},
{
  state: 57,
  text: "Drizzle"
},
{
  state: 61,
  text: "Rain"
}
,
{
  state: 63,
  text: "Rain"
},
{
  state: 65,
  text: "Rain"
},
{
  state: 66,
  text: "Rain"
},
{
  state: 67,
  text: "Rain"
}
,
{
  state: 71,
  text: "	Snow"
},
{
  state: 73,
  text: "	Snow"
},
{
  state: 75,
  text: "	Snow"
}
,
{
  state: 77,
  text: "	Snow"
},
{
  state: 80,
  text: "Rain showers"
},
{
  state: 81,
  text: "Rain showers"
}
,
{
  state: 82,
  text: "Rain showers"
},
{
  state: 85,
  text: "Snow showers"
},
{
  state: 86,
  text: "Snow showers"
},
{
  state: 95,
  text: "Thunderstorm"
},
{
  state: 96,
  text: "Thunderstorm"
},
{
  state: 99,
  text: "Thunderstorm"
},
]
let wCode = data.weathercode
const greaterElement = weatherCodes.find( elemet => elemet.state === wCode);
  deteils!.innerHTML = `
    <div>
    <h1  style=" padding: 35px; font-size: 26px;">${city}</h1>
    <div style=" padding: 30px; font-size: 20px;"><h3>${greaterElement?.text}</h3></div>
    <h3 style=" font-size: 36px;">
        <span>${data.temperature}</span>
        <span>&deg;C</span>
    </h3>
    </div>
  `
if(data.is_day){
card?.classList.add("day")
}else{
card?.classList.add("night")
}
}

</script>

<style scoped>
.none{
  display: none;
}
.night{
  background-image: url(../assets/night.svg);
  background-repeat: no-repeat;
  color: aliceblue;
  margin:  auto 10px;
  display: flex;
  justify-content: center;
  height: 400px;
  width: 400px;
  border-radius: 20px;
  box-shadow: 3px 4px 3px #cfd4f4;
  
}
.day{
  background-image: url(../assets/day.svg);
  background-repeat: no-repeat;
  color: #070f16;
  margin:  auto 10px;
  display: flex;
  justify-content: center;
  height: 400px;
  width: 400px;
  border-radius: 20px;
  box-shadow: 3px 4px 3px #cfd4f4;
  
}
.weather{
  display: grid;
  justify-content: center;
  height: 508px;

}
</style>