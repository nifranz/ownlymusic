<template>
    <span class="scroll-icon"></span>
</template>

<script>

</script>

<style>
.scroll-icon {
    margin-top: 400px;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 3s infinite;
  animation: sdb05 3s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
    
  }  
}

</style>