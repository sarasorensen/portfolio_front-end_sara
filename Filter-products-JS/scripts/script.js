var shoes = [
    {
        name: "Hardy Hiker",
        description:
            "For those who enjoy the outdoors, the Hardy Hiker is for you. This trendy boot is made from strong, durable leather and utilises the latest sole technology to ensure a comfortable fit. The boot is only available in brown leather.",
        imageUrl:
            "https://images.unsplash.com/photo-1493054882428-e4c79a9bfa3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1329&q=80",
        id: 1,
        type: "hiking",
        price: 20.0,
        popularity: 5
    },
    {
        name: "Bashful Brogue",
        description:
            "Our Bashful Brogue is one of our most popular shoes. It is perfect as formal wear or for office use. Its comfortable sole makes it perfect for all day wear. The brogue is made from brown or black leather and is studded using our unique pattern.",
        imageUrl:
            "https://images.unsplash.com/photo-1504826023244-4694f7330c73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
        id: 2,
        type: "boots",
        price: 14.0,
        popularity: 4
    },
    {
        name: "Nice and Easy",
        description:
            "Perfect for every occasion, Nice and Easy is the perfect all-rounder to ensure you're always looking at the top of your game. It's easy to wear and maintain and will be the perfect accompaniment for after dinner drinks, an interview, or even your next date.",
        imageUrl:
            "https://images.unsplash.com/photo-1504826023244-4694f7330c73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
        id: 3,
        type: "sneakers",
        price: 28.0,
        popularity: 3
    },
    {
        name: "Calm and Casual",
        description:
            "The calm and casual shoe is perfect for someone who prioritizes both comfort and style. The shoe is light to wear and perfect for relaxing with friends. It's easy to wear and maintain and will be the perfect accompaniment for after dinner drinks, an interview, or even your next date.",
        imageUrl:
            "https://images.unsplash.com/photo-1548430395-ec39eaf2aa1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        id: 4,
        type: "sneakers",
        price: 38.0,
        popularity: 1
    },
    {
        name: "Sneaker",
        description:
            "The calm and casual shoe is perfect for someone who prioritizes both comfort and style. The shoe is light to wear and perfect for relaxing with friends. It's easy to wear and maintain and will be the perfect accompaniment for after dinner drinks, an interview, or even your next date.",
        imageUrl:
            "https://images.unsplash.com/photo-1548430395-ec39eaf2aa1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        id: 5,
        type: "sneakers",
        price: 18.0,
        popularity: 2
    }
];

//shoes productpage

var filteredShoes = shoes;

var productContainer = document.querySelector("#productContainer");

productContainer.innerHTML = "";

function renderShoes() {
    productContainer.innerHTML = "";

    filteredShoes.forEach(function (shoe) {
        productContainer.innerHTML += `
            <div class="col">
                <img class="shoe-picture" src="${shoe.imageUrl}">
                <h2 class="shoe-name">${shoe.name}</h2>
                <p class="price">Price: £${shoe.price}</p>
                <p class="type" >Occasion: ${shoe.type}</p>
                <p class="color">Color: Brown</p>
                <p class="material">Material: Leather</p>
                <a href="sizeguide.html" class="btn-sizeguide">Size guide</a>
                <a href="yourbasket.html" class="btn-basket">Add To Basket</a>
            </div>`;
    });
}

renderShoes();

function filterShoes(type) {
    filteredShoes = shoes.filter(function (shoe) {
        if (type === "all") {
            return true;
        }

        if (shoe.type === type) {
            return true;
        }
    });

    renderShoes();
}

function sortShoes(sortBy) {
    filteredShoes.sort(function (a, b) {
        return a[sortBy] - b[sortBy];
    });

    renderShoes();
}

//sort by price or popularity function

function sortPrice() {
    sortBy.sort(function (a, b) {
        return $(a).data("price") - $(b).data("price");
    });
    $("#cardImage #cardImage2 #cardImage3").html(sortBy);
}

function sortPopularity() {
    sortBy.sort(function (a, b) {
        return $(a).data("popularity") - $(b).data("popularity");
    });
    $("#cardImage #cardImage2 #cardImage3").html(sortBy);
}

// Add active class to the current button

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.querySelector(".btn.active");

        if (current) {
            current.className = current.className.replace(" active", "");
        }

        this.className += " active";
    });
}

//sort by active class
var sortContainer = document.getElementById("sortContainer");
var btns2 = sortContainer.getElementsByClassName("btn2");

for (var i = 0; i < btns2.length; i++) {
    btns2[i].addEventListener("click", function () {
        var currentSort = document.querySelector(".btn2.active");

        if (currentSort) {
            currentSort.className = currentSort.className.replace(" active", "");
        }

        this.className += " active";
    });
}




