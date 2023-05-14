//1

function sayHi () {
    console.log("Я учу JavaScript!");
}

sayHi ();

let sayHello = function () {
    console.log("Я учу JavaScript!");
};

sayHello ();

let sayHi2 = () => console.log("Я учу JavaScript!");

sayHi2 ();

let photo = document.querySelectorAll('.gallery .photos img');
let i = 0;
function showPrevImg() {
    photo[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = photo.length - 1;
    }
    photo[i].style.display = 'block';
}

function showNextImg() {
    photo[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = photo.length - 1;
    }
    photo[i].style.display = 'block';
}

// function showPrevImg() {
//     const prevImg = document.getElementById('slider-img1');
//     prevImg.src = '/images/img2.jpg';
// }

// function showNextImg() {
//     const nextImg = document.getElementById('slider-img1');
//     nextImg.src = '/images/img1.webp';
// }


//*
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return `${year} - это високосный год.`;
            } else {
                return `${year} - это не високосный год.`;
            }
        } else {
                return `${year} - это не високосный год.`;
        }
        } else {
        return `${year} - это не високосный год.`;
        }
    }

let result = isLeapYear(2023);

console.log(result);



