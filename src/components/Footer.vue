<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div>
            <nav class="footer">
                <h1 id="logo">Copyright©2024</h1>
                <a class="bring-me-back" href="#top">bring me back↑</a>
            <ul>
                <a href="https://www.linkedin.com/in/huynhstephen/"><mark class="mark-linkedin">linkedin</mark></a>
                <a href="https://www.instagram.com/"><mark class="mark-instagram">instagram</mark></a>
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

.mark-linkedin:hover {
    background-color: #0072b1;
    color: white;
    transition: 0.2s;
    padding: 12px;
}
.mark-instagram:hover {
    background-image: radial-gradient(circle at 30% 107%, 
                                     #fdf497 0%, 
                                     #fdf497 5%, 
                                     #fd5949 45%,
                                     #d6249f 60%,
                                     #285AEB 90%
    );
    color: white;
    transition: 0.2s;
    padding: 12px;
}

#logo {
    text-decoration-line: none;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    color: black;
    font-weight: 700;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-left: 5%;
    padding-right: 5%;
    background-color: --vt-c-bone-white;
    width: 100vw;
    margin: 0;
    position: relative;
    bottom: 0;
    left: 0;


}

.bring-me-back {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
    color: black;
    position:absolute;
    left: 50%;
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
    margin-right: 2rem;
}
ul li a:active {
    color: #ff3c3c;
    transition: 0.5s;
}
</style>
