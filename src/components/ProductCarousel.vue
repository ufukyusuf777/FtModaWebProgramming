<template>

    <div class="row" style="margin-top: 15px">
        <div class="col-9">
            <h5 style="border:1px solid lightgray; padding: 1%">YENİ ÜRÜNLER</h5>
    <md-card>

        <md-card-media>
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide>
                    <div class="swiper-product-image-div">
                        <img class="swiper-product-image" src="./../assets/bot1.jpg">
                        <p style="font-size: 13px; text-align: left; margin-left: 20px">149.90 TL<br>
                        <span style="color: #212121">Chekich - Chekich Postal 009 Siyah</span></p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-product-image-div">
                        <img class="swiper-product-image" src="./../assets/bot1.jpg">
                        <p style="font-size: 13px; text-align: left; margin-left: 20px">149.90 TL<br>
                            <span style="color: #212121">Chekich - Chekich Postal 009 Siyah</span></p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-product-image-div">
                        <img class="swiper-product-image" src="./../assets/bot1.jpg">
                        <p style="font-size: 13px; text-align: left; margin-left: 20px">149.90 TL<br>
                            <span style="color: #212121">Chekich - Chekich Postal 009 Siyah</span></p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-product-image-div">
                        <img class="swiper-product-image" src="./../assets/bot1.jpg">
                        <p style="font-size: 13px; text-align: left; margin-left: 20px">149.90 TL<br>
                            <span style="color: #212121">Chekich - Chekich Postal 009 Siyah</span></p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-product-image-div">
                        <img class="swiper-product-image" src="./../assets/bot1.jpg">
                        <p style="font-size: 13px; text-align: left; margin-left: 20px">149.90 TL<br>
                            <span style="color: #212121">Chekich - Chekich Postal 009 Siyah</span></p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-product-image-div">
                        <img class="swiper-product-image" src="./../assets/bot1.jpg">
                        <p style="font-size: 13px; text-align: left; margin-left: 20px">149.90 TL<br>
                            <span style="color: #212121">Chekich - Chekich Postal 009 Siyah</span></p>
                    </div>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </md-card-media>
    </md-card>
        </div>
        <div class="col-3">
            <ProductCarouselMini></ProductCarouselMini>

        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import ProductCarouselMini from "@/components/ProductCarouselMini";
    export default {
        data() {
            return {
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    loop: false,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        components: {
            ProductCarouselMini,
            swiper,
            swiperSlide
        }
    }
</script>
<style scoped>
    .swiper-slide{
        color: orangered;
    }
    .swiper-slide:hover{

    }
    .swiper-product-div{
    }
    .swiper-product-image-div{
        width: 201px;
        height: 219px;
    }
    .swiper-product-image{
        width: 165px;
    }
    .swiper-product-title{
        color: black !important;
    }
    .swiper-product-price{
        font-size: 23px;
    }
</style>