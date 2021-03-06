import React, { useState } from "react";
import "./App.css";
import "./search.css";
import "bootstrap/dist/css/bootstrap.css";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Search() {
  const [forecast, setForecast] = useState("");
  const [location, setLocation] = useState("");

  const items = [
    {
      country: "Afghanistan",
      name: "Kabul,af",
    },
    {
      country: "Albania",
      name: "Tirana,al",
    },
    {
      country: "Algeria",
      name: "Alger,dz",
    },
    {
      country: "American Samoa",
      name: "Fagatogo,as",
    },
    {
      country: "Andorra",
      name: "Andorra la Vella,ad",
    },
    {
      country: "Angola",
      name: "Luanda,ao",
    },
    {
      country: "Anguilla",
      name: "The Valley,ai",
    },
    {
      country: "Antarctica",
      name: null,
    },
    {
      country: "Antigua and Barbuda",
      name: "Saint John's,ag",
    },
    {
      country: "Argentina",
      name: "Buenos Aires,ar",
    },
    {
      country: "Armenia",
      name: "Yerevan,am",
    },
    {
      country: "Aruba",
      name: "Oranjestad,aw",
    },
    {
      country: "Australia",
      name: "Canberra,au",
    },
    {
      country: "Austria",
      name: "Wien,at",
    },
    {
      country: "Azerbaijan",
      name: "Baku,az",
    },
    {
      country: "Bahamas",
      name: "Nassau,bs",
    },
    {
      country: "Bahrain",
      name: "al-Manama,bh",
    },
    {
      country: "Bangladesh",
      name: "Dhaka,bd",
    },
    {
      country: "Barbados",
      name: "Bridgetown,bb",
    },
    {
      country: "Belarus",
      name: "Minsk,by",
    },
    {
      country: "Belgium",
      name: "Bruxelles [Brussel],be",
    },
    {
      country: "Belize",
      name: "Belmopan,bz",
    },
    {
      country: "Benin",
      name: "Porto-Novo,bj",
    },
    {
      country: "Bermuda",
      name: "Hamilton,bm",
    },
    {
      country: "Bhutan",
      name: "Thimphu,bt",
    },
    {
      country: "Bolivia",
      name: "La Paz,bo",
    },
    {
      country: "Bosnia and Herzegovina",
      name: "Sarajevo,ba",
    },
    {
      country: "Botswana",
      name: "Gaborone,bw",
    },
    {
      country: "Bouvet Island",
      name: null,
    },
    {
      country: "Brazil",
      name: "Brasília,br",
    },
    {
      country: "British Indian Ocean Territory",
      name: null,
    },
    {
      country: "Brunei",
      name: "Bandar Seri Begawan,bn",
    },
    {
      country: "Bulgaria",
      name: "Sofia,bg",
    },
    {
      country: "Burkina Faso",
      name: "Ouagadougou,bf",
    },
    {
      country: "Burundi",
      name: "Bujumbura,bi",
    },
    {
      country: "Cambodia",
      name: "Phnom Penh,hk",
    },
    {
      country: "Cameroon",
      name: "Yaound,cm",
    },
    {
      country: "Canada",
      name: "Ottawa,ca",
    },
    {
      country: "Cape Verde",
      name: "Praia,cv",
    },
    {
      country: "Cayman Islands",
      name: "George Town,ky",
    },
    {
      country: "Central African Republic",
      name: "Bangui,cf",
    },
    {
      country: "Chad",
      name: "N'Djam,td",
    },
    {
      country: "Chile",
      name: "Santiago de Chile,cl",
    },
    {
      country: "China",
      name: "Peking,cn",
    },
    {
      country: "Christmas Island",
      name: "Flying Fish Cove,cx",
    },
    {
      country: "Cocos (Keeling) Islands",
      name: "West Island,cc",
    },
    {
      country: "Colombia",
      name: "Santaf,co",
    },
    {
      country: "Comoros",
      name: "Moroni,km",
    },
    {
      country: "Congo",
      name: "Brazzaville,",
    },
    {
      country: "Cook Islands",
      name: "Avarua,ck",
    },
    {
      country: "Costa Rica",
      name: "San Jos,cr",
    },
    {
      country: "Croatia",
      name: "Zagreb,hr",
    },
    {
      country: "Cuba",
      name: "La Habana,cu",
    },
    {
      country: "Cyprus",
      name: "Nicosia,cy",
    },
    {
      country: "Czech Republic",
      name: "Praha,cz",
    },
    {
      country: "Denmark",
      name: "Copenhagen,dk",
    },
    {
      country: "Djibouti",
      name: "Djibouti,dj",
    },
    {
      country: "Dominica",
      name: "Roseau,dm",
    },
    {
      country: "Dominican Republic",
      name: "Santo Domingo de Guzm,do",
    },
    {
      country: "East Timor",
      name: "Dili,tl",
    },
    {
      country: "Ecuador",
      name: "Quito,ec",
    },
    {
      country: "Egypt",
      name: "Cairo,eg",
    },
    {
      country: "El Salvador",
      name: "San Salvador,sv",
    },
    {
      country: "England",
      name: "London",
    },
    {
      country: "Equatorial Guinea",
      name: "Malabo,gq",
    },
    {
      country: "Eritrea",
      name: "Asmara,er",
    },
    {
      country: "Estonia",
      name: "Tallinn,ee",
    },
    {
      country: "Ethiopia",
      name: "Addis Abeba,et",
    },
    {
      country: "Falkland Islands",
      name: "Stanley,fk",
    },
    {
      country: "Faroe Islands",
      name: "Tórshavn,fo",
    },
    {
      country: "Fiji Islands",
      name: "Suva,fj",
    },
    {
      country: "Finland",
      name: "Helsinki [Helsingfors],fi",
    },
    {
      country: "France",
      name: "Paris,fr",
    },
    {
      country: "French Guiana",
      name: "Cayenne,gf",
    },
    {
      country: "French Polynesia",
      name: "Papeete,pf",
    },
    {
      country: "French Southern territories",
      name: null,
    },
    {
      country: "Gabon",
      name: "Libreville,ga",
    },
    {
      country: "Gambia",
      name: "Banjul,gm",
    },
    {
      country: "Georgia",
      name: "Tbilisi,ge",
    },
    {
      country: "Germany",
      name: "Berlin,de",
    },
    {
      country: "Ghana",
      name: "Accra,gh",
    },
    {
      country: "Gibraltar",
      name: "Gibraltar,gi",
    },
    {
      country: "Greece",
      name: "Athenai,gr",
    },
    {
      country: "Greenland",
      name: "Nuuk,gl",
    },
    {
      country: "Grenada",
      name: "Saint George's,gd",
    },
    {
      country: "Guadeloupe",
      name: "Basse-Terre,gp",
    },
    {
      country: "Guam",
      name: "Aga,gu",
    },
    {
      country: "Guatemala",
      name: "Ciudad de Guatemala,gt",
    },
    {
      country: "Guinea",
      name: "Conakry,gn",
    },
    {
      country: "Guinea-Bissau",
      name: "Bissau,gw",
    },
    {
      country: "Guyana",
      name: "Georgetown,gy",
    },
    {
      country: "Haiti",
      name: "Port-au-Prince,ht",
    },
    {
      country: "Heard Island and McDonald Islands",
      name: null,
    },
    {
      country: "Holy See (Vatican City State)",
      name: "Citt",
    },
    {
      country: "Honduras",
      name: "Tegucigalpa,hn",
    },
    {
      country: "Hong Kong",
      name: "Victoria,hk",
    },
    {
      country: "Hungary",
      name: "Budapest,hu",
    },
    {
      country: "Iceland",
      name: "Reykjav,is",
    },
    {
      country: "India",
      name: "New Delhi,in",
    },
    {
      country: "Indonesia",
      name: "Jakarta,id",
    },
    {
      country: "Iran",
      name: "Tehran,ir",
    },
    {
      country: "Iraq",
      name: "Baghdad,iq",
    },
    {
      country: "Ireland",
      name: "Dublin,ie",
    },
    {
      country: "Israel",
      name: "Jerusalem,il",
    },
    {
      country: "Italy",
      name: "Roma,it",
    },
    {
      country: "Ivory Coast",
      name: "Yamoussoukro,ci",
    },
    {
      country: "Jamaica",
      name: "Kingston,jm",
    },
    {
      country: "Japan",
      name: "Tokyo,jp",
    },
    {
      country: "Jordan",
      name: "Amman,jo",
    },
    {
      country: "Kazakhstan",
      name: "Astana,kz",
    },
    {
      country: "Kenya",
      name: "Nairobi,ke",
    },
    {
      country: "Kiribati",
      name: "Bairiki,ki",
    },
    {
      country: "Kuwait",
      name: "Kuwait,kw",
    },
    {
      country: "Kyrgyzstan",
      name: "Bishkek,kg",
    },
    {
      country: "Laos",
      name: "Vientiane,la",
    },
    {
      country: "Latvia",
      name: "Riga,lv",
    },
    {
      country: "Lebanon",
      name: "Beirut,lb",
    },
    {
      country: "Lesotho",
      name: "Maseru,ls",
    },
    {
      country: "Liberia",
      name: "Monrovia,lr",
    },
    {
      country: "Libyan Arab Jamahiriya",
      name: "Tripoli",
    },
    {
      country: "Liechtenstein",
      name: "Vaduz,li",
    },
    {
      country: "Lithuania",
      name: "Vilnius,lt",
    },
    {
      country: "Luxembourg",
      name: "Luxembourg [Luxemburg/L,lu",
    },
    {
      country: "Macao",
      name: "Macao,mo",
    },
    {
      country: "North Macedonia",
      name: "Skopje,mk",
    },
    {
      country: "Madagascar",
      name: "Antananarivo,mg",
    },
    {
      country: "Malawi",
      name: "Lilongwe,mw",
    },
    {
      country: "Malaysia",
      name: "Kuala Lumpur,my",
    },
    {
      country: "Maldives",
      name: "Male,mv",
    },
    {
      country: "Mali",
      name: "Bamako,ml",
    },
    {
      country: "Malta",
      name: "Valletta,mt",
    },
    {
      country: "Marshall Islands",
      name: "Dalap-Uliga-Darrit,mh",
    },
    {
      country: "Martinique",
      name: "Fort-de-France,mq",
    },
    {
      country: "Mauritania",
      name: "Nouakchott,mr",
    },
    {
      country: "Mauritius",
      name: "Port-Louis,mu",
    },
    {
      country: "Mayotte",
      name: "Mamoutzou,yt",
    },
    {
      country: "Mexico",
      name: "Ciudad de M,mx",
    },
    {
      country: "Micronesia, Federated States of",
      name: "Palikir,fm",
    },
    {
      country: "Moldova",
      name: "Chisinau,md",
    },
    {
      country: "Monaco",
      name: "Monaco-Ville,mc",
    },
    {
      country: "Mongolia",
      name: "Ulan Bator,mn",
    },
    {
      country: "Montenegro",
      name: "Podgorica,me",
    },
    {
      country: "Montserrat",
      name: "Plymouth,ms",
    },
    {
      country: "Morocco",
      name: "Rabat,ma",
    },
    {
      country: "Mozambique",
      name: "Maputo,mz",
    },
    {
      country: "Myanmar",
      name: "Rangoon (Yangon),mm",
    },
    {
      country: "Namibia",
      name: "Windhoek,na",
    },
    {
      country: "Nauru",
      name: "Yaren,nr",
    },
    {
      country: "Nepal",
      name: "Kathmandu,np",
    },
    {
      country: "Netherlands",
      name: "Amsterdam,nl",
    },
    {
      country: "Netherlands Antilles",
      name: "Willemstad,an",
    },
    {
      country: "New Caledonia",
      name: "Noum,nc",
    },
    {
      country: "New Zealand",
      name: "Wellington,nz",
    },
    {
      country: "Nicaragua",
      name: "Managua,ni",
    },
    {
      country: "Niger",
      name: "Niamey,ne",
    },
    {
      country: "Nigeria",
      name: "Abuja,ng",
    },
    {
      country: "Niue",
      name: "Alofi,nu",
    },
    {
      country: "Norfolk Island",
      name: "Kingston,nf",
    },
    {
      country: "North Korea",
      name: "Pyongyang,kp",
    },
    {
      country: "Northern Ireland",
      name: "Belfast",
    },
    {
      country: "Northern Mariana Islands",
      name: "Garapan,mp",
    },
    {
      country: "Norway",
      name: "Oslo,no",
    },
    {
      country: "Oman",
      name: "Masqat,om",
    },
    {
      country: "Pakistan",
      name: "Islamabad,pk",
    },
    {
      country: "Palau",
      name: "Koror,pw",
    },
    {
      country: "Palestine",
      name: "Gaza,ps",
    },
    {
      country: "Panama",
      name: "Ciudad de Panam,pa",
    },
    {
      country: "Papua New Guinea",
      name: "Port Moresby,pg",
    },
    {
      country: "Paraguay",
      name: "Asunci,py",
    },
    {
      country: "Peru",
      name: "Lima,pe",
    },
    {
      country: "Philippines",
      name: "Manila,ph",
    },
    {
      country: "Pitcairn",
      name: "Adamstown,pn",
    },
    {
      country: "Poland",
      name: "Warszawa,pl",
    },
    {
      country: "Portugal",
      name: "Lisboa,pt",
    },
    {
      country: "Puerto Rico",
      name: "San Juan,pr",
    },
    {
      country: "Qatar",
      name: "Doha,qa",
    },
    {
      country: "Reunion",
      name: "Saint-Denis,re",
    },
    {
      country: "Romania",
      name: "Bucuresti,ro",
    },
    {
      country: "Russian Federation",
      name: "Moscow,ru",
    },
    {
      country: "Rwanda",
      name: "Kigali,rw",
    },
    {
      country: "Saint Helena",
      name: "Jamestown,sh",
    },
    {
      country: "Saint Kitts and Nevis",
      name: "Basseterre,kn",
    },
    {
      country: "Saint Lucia",
      name: "Castries,lc",
    },
    {
      country: "Saint Pierre and Miquelon",
      name: "Saint-Pierre,pm",
    },
    {
      country: "Saint Vincent and the Grenadines",
      name: "Kingstown,vc",
    },
    {
      country: "Samoa",
      name: "Apia,ws",
    },
    {
      country: "San Marino",
      name: "San Marino,sm",
    },
    {
      country: "Sao Tome and Principe",
      name: "S,st",
    },
    {
      country: "Saudi Arabia",
      name: "Riyadh,sa",
    },
    {
      country: "Scotland",
      name: "Edinburgh",
    },
    {
      country: "Senegal",
      name: "Dakar,sn",
    },
    {
      country: "Seychelles",
      name: "Victoria,sc",
    },
    {
      country: "Sierra Leone",
      name: "Freetown,sl",
    },
    {
      country: "Singapore",
      name: "Singapore,sg",
    },
    {
      country: "Slovakia",
      name: "Bratislava,sk",
    },
    {
      country: "Slovenia",
      name: "Ljubljana,si",
    },
    {
      country: "Solomon Islands",
      name: "Honiara,sb",
    },
    {
      country: "Somalia",
      name: "Mogadishu,so",
    },
    {
      country: "South Africa",
      name: "Pretoria,za",
    },
    {
      country: "South Georgia and the South Sandwich Islands",
      name: null,
    },
    {
      country: "South Korea",
      name: "Seoul,kr",
    },
    {
      country: "South Sudan",
      name: "Juba,ss",
    },
    {
      country: "Spain",
      name: "Madrid,es",
    },
    {
      country: "SriLanka",
      name: null,
    },
    {
      country: "Sudan",
      name: "Khartum,sd",
    },
    {
      country: "Suriname",
      name: "Paramaribo,sr",
    },
    {
      country: "Svalbard and Jan Mayen",
      name: "Longyearbyen,sj",
    },
    {
      country: "Swaziland",
      name: "Mbabane,sz",
    },
    {
      country: "Sweden",
      name: "Stockholm,se",
    },
    {
      country: "Switzerland",
      name: "Bern,ch",
    },
    {
      country: "Syria",
      name: "Damascus,sy",
    },
    {
      country: "Tajikistan",
      name: "Dushanbe,tj",
    },
    {
      country: "Tanzania",
      name: "Dodoma,tz",
    },
    {
      country: "Thailand",
      name: "Bangkok,th",
    },
    {
      country: "The Democratic Republic of Congo",
      name: "Kinshasa",
    },
    {
      country: "Togo",
      name: "Lom,tg",
    },
    {
      country: "Tokelau",
      name: "Fakaofo,tk",
    },
    {
      country: "Tonga",
      name: "Nuku'alofa,to",
    },
    {
      country: "Trinidad and Tobago",
      name: "Port-of-Spain,tt",
    },
    {
      country: "Tunisia",
      name: "Tunis,tn",
    },
    {
      country: "Turkey",
      name: "Ankara",
    },
    {
      country: "Turkmenistan",
      name: "Ashgabat,tm",
    },
    {
      country: "Turks and Caicos Islands",
      name: "Cockburn Town,tc",
    },
    {
      country: "Tuvalu",
      name: "Funafuti,tv",
    },
    {
      country: "Uganda",
      name: "Kampala,ug",
    },
    {
      country: "Ukraine",
      name: "Kyiv,ua",
    },
    {
      country: "United Arab Emirates",
      name: "Abu Dhabi,ae",
    },
    {
      country: "United Kingdom",
      name: "London,gb",
    },
    {
      country: "United States",
      name: "Washington,us",
    },
    {
      country: "United States Minor Outlying Islands",
      name: null,
    },
    {
      country: "Uruguay",
      name: "Montevideo,uy",
    },
    {
      country: "Uzbekistan",
      name: "Toskent,uz",
    },
    {
      country: "Vanuatu",
      name: "Port-Vila,vu",
    },
    {
      country: "Venezuela",
      name: "Caracas,ve",
    },
    {
      country: "Vietnam",
      name: "Hanoi,vn",
    },
    {
      country: "Virgin Islands, British",
      name: "Road Town",
    },
    {
      country: "Virgin Islands, U.S.",
      name: "Charlotte Amalie",
    },
    {
      country: "Wales",
      name: "Cardiff",
    },
    {
      country: "Wallis and Futuna",
      name: "Mata-Utu,wf",
    },
    {
      country: "Western Sahara",
      name: "El-Aai,eh",
    },
    {
      country: "Yemen",
      name: "Sanaa,ye",
    },
    {
      country: "Yugoslavia",
      name: "Beograd",
    },
    {
      country: "Zambia",
      name: "Lusaka,zm",
    },
    {
      country: "Zimbabwe",
      name: "Harare,zw",
    },
  ];

  const handleOnSearch = (string, cached) => {
    console.log(string, cached);
  };

  const handleOnSelect = (item) => {
    console.log(item);
    fetch(
      "https://api.aerisapi.com/observations/" +
        item.name +
        "?&format=json&filter=allstations&limit=1&client_id=8o95k3ytaATSoj2cHVWPN&client_secret=9KTL6e8hcEFnBAtn25zKchSJFKivqMEhuCDvskAJ"
    )
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        console.log(data);

        setForecast(data.response.ob.tempC);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };
  let text = "";
  if (forecast > 15) {
    text = "It is pleasant outside!";
  } else if (forecast === "") {
    text = "???";
  } else {
    text = '"Netflix and chill" weather. Too cold!';
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400, alignItems: "center" }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            onChange={(location) => {
              return setLocation(location.handleOnSelect);
            }}
          />
        </div>
      </header>
      <p
        style={{
          fontFamily: "Open Sans",
          fontWeight: "800",
          color: "purple",
        }}
      >
        {location.toUpperCase()}
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>
        Temperature
      </h4>
      <p
        style={{
          fontFamily: "Open Sans",
          fontWeight: "800",
          fontSize: "40px",
        }}
      >
        {forecast}
      </p>
      <p style={{ fontFamily: "Comic Sans MS", fontWeight: "800" }}>
        Is it Netflix Weather: {text}
      </p>
    </div>
  );
}

export default Search;
