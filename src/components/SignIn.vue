<template>
    <div>

        <div align="left" style="border: 0.5px solid grey; padding: 20px;width: 360px">
            <h4> KAYITLI MÜŞTERİYİM </h4>
            <form action="/uyelik/giris-yap" id="LoginForm" method="post" novalidate="novalidate"><div class="validation-summary-valid" data-valmsg-summary="true"><ul><li style="display:none"></li>
            </ul></div>                <div class="user-form">
                <div>
                    <div class="fieldSet">
                        <div class="fieldSet-label fs-3"> Ad Soyad </div>
                        <div class="fieldSet-value fs-9">
                            <input class="field" id="User_Email" name="User_Email" type="text" value="">
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="fieldSet">
                        <div class="fieldSet-label fs-3"> Telefon </div>
                        <div class="fieldSet-value fs-9">
                            <input class="field" id="User_Password" name="User_Password" type="password" value="">
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="fieldSet">
                        <div class="fieldSet-label fs-3"> E-posta adresi </div>
                        <div class="fieldSet-value fs-9">
                            <input class="field" id="User_Password" name="User_Password" type="password" value="">
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="fieldSet">
                        <div class="fieldSet-label fs-3"> Şifre </div>
                        <div class="fieldSet-value fs-9">
                            <input class="field" id="User_Password" name="User_Password" type="password" value="">
                        </div>
                        <div class="clear"></div>
                    </div>


                    <div class="fieldSet" style="margin-top: 10px">
                        <a class="favori arkaplan" style="color: white">Giriş Yap</a>
                        <button type="button" class="favori" style="background:royalblue; color: white; padding: 4px " onclick="Facebook.Login()">
                            Facebook ile Giriş Yap
                        </button>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            </form>       </div>

    </div>
</template>

<script>
    export default {
        name: "SıgnUp"
    }
</script>

<style scoped>
    .favori{
        margin-right: 10px;
        border: 1px solid black;
        color: #777;
        height: 30px;
        padding: 5px;
    }
    .arkaplan{
        background-color: orangered;

    }

</style>