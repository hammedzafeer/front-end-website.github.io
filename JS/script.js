let btn = document.getElementsByClassName("btn");
for (let i = 0; i < btn.length; i++) {
    // console.log(btn[i])
    let Btn = btn[i];
    Btn.addEventListener("mouseenter", BtnHover)
    Btn.addEventListener("mouseleave", BtnLeave)

}
function BtnHover(event) {
    console.log(event.target)
    let E = event.target;
    E.getElementsByClassName("btn-hover")[0].style.animationName = "btnHover";
    E.getElementsByClassName("btn-hover")[0].style.animationIterationCount = "infinite";
}

function BtnLeave(event) {
    console.log(event.target);
    let E = event.target;
    E.getElementsByClassName("btn-hover")[0].style.animationName = "btnLeave";
    E.getElementsByClassName("btn-hover")[0].style.animationIterationCount = "inherit";
}

// let navToggler = document.getElementsByClassName("nav-toggler")[1];
// navToggler.addEventListener("click", function() {
//     console.log("C")
//     document.getElementsByClassName("nav-menu")[0].style.display = "block";
// })

let nav_link = document.getElementsByClassName("nav-menu")[0].getElementsByTagName("a");
for (let i = 0; i < nav_link.length; i++) {
    let links = nav_link[i]
    links.addEventListener("click", NavMenu)
}
function NavMenu(event){
    let act = event.target;
    for (let i = 0; i < nav_link.length; i++) {
        nav_link[i].classList.remove("active");
    }
    act.classList.add("active")
    // console.log(event.target)
}



// let search = document.getElementById("Search");
// search.addEventListener("search", function() {
//     searchFunction()
// });

// function searchFunction() {
//     let searchVal = search.value.toUpperCase();
//     let header  = document.getElementsByTagName("section");
//     Array.from(header).forEach(function (element){
//         let P = element.getElementsByTagName("p")[0].innerHTML.toUpperCase()
//         if (P.includes(searchVal)) {
//             element.style.display = "block";
//             console.log(element)
//         }
//         else{
//             element.style.display = "none";
//         }
//         console.log(element)
//         // console.log(P)

//     })
//     // console.log(header)
//     // console.log(searchVal)
// }



$(document).ready(function () {


    // navbar bg change on scroll
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos >= 100) {
            $('nav').addClass('cng-navbar');
        }
        else {
            $('nav').removeClass('cng-navbar');
        }
    });

    $('#menu').click(function () {
        $('.nav-menu').slideToggle(400);
    })

    $('#search').click(function () {
        $('.search-container').slideToggle(400);
    })

    $('.testimonial-section .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})

