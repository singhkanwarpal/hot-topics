$(document).on('click', 'ul li', function(){
    $(this).addclass('active').siblings().removeClass('active')
})

//Getting references
let $dc = document.getElementById('dynamic-content')

//Resource
const Data={
    partial1: {
        heading: 'Energy 1',
        imageURL: 'img/image1.jpg',
        content: 'This is content 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio quas numquam amet repudiandae accusantium reprehenderit et maxime, fugiat eveniet? Id sit corporis dolorum voluptatum aut quis. Accusantium, ipsa enim!'
    },
    partial2: {
        heading: 'Energy 2',
        imageURL: 'img/image2.jpg',
        content: 'This is content 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio quas numquam amet repudiandae accusantium reprehenderit et maxime, fugiat eveniet? Id sit corporis dolorum voluptatum aut quis. Accusantium, ipsa enim!'
    },
    partial3: {
        heading: 'Energy 3',
        imageURL: 'img/image3.jpg',
        content: 'This is content 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio quas numquam amet repudiandae accusantium reprehenderit et maxime, fugiat eveniet? Id sit corporis dolorum voluptatum aut quis. Accusantium, ipsa enim!'
    }
};

//Create initial markup
let markup =    `<h2>${Data.partial1.heading}</h2>
                <img src="${Data.partial1.imageURL}" alt="${Data.partial1.heading}" />
                <p>${Data.partial1.content}</p>`;
    $dc.innerHTML = markup;

// My functions
function button1(){
    let markup =    `<h2>${Data.partial1.heading}</h2>
                <img src="${Data.partial1.imageURL}" alt="${Data.partial1.heading}" />
                <p>${Data.partial1.content}</p>`;
    $dc.innerHTML = markup;
    
}

function button2(){
    let markup =    `<h2>${Data.partial2.heading}</h2>
                <img src="${Data.partial2.imageURL}" alt="${Data.partial2.heading}" />
                <p>${Data.partial2.content}</p>`;
    $dc.innerHTML = markup;
}

function button3(){
    let markup =    `<h2>${Data.partial3.heading}</h2>
                <img src="${Data.partial3.imageURL}" alt="${Data.partial3.heading}" />
                <p>${Data.partial3.content}</p>`;
    $dc.innerHTML = markup;
}