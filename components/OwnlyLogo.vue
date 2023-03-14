<template>
    <div class="logo-container">
        <div id="logo"></div>
    </div>
</template>

<script>
export default {
    name: 'OwnlyLogo'
}

</script>

<style>

.logo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

}

#logo {
    width: 500px;
    padding-top: 293px;
    max-width: 80%;
    background-image: url('../static/images/logo.png');
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow:2px black;
}


@media screen {
    
}

</style>