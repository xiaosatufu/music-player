<template>
  <div class="hello">
    <h3>22</h3>
    <div class="dd">
      111
      <p>222</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 3px 0 0;
  display: flex;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dd {
  p {
    font-size: 120px;
  }
}
</style>
