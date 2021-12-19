<template>
  <nav>
    <span>Logged In as....</span>
    <button>Logout</button>
    <div>
      <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
      <router-link :to="{ name: 'Search' }">Search</router-link>
      <router-link :to="{ name: 'Saved' }">Saved</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'Register' }">Register</router-link>
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
