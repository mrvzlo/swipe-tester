<template>
   <div class="center">
      <swiper @swiper="setSwiperRef" @slideChangeTransitionEnd="onSlideChange">
         <swiper-slide>
            <div class="main-slide"><img :src="list[step + 1]" /></div>
         </swiper-slide>
         <swiper-slide>
            <div class="main-slide"><img :src="list[step]" /></div>
         </swiper-slide>
         <swiper-slide>
            <div class="main-slide"><img :src="list[step + 1]" /></div>
         </swiper-slide>
      </swiper>
   </div>
</template>

<script lang="ts">
import ImageService from '../image-service';
import { Options, Vue } from 'vue-class-component';
import { Swiper, SwiperSlide } from 'swiper/vue';

@Options({
   components: { Swiper, SwiperSlide },
})
export default class HelloWorld extends Vue {
   service = new ImageService();
   list = this.service.getAll();
   step = 0;
   score = [];
   swiperRef: any = {};
   inChange = false;

   setSwiperRef(swiper: any) {
      this.swiperRef = swiper;
      this.swiperRef.activeIndex = 1;
   }

   onSlideChange() {
      if (this.inChange) return;
      this.inChange = true;
      this.step++;
      this.swiperRef.slideTo(1, 0, false);
      this.inChange = false;
   }
}
</script>
