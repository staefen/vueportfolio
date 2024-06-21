<script setup>

</script>
<template>
  <main>
    <h1>contacts</h1>
    <p><a href="https://www.linkedin.com/in/huynhstephen/"><mark class="mark-linkedin">linkedin</mark></a></p>
    <p><a href="https://www.instagram.com/"><mark class="mark-instagram">instagram</mark></a></p>

    <p><a href="mailto:stephenhuynh@live.dk"><mark>mail me</mark></a></p>
    <p><a><mark>phone</mark></a></p>

  </main>
</template>

<style scoped>

main {
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ffffff;
}
 h1 {
     font-size: 9rem;
     font-weight: 700;
     margin: 0;
     padding: 0;
     padding-left: 5%;
     color: black;
 }
  p {
      font-size: 2rem;
      font-weight: 500;
      margin: 0;
      padding: 0;
      padding-left: 5%;
      color: black;
  }
  mark{
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
      padding: 0;
      color: black;
      background-color: white;
  }
  mark:hover {
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
  a {
      text-decoration-line: none;
      font-size: 2rem;
      font-weight: 700;
      margin: 0;
      padding: 0;
      padding-left: 5%;
      color: black;
  }
  p a {
      text-decoration-line: none;
      font-size: 2rem;
      font-weight: 700;
      margin: 0;
      padding: 0;
      padding-left: 5%;
      color: black;
  }
</style>
