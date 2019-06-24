<template>
    <div>
      <user-header></user-header>
      <user-basic-info></user-basic-info>
      <user-password></user-password>
    </div>
</template>

<script>
    import Header from "./Header";
    import BasicInfo from "./BasicInfo";
    import Password from "./Password";

    export default {
      name: "User",
      components : {
        userHeader: Header,
        userBasicInfo: BasicInfo,
        userPassword: Password
      }
    }
</script>

<style scoped>

</style>
