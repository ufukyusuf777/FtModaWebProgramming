<template>
    <div class="container">
    <div class="row">
<div class="col-9">
          <span style="float: left">
        <i class="fa fa-life-ring"> </i>
        <strong>+90553 099 35 07</strong> <i>(7/24 Satış ve Destek Hattı)</i>
    </span>

</div>
        <div class="col-3 float-right">

        <span class="siparistakibi">
            <img class="kucukicon" src="@/assets/kamyonicon.png" alt="">
            Sipariş Takibi
        </span>
            <span>
            <img class="kucukicon" src="@/assets/trbayrak.jpg" alt="">
            Türkçe-TL
        </span>
        </div>
    </div>

    <div class="row">
        <div class="col-3">
            <div class="logocubuk">
                <img class="logo" src="@/assets/logo.png" alt="">
            </div>
        </div>

        <div class="col-4">
            <div class="arama">
                <input type="text">
                <button class="arkaplan">ARA</button>
            </div>

        </div>

        <div class="col">
            <div class="cubukduzen">
            <span class="cd">
                <a href=""> <span class="favori"><i class="fa fa-heart"></i> FAVORİLERİM</span> </a>

                <a href=""> <span class="favori"><i class="fa fa-shopping-cart"></i> SEPETİM</span></a>


                <span class="favori arkaplan"><a style="color:white" href="#popup2">Giriş Yap </a>/ <a style="color:white"
                                                                                                href="#popup1">Kayıt Ol</a> </span>
            </span>

            </div>

    </div>

    </div>
        <div class="row">
                <div class="menucubuk">
                    <ul>
                        <li class="float-left">YENİ GELENLER</li>
                        <li class="float-left">ERKEK AYAKKABI</li>
                        <li class="float-left">KADIN AYAKKABI</li>
                        <li class="firsatreyonu float-right">FIRSAT REYONU</li>
                    </ul>
                </div>



        </div>
    </div>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .kucukicon{
        height: 16px;
    }

    .siparistakibi{
        margin-right: 10px;

    }
    .sagustmenu{
        float: right;
    }

    .arama{
        margin-top: 16px;
    }
    .arama input{
        width: 85%;
        height: 40px;
        background-color:rgb(233, 229, 229) ;
    }
    .arama button{
        width: 15%;
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

    .logo{
        height: 50px;
    }
    .logocubuk{
        margin-top: 12px;
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
        width: 1175px;
    }
    #myCarousel{
        float: left;
        width: 900px;
    }
    .mansetyan{
        float: left;
        width: 265px;
        margin-left: 10px;
    }
    .mansetyan img{
        vertical-align: middle;
        height: 170px;
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
        margin-right: 10px;
        border: 1px solid black;
        color: #777;
        height: 30px;
        padding: 5px;
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