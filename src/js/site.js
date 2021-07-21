$(document).ready(function () {
    function circle() {
        let brand = $('.brand');
        brand.css({'height': brand.width() +'px'});
    }
    circle();
    $(window).resize(circle);

    $('.plot-bar').mouseover(function (e) {
        let children = $(this).children('*');
        let date = $(children[0]).html();
        let time = $(children[1]).html();
        let test = $(children[2]).html();

        let div = $(`<div class='label' style='top:${e.pageY - 150}; left:${e.pageX - 40}'></div`);
        div.append(`<p>${date}</p>`);
        div.append(`<p>${time}</p>`);
        div.append(`<p>${test}</p>`);
        $('body').append(div);
    });
    $('.plot-bar').mouseout(function () {
        $('.label').remove();
    });

    $('#slider img').click(function () {
        $('#slider img').removeClass('selected');
        $(this).addClass('selected');
    });
});

let slider = document.getElementById("range");
let output = document.getElementById("slider-number");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile-img')
                .attr('src', e.target.result)
        };

        reader.readAsDataURL(input.files[0]);
    }
}