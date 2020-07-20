<template>
  <span>Template Components</span>
</template>

<script>
export default {
  name: "tempalteComponent",
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
}
</script>