
function toggle_dropdown_main() {
    let dropdown = document.querySelector("#dropdownMenuMain");
    let isMainPresent = dropdown.classList.contains("hidden");
    let dropdown_minor1 = document.querySelector("#dropdown_minor_menu1");
    let isMainPresent1 = dropdown_minor1.classList.contains("hidden");
    let dropdown_minor2 = document.querySelector("#dropdown_minor_menu2");
    let isMainPresent2 = dropdown_minor2.classList.contains("hidden");
    let dropdown_minor3 = document.querySelector("#dropdown_minor_menu3");
    let isMainPresent3 = dropdown_minor3.classList.contains("hidden");
    let dropdown_minor4 = document.querySelector("#dropdown_minor_menu4");
    let isMainPresent4 = dropdown_minor4.classList.contains("hidden");
    let dropdown_minor1_1 = document.querySelector("#dropdown_minor_menu1_1");
    let isMainPresent1_1 = dropdown_minor1_1.classList.contains("hidden");
    let dropdown_minor1_2 = document.querySelector("#dropdown_minor_menu1_2");
    let isMainPresent1_2 = dropdown_minor1_2.classList.contains("hidden");
    let dropdown_minor1_3 = document.querySelector("#dropdown_minor_menu1_3");
    let isMainPresent1_3 = dropdown_minor1_3.classList.contains("hidden");
    let dropdown_minor1_4 = document.querySelector("#dropdown_minor_menu1_4");
    let isMainPresent1_4 = dropdown_minor1_4.classList.contains("hidden");
    let dropdown_minor1_5 = document.querySelector("#dropdown_minor_menu1_5");
    let isMainPresent1_5 = dropdown_minor1_5.classList.contains("hidden");
    if (isMainPresent && isMainPresent1 && isMainPresent2 && isMainPresent3 && isMainPresent4 && isMainPresent1_1 && isMainPresent1_2
        && isMainPresent1_3 && isMainPresent1_4 && isMainPresent1_5) {
        dropdown.classList.remove("hidden");
    }
    if (isMainPresent === false) {
        dropdown.classList.add("hidden");
    }
    if (isMainPresent1 === false) {
        dropdown_minor1.classList.add("hidden");
    }
    if (isMainPresent2 === false) {
        dropdown_minor2.classList.add("hidden");
    }
    if (isMainPresent3 === false) {
        dropdown_minor3.classList.add("hidden");
    }
    if (isMainPresent4 === false) {
        dropdown_minor4.classList.add("hidden");
    }
    if (isMainPresent1_1 === false) {
        dropdown_minor1_1.classList.add("hidden");
    }
    if (isMainPresent1_2 === false) {
        dropdown_minor1_2.classList.add("hidden");
    }
    if (isMainPresent1_3 === false) {
        dropdown_minor1_3.classList.add("hidden");
    }
    if (isMainPresent1_4 === false) {
        dropdown_minor1_4.classList.add("hidden");
    }
    if (isMainPresent1_5 === false) {
        dropdown_minor1_5.classList.add("hidden");
    }


}
function myFunction(x) {
    x.classList.toggle("change");
}

function toggle_dropdown_minor_menu1() {
    let dropdown = document.querySelector("#dropdownMenuMain");
    let dropdown_minor = document.querySelector("#dropdown_minor_menu1");
    let isMainPresent = dropdown_minor.classList.contains("hidden");
    if (isMainPresent) {
        dropdown_minor.classList.remove("hidden");
        dropdown.classList.add("hidden");
    } else {
        dropdown_minor.classList.add("hidden");
        dropdown.classList.remove("hidden");
    }
}
function toggle_dropdown_minor_menu2() {
    let dropdown = document.querySelector("#dropdownMenuMain");
    let dropdown_minor = document.querySelector("#dropdown_minor_menu2");
    let isMainPresent = dropdown_minor.classList.contains("hidden");
    if (isMainPresent) {
        dropdown_minor.classList.remove("hidden");
        dropdown.classList.add("hidden");
    } else {
        dropdown_minor.classList.add("hidden");
        dropdown.classList.remove("hidden");
    }
}

