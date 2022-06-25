const accordionItems= document.querySelectorAll(".accordion-header");

accordionItems.forEach(accordionItem =>{
    accordionItem.addEventListener("click",event =>{
        accordionItem.classList.toggle("active");

    });
})

    












