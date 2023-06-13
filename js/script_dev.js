document.getElementById("form-register").addEventListener("submit", function(event) {
    event.preventDefault();

    var platform = document.getElementById("platform").value;
    var projectSize = document.getElementById("projectSize").value;
    var responseTime = document.getElementById("responseTime").value;
    var scalability = document.getElementById("scalability").value;
    var availability = document.getElementById("availability").value;

    fetch("/js/data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var frontendMatches = [];
        var backendMatches = [];

        for (var i = 0; i < data.length; i++) {
          if ((platform === "Web" && data[i].Web === "Oui") ||
              (platform === "Mobile" && data[i].Mobile === "Oui") ||
              (platform === "Desktop" && data[i].Desktop === "Oui")) {
            if (data[i]["Taille du projet"] === projectSize &&
                data[i]["Temps de réponse court"] === responseTime &&
                data[i].Scalabilité === scalability &&
                data[i]["Haute disponibilité"] === availability) {
              if (data[i]["Back/Front"] === "Front") {
                frontendMatches.push(data[i].Framework);
              } else if (data[i]["Back/Front"] === "Back") {
                backendMatches.push(data[i].Framework);
              }
            }
          }
        }

        // Sélectionner une technologie front-end
        var frontendResult = "";
        if (frontendMatches.length > 0) {
          frontendResult = " " + frontendMatches.join(", ");
        } else {
          frontendResult = "Aucune technologie Front-end recommandée trouvée";
        }

        // Sélectionner une technologie back-end
        var backendResult = "";
        if (backendMatches.length > 0) {
          backendResult = "" + backendMatches.join(", ");
        } else {
          backendResult = "Aucune technologie Back-end recommandée trouvée";
        }

        // Si seulement une recommandation est trouvée, associer une recommandation supplémentaire
        if (frontendMatches.length === 1 && backendMatches.length === 0) {
          backendResult = " Laravel";
        } else if (frontendMatches.length === 0 && backendMatches.length === 1) {
          frontendResult = "ionic , angular";
        }

        if (frontendMatches.length === 0 && backendMatches.length === 0) {
          backendResult = "Laravel, Symfony";
          frontendResult = " ionic , angular";
        } 
        if (backendResult == "Aucune technologie Back-end recommandée trouvée"){
          backendResult = "Laravel"
        }

        document.getElementById("frontendResult").textContent = frontendResult;
        document.getElementById("backendResult").textContent = backendResult;
      });
  });