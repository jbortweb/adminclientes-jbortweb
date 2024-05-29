<script setup>

defineProps({
  to:{
    type:String
  }
})
</script>

<template>
  <div>

    <router-link 
      :to="{name:to}"
      class="block md:inline-block rounded bg-blue-600 px-3 text-white uppercase font-bold text-sm shadow hover:bg-blue-500 p-2"
    >
    <slot></slot>    
    </router-link>
  </div>
</template>