function toggle_dropdown_minor_menu3() {
    let dropdown = document.querySelector("#dropdownMenuMain");
    let dropdown_minor = document.querySelector("#dropdown_minor_menu3");
    let isMainPresent = dropdown_minor.classList.contains("hidden");
    if (isMainPresent) {
        dropdown_minor.classList.remove("hidden");
        dropdown.classList.add("hidden");
    } else {
        dropdown_minor.classList.add("hidden");
        dropdown.classList.remove("hidden");
    }
}

function toggle_dropdown_minor_menu4() {
    let dropdown = document.querySelector("#dropdownMenuMain");
    let dropdown_minor = document.querySelector("#dropdown_minor_menu4");
    let isMainPresent = dropdown_minor.classList.contains("hidden");
    if (isMainPresent) {
        dropdown_minor.classList.remove("hidden");
        dropdown.classList.add("hidden");
    } else {
        dropdown_minor.classList.add("hidden");
        dropdown.classList.remove("hidden");
    }
}

function toggle_dropdown_minor_menu1_1() {
    let dropdown = document.querySelector("#dropdown_minor_menu1");
    let dropdown_minor = document.querySelector("#dropdown_minor_menu1_1");
    let isMainPresent = dropdown_minor.classList.contains("hidden");
    if (isMainPresent) {
        dropdown_minor.classList.remove("hidden");
        dropdown.classList.add("hidden");
    } else {
        dropdown_minor.classList.add("hidden");
        dropdown.classList.remove("hidden");
    }
}
function toggle_dropdown_minor_menu1_2() {
    let dropdown = document.querySelector("#dropdown_minor_menu1");
    let dropdown_minor = document.querySelector("#dropdown_minor_menu1_2");
    let isMainPresent = dropdown_minor.classList.contains("hidden");
    if (isMainPresent) {
        dropdown_minor.classList.remove("hidden");
        dropdown.classList.add("hidden");
    } else {
        dropdown_minor.classList.add("hidden");
        dropdown.classList.remove("hidden");
    }
}
function toggle_dropdown_minor_menu1_3() {
    let dropdown = document.querySelector("#dropdown_minor_menu1");
    let dropdown_minor = document.querySelector("#dropdown_minor_menu1_3");
    let isMainPresent = dropdown_minor.classList.contains("hidden");
    if (isMainPresent) {
        dropdown_minor.classList.remove("hidden");
        dropdown.classList.add("hidden");
    } else {
        dropdown_minor.classList.add("hidden");
        dropdown.classList.remove("hidden");
    }
}
function toggle_dropdown_minor_menu1_4() {
    let dropdown = document.querySelector("#dropdown_minor_menu1");
    let dropdown_minor = document.querySelector("#dropdown_minor_menu1_4");
    let isMainPresent = dropdown_minor.classList.contains("hidden");
    if (isMainPresent) {
        dropdown_minor.classList.remove("hidden");
        dropdown.classList.add("hidden");
    } else {
        dropdown_minor.classList.add("hidden");
        dropdown.classList.remove("hidden");
    }
}
function toggle_dropdown_minor_menu1_5() {
    let dropdown = document.querySelector("#dropdown_minor_menu1");
    let dropdown_minor = document.querySelector("#dropdown_minor_menu1_5");
    let isMainPresent = dropdown_minor.classList.contains("hidden");
    if (isMainPresent) {
        dropdown_minor.classList.remove("hidden");
        dropdown.classList.add("hidden");
    } else {
        dropdown_minor.classList.add("hidden");
        dropdown.classList.remove("hidden");
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
showSlidesAuto();

function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlidesAuto, 6000); // Change image every 6 seconds
}
//************************************************************************************************** */
// blog & review 
var slideIndex_blog_review = 1;
showDivs(slideIndex_blog_review);

function plusDivs(n) {
    showDivs(slideIndex_blog_review += n);
}

