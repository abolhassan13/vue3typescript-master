<template>
  <div>
    <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
      <a-layout>
        <a-layout-header :style="headerStyle" v-bind:class="tem" class="header">
          {{ t('APP BAR') }}
        </a-layout-header>

        <a-layout>
          <a-layout-sider :style="siderStyle"  class="sider" v-bind:class="side">
            <div><router-link to="/" v-bind:class="side">{{t('Dashboard')}}</router-link> </div>

            <div><router-link to="/todos" v-bind:class="side">{{t('Todos')}}</router-link></div>

            <div><router-link to="/weather" v-bind:class="side">{{t('Weather')}}</router-link></div>

            <div><router-link to="/profile" v-bind:class="side">{{t('Profile')}}</router-link></div>


          </a-layout-sider>

          <a-layout-content :style="contentStyle"  class="content">
            <router-view />
          </a-layout-content>   

        </a-layout>

        <a-layout-footer :style="footerStyle" v-bind:class="tem" class="footer">
          <p>{{t('crby')}}</p>
        </a-layout-footer>
      </a-layout>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import { CSSProperties, ref } from 'vue';
import { useI18n } from "vue-i18n"

let tem = ref('')
tem = localStorage.getItem("thems")

let side = ref('')
if(localStorage.getItem("thems") =="fallOfAutumn"){
  side = "orangeSide"
}else if(localStorage.getItem("thems") =="dayInSummer"){
  side = "greenSide"
}else if(localStorage.getItem("thems") =="SilverMoon"){
  side = "drakSide"
}
const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})
const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  paddingInline: 50,
  lineHeight: '40px',
  backgroundColor: '#41a6e4',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  background:'#d6f0ec'
};

const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '50px',
  minWidth:'85px',
  width: '20%',
  backgroundColor: '#1a1d5b',
  maxWidth: '30%'
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#41a6e4',
  color: '#fff'
};
</script>
<style>
.header{
  height: 40px !important;
}
.sider{
  min-width: 80px !important;
  flex: 0 0 25% !important; 
}
.content{
  min-height: 550px !important;
}
.footer{
  height: 40px !important;
  padding: 0 !important;
}
.fallOfAutumn{
  background: #FF5722 !important;
  color: #000000 !important;
}
.SilverMoon{
  background: #6c7a92 !important;
  color: #000000 !important;
}
.drakSide{
  background: rgb(44, 53, 68) !important;
  color: #000000 !important;
}
.orangeSide{
  background: #76270f !important;
  color: #000000 !important;
}
.dayInSummer{
  background: rgb(2, 139, 0) !important;
  color: #000000 !important;
}
.greenSide{
  background: #114727 !important;
  color: #000000 !important;
}
</style>