const button = document.querySelector(".btn");
const input = document.getElementById("country");
const flag = document.querySelector(".flag");
const map = new Map([["AD", "Andorra"], ["AE", "United Arab Emirates"], ["AF", "Afghanistan"], ["AG", "Antigua and Barbuda"], ["AI", "Anguilla"], ["AL", "Albania"], ["AM", "Armenia"], ["DE", "Germany"],
["AO", "Angola"], ["AQ", "Antarctica"], ["AR", "Argentina"], ["AS", "American Samoa"], ["AT", "Austria"], ["AU", "Australia"], ["AW", "Aruba"], ["AX", "Aland Islands"], ["AZ", "Azerbaijan"], ["BA", "Bosnia and Herzegovina"],
["BB", "Barbados"], ["BD", "Bangladesh"], ["BE", "Belgium"], ["BF", "Burkina Faso"], ["BG", "Bulgaria"], ["BH", "Bahrain"], ["BI", "Burundi"], ["BJ", "Benin"], ["BL", "Saint Barthelemy"], ["BM", "Bermuda"], ["BN", "Brunei Darussalam"], ["BO", "Bolivia"],
["BR", "Brazil"], ["BS", "Bahamas"],["BT", "Bhutan"],["BW", "Botswana"],["BY", "Belarus"],["BZ", "Belize"],["CA", "Canada"], ["CC", "Cocos Islands"], ["CD", "Democratic Republic of the Congo"], ["CG", "Congo"], ["CH", "Swizterland"],
["CI", "Cote d'Ivoire"], ["CK", "Cook Islands"], ["CL", "Chile"], ["CM", "Cameroon"], ["CN", "China"], ["CO", "Colombia"], ["CR", "Costa Rica"], ["CU", "Cuba"], ["CV", "Cabo Verde"], ["DE","Germany"], ["DJ", "Djibuti"], ["DK", "Denmark"], ["DM", "Dominica"],
    ["DO", "Dominican Republic"], ["DZ", "Algeria"], ["EC", "Ecuador"], ["EE", "Estonia"], ["EG", "Egypt"], ["EH", "Western Sahara"], ["ER", "Eritrea"], ["ES", "Spain"], ["ET", "Ethiopia"], ["FI", "Finland"], ["FJ", "Fiji"],
["FK", "Falkland Islands"], ["FM", "Micronesia"], ["FO", "Faroe Islands"], ["FR", "France"], ["GA", "Gabon"],["GB", "United Kingdom of Great Britain and Northern Ireland"], ["GD", "Grenada"],
["GE", "Georgia"], ["GG", "Guernsay"], ["GH", "Ghana"], ["GI", "Gibraltar"], ["GL", "Greenland"], ["GM", "Gambia"], ["GN", "Guinea"], ["GQ", "Equatorial Guinea"], ["GR", "Greece"], ["GS", "South Georgia and the South Sandwich Islands"], ["GT", "Guatemala"], ["GU", "Guam"], ["GW", "Guinea-Bissau"], ["GY", "Gyuana"], ["HK", "Hong Kong"], ["HN", "Honduras"],
["HR", "Croatia"], ["HT", "Haiti"], ["HU", "Hungary"], ["ID", "Indonesia"], ["IE", "Ireland"], ["IL", "Israel"], ["IM", "Isle of Man"], ["IN", "India"], ["IQ", "Iraq"], ["IR", "Iran"], ["IS", "Iceland"], ["IT", "Italy"], ["JE", "Jersey"], ["JM", "Jamaica"],
["JO", "Jordan"], ["JE", "Japan"], ["KE", "Kenya"], ["KG", "Kyrgyzstan"], ["KH", "Combodia"], ["KI", "Kiribati"], ["KM", "Comoros"], ["KN", "Saint Kitts and Nevis"], ["KP", "Korea"], ["KR", "South Korea"], ["KW", "Kuwait"], ["KY", "Caiman Islands"],
["KZ", "Kazakhstan"], ["LA", "Lao People's Democratic Republic"], ["LB", "Lebanon"], ["LC", "Saint Lucia"], ["LI", "Liechtenstein"], ["LK", "Sri Lanka"], ["LR", "Liberia"], ["LS", "Lesotho"],
["LT", "Lithuania"], ["LU", "Luxembourg"], ["LV", "Latvia"], ["LY", "Libya"], ["MA", "Morocco"], ["MC", "Monaco"], ["MD", "Republic of Moldova"], ["ME", "Montenegro"],["MF", "Saint Martin"],
["MG", "Madagascar"], ["MH", "Marshal Islands"], ["NK", "North Macedonia"], ["ML", "Mali"], ["MM", "Myanmar"], ["MN", "Mongolia"], ["MO", "Macao"],["MP", "Northern Mariana Islands"],
["MQ", "Martinique"], ["MR", "Mauritania"], ["MS", "Montserrat"], ["Malta"], ["MU", "Mauritius"], ["MV", "Maldives"], ["MW", "Malawi"], ["MX", "Mexico"], ["MY", "Malaysia"], ["MZ", "Mozambique"], ["NA", "Namibia"], ["NC", "New Caledonia"],
    ["NE", "Niger"], ["NF", "Norfolk Island"], ["NG", "Nigeria"], ["NI", "Nicaragua"],["NL", "Netherlands"],["NO", "Norway"], ["NP", "Nepal"], ["NR", "Nauru"], ["NU", "Niue"], ["NZ", "New Zealand"],
["OM", "Oman"], ["PA", "Panama"], ["PE", "Peru"], ["PF", "French Polynesia"], ["PG", "Papua New Guinea"], ["PH", "Philippines"], ["PK", "Pakistan"], ["PL", "Poland"], ["PN", "Pitcairn"],
["PR", "Puerto Rico"], ["PS", "State of Palestine"], ["PT", "Portugal"], ["PW", "Palau"], ["PY", "Paraguay"], ["QA", "Quatar"], ["RE", "Reunion"], ["RO", "Romania"], ["RS", "Serbia"], ["RU", "Russian Federation"],
["RW", "Rwanda"], ["SA", "Saudi Arabia"], ["SB", "Solomon Islands"], ["SC", "Seychelles"], ["SD", "Sudan"], ["SE", "Sweden"], ["SG", "Singapore"], ["SH", "Saint Helena"], ["SI", "Slovenia"],
["SL", "Sierra Leone"], ["SM", "San Marino"], ["SN", "Senegal"], ["SO", "Somalia"], ["SR", "Suriname"], ["SS", "South Sudan"], ["ST", "Sao Tome and Principe"], ["SV", "El Salvador"],
["SX", "Sint Maarten"], ["SY", "Syrian Arab Republic"], ["SZ", "Eswatini"], ["TC", "Turks and Caicos Islands"], ["TD", "Chad"], ["TF", "French Southern Territories"], ["TG", "Togo"],
    ["TH", "Thailand"], ["TJ", "Tajikistan"], ["TK", "Tokelau"], ["TL", "Timor-Leste"], ["TK", "Turkmenistan"], ["TN", "Tunisia"], ["TO", "Tonga"], ["TR", "Turkey"], ["TT", "Trinidad and Tobago"],
    ["TV", "Tuvalu"], ["TW", "Taiwan"], ["TZ", "Tanzania"], ["UA", "Ukraine"], ["UG", "Uganda"], ["US", "United States of America"], ["UY", "Uruguay"], ["UZ", "Uzbekistan"], ["VA", "Holy See"],
    ["VC", "Saint Vincent and Grenadines"], ["VE", "Venezuela"], ["VG", "Virgin Islands (British)"], ["VI", "Virgin Islands (U.S.)"], ["VN", "Viet Nam"], ["VU", "Vanuatu"], ["WF", "Wallis and Futuna"],
["WS", "Samoa"], ["YE", "Yemen"], ["YT", "Mayotte"], ["ZA", "South Africa"], ["ZM", "Zambia"], ["ZM", "Zimbabwe"]]);
const codes = Array.from(map.keys());
const feedback = document.querySelector(".feedback")
const source = "https://www.countryflagicons.com/FLAT/64/"
const ending = ".png"
const points = document.querySelector(".points");
let score = 0;
let flagCounter=1;
const over = document.querySelector(".over");

function getNewFlag() {
    input.value = "";
    const randomFlag = codes[Math.floor(Math.random() * codes.length)];
    const randomFlagTag = map.get(randomFlag);
    flag.innerHTML = `<img data-tag="${randomFlagTag}" src="${source}${randomFlag}${ending}" alt="flag">`
}

function handleWin() {
    alert(`Game over! Your score is ${score}`);
    score=0;
    flagCounter=0;
    points.innerText = `${score}/20`;
}

function evaluate() {
    const tag = input.value;
    let image = document.querySelector("img")
    if (tag === image.dataset.tag) {
        feedback.innerText = "Yay!"
        score++;
        points.innerText = `${score}/20`;
    } else {
        feedback.innerText = `Booo! Correct answer: ${image.dataset.tag}`;

    }
    flagCounter++;
    if (flagCounter===21) {
        handleWin();
    }
    over.innerText=`${flagCounter}`;
    getNewFlag();
}

button.addEventListener("click", evaluate);

function startGame() {
    getNewFlag();
}

startGame();