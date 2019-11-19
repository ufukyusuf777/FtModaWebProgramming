<template>
    <div>
    <Carousel></Carousel>
        <ProductCarousel></ProductCarousel>
        <Banner_1></Banner_1>
        <div class="ust">
            <PopupSignup></PopupSignup>
        <PopupSignin></PopupSignin></div>
    </div>
</template>

<script>
    import Carousel from "@/components/Carousel";
    import ProductCarousel from "@/components/ProductCarousel";
    import Banner_1 from "@/components/Banner_1";
    import PopupSignup from "@/components/PopupSignup";
    import PopupSignin from "@/components/PopupSignin";
    export default {
        name: "Home",
        components: {PopupSignin, PopupSignup, Banner_1,ProductCarousel, Carousel}
    }
</script>

<style scoped>
    .non {
        z-index: -1;
        width: 0px;
        height: 0px;
    }
    .ust{
        z-index: 5;
        background-color: white;
    }
</style>