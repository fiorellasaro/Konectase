<template>
   <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52" >
        <div class="slide-content">
        <h1>Konecta</h1>
        <p>¡Se parte del equipo!</p>
        </div>

      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <div class="slide-content">
        <h1>Konecta</h1>
        </div>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
        <div class="slide-content">
        <h1>Konecta</h1>
        </div>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>

        <div class="slide-content">
        <h1>Konecta</h1>
        </div>

      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide  img-src="https://picsum.photos/1024/480/?image=56">
        <div class="slide-content">
        <h1>Konecta</h1>
        </div>
      </b-carousel-slide>
    </b-carousel>


    <Offer></Offer>

  </div>
</template>

<script>
import Offer from '../components/Offer.vue'

  export default {
    name: 'HomePage',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    },
    components: {
      Offer,
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


@media (min-width: 767px) {
.slide-content{
  display: flex !important;
  justify-content: center !important;
  align-content: center !important;
  padding-bottom: 25% !important;
  flex-direction: column !important;
}

}

</style>
