// Если мы перечислим все натуральные числа ниже 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных равна 23.
// Завершите решение так, чтобы оно возвращало сумму всех кратных 3 или 5 ниже переданного числа.
//     Кроме того, если число отрицательное, верните 0 (для языков, в которых они есть).
// Примечание: Если число кратно как 3, так и 5, подсчитайте его только один раз.

/**
 *
 * @param number {number}
 * @return {number}
 */
function solution(number){
    let sum = 0;

    while (number > 0) {
        if ((number % 3 === 0 && number % 5 === 0)) {
            return number;
        }

        for (let i = 1; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }

        return sum;
    }

    return 0;
}

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed

/**
 *
 * @param string {string}
 * @return {string}
 */
function spinWords(string) {
    return string.split(' ').map((item) => {
        return (item.length >= 5) ? item.split('').reverse().join('') : item;
    }).join(' ')
}

console.log(spinWords('Hey fellow warriors'))

// module.exports = solution;