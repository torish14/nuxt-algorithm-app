<template>
  <div class="text-center ms-10">
    <v-form>
      <v-text-field v-model="ticketNumber" label="チケット番号"></v-text-field>
      <v-slider
        v-model="ticketAmount"
        class="mt-7"
        thumb-size="32"
        thumb-label=""
        min="10"
        max="10000"
        step="1000"
        label="チケット数"
      ></v-slider>
      <v-radio-group v-model="searchMethod" label="探索方法" row>
        <v-radio label="線形探索" value="linear"></v-radio>
        <v-radio label="二分探索" value="binary"></v-radio>
      </v-radio-group>
      <v-input :error-count="errors.length" :error-messages="errors"></v-input>
      <v-btn
        class="primary"
        @click="
          checkForm()
          execSearch()
        "
        >探索</v-btn
      >
    </v-form>
    <div v-if="submitted" class="mt-2">
      <div v-if="result">
        <p>お探しのチケットが見つかりました！</p>
        <v-card class="mx-auto" max-width="344">
          <v-card-title>ID: {{ result.ticket.id }}</v-card-title>
          <v-card-text>{{ result.ticket.content }}</v-card-text>
        </v-card>
        <p class="mt-2">探すのに{{ result.count }}回 かかりました！</p>
      </div>
      <div v-else>
        <p>残念ながらチケットは見つかりませんでした…</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ticketGenerator from '../modules/search/search_util'
import Searcher from '../modules/search/searcher'

@Component
export default class Search extends Vue {
  ticketNumber = ''
  searchMethod = ''
  ticketAmount = ''
  submitted = false
  result = null
  errors = []

  checkForm(): void {
    this.errors = []
    if (!this.ticketNumber) {
      // @ts-ignore
      this.errors.push('チケット番号を入力してください')
    } else if (!Search.validNumber(this.ticketNumber)) {
      // @ts-ignore
      this.errors.push('チケット番号は数字で入力してください')
    }

    if (!this.searchMethod) {
      // @ts-ignore
      this.errors.push('探索方法を入力してください')
    }

    if (this.ticketNumber.length < 0) {
      // @ts-ignore
      this.errors.push('チケット番号は正の数を入力してください')
    } else if (this.ticketNumber > this.ticketAmount) {
      // @ts-ignore
      this.errors.push('チケット番号はチケット数内で入力してください')
    }

    // @ts-ignore
    return !this.errors.length
  }

  execSearch(): void {
    const tickets = ticketGenerator(this.ticketAmount)
    let result = null

    if (this.searchMethod === 'binary') {
      result = Searcher.binarySearch(tickets, Number(this.ticketNumber))
    } else if (this.searchMethod === 'linear') {
      result = Searcher.linearSearch(tickets, Number(this.ticketNumber))
    }

    if (result) {
      // @ts-ignore
      this.result = result
    }
    this.submitted = true
  }

  static validNumber(num: string): boolean {
    const re = /[0-9]+/
    return re.test(num)
  }
}
</script>
