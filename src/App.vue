<template>
  <div id="app">
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand">V8</a>
        <button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          class="navbar-toggler"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="nav navbar-nav ml-auto" id="menu-v8">
            <li class="nav-item" role="presentation">
              <router-link :to="{ name: 'Portada' }">portada</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{ name: 'SobreMi' }">sobre mí</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/Contacto">contacto</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/Post/Articulo">último post</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
