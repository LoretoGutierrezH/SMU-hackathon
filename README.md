# SMU-hackathon
MVP para SMU como desafío de la hackathon de cierre de Laboratoria Chile 013
## PREÁMBULO
Hoy, dada la pandemia, es muy común ver cómo las familias realizan actividades en casa con mayor frecuencia, siendo una de estas el cocinar juntos. Una actividad que muchos descubrieron como una verdadera pasión y que pretenden mantener 
durante el tiempo, aún cuando la pandemia acabe.
Sin embargo es un problema para aquellas personas el encontrar una receta y luego buscar los productos uno por uno. Siempre existe la posibilidad de olvidar mas de un ingrediente en el supermercado o de anotarlo en la lista de compras.
## DESAFÍO
SMU y su empresa Unimarc cuentan con recetas y marcas propias y que les gustaría potenciar a través de una nueva funcionalidad que busque resolver la siguiente problemática:
¿Cómo podemos hacer la experiencia de compra de insumos para recetas de una forma más amigable?
Para ello decidimos mejorar la plataforma de Unimarc, potenciando la sección de recetas para quienes desean cocinar las recetas de Nacho Román puedan acceder a los ingredientes de manera fácil, rápida y mejor aún, previamente calculado para 4 personas como lo dice la consigna "Recetas 4x4; 4 personas por 4 lucas".
Esta mejora va enfocada tanto para realizar compras online a través de colaboradores externos a la empresa, o mejor conocido como Delivery y la compra presencial en el local para quienes desean hacer sus compras personalmente.
## ENCUESTAS
Para implementar primeramente nuestra idea, se hizo una encuesta al público y así verificar que tan viable era nuestra popuesta y el nivel de interés que provocaba a los encuestados. 
Los resultados de esta encuesta son los siguientes
![imagen](/src/assets/encuesta1.png)
![imagen](/src/assets/encuesta2.png)
![imagen](/src/assets/encuesta3.png)
## PROTOTIPO
Ya con los resultados, se realizó un prototipo de alta fidelidad, resaltando la visualización de las recetas de Nacho Román. 
Los colores y la tipografia utilizados son los propios de la marca entregados por el equipo de SMU para continuar con la línea gráfica de Unimarc.
![imagen](/src/assets/prototipo0.png)
![imagen](/src/assets/prototipo1.png)
## SOLUCIÓN
Para satisfacer a aquellas personas que desean realizar compras de manera online establecimos un carro de compras y los ingredientes necesarios junto con la receta específica para que así no deban estar buscando sección por sección cada uno 
de los ingredientes que necesitamos a la hora de cocinar. 
La facilidad de este sistema, permite no tener que volver a recargar la pagina en donde está la receta para ver cada uno de los ingredientes, y mucho mejor aún, evitamos lo tedioso que suele ser escribir uno a uno los ingredientes en un papel que luego irá a la basura. Cada ingrediente podrá ser incorporado al carrito de manera fácil. Pero ¿Qué pasa si ya tengo uno de esos ingredientes en mi casa? Tranquilo! no te preocupes, puedes no agregarlo, cada item se agrega de forma unitaria, por lo que no será necesario comprar el pack. Por el contrario; ¿Necesitas para 8 personas? ¿Tienes una comida familiar? puedes agregar más de una cantidad por ingrediente para hacerlo para mas personas, solo debes considerar que ello traerá cambios en el costo total de la compra. Y para aquellas personas que quieren hacer sus compras presenciales y necesitan la lista rapidamente, implementamos un código QR personalizado para cada receta, en donde el usuario solo deberá escanear dicho código con su celular y se descargará un archivo tipo PDF en donde podra llevarlo para hacer las compras solo mirando la lista desde su telefono.
## TECNOLOGIA USADA
Para llevar a cabo el prototipo diseñando por nuestras UX Designer utilizamos REACT.js una librería de fácil uso y con componenetes reutilizables, así facilitamos la mantención de la página para futuras modificaciones y el código se mantiene más limpio.
## EQUIPO DE DESARROLLO
Este proyecto fue realizado en su totalidad por el equipo
![imagengrupo](/src/assets/logoblueberry.png)
[Unimarc Recetas](https://unimarc-recetas.web.app/)
