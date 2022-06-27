const accordionItems= document.querySelectorAll(".accordion-header");

accordionItems.forEach(accordionItem =>{
    accordionItem.addEventListener("click",event =>{
        accordionItem.classList.toggle("active");

    });
})

const accordionBody= document.querySelectorAll(".accordion-body");

accordionBody.forEach(accordion =>{
    accordion.addEventListener("click",event=>{
        accordion.classList.toggle("active");
    })
})
    












