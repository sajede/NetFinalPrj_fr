<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid">
        <ul class="nav nav-pills nav-justified">
          <router-link to="/" tag="li" class="nav-item"><a>ثبت مورد</a></router-link>
          <router-link to="/" tag="li" class="nav-item"><a>مشاهده موارد</a></router-link>
          <router-link to="/" tag="li" class="nav-item"><a>راهنما</a></router-link>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }

  nav {
    direction: rtl;
  }

  li >a:hover {
    background-color: rgb(255, 175, 32, 0.2);
  }

</style>
