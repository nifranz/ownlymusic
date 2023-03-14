<template>
    <nav>
        <ul>
            <li>
                hi
            </li>
            <li>
                hi2
            </li>
        </ul>
        <div class="nav-item">
            <a href="#">Item 1</a>
        </div>
        <div class="nav-item">
            <a href="#">Item 2</a>
        </div>

    </nav>

</template>

<script>

</script>

<style scoped>
nav {
    width: 100%;
    height: 70px;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(246, 246, 246);
}

nav ul {
    list-style: none;
}

nav li {
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nav-item {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 5px;
    margin-right: 5px;

    border-radius: 3px;

    background-color: rgb(226, 226, 226);
}
</style>