<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import SidebarView from '@/views/SidebarView.vue'

export default defineComponent({
  components: {
    SidebarView,
    RouterLink,
    RouterView
  },
  data() {
    return {
      name: 'test1'
    }
  },
  methods: {
    say() {
      console.log(this.name)
    },
    say2() {
      console.log(this.name)
    },
    say3: () => {
      // 注意：这里的 this 不会指向组件实例
      console.log(this.name)
    }
  },
  mounted() {
    this.say()
    this.say2()
    this.say3()
  }
})
</script>
<template>
  <div>
    <div>箭头函数</div>
    <p>
      箭头函数不会创建自己的this，它的this值从定义它的上下文继承而来。也就是说，箭头函数中的this和它外层代码块中的this是一样的。
      也就是说箭头函数的this指针不是自己决定的而是取决于定义的上下文
    </p>
  </div>
</template>
