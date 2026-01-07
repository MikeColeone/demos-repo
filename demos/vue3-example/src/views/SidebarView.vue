<script setup lang="ts"></script>
<template>
  <div>
    <h1>Vue Example</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
    </ul>
    <h1>组合式api</h1>
    <ul>
      <li>
        <router-link to="/example02_01">ref/watch/watchEffect/computed</router-link>
      </li>
      <li>
        <router-link to="/example02_02">Reactive-02</router-link>
      </li>
      <li>
        <router-link to="/example02_03">shallowRef()</router-link>
      </li>
      <li>
        <router-link to="/example02_04">reactive()</router-link>
      </li>
    </ul>
    <br />
    <h1>Route With Params</h1>
    <ul>
      <li>
        <router-link to="/example04/students/45/homework/23">
          useRoute():students/45/homework/23
        </router-link>
      </li>
      <li>
        <router-link to="/example04/students/18/homework/18">
          useRoute():students/18/homework/18
        </router-link>
      </li>
    </ul>
    <h1>Directive</h1>
    <ul>
      <li>
        <router-link to="/example03_01">template & if & v-bind</router-link>
      </li>
      <li>
        <router-link to="/example03_02">v-bind</router-link>
      </li>
      <li>
        <router-link to="/example03_03">v-for</router-link>
      </li>
    </ul>

    <h1>Form Input Binding</h1>
    <ul>
      <li>
        <router-link to="/example05_01">v-model</router-link>
      </li>
      <li>
        <router-link to="/example05_02">Examples</router-link>
      </li>
    </ul>
    <h1>Component</h1>
    <ul>
      <li>
        <router-link to="/example06_01">Async-Component</router-link>
      </li>
      <li>
        <router-link to="/example06_02">keep-alive</router-link>
      </li>
    </ul>
    <h1>Global Store</h1>
    <ul>
      <li>
        <router-link to="/example07_01">State</router-link>
      </li>
      <li>
        <router-link to="/example07_02">Action</router-link>
      </li>
      <li>
        <router-link to="/example07_03">Getters</router-link>
      </li>
      <li>
        <router-link to="/example07_04">Define Custom Global</router-link>
      </li>
    </ul>
    <h1>slots</h1>
    <ul>
      <li>
        <router-link to="/example13_01">slots</router-link>
      </li>
    </ul>
    <h1>Experitment</h1>
    <ul>
      <li>
        <router-link to="/experiment02">实验二 Vue双向绑定实验</router-link>
      </li>
      <li>
        <router-link to="/experiment03">实验三 单一数据源实验</router-link>
      </li>
    </ul>

    <h1>Homework</h1>
    <ul>
      <li>
        <router-link to="/homework01">作业一 动态切换组件</router-link>
      </li>
      <li>
        <router-link to="/homework02">作业二 checkbox双向绑定</router-link>
      </li>
      <li>
        <router-link to="/homework03">作业三 组件封装和暴露属性</router-link>
      </li>
      <li>
        <router-link to="/homework04">作业四 slot插槽</router-link>
      </li>
      <li>
        <router-link to="/homework05">作业五 函数式全屏Loading遮罩组件</router-link>
      </li>
    </ul>
    <ul>
      <li><router-link to="/practice">练习</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/homework16_01">图片懒加载</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/timer">计时器实现</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/myproxy">Proxy代理对象</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/example19">测试</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/rrweb">rrweb前端录制</router-link></li>
    </ul>
  </div>
</template>
