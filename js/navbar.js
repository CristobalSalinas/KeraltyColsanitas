//Opcion para abrir el navbar en mobil
$(document).ready(function () {
    $('[data-toggle=collapse-side]').click(function (e) {
        $('.side-collapse').toggleClass('in');
    });
});

//Click en boton oficina virtual que me redirija a otra parte
document.getElementById("oficina_virtual").onclick = function () {
    location.href = "";
};

//Navbar que cambie cuando se haga scroll hacia abajo
$(document).ready(function() {
  
    var pequeno = false;

    window.addEventListener('resize', function () {
        if(window.innerWidth<=767){
            pequeno = true;
        }
    });

    

    $(window).scroll(function () {

        if(pequeno!=false){
            if ($(window).scrollTop() > 50) {
                $('#navbar-pincipal').addClass('navbar-fixed-top ');
            }
            if ($(window).scrollTop() < 50) {
                $('#navbar-pincipal').removeClass('navbar-fixed-top ');
            }
        }else{
            $('#navbar-pincipal').addClass('navbar-fixed-top ');
        }
        
    });

});



/* (function () {
    window.addEventListener('resize', function () {
       if(window.innerWidth<=767){
        $('#navbar-pincipal').addClass('navbar-fixed-top ');
       }
    });
})();
 */
