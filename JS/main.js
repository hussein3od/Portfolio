let text = document.querySelector(".paragraph")
text.onclick = function () {
    if(!text.classList.contains("read-more")){
        text.classList.add("read-more");
    }else if(text.classList.contains("read-more")){
        text.classList.remove("read-more")
    }
}