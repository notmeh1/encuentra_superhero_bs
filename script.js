"use strict";

const heroInput = $("#input");
const heroSubmit = $("#submit");
const heroInfo = $("#hero-data");
const heroError = $("#heroError");

heroSubmit.click(function (event) {
  event.preventDefault();
  /*  "verificación de input alternativa"
    if (heroInput.val() > 731) {
      heroError.html("El ID está fuera de rango");
    } else if (heroInput.val() == 0) {
      heroError.html("Ingrese un ID válido");
    } else {
    }
  */
  console.log(heroInput.val());
  heroInput.submit();
  fetchHeroData();
});

function fetchHeroData() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url:
      `https://www.superheroapi.com/api.php/1104494366627102/` +
      $("#input").val(),
    success: function (data) {
      if (data.response === "success"){
        heroPrint(data)
        console.log("SUCCESS")
    } else {
      heroError.html("Ingrese un ID válido");
      console.log("ERROR")
    }
  },
  // error:
  });
}

function heroPrint(data) {
  const heroImage = $("#heroImage");
  const heroName = $("#heroName");
  const heroGroupAffiliation = $("#group_affiliation");
  const heroPublisher = $("#publisher");
  const heroOccupation = $("#occupation");
  const heroFirstAppearance = $("#first_appearance");
  const heroHeight = $("#height");
  const heroWeight = $("#weight");
  const heroAliases = $("#aliases");
  heroImage.attr("src", data.image.url);
  heroName.html(`Nombre: ${data.name}`);
  heroGroupAffiliation.html(
    `Conexiones: ${data.connections["group-affiliation"]}`
  );
  heroPublisher.html(`Publicado por: ${data.biography.publisher}`);
  heroOccupation.html(`Ocupación: ${data.work.occupation}`);
  heroFirstAppearance.html(
    `Primera Aparición: ${data.biography["first-appearance"]}`
  );
  heroHeight.html(`Altura: ${data.appearance.height.join(" - ")}`);
  heroWeight.html(`Peso: ${data.appearance.weight.join(" - ")}`);
  heroAliases.html(`Alianzas: ${data.biography.aliases.join(", ")}`);
  }
 