function currentDivs(n) {
    showDivs(slideIndex_blog_review = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides_blog_review");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex_blog_review = 1 }
    if (n < 1) { slideIndex_blog_review = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    x[slideIndex_blog_review - 1].style.display = "block";
    dots[slideIndex_blog_review - 1].className += " w3-red";
}
function logIn() {
    let x = document.getElementById("log-in");
    let y = document.getElementById("bgLogIn");
    let z1 = document.querySelector("body");
    let isMainPresent = z1.classList.contains("overflow-hidden");
    if (isMainPresent) {
        z1.classList.remove("overflow-hidden");
        x.classList.add("hidden");
        y.classList.add("hidden");
    } else {
        z1.classList.add("overflow-hidden");
        x.classList.remove("hidden");
        y.classList.remove("hidden");
    }
}

function toggle_searchMobile() {
    let x = document.getElementById("searchMobile");
    let y = document.getElementById("navBarLeftSide");
    let z1 = document.getElementById("navBarRightSide");
    let isMainPresent = x.classList.contains("hidden");

    if (isMainPresent) {
        z1.classList.add("hidden");
        x.classList.remove("hidden");
        y.classList.add("hidden");
    } else {
        z1.classList.remove("hidden");
        x.classList.add("hidden");
        y.classList.remove("hidden");
    }
}

function changeImageSource(product_image_Id, newSrc) {
    const img = document.getElementById(product_image_Id);
    if (img) {
        img.src = newSrc;
    }
}

function colorTitaniumBlack() {
    let x = document.getElementById("colorTitaniumBlack");
    let y = document.getElementById("colorTitaniumSilverblue");
    let z = document.getElementById("focusColorTitaniumBlack");
    let z1 = document.getElementById("focusColorTitaniumSilverblue");
    // let z1 = document.querySelector("body");
    let isMainPresent = x.classList.contains("hidden");
    let isMainPresent1 = y.classList.contains("hidden");
    // let z2 = z1.classList.contains("overflow-hidden");
    //  if (isMainPresent) {
    if (isMainPresent) {
        x.classList.remove("hidden");
        z.classList.add("border-black");
        changeImageSource("product-image1", "https://media-cdn.bnn.in.th/460544/samsung-galaxy-s25-ultra-12256-titanium-black-5g-8-square_medium.jpg");
        changeImageSource("product-image2", "https://media-cdn.bnn.in.th/460538/samsung-galaxy-s25-ultra-12256-titanium-black-5g-2-square_medium.jpg");
        changeImageSource("product-image3", "https://media-cdn.bnn.in.th/460539/samsung-galaxy-s25-ultra-12256-titanium-black-5g-3-square_medium.jpg");
        changeImageSource("product-image4", "https://media-cdn.bnn.in.th/460540/samsung-galaxy-s25-ultra-12256-titanium-black-5g-4-square_medium.jpg");
        changeImageSource("product-image5", "https://media-cdn.bnn.in.th/460541/samsung-galaxy-s25-ultra-12256-titanium-black-5g-5-square_medium.jpg");
        changeImageSource("product-image6", "https://media-cdn.bnn.in.th/460543/samsung-galaxy-s25-ultra-12256-titanium-black-5g-7-square_medium.jpg");
        changeImageSource("product-image1_1", "https://media-cdn.bnn.in.th/460544/samsung-galaxy-s25-ultra-12256-titanium-black-5g-8-square_medium.jpg");
        changeImageSource("product-image1_2", "https://media-cdn.bnn.in.th/460538/samsung-galaxy-s25-ultra-12256-titanium-black-5g-2-square_medium.jpg");
        changeImageSource("product-image1_3", "https://media-cdn.bnn.in.th/460539/samsung-galaxy-s25-ultra-12256-titanium-black-5g-3-square_medium.jpg");
        changeImageSource("product-image1_4", "https://media-cdn.bnn.in.th/460540/samsung-galaxy-s25-ultra-12256-titanium-black-5g-4-square_medium.jpg");
        changeImageSource("product-image1_5", "https://media-cdn.bnn.in.th/460541/samsung-galaxy-s25-ultra-12256-titanium-black-5g-5-square_medium.jpg");
        changeImageSource("product-image1_6", "https://media-cdn.bnn.in.th/460543/samsung-galaxy-s25-ultra-12256-titanium-black-5g-7-square_medium.jpg");
    }
    if (isMainPresent1) {

    } else {
        y.classList.add("hidden");
        z1.classList.remove("border-black");
    }
    toggle_add_to_cart()
}
function colorTitaniumSilverblue() {
    let x = document.getElementById("colorTitaniumBlack");
    let y = document.getElementById("colorTitaniumSilverblue");
    let z = document.getElementById("focusColorTitaniumBlack");
    let z1 = document.getElementById("focusColorTitaniumSilverblue");
    // let z1 = document.querySelector("body");
    let isMainPresent = y.classList.contains("hidden");
    let isMainPresent1 = x.classList.contains("hidden");
    // let z2 = z1.classList.contains("overflow-hidden");
    //  if (isMainPresent) {
    if (isMainPresent) {
        y.classList.remove("hidden");
        z1.classList.add("border-black");
        changeImageSource("product-image1", "https://media-cdn.bnn.in.th/460570/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-10-square_medium.jpg");
        changeImageSource("product-image2", "https://media-cdn.bnn.in.th/460557/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-2-square_medium.jpg");
        changeImageSource("product-image3", "https://media-cdn.bnn.in.th/460558/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-3-square_medium.jpg");
        changeImageSource("product-image4", "https://media-cdn.bnn.in.th/460559/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-4-square_medium.jpg");
        changeImageSource("product-image5", "https://media-cdn.bnn.in.th/460560/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-5-square_medium.jpg");
        changeImageSource("product-image6", "https://media-cdn.bnn.in.th/460563/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-8-square_medium.jpg");
        changeImageSource("product-image1_1", "https://media-cdn.bnn.in.th/460570/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-10-square_medium.jpg");
        changeImageSource("product-image1_2", "https://media-cdn.bnn.in.th/460557/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-2-square_medium.jpg");
        changeImageSource("product-image1_3", "https://media-cdn.bnn.in.th/460558/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-3-square_medium.jpg");
        changeImageSource("product-image1_4", "https://media-cdn.bnn.in.th/460559/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-4-square_medium.jpg");
        changeImageSource("product-image1_5", "https://media-cdn.bnn.in.th/460560/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-5-square_medium.jpg");
        changeImageSource("product-image1_6", "https://media-cdn.bnn.in.th/460563/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-8-square_medium.jpg");
    }
    if (isMainPresent1) {

    } else {
        x.classList.add("hidden");
        z.classList.remove("border-black");
    }
    toggle_add_to_cart()
}

function Capacity12_512GB() {
    let x = document.getElementById("Capacity12+512GB");
    let y = document.getElementById("Capacity12+256GB");
    let isMainPresent = x.classList.contains("border-black");
    let isMainPresent1 = y.classList.contains("border-black");

    if (isMainPresent) {

    } else {
        x.classList.add("border-black");
    }
    if (isMainPresent1) {
        y.classList.remove("border-black");
    } else {

    }
    toggle_add_to_cart()
}

function Capacity12_256GB() {
    let x = document.getElementById("Capacity12+512GB");
    let y = document.getElementById("Capacity12+256GB");
    let isMainPresent = x.classList.contains("border-black");
    let isMainPresent1 = y.classList.contains("border-black");

    if (isMainPresent) {

        x.classList.remove("border-black");
    } else {

    }
    if (isMainPresent1) {

    } else {
        y.classList.add("border-black");
    }
    toggle_add_to_cart()
}

//ปุ่มหยิบใหส่ตะกร้าสินค้า 
function toggle_add_to_cart() {
    let x = document.getElementById("Capacity12+512GB");
    let y = document.getElementById("Capacity12+256GB");
    let z = document.getElementById("colorTitaniumBlack");
    let z1 = document.getElementById("colorTitaniumSilverblue");
    let z2 = document.getElementById("Samsung_Galaxy_S25_Ultra_12_512_Titanium_Black");
    let z3 = document.getElementById("Samsung_Galaxy_S25_Ultra_12_512_Titanium_Silverblue");
    let z4 = document.getElementById("Samsung_Galaxy_S25_Ultra_12_256_Titanium_Black");
    let z5 = document.getElementById("Samsung_Galaxy_S25_Ultra_12_256_Titanium_Silverblue");
    // 512
    let isMainPresent = x.classList.contains("border-black");
    // 256
    let isMainPresent1 = y.classList.contains("border-black");
    //  TitaniumSilverblue (TitaniumBlack ถูกซ้อน)
    let isMainPresent2 = z.classList.contains("hidden");
    //  TitaniumBlack (TitaniumSilverblue ถูกซ้อน)
    let isMainPresent3 = z1.classList.contains("hidden");
    // let z2 = z1.classList.contains("overflow-hidden");

    // 512 
    if (isMainPresent) {
        // black
        if (isMainPresent3) {
            // black
            z2.classList.remove("hidden");
            z2.classList.add("flex");

            z3.classList.add("hidden");
            z3.classList.remove("flex");

            z4.classList.add("hidden");
            z4.classList.remove("flex");

            z5.classList.add("hidden");
            z5.classList.remove("flex");
            // Silver
        } else {
            z3.classList.remove("hidden");
            z3.classList.add("flex");

            z2.classList.add("hidden");
            z2.classList.remove("flex");

            z4.classList.add("hidden");
            z4.classList.remove("flex");

            z5.classList.add("hidden");
            z5.classList.remove("flex");
        }
        // 256
    } else {
        if (isMainPresent3) {
            // black
            z4.classList.remove("hidden");
            z4.classList.add("flex");

            z3.classList.add("hidden");
            z3.classList.remove("flex");

            z2.classList.add("hidden");
            z2.classList.remove("flex");

            z5.classList.add("hidden");
            z5.classList.remove("flex");
            // Silver
        } else {
            z5.classList.remove("hidden");
            z5.classList.add("flex");

            z2.classList.add("hidden");
            z2.classList.remove("flex");

            z4.classList.add("hidden");
            z4.classList.remove("flex");

            z3.classList.add("hidden");
            z3.classList.remove("flex");
        }

    }
}

function overallDetailsbar() {
    let x = document.getElementById("overall");
    let y = document.getElementById("feature");
    let z = document.getElementById("productDetails");
    let isMainPresent = x.classList.contains("border-b-[2px] border-yellow-500 font-semibold");
    let isMainPresent1 = y.classList.contains("border-b-[2px] border-yellow-500 font-semibold");
    let isMainPresent2 = z.classList.contains("border-b-[2px] border-yellow-500 font-semibold");
    if (isMainPresent) {

    } else {
        x.classList.add("border-b-[2px]");
        x.classList.add("border-yellow-500");
        x.classList.add("font-semibold");
        y.classList.remove("border-b-[2px]");
        y.classList.remove("border-yellow-500");
        y.classList.remove("font-semibold");
        z.classList.remove("border-b-[2px]");
        z.classList.remove("border-yellow-500");
        z.classList.remove("font-semibold");
    }
}
function featureDetailsbar() {
    let x = document.getElementById("overall");
    let y = document.getElementById("feature");
    let z = document.getElementById("productDetails");
    let isMainPresent = x.classList.contains("border-b-[2px] border-yellow-500 font-semibold");
    let isMainPresent1 = y.classList.contains("border-b-[2px] border-yellow-500 font-semibold");
    let isMainPresent2 = z.classList.contains("border-b-[2px] border-yellow-500 font-semibold");
    if (isMainPresent1) {

    } else {
        x.classList.remove("border-b-[2px]");
        x.classList.remove("border-yellow-500");
        x.classList.remove("font-semibold");
        y.classList.add("border-b-[2px]");
        y.classList.add("border-yellow-500");
        y.classList.add("font-semibold");
        z.classList.remove("border-b-[2px]");
        z.classList.remove("border-yellow-500");
        z.classList.remove("font-semibold");
    }
}
function productDetailsDetailsbar() {
    let x = document.getElementById("overall");
    let y = document.getElementById("feature");
    let z = document.getElementById("productDetails");
    let isMainPresent = x.classList.contains("border-b-[2px] border-yellow-500 font-semibold");
    let isMainPresent1 = y.classList.contains("border-b-[2px] border-yellow-500 font-semibold");
    let isMainPresent2 = z.classList.contains("border-b-[2px] border-yellow-500 font-semibold");
    if (isMainPresent2) {

    } else {
        x.classList.remove("border-b-[2px]");
        x.classList.remove("border-yellow-500");
        x.classList.remove("font-semibold");
        y.classList.remove("border-b-[2px]");
        y.classList.remove("border-yellow-500");
        y.classList.remove("font-semibold");
        z.classList.add("border-b-[2px]");
        z.classList.add("border-yellow-500");
        z.classList.add("font-semibold");
    }
}












