<template>
  <div id="app">
    <div class="flex-container">
      <div class="vertical-navbar">
        <router-link to="/results" class="navbar-brand">Project 4</router-link>
        <div class="navbar-nav">
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Add</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/results" class="nav-link"
              >Survey Results</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/notes" class="nav-link"
              >Notes</router-link>
          </li>
        </div>
      </div>

      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    // Redirect to "/results" when the component is mounted
    this.$router.push("/results");
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  height: 100vh;
}

.vertical-navbar {
  width: 15%;
  height: 125%;
  background-color: #343a40;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.vertical-navbar .navbar-brand,
.vertical-navbar .nav-link {
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
