<template>
    <div >
        <h1 class="m-5">¿QUÉ TE OFRECEMOS?</h1>
        <div class="offer-content margin-bottom-content"> 
            <div>
                <img src="../assets/logo.png" alt="offer-one">
                <h2>sub-title1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div>
                <img src="../assets/logo.png" alt="offer-one">
                <h2>sub-title1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div>
                <img src="../assets/logo.png" alt="offer-one">
                <h2>sub-title1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <h1 class="m-5">BENEFICIOS PARA TI</h1>
        <div class="offer-content"> 
            <div>
                <img src="../assets/logo.png" alt="offer-one">
                <h2>sub-title1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div>
                <img src="../assets/logo.png" alt="offer-one">
                <h2>sub-title1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div>
                <img src="../assets/logo.png" alt="offer-one">
                <h2>sub-title1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <b-button variant="outline-success margin-button" size="lg">¡Quiero ser parte!</b-button>

        <h1 class="m-5">EXPERIENCIAS KONECTA</h1>
        <div class="offer-content"> 
            <div>
                <img src="../assets/logo.png" alt="offer-one">
                <h2>sub-title1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div>
                <img src="../assets/logo.png" alt="offer-one">
                <h2>sub-title1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div>
                <img src="../assets/logo.png" alt="offer-one">
                <h2>sub-title1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div>
                <img src="../assets/logo.png" alt="offer-one">
                <h2>sub-title1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>



    </div>
</template>

<script>

export default {
  name: "Offer",
  methods: {

  }
};
</script>

<style lang="css">

.offer-content{
    display:flex;
    align-content: center;
    justify-content: center;
    flex-direction: row;
}

.margin-bottom-content{
    margin-bottom: 10em;
}

.margin-button{
    margin-bottom: 5em;
    margin-top: 5em;
}


@media (max-width: 576px) {

}

@media (max-width: 767px) {
    .offer-content{
        flex-direction: column;
    }

    .m-5{
        font-size: 2em !important;
    }
}

.pointer {
  cursor: pointer;
}
</style>
