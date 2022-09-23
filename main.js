const countries = ["USA", "Magyarország"];

const USAStates = [
  "Alabama (AL)",
  "Alaska (AK)",
  "Arizona (AZ)",
  "Arkansas (AR)",
  "California (CA)",
  "Colorado (CO)",
  "Connecticut (CT)",
  "Delaware (DE)",
  "Florida (FL)",
  "Georgia (GA)",
  "Hawaii (HI)",
  "Idaho (ID)",
  "Illinois (IL)",
  "Indiana (IN)",
  "Iowa (IA)",
  "Kansas (KS)",
  "Kentucky (KY)",
  "Louisiana (LA)",
  "Maine (ME)",
  "Maryland (MD)",
  "Massachusetts (MA)",
  "Michigan (MI)",
  "Minnesota (MN)",
  "Mississippi (MS)",
  "Missouri (MO)",
  "Montana (MT)",
  "Nebraska (NE)",
  "Nevada (NV)",
  "New Hampshire (NH)",
  "New Jersey (NJ)",
  "New Mexico (NM)",
  "New York (NY)",
  "North Carolina (NC)",
  "North Dakota (ND)",
  "Ohio (OH)",
  "Oklahoma (OK)",
  "Oregon (OR)",
  "Pennsylvania (PA)",
  "Rhode Island (RI)",
  "South Carolina (SC)",
  "South Dakota (SD)",
  "Tennessee (TN)",
  "Texas (TX)",
  "Utah (UT)",
  "Vermont (VT)",
  "Virginia (VA)",
  "Washington (WA)",
  "West Virginia (WV)",
  "Wisconsin (WI)",
  "Wyoming (WY)",
];

const HunCounties = [
  "Baranya",
  "Bács-Kiskun",
  "Békés",
  "Borsod-Abaúj-Zemplén",
  "Budapest",
  "Csongrád-Csanád",
  "Fejér |Győr-Moson-Sopron",
  "Hajdú-Bihar",
  "Heves",
  "Jász-Nagykun-Szolnok",
  "Komárom-Esztergom",
  "Nógrád",
  "Pest",
  "Somogy",
  "Szabolcs-Szatmár-Bereg",
  "Tolna",
  "Vas",
  "Veszprém",
  "Zala",
];

const countrySelection = document.querySelector(".country-select");
const territorySelection = document.querySelector(".territory-select");

const setSelectionOptions = (optionArray = [], targetElement) => {
  optionArray.forEach((item) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = item;
    targetElement.appendChild(optionElement);
  });
};

setSelectionOptions(countries, countrySelection);

if (countrySelection.value === "USA") {
  setSelectionOptions(USAStates, territorySelection);
} else {
  setSelectionOptions(HunCounties, territorySelection);
}

console.log(countrySelection.value);
