<template>
  <div>
    <input type="text" class="input" v-model="name"/>
    <input type="text" class="input" v-model="serialport"/>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const name = ref();
    const serialport = ref();

    return {name, serialport};
  }
}
</script>
