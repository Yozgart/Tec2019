// Botones para los inputs
let $tbody = document.querySelector("tbody");
let $dateInput = document.querySelector("#date");
let $cityInput = document.querySelector("#city");
let $stateInput = document.querySelector("#state");
let $countryInput = document.querySelector("#country");
let $shapeInput = document.querySelector("#shape");
let $searchButton = document.querySelector("#search");

// Listener / handleSearchClick
$searchButton.addEventListener("click", handleSearchClick);

// Dataset UFO
let ufoData = dataSet;

// ufoData
function renderTable() {
    $tbody.innerHTML = "";
    for (let i = 0; i < ufoData.length; i++) {
        let info = ufoData[i];
        let fields = Object.keys(info);
        let $row = $tbody.insertRow(i);
        for (let j = 0; j < fields.length; j++) {
            let field = fields[j];
            let $cell = $row.insertCell(j);
            $cell.innerText = info[field];
        }
    }
}

function handleSearchClick() {
    let filterDate = $dateInput.value.trim();
    let filterCity = $cityInput.value.trim().toLowerCase();
    let filterState = $stateInput.value.trim().toLowerCase();
    let filterCountry = $countryInput.value.trim().toLowerCase();
    let filterShape = $shapeInput.value.trim().toLowerCase();

    ufoData = dataSet.filter(function(ufoSighting) {
        let searchDate = ufoSighting.datetime;
        let searchCity = ufoSighting.city.toLowerCase();
        let searchState = ufoSighting.state.toLowerCase();
        let searchCountry = ufoSighting.country.toLowerCase();
        let searchShape = ufoSighting.shape.toLowerCase();

        if (
            (searchDate === filterDate || filterDate === "") &&
            (searchCity === filterCity || filterCity === "") &&
            (searchState === filterState || filterState === "") &&
            (searchCountry === filterCountry || filterCountry === "") &&
            (searchShape === filterShape || filterShape === "")
        ) {
            return true;
        }
        return false;
    });
    renderTable();

    // Limpieza de campos
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
}

// Render por primera vez
renderTable();