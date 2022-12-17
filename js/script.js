window.addEventListener("load", (event) => {

    fetch("data/logements.json").then((res) => res.json())
        .then((housing) => {

            let kasa_housing_selector = document.getElementById("kasa-housing");

            for (let i = 0; i < housing.length; i++) {

                let lodging = housing[i];

                let kasa_lodging_selector = document.createElement("a");
                kasa_lodging_selector.classList.add("lodging");
                kasa_lodging_selector.id = "kasa-lodging-" + lodging.id;
                kasa_lodging_selector.href = "accommodation-sheet.html?id=" + lodging.id;
                kasa_lodging_selector.style.background = "url('" + lodging.cover + "')";

                let kasa_lodging_details_selector = document.createElement("div");
                kasa_lodging_details_selector.classList.add("lodging-details");

                let kasa_lodging_title_selector = document.createElement("p");
                kasa_lodging_title_selector.innerText = lodging.title;

                kasa_lodging_details_selector.appendChild(kasa_lodging_title_selector);
                kasa_lodging_selector.appendChild(kasa_lodging_details_selector);
                kasa_housing_selector.appendChild(kasa_lodging_selector);

            }
        })
        .catch(error => {
            alert('Nous rencontrons un problème avec notre serveur. Veuillez réessayer plus tard. Si le problème persiste veuillez nous contacter.')
        });

});