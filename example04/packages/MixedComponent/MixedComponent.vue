<script>
export default {
  name: "mixComponent",
  props: {
    source: {
      type: Boolean,
      default: true
    }
  },
  render() {
    return <div class="mixClass">{this.source ? "yes" : "no"}</div>
  }
}
</script>