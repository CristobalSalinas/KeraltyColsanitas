(function main() {
    const indicators = [].slice.call(
        document.querySelectorAll(".colapsable")
    );

    indicators.forEach(el => {
        el.addEventListener("click",function(){
            let flecha = this.getElementsByClassName("flecha")[0];

            if (flecha.classList.contains("abajo")){
                flecha.classList.remove("abajo");
                flecha.classList.add("arriba");
            }else{
                flecha.classList.remove("arriba");
                flecha.classList.add("abajo");
            }

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

})();