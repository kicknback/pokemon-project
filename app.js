(function(){
    "use strict";

    let mainDiv = $("#main");
    let button = $("#but");

    button.click(function(){
        let randNum = Math.floor(Math.random() * 30);
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${randNum}/`,
            success: function (data) {
                console.log(data);
                let pokeDiv = document.createElement('div');
                $(pokeDiv).append(`
                <span><strong>${data.name}</strong></span> <p>Height: ${data.height}, Weight: ${data.weight}</p>
                `);
                $(mainDiv).append(pokeDiv);
            },
            error: function (data) {
                alert("There was an issue retrieving the pokemon data.  Please try again later.");
            }
        })
    })



})()