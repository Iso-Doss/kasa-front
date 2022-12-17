window.addEventListener("load", (event) => {

    let url_param = new URLSearchParams(window.location.search);

    let id = url_param.get("id");

    let kasa_slider_image_index = 1;

    show_kasa_slider_image(kasa_slider_image_index);

    document.getElementById("kasa-slider-prev").addEventListener("click", function (e) {
        e.preventDefault();
        kasa_slider_image_index -= 1;
        show_kasa_slider_image(kasa_slider_image_index);
    });

    document.getElementById("kasa-slider-next").addEventListener("click", function (e) {
        e.preventDefault();
        kasa_slider_image_index += 1;
        show_kasa_slider_image(kasa_slider_image_index);
    });

    function show_kasa_slider_image(index) {
        let i;
        let kasa_slider_image_selector = document.getElementsByClassName("kasa-slider-image");
        let kasa_slider_dot_image_selector = document.getElementsByClassName("kasa-slider-dot-image");
        if (index > kasa_slider_image_selector.length) {
            kasa_slider_image_index = 1
        }
        if (index < 1) {
            kasa_slider_image_index = kasa_slider_image_selector.length
        }
        for (i = 0; i < kasa_slider_image_selector.length; i++) {
            kasa_slider_image_selector[i].style.display = "none";
            kasa_slider_dot_image_selector[i].classList.remove("active");
        }
        kasa_slider_image_selector[kasa_slider_image_index - 1].style.display = "block";
        kasa_slider_dot_image_selector[kasa_slider_image_index - 1].classList.add("active");
        document.getElementById("kasa-slider-min-image").innerText = kasa_slider_image_index;
    }

    let kasa_slider_dot_image_selector = document.getElementsByClassName("kasa-slider-dot-image");

    for (let i = 0; i < kasa_slider_dot_image_selector.length; i++) {
        kasa_slider_dot_image_selector[i].addEventListener("click", function (e) {
            e.preventDefault();
            kasa_slider_image_index = i + 1;
            show_kasa_slider_image(kasa_slider_image_index);
        });
    }

});