$(document).ready(function () {
    let x = 0;
    let s = "";

    console.log("Hello Pluralsight");



    let theForm = jQuery("#theForm");
    theForm.hide();

    let button = $("#buyButton");
    button.on('click', function () {
        console.log("Buying item");
    })

    let productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You click on " + $(this).text());
    });

    let $loginToggle = $("#loginToggle");
    let $popupForm = $(".popup-form");

    $loginToggle.on('click', function () {
        $popupForm.fadeToggle(500);
    });

});