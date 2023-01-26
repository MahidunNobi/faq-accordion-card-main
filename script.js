const questionDiv= document.querySelectorAll(".questionDIV")

questionDiv.forEach((element) => {
    element.addEventListener("click", ()=>{
        if(element.nextElementSibling.classList.contains("hidden")){
            element.nextElementSibling.classList.remove("hidden");
            element.children[0].style.fontWeight = " 600";
            element.children[0].style.color = " black";
            element.children[1].style.transform = " rotate(180deg)";
       }else{
            element.nextElementSibling.classList.add("hidden")
            element.children[0].style.fontWeight = " 400";
            element.children[0].style.color = " hsl(237, 12%, 33%)";
            element.children[1].style.transform = " rotate(360deg)";
        }
    })
});
console.log();