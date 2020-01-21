<template>
  <header>
      <div class="header-content">
         <a href="https://www.grupokonecta.com/"><u><p class="button-us pointer">Nosotros</p></u></a> 
         <router-link to="/PersonalI"><b-button variant="outline-success">¡Postula!</b-button></router-link> 
      </div>
  </header>
</template>

<script>
// import CurrentUser from "@/components/CurrentUser.vue";
export default {
  name: "HeaderPartial",
  methods: {
    // getLogin() {
    //   this.$store.dispatch("TOGGLE_MODAL_STATE", {
    //     name: "login",
    //     value: true
    //   });
    // },
    // signUp() {
    //   this.$store.dispatch("TOGGLE_MODAL_STATE", {
    //     name: "register",
    //     value: true
    //   });
    // },
    // logOut() {
    //   this.$store.dispatch("LOG_OUT").then(() => {
    //     // this.$router.push({ name: "SearchPage" });
    //     this.$router.push({ name: "HomePage" });
    //     this.$router.go();
    //   });
    // },
    // goProfile() {
    //   this.$router.push({ name: "ProfilePage" });
    // }
  },
  components: {
    // CurrentUser
  }
};
</script>

<style lang="css">

.header-content{
display: flex;
justify-content: flex-end;
align-items: center;
align-content: center;
margin: 20px;
}

.button-us{
    margin-bottom: 0;
    margin-right: 20px;
}

@media (max-width: 576px) {

}

@media (max-width: 767px) {

}

.pointer {
  cursor: pointer;
}

a{
    color: black;
}
</style>
