<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div>
            <nav class="navbar">
                <h1 id="logo"><RouterLink to="/">[stæfən]®</RouterLink></h1>
                <h2>UX/UI DESIGNER | FRONT-END DEVELOPER | 2024®</h2>
            <ul>
                <li><RouterLink to="/about"><mark class="mark-about">about me</mark></RouterLink></li>
                <li><RouterLink to="/project"><mark class="mark-projects">projects</mark></RouterLink></li>
                <li><RouterLink to="/contact"><mark class="mark-contacts">contacts</mark></RouterLink></li>
            </ul>
          </nav>
        </div>
    </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap');

mark{
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: black;
    background-color: white;

}

.mark-about:hover {
    background-color: rgb(104, 239, 134);
    transition: 0.2s;
    padding: 12px;

}

.mark-projects:hover {
    background-color: rgb(239, 104, 162);
    transition: 0.2s;
    padding: 12px;

}

.mark-contacts:hover {
    background-color:rgb(104, 158, 239);
    transition: 0.2s;
    padding: 12px;
    color: white;

}
#logo {
    text-decoration-line: none;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    color: black;
    font-weight: 700;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-left: 5%;
    padding-right: 5%;
    background-color: --vt-c-bone-white;
    width: 100vw;
    margin: 0;

}

h2 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
    color: black;
    position:absolute;
    left: 25%;
}
ul {
    display: flex;
    list-style: none;
}
ul li {
    margin-right: 1rem;
}


ul li a{
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
    margin-right: 1rem;
}
ul li a:hover {
    color: #ff3c3c;
    transition: 0.5s;
}

a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    margin-right: 1rem;
}
ul li a:active {
    color: #ff3c3c;
    transition: 0.5s;
}
</style>
