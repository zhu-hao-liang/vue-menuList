<template>
  <div>
    <template v-for="(item, index) in list1">
      <li :key="index" v-if="!render">{{item}} </li>

      <ListItem :render="render" :item="item" :key="index + 'a'" v-else/>
    </template>
  </div>
</template>
<script>
import ListItem from "./listItem";
export default {
  props: {
    list1: {
      type: Array,
      default: () => []
    },
    render: {
      // type: Function,
    }
  },
  components: {
    ListItem
  }
};
</script>