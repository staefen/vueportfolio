<script setup>
  var description = 'i\'m a interaction design student on my 9th semester';
  var skills = 'Trhough my studies I have gained experience in user research, design, front-end development and user evaluations. I have a strong foundation in design thinking, user-centered design, and prototyping. I am proficient in Adobe Creative Suite, Figma, and HTML/CSS/JS. I am currently learning Vue.js and Python. I am passionate about creating intuitive and engaging digital experiences. I am a quick learner and a team player. I am always eager to learn new things and take on new challenges. I am looking for an internship or a full-time position in the field of interaction design. I am open to new opportunities and excited to see where my career will take me.';
</script>
<template>
  <main>
    <section class="layout">
      <div id="about-me">
        <h1>about me</h1>
        <h2>interaction designer BSc </h2>
          <p></p>
        <h2>skills </h2>
          <p>{{skills}}</p>
        <h2>passion </h2>
        <h2>current projects</h2>
        <h2>personal intersts</h2>
        <h2>{{description}}</h2>
      </div>
      <div id="img-container">
        <img src="../assets/copenhagen.JPG" alt="pic of me">
        <p>picture of me being a tourist in copenhagen</p>
      </div>
    </section>
  </main>
</template>

<style scoped>

.layout {

  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-template-columns: 2.5fr 1.5fr; /*grid størrelse*/
  gap: 0px 20px;
}

main {
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ffffff;
}

#img-container {
    height: 90vh;
    width: auto;
    margin-right: 10vh;
    margin-top: 5vh;
}

#img-container img {
    height: 100%;
    width: 100%;
    object-fit:cover;
}

#img-container p {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    color: black;
    padding-left: 5%;
    float: right;
}

#about-me h1 {
     font-size: 9rem;
     font-weight: 700;
     margin: 0;
     padding: 0;
     color: black;
     padding-left: 5%;
 }
    h2 {
        font-size: 2rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
        color: black;
        padding-left: 5%;
    }

    p {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 0;
        padding: 0;
        color: black;
        padding-left: 5%;
    }
</style>
