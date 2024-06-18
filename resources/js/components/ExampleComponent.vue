<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, World!'
    };
  }
};
</script>

<style scoped>
h1 {
  color: #333;
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}
</style>