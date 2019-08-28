<template>
  <v-app>
    <v-content>
      <!-- <navbar /> -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import Navbar from './components/Navbar.vue';

export default {
  components: {
    // Navbar,
  },

  data: () => ({

  }),

  created() {
    this.$vuetify.theme.light = true;
    this.$vuetify.theme.dark = false;
  },
};
</script>