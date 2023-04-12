<template>

<div id="links" class="content">
    <div class="icons">
        <a class="icon" href="https://open.spotify.com/artist/0jOdRca4JnqhwKMnG4Z9K9?si=40sDn-fXSCO6ZSesErrPwA" target="_blank" rel="noopener noreferrer">
            <span class="fab fa-spotify"></span>
            <div class="icon-descr">Spotify</div>
        </a>
        <a class="icon" href="https://soundcloud.com/ownly" target="_blank" rel="noopener noreferrer">
            <span class="fab fa-soundcloud"></span>
            <div class="icon-descr">SoundCloud</div>
        </a>
        <a class="icon" href="https://instagram.com/niklasfranz" target="_blank" rel="noopener noreferrer">
            <span class="fab fa-instagram"></span>
            <div class="icon-descr">Instagram</div>
        </a>  
        <a class="icon" href="https://youtube.com/ownly4324" target="_blank" rel="noopener noreferrer">
            <span class="fab fa-youtube"></span>
            <div class="icon-descr">YouTube</div>
        </a>
        <a class="icon" href="https://music.apple.com/us/artist/ownly/1544605915" target="_blank" rel="noopener noreferrer">
            <span class="fab fa-itunes"></span>
            <div class="icon-descr">Apple Music</div>
        </a>
    </div>
    <div class="divider"></div>
    <div class="credits"><a href="https://github.com/nifranz" target="_blank" rel="noopener noreferrer"> Made with <i class="fa-solid fa-heart"></i> and <i class="fa-brands fa-vuejs"></i> by <span class="github-link"><div class="fa-brands fa-github"></div> / nifranz</span></a></div>

</div>
</template>

<script>
    
</script>

<style scoped>
        body {
            font-family: 'Tenor Sans', sans-serif;
            box-sizing: border-box;
            
        }
.content {
    width: 100%;
    backdrop-filter: blur(15px);
    min-height: 600px;

    background-color: rgba(14, 14, 14, 0.435);


}

.github-link {
    display:inline-block;
}
.credits {
    color: white;
    font-size:25px;
    margin: auto;
    width: 70%;
    text-align: center;
    padding-top: 130px;
    padding-bottom: 130px;
}
.credits a {
    color:white;
    text-decoration: none;
}
.divider {
    margin:auto;
    width: 100%;
    border-bottom: 1px solid white;
}

.icons {
    margin: auto;
    display: flex;
    justify-content: space-around;
    width: 50%;
    padding-top: 130px;
    padding-bottom: 130px;
    font-size: 25px;
}
.icon-descr {
    visibility: hidden;
    display: none;
    color:rgb(251, 249, 245)
}


@media only screen and (max-width: 800px) {
    .icons {
        flex-direction: column;
        justify-content: unset;
        align-items: center;
        width: 90%;
        gap: 20px;
    }

    .icon {
        background-color:#21302d;
        width: 90%;
    }

    .icon:hover {
        background-color:#445855;
        
    }

    .icon-descr {
        display: block;
        visibility: visible;
    }
    .icons {
        padding-top: 50px;
        padding-bottom: 45px;
    }

    .divider {
        /* visibility: hidden; */
        width: 30%;
    }

    .credits {
        padding-top: 37px;
        padding-bottom: 50px;
        font-size: 20px;
    }
}
.icon{
    color: unset;
    text-decoration: unset;
    cursor: pointer;
    border-radius: 3px;
    height:80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.fab {
    height: 50px;
    font-size: 50px;
    color:rgb(251, 249, 245);
    
}

.icon:hover .fab, .icon-descr {
    filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.263));
}



.icon:hover .fab.fa-instagram::before {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);

    /* background: linear-gradient(to bottom right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5); */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.icon:hover .fab.fa-youtube {
  color: #d80b0b;
}

.icon:hover .fab.fa-soundcloud {
  color: #FF5500;
}

.icon:hover .fab.fa-spotify {
  color: #1DB954;
}

.icon:hover .fab.fa-itunes::before {
  background: linear-gradient(to bottom right, #FF5E4E 25%, #9B71FF, #00C8FF 85%);
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.credits a:hover .fa-brands.fa-vuejs:before {
    color:#42B883;
}

.credits a:hover .fa-solid.fa-heart::before {
    color:#d80b0b;
}

.credits a:hover .null {
    color: #cdb589;
}


</style>