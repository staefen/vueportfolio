<script setup>
import { RouterLink, RouterView } from 'vue-router';

function email() {
  window.location.href = "mailto:stephenhuynh@live.dk";
}
</script>

<template>
  <main>
    <section>
      <div class="container">
        <h1>hi, i'm <RouterLink to="/about"><mark class="mark-name"> stephen huynh chung</mark></RouterLink> 👋</h1>
        <h1>i do
          <RouterLink to="/user-research"><mark class="mark-research"> user research</mark></RouterLink>, 
          <RouterLink to="design"><mark class="mark-design">design</mark></RouterLink>, 
          <RouterLink to="frontend-development"><mark class="mark-front">front-end development</mark></RouterLink> &amp; 
          <RouterLink to="user-evaluation"><mark class="mark-evaluation">user evaluations</mark></RouterLink>.</h1>
        <p>I'm an Interaction Designer based in Aalborg, Denmark with competencies ranging Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim totam vel vitae quisquam at commodi nulla magnam. Repudiandae voluptate numquam autem ipsum minus reiciendis maxime quas tempora consequatur vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        <!-- <button class="label" @onclick="email();"></button> -->
        <div class="connect-button label" @onclick="email();"></div>
      </div>
    </section>
    <section>

    </section>
  </main>
</template>

<style scoped>
button {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 10px;
  color: black;
  border: 2px solid black;
  border-radius: 2px;
  padding: 1rem;
  margin-top: 2rem;
  background-color: white;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  color: white;
  transition: 0.5s;
}
.connect-button {
  position: relative;
  width: 240px;
  height: 70px;
  background-color: white;
  border: 2px solid black;
  border-radius: 2px;
  padding: 1rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: 0.2s;
  color: black;
  text-align: center;
}
.connect-button:hover {
  background-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  color: white;
  transition: 0.5s;
}
.container{
  position: absolute;
  top: 15%;
}
a:link {
  text-decoration: none;
}
mark {
  background-color: rgb(255, 255, 255);
  font-size: 4.5rem;
  font-weight: 700;
}
.mark-research:hover {
  background-color: rgb(104, 239, 185);
  font-size: 4.5rem;
  font-weight: 700;
  transition: 0.2s;
  padding: 12px;

}
.mark-design:hover {
  background-color: rgb(205, 104, 239);
  color: rgb(44, 44, 44);
  font-size: 4.5rem;
  font-weight: 700;
  transition: 0.2s;
  padding: 12px;

}
.mark-front:hover {
  background-color: rgb(239, 212, 104);
  color: white;
  font-size: 4.5rem;
  font-weight: 700;
  transition: 0.2s;
  padding: 12px;
}

.mark-evaluation:hover {
  background-color: rgb(239, 104, 104);
  color: white;
  font-size: 4.5rem;
  font-weight: 700;
  transition: 0.2s;
  padding: 12px;
}

.mark-name:hover{
  background-color: rgb(104, 239, 134);
  font-size: 4.5rem;
  font-weight: 700;
  transition: 0.2s;
  padding: 12px;
}
main{
  padding: 10% 5% 50% 5%;
}
h1 {
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: black;
}
p {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  padding-right: 10%;
  padding-top: 1%;
  padding-bottom: 1%;
  color: black;
}


.label             { position:relative; width: 240px; height: 70px;}
.label:after       { content:'let\'s connect'; }
.label:hover:after { content:'stephenhuynh@live.dk'; }

h4 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  color: black;
}
</style>
