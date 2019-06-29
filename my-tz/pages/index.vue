<template>
  <v-layout row wrap>
    <v-flex xs12 md6 lg6 class="z-index2">
      <img class="logo" src="../static/logo.png" alt="logo">
      <img class="bg2" src="../static/bg2.png" alt="">

      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      </p>
    </v-flex>
    <v-flex xs12 md6 lg6>
      <div class="clip-img-block">
        <img class="clip-img" src="../static/top-img.png" alt="">
        <a class="link-btn" target="_blank" href="https://google.com">
          ссылка на google.com
        </a>
      </div>
    </v-flex>

    <v-flex xs12>
      <v-container class="container-max-w">
        <products />
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import Products from '@/components/Products'
  export default {
    components: {
      Products
    },

  }
</script>


<style scoped>
  .z-index1 {
    position: relative;
    z-index: 1;
  }

  .z-index2 {
    position: relative;
    z-index: 2;
  }

  .container-max-w {
    max-width: 1240px;
    position: relative;
    z-index: 2;
    margin-top: 77px;
  }

  .bg2 {
    border-style: none;
    position: absolute;
    left: 0;
    right: 0;
    width: 62.5vw;
    z-index: 1;
  }

  .logo {
    z-index: 2;
    position: relative;
    margin-top: 32px;
    margin-left: 120px;
  }

  h1 {
    max-width: 715px;
    /* max-height: 141px; */
    font-family: 'Proxima Nova rg';
    font-size: 70px;
    text-align: right;
    color: #ffffff;
    z-index: 2;
    position: relative;
    text-transform: uppercase;
    margin: 25px 0px 30px auto;
    padding-right: 15px;
    font-weight: 400;
  }

  p {
    max-width: 815px;
    /* max-height: 130px; */
    font-family: 'Cera Pro';
    font-size: 23px;
    line-height: 1.52;
    color: #ffffff;
    z-index: 2;
    position: relative;
    padding: 0 15px;
    text-align: justify;
    margin: 0 0 0 auto;

  }


  .clip-img-block {
    position: relative;
    z-index: 1;
    width: 100%;
    right: 0;
  }

  .clip-img {
    width: 100%;
    height: auto;
  }

  .link-btn {
    font-size: 19px;
    line-height: 2;
    text-align: center;
    color: #000000;
    font-family: TimesNewRomanPSMT;
    padding: 15px 7px;
    width: 100%;
    max-width: 400px;
    border: 1px solid #9f060d;
    border-radius: 50px;
    text-transform: uppercase;
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    text-decoration: none;
    cursor: pointer;
  }
</style>