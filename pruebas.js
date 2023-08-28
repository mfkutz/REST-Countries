const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const array2 = [4, 6, 5, 9, 0, 8, 3, 1, 7, 2]



let g = [...array].sort(() => Math.random() - 0.5)

console.log(array);
console.log(g);


