<template>

    <div class="row">
        <div class="col-9">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>

            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="item active">
                    <img src="@/assets/manset.png" alt="Los Angeles" style="width:100%;">
                </div>

            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
</div>
        <div class="col-3" style="margin-left: -27px">
            <div class="manset">
                <div class="mansetyan">
                    <img class="resim" src="@/assets/yanresim1.png" alt="">
                    <img src="@/assets/yanresim2.png" alt="">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Carousel"
    }
</script>

<style scoped>

    .kucukicon{
        height: 16px;
    }
    .sagustmenu{
        float: right;
    }
    .sagustmenu span{
        border:2px solid lightgrey ;
        padding: 5px;
    }
    .siparistakibi{
        margin-right: 10px;

    }
    .logo{
        height: 50px;
    }
    .logocubuk{

    }
    .arama{
        display: inline-block;
        margin: 16px;
        position: relative;
        margin-left: 150px;

    }
    .arama input{
        width: 400px;
        height: 40px;
        background-color:rgb(233, 229, 229) ;
    }
    .arama button{
        height: 40px;
        color: white;

    }
    .arkaplan{
        background-color: orangered;

    }
    .menucubuk  li{
        display: inline-block;
        margin-right: 15px;
        line-height: 50px;
        padding-right: 10px;
        padding-left:10px ;
    }
    .menucubuk li:hover{
        background-color: white;
        color: black;
        line-height: 50px;
        cursor: pointer;
        border-top: 2px solid orangered;
    }
    .menucubuk{
        background-color: #333;
        color: white;
        height:50px ;
        line-height: 50px;
        margin-bottom: 10px;
        width:100%;
    }
    .firsatreyonu{
        float: right;
        margin-right: 20px!important;
        background-color: orangered;
        padding-right: 10px;
        padding-left: 10px;

    }
    .manset{
        margin: auto;

    }
    #myCarousel{
        float: left;

    }
    .mansetyan{

        width: 280px;
    }
    .mansetyan img{
        height: 155px;

    }

    .mansetyan .resim{
        margin-bottom: 10px;
    }
    .anabaslik{




    }
    .anabaslikic{
        width: 1280px;
        text-align: center;
        background: lightgrey;
        padding: 10px
    }

    .insta1{
        margin: 0 !important;
    }
    .instaresim {
        width: 150px;
        margin-left: 20px;
    }
    .footer{
        height: 300px;
        margin-top: 40px;
        background: grey;
    }
    .footer-bottom{
        height: 40px;
        background: rgb(51, 50, 50);
        color: white;
        padding-top: 10px;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .kapsa{
        margin-left:-30px;
        margin-right: -30px;
    }
    .footer div{
        width: 300px;
        margin-top: 20px;
        color: white;
    }
    .cubukduzen{
        float: right;
        margin-top: 30px;

    }
    .favori{
        margin-right: 20px;
        border: 1px solid black;
        color: #777;
        height: 30px;
        padding: 10px;
    }
    .favori:hover{
        color: orangered;
        border: 1px solid orangered;

    }
    .cd a:hover{
        text-decoration:gray
    }
    .foo1 li{
        list-style: none;
    }
    .foo1{
        width: 18%!important;
    }
    .foo3{
        list-style: none;
        width: 40%!important;
    }
    .formlar{
        display:inline;

    }
    .formlar input{
        background-color: #212121;
        border-color: #212121;
        width: 45%;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
    }
    .eposta{

        display: inline;
    }
    .eposta input{
        width: 60%!important;
        background-color: #212121;
        border-color: #212121;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        margin-top: 7px;
    }
    .kayitol{
        display: inline;
        padding: 7px;
        border:1px solid black;
        background-color: black;
        color: white;
        padding: 11px 50px 11px 50px;
        line-height: 15px;
        margin-left: 10px;
    }
    .sosyalmedya li{
        list-style: none;
        display: inline-block;
        font-size: 30px;
        padding-right: 5px;
    }
    .sosyalmedya{
        padding: 0;
    }
    .Siparisim button{
        background-color:orangered;
        height: 40px;
        width: 200px;

    }

    .w-100 {
        width: 20% !important;
    }
    .asd{
        text-align: center;
    }



</style>