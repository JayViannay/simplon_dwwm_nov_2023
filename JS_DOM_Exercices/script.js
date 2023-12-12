// JS DOM Exercise 1
function sayHello() {
    document.getElementById('demo').innerHTML = 'Hello JavaScript!';
}

// Ex 1 : Dark Mode
// 1. Create a button in index.html with the text "Toggle Dark Mode"
// 2. Inspired by sayHello() above, create a function called toggleDarkMode()
// 3. In the function, toggle the class dark-mode on the body element
// 4. Call the function when the button is clicked
// Tips : https://www.w3schools.com/howto/howto_js_toggle_class.asp

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Ex 2 : Random Image
// 1. Create a button with the text "Random Image" and an image element with id="random-image" in index.html
// 2. Create a function called randomImage()
// 3. The function may return a random image from an array of images
// 4. The function may set the image source of an image element in index.html
// 5. The function may be called when the button is clicked
// Tips : https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array/5915122#5915122
const images = [
    'images/dog1.jpg',
    'images/dog2.jpg',
    'images/dog3.jpg',
    'images/dog4.jpg',
    'images/dog5.jpg',
    'images/dog6.jpg',
];

function randomImage() {
    let randomIndex = Math.floor(Math.random()*images.length);
    let image = images[randomIndex];
    // let imageDirect = images[Math.floor(Math.random()*images.length)]; 
    document.getElementById('random-image').src = image;
}

// Ex 3 : Counter
// 1. Create a button with the text "Count" and a span element with id="counter" in index.html
// 2. Create a function called count()
// 3. The function may increment a counter variable and display the value of the counter in index.html
// 4. The function may be called when the button is clicked
let counter = 0;
function count() {
    counter++;
    document.getElementById('counter').innerHTML = counter;
}

// Ex 4 : Displaying a List
// 1. Create a function called displayList() that displays a list of items in index.html (update html document if needed)
// 2. The function may use an array of items
// 3. The function may be called when the page is loaded
const fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

function displayList() {
    let ul = document.getElementById('list');
    for (let i = 0; i < fruits.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = fruits[i];
        ul.appendChild(li);
    }
}
displayList();

// Ex 5 : Add Item to list
// 0. Create a button with the text "Add Item" in index.html
// 1. Create a function called addItem() that adds an item to the list in index.html
// 3. The function may be called when the button is clicked
// 4. The function may use an array of items to add a random item to the list
const randomFruits = ['Fig', 'Grape', 'Honeydew', 'Imbe', 'Jackfruit', 'Kiwi'];
function addItem() {
    let ul = document.getElementById('list');
    let randomIndex = Math.floor(Math.random()*randomFruits.length);
    let fruit = fruits[randomIndex];
    let li = document.createElement('li');
    li.innerHTML = fruit;
    ul.appendChild(li)
}

// Ex 5 bis : Remove Item to list
// 0. Create a button with the text "Remove Last Item" in index.html
// 1. Create a function called removeItem() that remove the last item to the list in index.html
// 3. The function may be called when the button is clicked
// Tips : https://developer.mozilla.org/fr/docs/Web/API/Element/lastElementChild
// Tips : https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
function removeItem() {
    let ul = document.getElementById('list');
    let lastElement = ul.lastElementChild;
    ul.removeChild(lastElement);
}


// Ex 6 : Displaying a list of objects
// 1. Create a function called displayObjectList() that displays a list of object in index.html (update html document if needed)
// 2. The function may use an array of objects
// 3. The function may be called when the page is loaded
const persons = [
    { id: 36728, name: 'Mary', age: 35, student: true },
    { id: 9223, name: 'John', age: 20, student: true },
    { id: 30922, name: 'Peter', age: 38, student: false },
    { id: 9382, name: 'Jane', age: 29, student: true },
    { id: 1023, name: 'Tony', age: 30, student: false },
    { id: 452, name: 'Suzan', age: 21, student: true },
];

function displayObjectList() {
    let ul = document.getElementById('listPerson');
    for (let i = 0; i < persons.length; i++) {
        let li = document.createElement('li');
        // concatenation + ternaire (if/else)
        li.innerHTML = persons[i].id + " " + persons[i].name + " " + (persons[i].student ? 'Etudiant' : "Pas etudiant")
        li.innerHTML = `${persons[i].id + " " + persons[i].name + " " + (persons[i].student ? 'Etudiant' : "Pas etudiant")}`
        ul.appendChild(li);
    }
}
displayObjectList();


// Ex 7 : Displaying a list of objects with a filter
// 1. Create a function called displayCarsByBrand() that displays a list of object in index.html
// 2. The function may use an array of objects and a filter string
// 3. The function may filter the array of objects based on the filter string
// 3. Create a select element (id = "filter", name = "filter", value = "true")
// 4. Select options value may be ['Toyota', 'BMW', 'Nissan', 'Peugeot']
// 4. The function may be called when the page is loaded or when the filter select element is changed
// const cars = [
//     { id: 1, brand: 'Toyota', model: 'Vios', price: 90000, available: true },
//     { id: 2, brand: 'Toyota', model: 'Altis', price: 120000, available: true },
//     { id: 3, brand: 'BMW', model: 'Jazz', price: 110000, available: false },
//     { id: 4, brand: 'BMW', model: 'City', price: 95000, available: true },
//     { id: 5, brand: 'Nissan', model: 'Almera', price: 80000, available: false },
//     { id: 6, brand: 'Nissan', model: 'Teana', price: 130000, available: true },
//     { id: 7, brand: 'Peugeot', model: 'Peugeot 208', price: 100000, available: true },
//     { id: 8, brand: 'Peugeot', model: 'Peugeot 308', price: 120000, available: false },
// ];


// Ex 7 bis : Reset the filter
// 1. Create a button with the text "Reset Filter" in index.html
// 2. Create a function called resetFilter() that reset the filter select element and display all cars
// 3. The function may reset the filter select element
// 4. The function may be called when the button is clicked


// Ex 8 : Displaying a list of objects in card html
// 1. Create a function called displayCarsInCard() that displays a list of object in index.html
// HTML code is in index.html section#8
// Card HTML = 
/* <div class="card">
    <h3>Car 1</h3>
    <p>Brand : Toyota</p>
    <p>Model : Yaris</p>
    <p>Price : 2005</p>
</div> */

// 2. The function may use an array of objects
// 3. The function may be called when the page is loaded
// Use the same array of objects as Ex 7

