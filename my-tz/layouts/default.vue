<template>
  <v-app>

    <v-content class="content-bg">
      <nuxt />
    </v-content>

  </v-app>
</template>

<style scoped>
  .content-bg {
    background: url('../static/bg1.png') bottom right no-repeat,
      url('../static/circle1.svg') right -330px top 837px no-repeat,
      linear-gradient(-90deg, rgb(237, 28, 35) -100%, rgb(0, 0, 0) 80%);
    min-height: 2700px;
    overflow-y: hidden;
  }
</style>


<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
            icon: 'apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'bubble_chart',
            title: 'Inspire',
            to: '/inspire'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>