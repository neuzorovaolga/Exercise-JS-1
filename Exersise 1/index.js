////// Task 1


const userNumber = prompt("Enter a number from 0 to 5");

if (userNumber === null) {
    console.log("You cancelled prompt");
} else {
    switch (+userNumber) {
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        default:
            console.log("Try enter number from 0 to 5")
    }

}


////// Task 2


const userGender = prompt("Введите ваш пол (муж/жен)");

if (userGender === null) {
    console.log("Вы отказались вводить пол");

} else if (userGender === "муж") {
    const userAge = prompt("Введите ваш возраст");
    if (userAge === null) {
        console.log("Вы отказались вводить возраст");
    } else if (0 <= +userAge && +userAge <= 14) {
        console.log("Подросток");
    } else if (14 < +userAge && +userAge <= 20) {
        console.log("Юноша");
    } else if (20 < +userAge && +userAge <= 60) {
        console.log("Молодой человек");
    } else if (60 < +userAge && +userAge <= 100) {
        console.log("Дед");
    } else {
        console.log("Неверно указан возраст");
    }

} else if (userGender === "жен") {
    const userAge = prompt("Введите ваш возраст");
    if (userAge === null) {
        console.log("Вы отказались вводить возраст");
    } else if (0 <= +userAge && +userAge <= 100) {
        console.log("Девушка");
    } else {
        console.log("Неверно указан возраст");
    }

} else {
    console.log("Неверно указан пол");
}

////// Task 3


// String(5) && typeof (20) && " " || Boolean("") || 0

// '5' && 'number' && " " || Boolean("") || 0

// 'number' && " " || Boolean("") || 0

// " " - последний правдивый