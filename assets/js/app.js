$('.parentslider').slick({
    dots: false,
    infinite: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.parentslider2').slick({
    dots: false,
    infinite: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
const btnsub = document.querySelector(".btn-sub");
const btnadd = document.querySelector(".btn-add");
const number = document.querySelector(".number");

btnsub.addEventListener("click", function () {
    number.innerHTML = +number.innerHTML - 1;
});

btnadd.addEventListener("click", function () {
    number.innerHTML = +number.innerHTML + 1;
});
function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu_1").classList.toggle("cross")
}