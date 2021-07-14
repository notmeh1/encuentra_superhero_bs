"use strict"

const heroInput = $("#input")
const heroSubmit = $("#submit")
const heroInfo = $("#hero-data")

$("#submit").click(function(event) {
    event.preventDefault();
    $("#input").submit()
    $.ajax({
        type : 'GET',
        dataType : 'json',
        url : `https://www.superheroapi.com/api.php/1104494366627102/`+ $("#input").val(),
        success: function(data) {
            $("hero-data").text(data)
            const dataReady = JSON.stringify(data)
            console.log(dataReady)
            $("#hero-data").html (dataReady)
        }
    })
    console.log($("input").val())
})