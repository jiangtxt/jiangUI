<script setup>
const props = defineProps({
  iconName: {
    type: String,
    require: true
  },
  svgClass: {
    type: String,
    default: ''
  }
})
// console.log('props',props.iconName)
</script>

<template>
  <!-- <div>i   -->
    <svg :class="`icon ${props.svgClass}`" aria-hidden="true">
        <use :xlink:href="`#${props.iconName}`"></use>
    </svg>
  <!-- </div> -->
</template>

<style scoped >
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
