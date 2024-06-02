<script setup >

const props = defineProps({
  btnName: {
    type: String,
    default: '按钮',
  },
  iconName: {
    type: String,
    require: true
  },
  svgClass: {
    type: String,
    default: ''
  }
})
// console.log('props', Icon.props)
</script>

<template>
  <div class="btn">
    <button class="btn">    
      <j-icon 
      :iconName="props.iconName"
      :svgClass="props.svgClass"
      ></j-icon>
    {{props.btnName}}</button>
  
  </div>
</template>

<style scoped >
.btn{
height: 32px;
width: 80px;
/* background-color: #0e84cd; */
/* border: 1px solid #e0e0e0; */
/* border-radius: 5px; */
}
</style>
