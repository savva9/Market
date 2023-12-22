const products = {}


function PlusProductsCount(v) {

    if (products[v] == undefined) {
        products[v] = 1
    } else {
        products[v] = products[v] + 1
    }
    console.log(products)
}

function MinusProductsCount(v) {
    products[v] = products[v] - 1

    console.log(products)
}

function DeleteObj(v1, v2) {
    delete products[v1.slice(0, v2)]

    console.log(products)
}

function addRow(v1, v2, v3) {
    const row = document.createElement("tr")
    row.innerHTML = `
    <td>
    <img src="${v1[0]}">
    <p class="name-product">${v1[1]} · $${v1[2]}</p>
    <button class="add-button">ADD</button>
    <button class="plus-button hide">+</button>
    <button class="minus-button hide">-</button>
    <p class="count hide">1</p>
    </td>

    <td>
    <img src="${v2[0]}">
    <p class="name-product">${v2[1]} · $${v2[2]}</p>
    <button class="add-button">ADD</button>
    <button class="plus-button hide">+</button>
    <button class="minus-button hide">-</button>
    <p class="count hide">1</p>
    </td>


    <td>
    <img src="${v3[0]}">
    <p class="name-product">${v3[1]} · $${v3[2]}</p>
    <button class="add-button">ADD</button>
    <button class="plus-button hide">+</button>
    <button class="minus-button hide">-</button>
    <p class="count hide">1</p>
    </td>
    `
    return row
}


const ImgLinks = [
    ["img/Burger.png", "Burger", "4.99"],
    ["img/Fries.png", "Fries", "1.49"],
    ["img/Hotdog.png", "Hotdog", "3.49"],

    ["img/Pizza.png", "Pizza", "7.99"],
    ["img/Donut.png", "Donut", "1.49"],
    ["img/Popcorn.png", "Popcorn", "1.99"],

    ["img/Cake.png", "Cake", "10.99"],
    ["img/Icecream.png", "Icecream", "5.99"],
    ["img/Cookie.png", "Cookie", "3.99"]
]

const tbody = document.querySelector("tbody")
tbody.appendChild(addRow(ImgLinks[0], ImgLinks[1], ImgLinks[2]))
tbody.appendChild(addRow(ImgLinks[3], ImgLinks[4], ImgLinks[5]))
tbody.appendChild(addRow(ImgLinks[6], ImgLinks[7], ImgLinks[8]))


const buttons = document.querySelectorAll(".add-button");
buttons.forEach((addBtn) => {
    addBtn.addEventListener("click", () => {
        const td = addBtn.parentNode;
        addBtn.classList.add("hide");
        td.querySelector(".plus-button").classList.remove("hide");
        td.querySelector(".minus-button").classList.remove("hide");
        td.querySelector(".count").classList.remove("hide");


        const name = td.querySelector(".name-product").textContent
        const firstSpaceIndex = name.indexOf("·") - 1
        PlusProductsCount(name.slice(0, firstSpaceIndex))
    });
});


const buttonsPlus = document.querySelectorAll(".plus-button");
buttonsPlus.forEach((addBtn) => {
    addBtn.addEventListener("click", () => {
        const td = addBtn.parentNode;
        const counter = td.querySelector(".count");
        counter.textContent = +counter.textContent + 1;

        const name = td.querySelector(".name-product").textContent
        const firstSpaceIndex = name.indexOf("·") - 1
        PlusProductsCount(name.slice(0, firstSpaceIndex))
    });
});


const buttonsMinus = document.querySelectorAll(".minus-button");
buttonsMinus.forEach((addBtn) => {
    addBtn.addEventListener("click", () => {
        const td = addBtn.parentNode;
        const counter = td.querySelector(".count");

        const name = td.querySelector(".name-product").textContent
        const firstSpaceIndex = name.indexOf("·") - 1

        if (+counter.textContent - 1 == 0) {
            addBtn.classList.add("hide");
            td.querySelector(".plus-button").classList.add("hide")
            td.querySelector(".count").classList.add("hide")
            td.querySelector(".add-button").classList.remove("hide")

            DeleteObj(name, firstSpaceIndex)
        } else {
            counter.textContent = +counter.textContent - 1;
            MinusProductsCount(name.slice(0, firstSpaceIndex))
        }
    });
});