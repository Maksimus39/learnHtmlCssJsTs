// В игре в гольф каждая лунка имеет par, то есть среднее число, которое strokesгольфист должен сделать,
// чтобы загнать мяч в лунку и завершить игру. В зависимости от того, насколько выше или ниже parвы strokesнаходитесь,
// есть разные прозвища.
//
// Ваша функция будет передана parи strokesаргументы.
// Верните правильную строку в соответствии с этой таблицей, в которой штрихи перечислены в порядке приоритета;
// сверху (самый высокий) к нижнему (самый низкий):


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return names[0]; // "Hole-in-one!"
    }

    const difference = strokes - par;

    if (difference <= -2) {
        return names[1]; // "Eagle"
    } else if (difference === -1) {
        return names[2]; // "Birdie"
    } else if (difference === 0) {
        return names[3]; // "Par"
    } else if (difference === 1) {
        return names[4]; // "Bogey"
    } else if (difference === 2) {
        return names[5]; // "Double Bogey"
    } else {
        return names[6]; // "Go Home!"
    }
}

// Примеры использования
console.log(golfScore(4, 2)); // "Eagle"
console.log(golfScore(5, 2)); // "Eagle"
console.log(golfScore(4, 3)); // "Birdie"
console.log(golfScore(1, 1)); // "Hole-in-one!"
