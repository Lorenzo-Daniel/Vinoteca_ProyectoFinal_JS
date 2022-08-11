<h1>
    Proyecto Final curso JavaScript
</h1>
<h2>
    Deploy <a href="">
        Aquí
    </a>
</h2>
<hr>
<h2>
    Descripción:
</h2>
<p>
    Vinoteca || Vinos de España es una tienda Vinos Ficticia.
</p>
<hr>
<h2>
    Objetivo:
</h2>
<p>
    Desarrollar un e-comerce con la herramientas aprendidas en el Curso de JavaScript:
</p>
<ul>
    <li>
        Recursos utilizados:
        <ul>
            <li>
                Uso de APIs
            </li>
            <li>
                Uso de fetch() y promesas
                <ul>
                    <li>
                        async
                    </li>
                    <li>
                        await
                    </li>
                    <li>
                        .then()
                    </li>
                    <li>
                        .catch()
                    </li>   
                </ul>
            </li>
            <li>
                Uso de metodos JavaScript 
                <ul>
                    <li>
                        find()
                    </li>
                    <li>
                        findIndex()
                    </li>
                    <li>
                        filter()
                    </li>
                    <li>
                        math()
                        <ul>
                            <li>
                                round
                            </li>
                            <li>
                                random()
                            </li>
                        </ul>
                    </li>
                    <li>
                        includes()
                    </li>
                    <li>
                        setTimeOut()
                    </li>
                    <li>
                        classlist.add()
                    </li>
                    <li>
                        classlist.remove()
                    </li>
                    <li>
                        clearTimeOut()
                    </li>
                    <li>
                        Local Storage()
                    </li>
                    <li>
                        Sesion Storage()
                    </li>
                    <li>
                        push()
                    </li>
                    <li>
                        createElement()
                    </li>
                    <li>
                        appendChild()
                    </li>
                    <li>
                        preppendChild()
                    </li>
                    <li>
                        window.location.href
                    </li>
                    <li>
                        innerHTML
                    </li>
                    <li>
                        innerText
                    </li>
                </ul>
                <li>
                    Eventos:
                    <ul>
                        <li>
                            onclick
                        </li>
                        <li>
                            onMouseOver
                        </li>
                        <li>
                            onScroll
                        </li>
                    </ul>
                </li>
                <li>
                    Uso de condicionales
                </li>
                <li>
                    ciclos:
                    <ul>
                        <li>
                            foreach()
                        </li>
                        <li>
                            forOf()
                        </li>
                        <li>
                            for()
                        </li>
                    </ul>
                </li>
                <li>
                    Operadores avanzados (Cuando es posible)
                </li>
                <li>
                    Arrow function Sintaxis
                </li>
                <li>
                    Array[]
                </li>
                <li>
                    Objetos{}
                </li>
            </li>
        </ul>
    </li>
    <li>
        Librerias JS.
    </li>
</ul>
<hr>
<h1>
    Caracteristicas:
</h1>
<ul>
    <li>
        API: Para obtener informacion de productos elabore mi propio archivo.json. <br>
        El archivo esta alojado en jsonBin y lo llamo desde la url proporcionada a traves de un fetch con la ruta
        externa.
    </li>
    <li>
        Index:
        <ul>
            <li>
                Renderizado de todos los Productos.
            </li>
            <li>
                Cada una de las Cards tiene dos botones que nos danlal posibilidad de agregar el producto al carrito
                o ver detalle descriptivo del producto.
            </li>
            <li>
                Inicio de sesion:
                <ul>
                    <li>
                        Validacion de Inicio de sesion dependiendo si hay datos de Registro o no, en caso de que si
                        hayan
                        verifica que los datos coincidan.
                    </li>
                    <li>
                        En contraseña nos da la posibilidad de ver u ocultar la contraseña.
                    </li>
                    <li>
                        Validaciones tipicas de Formulario (Si los campos estan vacios)
                    </li>
                </ul>
            </li>
            <li>
                Newsletter:
                <ul>
                    <li>
                        Valida si hay datos de usuario registrados, si los hay verifica que el usuario tenga su
                        sesion iniciada, en caso de que no, nos alerta que debemos iniciar sesion.
                    <li>
                        Si las condiciones anteriores se cumplen positivamente genera un codigo
                        random()
                    </li>
                    <li>
                        Nos da la opcion de copiar el codigo al portapapeles dando click a un boton.
                        (Este codigo puede ser usado
                        posteriormente como 'codigo de descuento en 'Carrito')'.
                    </li>
            </li>
        </ul>
    <li>
        Eventos con animacion onscroll y onMouseUp para ocultar o mostrar elemento del DOM (header)
    </li>
    </li>
</ul>
</li>
<li>
    Carrito:
    <ul>
        <li>
            Renderiza los productos que se hayan agregado al carrito.
        </li>
        <li>
            Mediante los botones + y - nos da la posibilidad de aumentar o disminuir la cantidad de productos de uno
            en uno.
        </li>
        <li>
            Mediante el boton 'Trash' nos permite eliminar todos los productos que compartan las mismas
            caracteristicas, sin importar la cantidad de unidades.
        </li>
        <li>
            Mediante el boton 'vaciar carrito' nos permite eliminar todos los productos del carrito.
        </li>
        <li>
            En todas las situaciones anteriores el precio se modifica automaticamente dependiendo de la accion
            realizada.
        </li>
        <li>
            Animacion en miniatura(img de Producto). Mediante Swal trae la imagen y una breve descripcion del
            producto al hacer click sobre la imagen.
        </li>
        <li>
            Mediante el Boton 'finalizar compra' renderiza un saludo y actualiza.
        </li>
        <li>
            Mediante el boton 'Ingresar codigo' a traves de un Swal valida si existe un codigo y , en caso de que
            exista , si el codigo ingresado es correcto.
        </li>
        <li>
            Mediante el boton 'codigo'(olvide mi codigo) nos trae el 'codigo de descuento' generado en caso de que
            exista, en caso de que no exista nos alerta que no nos hemos subscrito al Newsleter.
        </li>
    </ul>
</li>
<li>
    Formulario:
    <ul>
        <li>
            Verifica que todos los campos esten completos y el formato corresponda con el tipo de input.
        </li>
        <li>
            Una vez se hayan cumplido todas las validaciones para confirmar formulario, envia un mail de bienvenida
            al mail Ingresado a traves de API Email.JS y nos anuncia un registro correcto con un Swal.
        </li>
    </ul>
</li>
</ul>
<hr>
<h2>
    Construido con:
</h2>
<ul>
    <li>
        HTML
    </li>
    <li>
        Sass/css
    </li>
    <li>
        JavaScript
    </li>
</ul>
<hr>
<h2>
    Librerias:
</h2>
<ul>
    <li>
        Bootstrap
    </li>
    <li>
        googleApis
    </li>
    <li>
        FontAwsome
    </li>
    <li>
        CssAnimate
    </li>
    <li>
        Tostify
    </li>
    <li>
        SweetAlert
    </li>
</ul>
<hr>
<h2>
    APIs:
</h2>
<ul>
    <li>
        jsonBin
    </li>
    <li>
        Email.JS
    </li>
</ul>
<hr>
<h2>
    Desarrollado por:
</h2>
<strong>
    <i>Daniel Lorenzo</i>
</strong>
