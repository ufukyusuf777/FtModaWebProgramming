<template>
    <div class="row">
        <div class="kapsa">
            <div class="footer">
                <div class="foo1 left">

                    <ul>
                        <li><h3><strong>Chekich</strong></h3></li>
                        <li><i class="fa fa-chevron-right"></i> Hakkımızda</li>
                        <li><i class="fa fa-chevron-right"></i> Müşteri Memnuniyeti</li>
                        <li><i class="fa fa-chevron-right"></i> Ödeme Seçenekleri</li>
                        <li><i class="fa fa-chevron-right"></i> İletişim Bilgilerimiz </li>
                        <li><i class="fa fa-chevron-right"></i> Komisyonlu Satış</li>
                    </ul>
                </div>
                <div class="foo2 foo1 left">

                    <ul>
                        <li>
                            <h3>Yardım</h3>
                        </li>
                        <li><i class="fa fa-chevron-right"></i> Sıkça Sorulan Sorular</li>
                        <li><i class="fa fa-chevron-right"></i> Satış Sözleşmesi</li>
                        <li><i class="fa fa-chevron-right"></i> Gizlilik İlkeleri</li>
                        <li><i class="fa fa-chevron-right"></i> Teslimat bilgileri</li>

                    </ul>
                </div>
                <div class="foo3 left">
                    <h3>E-Bültenimize Kayıt Olun!</h3>
                    <p>Yeni gelen ürünlerimiz ve kampanyalarımızdan faydalanabilmek için sizde haber bültenimize üye olun.
                    </p>
                    <form action="" method="post">

                        <div class="formlar">
                            <input type="text" placeholder="Adınız">
                            <input type="text" placeholder="Soyadınız">
                        </div>


                    </form>
                    <div class="eposta">
                        <input type="text" placeholder="E-posta adresi:">
                        <button class="kayitol" type="submit">Kayıt Ol</button>
                    </div>
                </div>
                <div class="foo4 left">
                    <h3>Bizi Takip Edin!</h3>
                    <ul class="sosyalmedya">
                        <li><i class="fa fa-facebook"></i></li>
                        <li><i class="fa fa-instagram"></i></li>
                        <li><i class="fa fa-twitter"></i></li>
                        <li><i class="fa fa-youtube"></i></li>
                        <li><i class="fa fa-pinterest"></i></li>
                    </ul>
                    <div class="Siparisim">

                        <button> <i class="fa fa-truck"></i> Siparişim Nerede?</button>
                    </div>

                </div>
            </div>
            <div class="footer-bottom">
                <span style="margin-left: 15px">Bu Site Web Programlama Ödevi İçin Hazırlanmıştır</span>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: "Footer"
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
        width: 1140px;
        height: 220px;
        margin-top: 40px;
        background: grey;
    }
    .footer-bottom{
        height: 40px;
        background: rgb(45, 45, 44);
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
        text-align: left;
        font-size: 12px;

    }
    .footer{
    background: rgb(51, 50, 50);
    }
    .footer div{
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