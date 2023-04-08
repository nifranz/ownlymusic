<template>
  <head>
    <meta name="theme-color" content="#0E0E0E" />
    <title>OWNLY</title>
  </head>
  <div class="wrapper">
    <div class="header">
      <img src="./static/images/background-images/top.png" class="background" />
      <img src="./static/images/background-images/bot.png" class="foreground" />
      <div class="logo-container">
        <img src="./static/images/logo.png" class="logo" />
      </div>
      <div class="scroll-container">
        <ScrollDown />
      </div>
    </div>
    <Content/>
  </div>
</template>

<script>

</script>

<style>
.wrapper {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  overflow: hidden;
  background-color: rgb(14, 14, 14);
}


.wrapper {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
}

.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform-style: preserve-3d;
  z-index: -1;
}


.background,
.logo-container,
.foreground {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;

  z-index: -1;
}

.background {
  transform: translateZ(-10px) scale(2);
}

.foreground {
  transform: translateZ(-8px) scale(1.8);
}

.logo-container,
.scroll-container {
  transform: translateZ(-5px) scale(1.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 500px;
  max-width: 80%;
}
::-webkit-scrollbar {
  display: none;
}
</style>
