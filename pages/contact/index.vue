<template>
<div class="contacts">
  <div class="info">
  <h1>Jarno Hänninen</h1>
  <p><a href="mailto:jarno.k.hanninen@gmail.com">jarno.k.hanninen@gmail.com</a></p>
  <p><a href="https://www.linkedin.com/in/jarnohanninen">LinkedIn</a></p>
  <p><a href="https://github.com/jakahann">GitHub</a></p>
  </div>
</div>
</template>

<style scoped>

.contacts {
  position: fixed;
  background:
  
    linear-gradient(to right,
     rgb(0,0,0, 0.8), 
      rgb(0,0,0, 0.9),
    rgb(0,0,0, 1),
    rgb(0,0,0, 1),
    rgb(0,0,0, 1)
    ),
    url("~assets/images/contacts.jpg");
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  
}

.info {
  padding-top: 20%;
  padding-right: 10%;
  text-align: right;
  color:gray;
  opacity: 0.5;
}

a {
  text-decoration: none;
  color: gray;

}
a:hover {
  color: white;
  border-bottom: 2px dotted gray;
  font-size: 1.1em;
}

</style>
