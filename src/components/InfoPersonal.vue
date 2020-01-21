<template>
<div class="background-postulate">

    <div class="card-container" >
    <b-card
        title="Bienvenid@"

        style="max-width: 20rem;"
        class="mb-2"
    >

  <b-form @submit="onSubmit" >

      <b-form-group id="input-group-3" label="Tipo de documento:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.docType"
          :options="docType"
          required
        ></b-form-select>
      </b-form-group>


      <b-form-group
        id="input-group-1"
        label="Nº de documento:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.docNum"
          type="number"
          required
          placeholder="32435645"
        ></b-form-input>
      </b-form-group>



      <b-button type="submit" variant="primary">Continuar</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>



    </b-card>
    </div>


</div>
</template>

<script>
// import CurrentUser from "@/components/CurrentUser.vue";
export default {
    data() {
      return {
        form: {
          docNum: '',
          docType: null
        },
        docType: [{ text: 'Seleccionar', value: null }, 'DNI', 'CE'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        

      },
    //   onReset(evt) {
    //     evt.preventDefault()
    //     // Reset our form values
    //     this.form.email = ''
    //     this.form.name = ''
    //     this.form.food = null
    //     this.form.checked = []
    //     // Trick to reset/clear native browser form validation state
    //     this.show = false
    //     this.$nextTick(() => {
    //       this.show = true
    //     })
    //   }
    }
  }
</script>

<style lang="css">
/* 
.background-postulate{
    background-image: url("../assets/seleccion.png"); 
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

} */

.card-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

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
</style>
