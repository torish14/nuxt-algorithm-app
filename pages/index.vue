<template>
  <v-container>
    <v-row column justify-center align-center>
      <v-col xs12 sm8 md6>
        <v-img src="img/front_image.png" max-width="400px"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {}
</script>

<style></style>
