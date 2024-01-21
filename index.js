var product = [{
    id: 1,
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Bose',
    price: 7500,
    description: 'HeadPhone Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia rerum, saepe vitae earum quae neque!',
    type: 'HeadPhone', 
}, {
    id: 2,
    img: 'https://unsplash.com/photos/shallow-focus-photo-of-black-ray-ban-wayfarer-sunglasses-K62u25Jk6vo',
    name: 'Rayban',
    price: 6500,
    description: 'Glass Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia rerum, saepe vitae earum quae neque!',
    type: 'Glass', 
}, {
    id: 3,
    img: 'https://unsplash.com/photos/white-and-black-polaroid-one-step-2-instant-camera-on-white-board-KsLPTsYaqIQ',
    name: 'Nikkon',
    price: 13500,
    description: 'Glass Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia rerum, saepe vitae earum quae neque!',
    type: 'Camera', 
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div class="product-item ${product[i].type}">
                    <img class="product-img" src="https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                    <p style="font-size: 1.2vw;">Product Name</p>
                    <p style="font-size: 0.9vw;">Price 500 THB</p>
                </div>`;
    }
    $("#productlist").html(html);
})

