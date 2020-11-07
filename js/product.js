const products = document.querySelectorAll(".product");

if (product){
    products.forEach(el => {
        const imageSwitchItems = el.querySelectorAll(".image-switch-item");
        const imagePagination = el.querySelector(".image-pagination");
        if (imageSwitchItems.length > 1) {
            imageSwitchItems.forEach((el, index) => {
            el.setAttribute('data-index', index);
            imagePagination.innerHTML += '<li class="image-pagination-item" data-index="${index}"></li>';
            });
        }
    });
}