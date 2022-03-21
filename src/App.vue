<style lang="scss">
@import '@/assets/main.scss';
</style>

<template>
   <swiper />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import swiper from './components/swiper.vue';

@Options({
   components: {
      swiper,
   },
})
export default class App extends Vue {}
</script>
