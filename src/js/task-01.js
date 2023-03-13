const categoryItem = document.querySelector(`ul#categories`);
console.log(`Number of categories ${categoryItem.childElementCount}`);
//console.log(categoryItem);
const classOfItem = document.querySelectorAll(`.item`);
//console.log(`Category: ${classOfItem}`);


classOfItem.forEach(item => {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Element: ${item.lastElementChild.childElementCount}`);
});



//const array = [1, 2, 3];
//console.log(typeof array)