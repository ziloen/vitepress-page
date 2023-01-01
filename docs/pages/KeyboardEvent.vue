<template>
  <div>
    <div v-for="val, key in currentKeyboardEvent">
      {{ key }}: {{ val }}
    </div>
  </div>
</template>



<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
const currentKeyboardEvent = ref<KeyboardEvent>(new KeyboardEvent("keyup"))

const keys = [
  {
    name: "key",
    description: "按下的键"
  },

  {
    name: "altKey",
    // kbd 需要 v-html
    description: "<kbd>alt</kbd>键是否被按下"
  }
]satisfies {
  name: string,
  description: string
}[]


function setCurrent(e: KeyboardEvent) {
}

onMounted(() => {
  window.addEventListener("keydown", setCurrent)
})

onUnmounted(() => {
  window.removeEventListener("keydown", setCurrent)
})

</script>



<style lang="scss" scoped>

</style>