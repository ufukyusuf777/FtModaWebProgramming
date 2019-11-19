<template>

    <badger-accordion>
        <badger-accordion-item>
            <a slot="header">İade politikanız nedir?</a>
            <template slot="content">• İade süresi elinize ulaştığından itibaren 15 gündür.

                • Ürünlerinizin iade durumunda ki kargo ücreti size aittir.

                • Ürünler kullanılmış, yıpranmış, yıkanmış bir şekilde bize ulaşırsa size geri göndermek zorunda kalabiliriz. Bu durumda ücret iadesi yapılmaz.</template>
        </badger-accordion-item>

        <badger-accordion-item>
            <template slot="header">İade/İptal ettiğim ürünün ücret iadesi ne zaman yapılacak?</template>
            <template slot="content">• İptal ettiğiniz bir siparişin ücret iade işlemleri 2 iş günü içerisinde tamamlanır.

                • İade edilen ürün süreci aşağıdaki gibidir:

                o Ürün bize ulaştıktan sonra iade şartlarına uygunluğu kontrol edilir.

                o Ürün iade şartlarına uygunsa 2-10 gün içerisinde iade süreci tamamlanır.

                o Ürün iade şartlarına uygun değilse adresinize geri gönderilir.

                • Ayrıca iptal veya iadeniz tamamlanınca üyelik e-mailinize veya telefon numaranıza bir bilgilendirme mesajı gönderilir.

                • Bu mesajı aldıysanız bankanıza ftmoda tarafından ücret iadesi yapılmış demektir.

                • "Hesabım" bölümünde yer alan ''Siparişlerim'' sekmesindeki sipariş numaranızla bankanızdan iade kontrolü yapabilirsiniz.

                • İade edilen tutarın kartınıza yansıma süresi bankanıza bağlıdır. Kredi kartı ile ödeme yaptıysanız genelde bir kaç günde yansır. Banka kartlarında ise iadenin hesabınıza yansıma süresi daha uzundur.</template>
        </badger-accordion-item>
    </badger-accordion>

</template>

<script>
    import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion';

    export default {
        name: "Sss",
        components: {
            BadgerAccordion,
            BadgerAccordionItem
        }

    }

</script>

<style scoped>

</style>