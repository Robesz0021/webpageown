var typed = new Typed(".typing", {
    strings:["Junior Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

var typed = new Typed(".typing2", {
    strings:["Junior Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() {
            removeBackSection();
            for(let j = 0; j < totalNavList; j++) {
                if(navList[j].querySelector("a").classList.contains("active")) {
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSection(this);
            if (window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        })
    }

    function removeBackSection() {
        for(let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section")
        }
    }

    function addBackSection(num) {
        allSection[num].classList.add("back-section");
    }

    function showSection(element) {
        for(let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }
    function updateNav(element) {
        for (let i = 0; i < totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn() {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i = 0; i < totalSection; i++) {
                allSection[i].classList.toggle("open");
            }
        }

function emailto() {
    const mail = document.getElementById("click");
    mail.href = "mailto:robertgyozowebdev@gmail.com";
}

function emailto2() {
    const mail2 = document.getElementById("click2");
    mail2.href = "mailto:robertgyozowebdev@gmail.com";
}