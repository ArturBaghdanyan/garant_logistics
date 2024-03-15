
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 35,
});

document.addEventListener('DOMContentLoaded', function() {
    let rectangle = document.getElementById("rectangle");
    let span = rectangle.querySelector('span');

    function startAnimation() {
        span.style.animation = 'none';
        void span.offsetWidth;
        span.style.animation = 'typing 2s steps(10), blink-caret .10s step-end alternate infinite';
    }

    startAnimation();

    setInterval(startAnimation, 10000);
});

let headerFlags = document.getElementById("menu_flag");

headerFlags.addEventListener('click', openFlags);

function openFlags() {
    let x = document.getElementById("flags");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function changeFlag(clickedFlag) {
    let headerFlag = document.querySelector('#menu_flag img');
    let newFlagSrc = clickedFlag.getAttribute('src');
    let newFlagAlt = clickedFlag.getAttribute('alt');

    headerFlag.setAttribute('src', newFlagSrc);
    headerFlag.setAttribute('alt', newFlagAlt);
}


let valueDisplays = document.querySelectorAll('.infinite')
let interval = 5000;

valueDisplays.forEach((value) => {
    let startValue = 0;
    let endValue = parseInt(value.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        value.textContent = startValue;
        if(startValue === endValue) {
            clearInterval(counter)
        }
    }, duration);
});


window.addEventListener('scroll', scrollDown);

function scrollDown() {
    let reveals = document.querySelectorAll('.reveal');
    let revealPoint = 150;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        }, {
            threshold: 0.5
        });
    });
        reveals.forEach(reveal => {
            observer.observe(reveal);
        });
}

const changeText = document.querySelector(".span");
const changeText2 = document.querySelector(".span2");
const changeText3 = document.querySelector(".span3");
const aboutAsia = document.querySelector(".asia-text");
const aboutEu = document.querySelector(".eu-text");
const aboutEaEu = document.querySelector(".eaeu-text");

function hideAllExcept(idToShow, aboutTextToShow) {
    const elements = [
        { 'country': 'country', 'text': aboutAsia },
        { 'country': 'country2', 'text': aboutEu },
        { 'country': 'country3', 'text': aboutEaEu }
    ];

    elements.forEach(item => {
        const element = document.getElementById(item.country);
        if (element) {
            element.style.display = item.country === idToShow ? "block" : "none";
        }
    });
    if (aboutTextToShow) {
        aboutTextToShow.style.display = "block";
    }
    [aboutAsia, aboutEu, aboutEaEu].forEach(text => {
        if (text !== aboutTextToShow) {
            text.style.display = "none";
        }
    });

}

changeText.addEventListener("click", function() {
    hideAllExcept("country", aboutAsia);
    changeText.style.color = '#991B1F';
    changeText2.style.color = 'white';
    changeText3.style.color = 'white';

});

changeText2.addEventListener("click", function() {
    hideAllExcept("country2", aboutEu);
    changeText.style.color = 'white';
    changeText2.style.color = '#991B1F';
    changeText3.style.color = 'white';

});

changeText3.addEventListener("click", function() {
    hideAllExcept("country3", aboutEaEu);
    changeText3.style.color = '#991B1F';
    changeText2.style.color = 'white';
    changeText.style.color = 'white';
});


let sectionSwiper = document.querySelector(".swiper");
let swiperList = {
    firstList: [
        {
            id: 1,
            img: "assets/section_images/road.png",
        },
        {
            id: 2,
            img: "assets/section_images/transportation.png",
        },
        {
            id: 3,
            img: "assets/section_images/rail.png",
        },
        {
            id: 4,
            img: "assets/section_images/airplane.png",
        },
        {
            id: 5,
            img: "assets/section_images/road.png",
        },
        {
            id: 6,
            img: "assets/section_images/road.png",
        },
        {
            id: 7,
            img: "assets/section_images/road.png",
        },
    ],
    secondList: [
        {
            id: 1,
            img: "assets/article/truck.png",
        },
        {
            id: 2,
            img: "assets/article/streetcar.png",
        },
        {
            id: 3,
            img: "assets/article/ship.png",
        },
        {
            id: 4,
            img: "assets/article/truck.png",
        },
        {
            id: 5,
            img: "assets/article/ship.png",
        },
        {
            id: 6,
            img: "assets/article/streetcar.png",
        },
        {
            id: 7,
            img: "assets/article/ship.png",
        },
    ]};

function listItem(i, parentElement) {
    let container = parentElement.querySelector(".swiper-wrapper");
    let div = document.createElement('div');
    div.classList.add("swiper-slide");
    div.innerHTML = `<img id={i.id} src=${i.img} alt="">`;
    container.appendChild(div);
}

function createList(className, parentElement) {
    swiperList.firstList.forEach((item) => {
        return listItem(item, parentElement)
    })
}
createList('list', sectionSwiper);


let secondSwiper = document.querySelector(".second_swiper");
function createSwiperList(className, parentElement) {
    swiperList.secondList.forEach((item) => {
        return listItem(item, parentElement)
    })
}
createSwiperList('list', secondSwiper);
