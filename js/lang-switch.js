"use strict";
var mlCodes = [
    {
        code: "EN",
        name: "English",
    },
    {
        code: "HU",
        name: "Magyar",
    }
];
var MLstrings = [
    {
        English: "Home",
        Magyar: "Főoldal",
    },
    {
        English: "About",
        Magyar: "Rólam",
    },
    {
        English: "Service",
        Magyar: "Szolgáltatások",
    },
    {
        English: "Working Process",
        Magyar: "Munkamenet",

    },
    {
        English: "Portfolio",
        Magyar: "Portfólió",
    },
    {
        English: "Contact",
        Magyar: "Elérhetőségeim",
        
    },
    {
        English: "Contact Me",
        Magyar: "Elérhetőségeim",
        
    },
    {
        English: "Website ",
        Magyar: "Weboldalam ",
    },
    {
        English: "Hello, my name is ",
        Magyar: "Hello az én nevem ",
    },
    {
        English: "I'm a Junior Web Developer with extensive experience for over 2 years. My expertise is to create websites. Read more in the About section.",
        Magyar: "Junior webfejlesztő vagyok, több mint 2 éves tapasztalattal. Az én szakterületem a weboldal készítés. Bővebben az Rólam részben olvashatsz.",
    },
    {
        English: "About Me",
        Magyar: "Rólam",
    },
    {
        English: "I'm Győző Róbert and I'm a",
        Magyar: "Én Győző Róbert vagyok aki egy",
    },
    {
        English: "Below you can read the most important information about me. You can find out more about my services in the service section. And if you're curious about my work, you can find it in the portfolio section.",
        Magyar: "Az alábbiakban a legfontosabb tudnivalókat olvashatod rólam. Szolgáltatásaimról bővebben a Szolgáltatások részen tájékozódhat. Ha pedig kíváncsi vagy a munkáimra, a portfólió részen megtalálod.",
    },
    {
        English: "As you can see, I don’t have a degree yet, but that doesn’t mean that you can't give me a chance.",
        Magyar: "Amint látod, még nincs diplomám, de ez nem jelenti azt, hogy nem adhatsz esélyt.",
    },
    {
        English: "Hire Me",
        Magyar: "Vedd fel velem a kapcsolatot",
    },
    {
        English: "Education",
        Magyar: "Tanulmányaim",
    },
    {
        English: "Nyíregyháza NYSZC Széchenyi István Technical School - Junior Software Engineer",
        Magyar: "Nyíregyháza NYSZC Széchenyi István Technikusi Iskola - Junior Szoftverfejlesztő",
    },
    {
        English: "I have been studying here for 3 years now. So far, we have mainly dealt with Frontend, including HTML, CSS and JS. Also, Java is the main language I learned in this school. In my opinion, it is a very professional and well-equipped school.",
        Magyar: "Már 3 éve itt tanulok. Eddig főleg a Frontenddel foglalkoztunk, ezen belül a HTML, a CSS és a JS. Ezenkívül a Java a fő nyelv, amelyet ebben az iskolában tanultam. Véleményem szerint ez egy nagyon profi és jól felszerelt iskola.",
    },
    {
        English: "Portugal Erasmus+ - Web Developer Course",
        Magyar: "Portugal Erasmus+ - Webfejlesztő Kúrzus",
    },
    {
        English: "Nyíregyháza Móra Ferenc Primary School Petőfi Sándor Member Institution",
        Magyar: "Nyíregyháza Móra Ferenc Általános Iskola Petőfi Sándor Tagintézmény",
    },
    {
        English: "Experience",
        Magyar: "Tapasztalataim",
    },
    {
        English: "My own Website",
        Magyar: "Saját Weboldal",
    },
    {
        English: "This Website is the first serious and important Project for me, with which I would like to present myself, my knowledge and I hope to arouse the interest of those who may want to create a Website but do not know who to turn to.",
        Magyar: "Ez a Weboldal számomra az első komoly és fontos Projekt, mellyel szeretném bemutatni magam, tudásomat és remélem felkeltettem azok érdeklődését, akik esetleg szeretnének Weboldalt készíteni, de nem tudják kihez forduljanak.",
    },
    {
        English: "Website",
        Magyar: "Weboldal",
    },
    {
        English: "I'm open to Frontend projects for Websites",
        Magyar: "Nyitott vagyok a Frontend projektekre Weboldalakhoz",
    },
    {
        English: "Web Application",
        Magyar: "Webalkalmazás",
    },
    {
        English: "I'm open to Frontend Development for a Web Applications",
        Magyar: "Nyitott vagyok a Webalkalmazások Frontend fejlesztésére",
    },
    {
        English: "Negotiation of the Project",
        Magyar: "A Projekt tárgyalása",
    },
    {
        English: "Development process",
        Magyar: "Fejlesztési folyamat",
    },
    {
        English: "Payment and Delivery",
        Magyar: "Fizetés és átadás",
    },
    {
        English: "My last Projects :",
        Magyar: "Legutóbbi Projektjeim :",
    },
    {
        English: "Do You Have Any Questions ?",
        Magyar: "Van bármilyen kérdése?",
    },
    {
        English: "I'M AT YOUR SERVICE",
        Magyar: "ÁLLOK SZOLGÁLATÁRA",
    },
    {
        English: "SEND ME AN EMAIL",
        Magyar: "KÜLDJ NEKEM EGY EMAILT",
    },
    {
        English: "Please share my page with your friends and acquaintances",
        Magyar: "Kérlek oszd meg oldalamat barátaiddal, ismerőseiddel",
    },
];
// Global var :(
var mlrLangInUse;
var mlr = function ({ dropID = "mbPOCControlsLangDrop", stringAttribute = "data-mlr-text", chosenLang = "English", mLstrings = MLstrings, countryCodes = false, countryCodeData = [], } = {}) {
    const root = document.documentElement;
    var listOfLanguages = Object.keys(mLstrings[0]);
    mlrLangInUse = chosenLang;
    (function createMLDrop() {
        var mbPOCControlsLangDrop = document.getElementById(dropID);
        // Reset the menu
        mbPOCControlsLangDrop.innerHTML = "";
        // Now build the options
        listOfLanguages.forEach((lang, langidx) => {
            let HTMLoption = document.createElement("option");
            HTMLoption.value = lang;
            HTMLoption.textContent = lang;
            mbPOCControlsLangDrop.appendChild(HTMLoption);
            if (lang === chosenLang) {
                mbPOCControlsLangDrop.value = lang;
            }
        });
        mbPOCControlsLangDrop.addEventListener("change", function (e) {
            mlrLangInUse = mbPOCControlsLangDrop[mbPOCControlsLangDrop.selectedIndex].value;
            resolveAllMLStrings();
            // Here we update the 2-digit lang attribute if required
            if (countryCodes === true) {
                if (!Array.isArray(countryCodeData) || !countryCodeData.length) {
                    console.warn("Cannot access strings for language codes");
                    return;
                }
                root.setAttribute("lang", updateCountryCodeOnHTML().code);
            }
        });
    })();
    function updateCountryCodeOnHTML() {
        return countryCodeData.find(this2Digit => this2Digit.name === mlrLangInUse);
    }
    function resolveAllMLStrings() {
        let stringsToBeResolved = document.querySelectorAll(`[${stringAttribute}]`);
        stringsToBeResolved.forEach(stringToBeResolved => {
            let originaltextContent = stringToBeResolved.textContent;
            let resolvedText = resolveMLString(originaltextContent, mLstrings);
            stringToBeResolved.textContent = resolvedText;
        });
    }
};
function resolveMLString(stringToBeResolved, mLstrings) {
    var matchingStringIndex = mLstrings.find(function (stringObj) {
        // Create an array of the objects values:
        let stringValues = Object.values(stringObj);
        // Now return if we can find that string anywhere in there
        return stringValues.includes(stringToBeResolved);
    });
    if (matchingStringIndex) {
        return matchingStringIndex[mlrLangInUse];
    }
    else {
        // If we don't have a match in our language strings, return the original
        return stringToBeResolved;
    }
}
mlr({
    dropID: "mbPOCControlsLangDrop",
    stringAttribute: "data-mlr-text",
    chosenLang: "English",
    mLstrings: MLstrings,
    countryCodes: true,
    countryCodeData: mlCodes,
});