<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Bingo App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Bingo from '@/components/Bingo.vue' // @ is an alias to /src

@Options({
  components: {
    Bingo
  }
})
export default class Home extends Vue {}
</script>
