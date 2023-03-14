<template>
  <head>
    <meta name="theme-color" content="#000">
  </head>
  <div class="wrapper">
    <div class="header">
     <img src="./static/images/background-images/top.png" class="background">
     <img src="./static/images/background-images/bot.png" class="foreground">
     <div class="logo-container">
      <img src="./static/images/logo.png" class="logo"> 
     </div>
     <div class="scroll-container">
      <ScrollDown />
     </div>
    </div>
    <div class = "content">
      <!-- <div class= "icons">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/></svg>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
      </div> -->
      <!-- <div class="footer">
       <a href="#">Socials</a>
       <a href="#">Work</a>
       <a href="#">Webdesign</a>

      </div> -->
    </div>
  </div>
</template>

<script>
let filter = 0;
// window.addEventListener('scroll', () => {
//   console.log(window.scrollY);
// })

window.addEventListener("wheel", event => {
  let bg = document.getElementById('filter');
  console.info(event.deltaY)
  if (event.deltaY > 0) {
    if (filter < 22) {

      bg.style.backdropFilter= `blur(${filter = filter + 2}px)`
    }
  }
  if (event.deltaY < 0 && filter > 0) {
    bg.style.backdropFilter = `blur(${filter = filter - 2}px)`
  }
  console.log(getComputedStyle(body).backdropFilter)
});
  

</script>

<style>
body {
  margin: 0;
  overflow: hidden;
  background-color: black;
}

.icon {
  width: 50px;
  height: 50px;
  fill: white;
}

.icon:hover {
  filter: drop-shadow(3px 5px 2px rgba(158, 101, 101, 0.4));
  cursor: pointer;
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
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
}

.background {
  position: relative;
  transform-style: preserve-3d;
  z-index: -1;
}

.foreground {
  position: relative;
  transform-style: preserve-3d;
  z-index: -1;
}
.background, .logo-container, .foreground {
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

.logo-container, .scroll-container {
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

.content {
  font-size: 2rem;
  padding: 2rem;
  height: 400px;
  background-color: rgb(14, 14, 14);
  backdrop-filter: blur(20px);
}
</style>
