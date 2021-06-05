const selectAllElemets = document.querySelectorAll("[data-select]");

selectAllElemets.forEach(function(item){
    item.addEventListener("click", function(){
        const realSelect = this.nextElementSibling;

        //Если кликнули по пунктам в дропдауне
        if (event.target.hasAttribute("data-select-item")){

            //Нашли заголовок у данного дропдауна и записали его занчение из data атрибута data-select-item
            var itemTitle = event.target.getAttribute("data-select-item");
            this.querySelector("[data-select-title]").textContent = itemTitle;
            // Скрываем дропдаун
            this.querySelector(".header-select__dropdown").classList.toggle("hidden");

            if(realSelect){
                realSelect.value = itemTitle;
            }

            } else {
                //Если кликнули по заголовку
                //Скрываем или октрываем дропдаун
                this.querySelector(".header-select__dropdown").classList.toggle("hidden");
            }
    })
})
