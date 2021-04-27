//Trachar los ToDo al hacer click
$("ul").on("click", "li", function(){
    //Si es gris ponerlo negro
    //$(this).css("color") devuelve el color en RGB!
    if ($(this).css("color") === "rgb(102, 102, 102)") {
        $(this).css({
            color : "black",
            textDecoration : "none"
        });
    }
    //Si es negro ponerlo gris
    else {
        $(this).css({
            color : "#666",
            //En JS no se aceptan los - entonces los nombres de CSS que los tienen se ponen con la sigueinte palabra en MAYUS
            textDecoration : "line-through"
        });
    }

    //Esto se podría hacer mas corto creando en el CSS la clase .Completed con el color gris y el line-through y aquí escribiendo solo:
    //$(this).toggleClass("Completed");
});

//Usar la X para borrar un ToDo
$("ul").on("click", "span", function(event){
    //Remove dentro del FadeOut para que se borre luego de desvanecer
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //Para detener que se propague el click a el li, ul, #Container y body ya que el Span está dentro de todo esto
    event.stopPropagation();
});

//Agregar un nuevo ToDo con el input type=text cuando se precione enter
//Se pone el type = 'text' para que sólo seleccione esos inputs específicos
$("input[type = 'text']").keypress(function(event){
    if (event.which === 13) {
        //Guardar texto dentro del input
        var ToDoText = $(this).val();
        //Limpiar el input
        $(this).val("");
        //Crear el nuevo li
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + ToDoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
});