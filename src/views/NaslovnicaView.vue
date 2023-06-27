<template>
  <div id="home">
    <div class="intro">
      <h1>Dobrodošli na našu stranicu!</h1>
      <p>
        Ova stranica je napravljena u sklopu kolegija Informatički projekt 2. Za izradu ovog projekta koristili smo VueJS, Vuetify, CSS, HTML, JavaScript, axios, puno truda i još više živaca!
        </p>
    </div>

    <v-carousel>
      <v-carousel-item v-for="(item, index) in carouselItems" :key="index">
        <img :src="item.image" :alt="item.altText">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'NaslovnicaView',
  data() {
    return {
      carouselItems: [
        {
          image: 'https://www.agati.com/wp-content/uploads/2017/08/SSPCC9.jpg',
          altText: 'Image 1',
        },
        {
          image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_710/https://www.lovehappensmag.com/blog/wp-content/uploads/2019/10/18963844186_914b489d31_h-1024x683.jpg',
          altText: 'Image 2',
        },
        {
          image: 'https://www.enca.com/sites/default/files/styles/twitter/public/afp/2023-05/doc-33FF4ZE-%40photo0.jpg?h=4bf1c8f5&itok=eB5LrDw0',
          altText: 'Image 3',
        },
      ],
    };
  },
};
</script>

<style scoped>
.intro {
  text-align: center;
  margin-bottom: 20px;
}

.intro h1 {
  font-size: 24px;
  font-weight: bold;
}

.intro p {
  font-size: 16px;
  margin-top: 10px;
}

.carousel-item img {
  width: 100%;
  height: auto;
}
</style>
