window.addEventListener("load", (event) => {

    let loader_selector = document.getElementsByClassName("loader");

    loader_selector[0].classList.add("hide");

    let card_head_selectors = document.getElementsByClassName("card-head");

    show_hide_card(card_head_selectors);

    show_first_card(card_head_selectors);

    function show_hide_card(card_head_selectors) {
        for (let i = 0; i < card_head_selectors.length; i++) {
            card_head_selectors[i].addEventListener("click", function (e) {
                e.preventDefault();
                let card_selector = card_head_selectors[i].parentNode;
                let card_body_selector = card_selector.lastElementChild;
                if (card_body_selector.style.display === "none") {
                    card_body_selector.style.display = "block";
                } else {
                    card_body_selector.style.display = "none";
                }
            });
        }
    }

    function show_first_card(card_head_selectors) {
        if (card_head_selectors.length > 2) {
            for (let i = 0; i < card_head_selectors.length; i++) {
                if (i > 0) {
                    card_head_selectors[i].click();
                }
            }
        }
    }

    function get_housing() {
        let housing = [];
        fetch("data/logements.json").then((res) => res.json())
            .then((data) => {
                housing = data;

            })
            .catch(error => {
                alert('Nous rencontrons un problème avec notre serveur. Veuillez réessayer plus tard. Si le problème persiste veuillez nous contacter.')
            });
        return housing;
    }

});

window.addEventListener("beforeunload", function (e) {

    let loader_selector = document.getElementsByClassName("loader");

    loader_selector[0].classList.remove("hide");

    loader_selector[0].classList.add("show");

});