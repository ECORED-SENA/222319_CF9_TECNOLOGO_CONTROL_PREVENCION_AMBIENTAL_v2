<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Bases conceptuales cálculo valores de emisión

    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')
    .row.justify-content-center.align-items-center
      .col-10.img-text(data-aos="flip-down")
        p.p-3.mb-0 Las siguientes definiciones son importantes para reconocer las unidades de medida utilizadas en los cálculos de valores de emisión de la contaminación atmosférica, lea algunos de ellos a continuación: 
      p.bg-p1.p-3.mb-0.d-block.d-lg-none Las siguientes definiciones son importantes para reconocer las unidades de medida utilizadas en los cálculos de valores de emisión de la contaminación atmosférica, lea algunos de ellos a continuación:  
    Separador.mt-0.pt-0 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Unidades de medida de la contaminación atmosférica 

    p(data-aos="fade-down") Para interpretar los resultados que se obtienen al realizar las mediciones en las fuentes de emisión, es importante reconocer cuáles son las principales unidades de medida que se emplean en la contaminación atmosférica. Por esa razón, se verán en esta unidad las variables, constantes y demás unidades de medición para la interpretación de los resultados de emisión. 

    p(data-aos="fade-down") Entre las principales unidades de concentración que generalmente se emplean tanto en el monitoreo de la calidad del aire como en la medición en fuentes fijas de emisión sobresalen las siguientes:

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Microgramos/metro cúbico")
        .row.justify-content-center.align-items-center
          .col-12
            p #[b Microgramos/metro cúbico:] empleada en las mediciones y normas para el monitoreo de la calidad del aire o inmisión.

            p El portal Troposfera define el microgramo como: “… la unidad de masa del Sistema Internacional que equivale a la millonésima parte de un gramo¨. 

            p.mb-4 Se abrevia µg (aunque a veces aparece como ug).

            .row.justify-content-center.align-items-center          
              .col-auto
                .bg1.brad.p-4
                  img.img-a.img-t(src='@/assets/curso/temas/4.svg', alt='')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Miligramos/metro cúbico")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 #[b Miligramos/metro cúbico:] es empleada en las mediciones y normas para el monitoreo de las fuentes fijas o emisiones (mg/m3). Esta es la unidad de masa del Sistema Internacional que equivale a la milésima parte de un gramo.
      .tarjeta.color-acento-botones--borde.p-4(titulo="El metro cúbico")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 #[b El metro cúbico:] es una unidad de volumen. Corresponde al volumen de un cubo que mide un metro en todos sus lados (1000 litros). 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Partes por millón (ppm)")
        .row.justify-content-center.align-items-center
          .col-12
            h5 Partes por millón (ppm):
            p Este término se abrevia ppm y es la unidad empleada usualmente para valorar la presencia de elementos en pequeñas cantidades (traza) en una mezcla. Generalmente suele referirse a porcentajes que dan información de dos tipos diferentes de unidad, estos son:
            ul.lista-ul.mb-0(data-aos="fade-down")
              li 
                i.fas.fa-check.c1
                | En peso en el caso de sólidos.
              li 
                i.fas.fa-check.c1
                | En volumen en el caso de gases (caso de la ppm utilizada en calidad del aire). 
            p Así, 5 ppm de CO equivale a decir que existen 5 unidades de volumen de CO por cada millón de unidades de volumen de aire. Por ejemplo, 5 ppm de CO serían 5 litros de CO en cada millón de litros de aire.                            
      .tarjeta.color-acento-botones--borde.p-4(titulo="Partes por billón (ppb)")
        .row.justify-content-center.align-items-center
          .col-12
            h5 Partes por billón (ppb):
            p Partes por billón (abreviado como ppb) es otra unidad empleada usualmente para valorar la presencia de elementos en pequeñas cantidades (traza) en una mezcla. Generalmente, suele referirse a porcentajes, que son dos tipos de medidas de unidad, estas son:
            ul.lista-ul.mb-0(data-aos="fade-down")
              li 
                i.fas.fa-check.c1
                | El peso, en el caso de sólidos.
              li 
                i.fas.fa-check.c1
                | El volumen, en el caso de gases (caso del ppb utilizado en calidad del aire).
            p Así, 5 ppb de NO equivale a decir que existen 5 unidades de volumen de NO por cada billón de unidades de volumen de aire, entendiendo billón como 1000 millones.

            p Por ejemplo, 5 ppb de NO serían 5 litros de NO en cada mil millones de litros de aire. 

            .row.justify-content-center.align-items-center          
              .col-auto
                .bg1.brad.p-4
                  img.img-a.img-t(src='@/assets/curso/temas/5.svg', alt='')                                        
      .tarjeta.color-acento-botones--borde.p-4(titulo="ppb a microgramos/metro<br> cúbico (µg/m3)")
        .row.justify-content-center.align-items-center
          .col-12
            h5 ppb a microgramos/metro cúbico (µg/m3):

            p Para transformar N ppb de un gas a µg/m3 en determinadas condiciones de presión y temperatura, se realiza de la siguiente forma: 

            .row.justify-content-center.align-items-center          
              .col-12
                .bg1.brad.p-4
                  img.img-a.img-t.mb-4(src='@/assets/curso/temas/6.svg', alt='') 

                  p Donde M es la masa molecular del gas en cuestión, y V(atm,Tª) el volumen de un mol del gas a determinada presión (P) en atmósferas y temperatura (Tª) en Kelvin. 

                  p A continuación, se presenta un ejemplo tomado de la página web Troposfera.org (s. f.) que se encuentra en referencias para que analice la información.

                  h5.mb-4 Ejemplo:

                  h5.mb-4 Para transformar 5 ppb de SO2 (M = 64 uma) a µg/m3 en condiciones de 1 atmósfera de presión y 20ºC (273'15+20= 293'15 K) de temperatura, sería:

                  h5.mb-4 1. Calculamos V(atm,Tª)= V(1, 293'15)= (R*Tª)/P= (0,082*293'15)/1= 24'04 litros (suponiendo comportamiento ideal de los gases).

                  h5.mb-4 2. Hacemos el cambio de unidades con (a): 5 ppb de SO2*(64/24'04) = 13'31 µg/m3 

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Sistemas de unidades 

    p(data-aos="fade-down").mb-5 Para analizar el Sistema de Unidades es necesario revisar el Sistema Internacional de las mismas, por lo que a continuación se precisa el concepto de medición.                                                    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        h5(data-aos="fade-down") ¿Qué es medir?

        p(data-aos="fade-down") Así como cuando se cuenta, al medir lo que se está haciendo es comparar dos cantidades.  Por ejemplo, cuando se necesita saber cuál es la longitud de una ventana, se hace comparándola con la longitud de una regla o metro.

        p(data-aos="fade-down") Para entenderlo de otro modo, #[b.c1 medir es seccionar determinada cantidad en partes iguales usando otra cantidad que sirva de referencia para compararla y contarla.]  Por ejemplo, suponga que se quiere saber la cantidad de agua con la que se llena una piscina. Para ello, no se tiene más que un balde o cubeta y una fuente de agua. En ese caso, lo que se haría sería empezar a llenar cubetas de agua y vaciar su cantidad dentro de la piscina varias veces. 

          .cajon.color-acento-contenido.mt-4(data-aos="flip-down").p-5.mb-0
            p.mb-0(data-aos="fade-down") Al contar el número de veces que se ha llenado y vaciado la cubeta dentro de la piscina, también se habrá hecho una medición de cuánta agua necesita la piscina para quedar llena. Teniendo en cuenta lo anterior, se puede revisar otro concepto importante, las unidades de medición, por lo que se le invita a seguir leyendo la información que a continuación se le presenta.
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Unidades de medición

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Sería muy complejo que todos midieran las cantidades, las longitudes, los pesos, etc., con lo que les pareciera, ya que cada cual tendría un parámetro distinto y no habría un acuerdo universal para establecer cálculos precisos sobre algo.  Es por ello que se crearon las unidades de medida, con el fin de tener un parámetro de referencia sobre las cantidades, magnitudes y demás, en todo el mundo. Por lo anterior, se hace necesario conocer este Sistema Internacional.        

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 El Sistema Internacional de Unidades y notación científica 

    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')

    p(data-aos="fade-down").mb-5 El Sistema Internacional de Unidades se basa en dos tipos de magnitudes, las físicas, las cuales se muestran en la siguiente infografía interactiva didáctica. Para acceder, revise el siguiente objeto de aprendizaje:

    .bg2.p-4.pb-0    
      .row.justify-content-center.align-items-end          
        .col-lg-5
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')

        .col-lg-5.pb-4
          p(data-aos="fade-down") También existen las derivadas, que son las restantes, y que pueden ser expresadas con una combinación matemática de las anteriores. Para conocer las más frecuentes, revise el siguiente listado:
          .row.justify-content-center.align-items-start          
            .col-lg-4
              ul.lista-ul.mb-0(data-aos="fade-down")
                li 
                  i.fas.fa-check.c1
                  | Superficie
                li 
                  i.fas.fa-check.c1
                  | Volumen
                li 
                  i.fas.fa-check.c1
                  | Velocidad
                li 
                  i.fas.fa-check.c1
                  | Aceleración
                li 
                  i.fas.fa-check.c1
                  | Densidad
                li 
                  i.fas.fa-check.c1
                  | Frecuencia 
                li 
                  i.fas.fa-check.c1
                  | Periodo
                li 
                  i.fas.fa-check.c1
                  | Fuerza
                li 
                  i.fas.fa-check.c1
                  | Presión             
            .col-lg-6
              ul.lista-ul.mb-0(data-aos="fade-down")
                li 
                  i.fas.fa-check.c1
                  | Trabajo
                li 
                  i.fas.fa-check.c1
                  | Calor
                li 
                  i.fas.fa-check.c1
                  | Energía
                li 
                  i.fas.fa-check.c1
                  | Potencia
                li 
                  i.fas.fa-check.c1
                  | Carga eléctrica
                li 
                  i.fas.fa-check.c1
                  | Diferencia de potencial
                li 
                  i.fas.fa-check.c1
                  | Potencial eléctrico
                li 
                  i.fas.fa-check.c1
                  | Resistencia eléctrica  

    .row.justify-content-center.align-items-center.my-5           
      .col-auto.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.svg') 
      .col.my-3
        p(data-aos="fade-down").mb-0 También es importante estudiar el Sistema de Unidades, tales como: CGS, MKS, SI, por sus siglas en inglés. Un Sistema de Unidades es un conjunto consistente de unidades básicas de medida a partir del cual se derivan el resto. Existen varios sistemas de unidades, los cuales se describen en el siguiente objeto de aprendizaje. Para acceder al contenido haga clic sobre cada pestaña.  

    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-9 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg3 ")
          .row.justify-content-center.align-items-center(titulo="Sistema Internacional de Unidades o SI") 
            .col-11
              p #[b Es el sistema más usado. Sus unidades básicas son:] el metro, el kilogramo, el segundo, el ampere, el kelvin, la candela y el mol.
              img.img-a.img-t(src='@/assets/curso/temas/14.svg') 
          .row.justify-content-center.align-items-center(titulo="Sistema Métrico Decimal") 
            .col-11
              p Primer sistema unificado de medidas.

              .tabla-a.color-acento-contenido.mt-2
                  table.mb-2
                      thead.tab-x
                        tr.th-1.text-center.tab-x
                          th Magnitud 
                          th Unidad
                          th Símbolo  
              
                      tbody.text-center
                        tr.bgt1
                          td Longitud 
                          td Metro
                          td m   
                        tr.bgt1
                          td Superficie 
                          td Metro cuadrado
                          td m#[sup 2]
                        tr.bgt1
                          td Volumen 
                          td Metro cúbico
                          td m#[sup 3]  
                        tr.bgt1
                          td Masa 
                          td Kilogramo
                          td kg
                        tr.bgt1
                          td Capacidad 
                          td Litro
                          td l  
                        tr.bgt1
                          td Tiempo 
                          td Segundo
                          td s
                        tr.bgt1
                          td Ángulos 
                          td Grado
                          td °
                        tr.bgt1
                          td Temperatura 
                          td Grado centígrado
                          td °                                                                                               
          .row.justify-content-center.align-items-center(titulo="Sistema Cegesimal o CGS") 
            .col-11
              p Denominado así porque sus unidades básicas son: el centímetro, el gramo y el segundo. 
              .tabla-a.color-acento-contenido.mt-2
                  table.mb-2
                      thead.tab-x
                        tr.th-1.text-center.tab-x
                          th  
                          th Magnitud 
                          th Unidad
                          th Símbolo  
              
                      tbody.text-center
                        tr.bgt1
                          td CGS 
                          td Aceleración  
                          td gal
                          td Gal
                        tr.bgt1
                          td CGS 
                          td Fuerza 
                          td dina
                          td dyn
                        tr.bgt1
                          td CGS 
                          td Energía 
                          td ergio
                          td erg
                        tr.bgt1
                          td CGS 
                          td Potencia 
                          td ergio por segundo
                          td 
                        tr.bgt1
                          td CGS 
                          td Presión 
                          td baria
                          td baria
                        tr.bgt1
                          td CGS 
                          td Viscosidad dinámica 
                          td poise
                          td P
                        tr.bgt1
                          td CGS 
                          td Viscosidad cinemática 
                          td stokes
                          td St
          .row.justify-content-center.align-items-center(titulo="Sistema Técnico de Unidades") 
            .col-11
              p Derivado del sistema métrico con unidades del anterior. Actualmente, este sistema está en desuso. 

              .tabla-a.color-acento-contenido.mt-2
                  table.mb-2
                      thead.tab-x
                        tr.th-1.text-center.tab-x
                          th  
                          th Magnitud 
                          th Unidad
                          th Símbolo  
              
                      tbody.text-center
                        tr.bgt1
                          td CGS 
                          td Aceleración  
                          td gal
                          td Gal
                        tr.bgt1
                          td CGS 
                          td Fuerza 
                          td dina
                          td dyn
                        tr.bgt1
                          td CGS 
                          td Energía 
                          td ergio
                          td erg
                        tr.bgt1
                          td CGS 
                          td Potencia 
                          td ergio por segundo
                          td 
                        tr.bgt1
                          td CGS 
                          td Presión 
                          td baria
                          td baria
                        tr.bgt1
                          td CGS 
                          td Viscosidad dinámica 
                          td poise
                          td P
                        tr.bgt1
                          td CGS 
                          td Viscosidad cinemática 
                          td stokes
                          td St              
          .row.justify-content-center.align-items-center(titulo="Sistema Inglés") 
            .col-11
              p Este es aún utilizado en los países anglosajones, principalmente, Estados Unidos. Muchos de ellos lo están intentando cambiar por el Sistema Internacional de Medidas. 
              .tabla-a.color-acento-contenido.mt-2
                  table.mb-2
                      thead.tab-x
                        tr.th-1.text-center.tab-x
                          th Magnitud 
                          th Unidad sistema inglés
                          th Equivalencia con si  
                      tbody.text-center.bgt1                          
                        tr
                          td(rowspan='4') Longitud
                          td Pulgada
                          td 1in = 2.54 cm
                        tr
                          td Pie
                          td 1 pie = 30.48 cm
                        tr
                          td Yarda
                          td 1 yd = 0.914 m
                        tr
                          td mila
                          td 1 mi = 1.609 km
                        tr
                          td(rowspan='3') Masa
                          td Libra
                          td 1 lb = 453.6 g
                        tr
                          td Onza
                          td 1 oz = 28.35 g
                        tr
                          td Tonelada
                          td 1 t = 907.2 kg
                        tr
                          td(rowspan='3') Volumen
                          td Galón
                          td 1 gal = 3.785 L
                        tr
                          td Cuarto
                          td 1 qt = 946.4 ml
                        tr
                          td Pie cúbico
                          td 1 pie#[sup 3]  = 28.32 L              

      .col-lg-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.png') 

    p(data-aos="fade-down") En el desarrollo del contenido, se han venido conociendo algunos conceptos de unidades de medida que son usados a nivel internacional. Ahora, conozca cuáles son las unidades más usadas en el país. En Colombia, el Instituto Nacional de Metrología ha establecido que se debe utilizar el Sistema Internacional de Unidades.

    .row.justify-content-center.align-items-center.bg4.p-4.mb-5           
      .col-lg-5
        p(data-aos="fade-down").mb-0 #[b.c1 El Sistema Internacional de Unidades] (abreviado SI del francés: Le Système International d’Unités), también denominado #[b.c1 Sistema Internacional de Medidas], es el nombre que recibe el sistema de unidades que se usa en la mayoría de los países y es la forma actual del Sistema Métrico Decimal.
      .col-lg-2.p-0
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.svg') 

      .col-lg-5
        p(data-aos="fade-down").mb-0 #[b.c1 El SI también es conocido como Sistema Métrico], especialmente en las naciones en las que aún no se ha implantado para su uso cotidiano. Este fue creado en 1960 por la #[b.c1 Conferencia General de Pesos y Medidas], que inicialmente definió seis unidades físicas básicas.  En 1971 se añadió la séptima unidad básica, el mol. 


    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Una de las principales características, que constituye la gran ventaja del SI, es que sus unidades están basadas en fenómenos físicos fundamentales]. La única excepción es la unidad de la magnitud masa, el kilogramo, que está definida como la masa del prototipo internacional del kilogramo o aquel cilindro de platino e iridio almacenado en una caja fuerte de la Oficina Internacional de Pesos y Medidas, según se menciona en el documento Cursos de Química analítica de la Universidad de Panamá (s. f.) 

    p(data-aos="fade-down").mb-5 Las unidades del SI son la referencia internacional de las indicaciones de los instrumentos de medida y a las que están referidas a través de una cadena ininterrumpida de calibraciones o comparaciones. Esto permite alcanzar la equivalencia de las medidas realizadas por instrumentos similares, utilizados y calibrados en lugares apartados y por ende asegurar, sin la necesidad de ensayos y mediciones duplicadas, el cumplimiento de las características de los objetos que circulan en el comercio internacional y su intercambiabilidad.  

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.5 Conversiones de unidades

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.svg') 
      .col-lg-8
        .cajon.color-acento-contenido(data-aos="flip-down").p-4.mb-4
          p.mb-0(data-aos="fade-down") La conversión de unidades es la transformación de una unidad en otra. Un método para realizar este proceso es con el uso de los factores de conversión y las muy útiles tablas de conversión. Bastaría multiplicar por una fracción (factor de conversión) y el resultado es otra medida equivalente en la que han cambiado las unidades. 

        p(data-aos="fade-down") Cuando el cambio de unidades implica la transformación de varias unidades, se pueden utilizar varios factores de conversión, uno tras otro, de forma que el resultado final será la medida equivalente en las unidades que se busca. Por ejemplo, si se quiere pasar 8 metros a yardas, lo único que se tiene que hacer es multiplicar 8(0.914 yd) = 7.312 yd.   

    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.6 Factor de conversión

    .row.justify-content-center.align-items-end.mb-5 
      .col-lg-6
        .cajon.color-acento-contenido(data-aos="flip-down").p-4.mb-0
          p.mb-0(data-aos="fade-down") El factor de conversión es una fracción en la que el numerador y el denominador son medidas iguales expresadas en unidades distintas, de tal manera que esta fracción vale la unidad. Método efectivo para cambio de unidades y resolución de ejercicios sencillos dejando de utilizar la regla de tres. 

      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.png')

    Separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.7 Cifras significativas

    p(data-aos="fade-down").mb-5 Las cifras pueden ser: significativas o no significativas. 

    .row.mb-5
      .col-lg-6(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/20.svg' alt='AvatarTop')
          .tarjeta.bg6.j
            .p-4
              h5.mb-0 Las significativas son aquellas que tienen significado real o aportan alguna información. 

      .col-lg-6(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/20.svg' alt='AvatarTop')
          .tarjeta.bg6.j
            .p-4
              h5.mb-0 Las cifras no significativas aparecen como resultado de los cálculos y no tienen significado alguno. 

    .row.justify-content-center.align-items-end.mb-5 
      .col-lg-7
        p(data-aos="fade-down") Las cifras significativas de un número vienen determinadas por su error. Son aquellas que ocupan una posición igual o superior al orden o posición del error, según la página web Física I. Laboratorio de Física I (Arias, s. f.)     
        .cajon.color-acento-botones.mt-4(data-aos="flip-down").p-4.mb-4
          p.mb-0(data-aos="fade-down") Por ejemplo, considere una medida de longitud que arroja un valor de 5432.4764 m, con un error de 0.8 m. #[b.c2 El error es, por tanto, del orden de décimas de metro. Es evidente que todas las cifras del número que ocupan una posición menor que las décimas no aportan ninguna información]. 
        p(data-aos="fade-down") En efecto, #[b ¿Qué sentido tiene dar el número con precisión de diezmilésimas si afirmamos que el error es de casi 1 metro?] Las cifras significativas en el número serán, por tanto, las que ocupan la posición de las décimas, unidades, decenas, etc., pero no las centésimas, milésimas o diezmilésimas.
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.png')                       

    .row.justify-content-center.align-items-center.my-5           
      .col-auto.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.png') 
      .col.my-3
        p(data-aos="fade-down").mb-0 #[b Cuando se expresa un número, debe evitarse siempre la utilización de cifras no significativas], puesto que pueden suponer una fuente de confusión. Estos datos deben redondearse de forma que contengan sólo cifras significativas. #[b Se llama redondeo al proceso de eliminación de cifras no significativas de un número].

    Separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.8 Notación científica

    .bg7
      .row.justify-content-center.align-items-end.my-5.pt-3
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png')               
        .col-lg-4.my-3 
          p(data-aos="fade-down") La notación científica (o notación índice estándar) es un modo conciso de representar un número utilizando potencias de base diez. Los números se escriben como un producto: a × 10k, (siendo a un número mayor o igual que 1 y menor que 10, y k un número entero). Esta notación se utiliza para poder expresar más fácilmente números muy grandes o demasiado pequeños.

          p(data-aos="fade-down") La notación científica utiliza un sistema llamado #[b.c1 coma flotante, o de punto flotante] en países de habla inglesa y en algunos hispanohablantes, según se menciona en la página web Pedro probabilidad y estadística (algoestadistica, 2011), por lo cual se invita a revisar la siguiente tabla sobre el tema:
        .col-lg-4.my-3
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            span Notación científica.   
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.svg')      
    
    Separador
    #t_1_9.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.9 Conversión de unidades 

    .row.justify-content-center.align-items-end.mb-4 
      .col-lg-6.my-3
        .cajon.color-acento-contenido(data-aos="flip-down").p-4.mb-4
          p.mb-0(data-aos="fade-down") #[b.c2 Para sacar resultados relacionados con las emisiones resultantes de las fuentes contaminantes se emplean las relacionadas con las concentraciones físicas] . El portal ibero.mx define el término concentración… a la cantidad de soluto disuelta en una cantidad dada de disolvente o de solución. Entre mayor sea la cantidad de soluto disuelta, más concentrada estará la solución. 
        p(data-aos="fade-down") Por otro lado, la misma página menciona que…¨ #[b las unidades de concentración más empleadas son la molaridad, porcentajes, fracción molar, partes por millón, normalidad y molalidad]¨.          
      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png')

    .bg8
      .row.justify-content-center.align-items-end.mb-4 
        .col-lg-6.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.png')        
        .col-lg-6.my-3
          p(data-aos="fade-down") En la siguiente tabla, se resumen las principales unidades de concentración:
          .titulo-sexto.color-acento-contenido
            h5 Tabla 2.
            span Unidades de concentración.   
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg')            


      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          .cajon.color-acento-botones.mt-4(data-aos="flip-down").p-4.mb-4
            p.mb-0(data-aos="fade-down") Es importante tener en cuenta que las unidades de concentración se aplican en las normas ambientales relacionadas con la matriz aire y están dirigidas a una relación masa/volumen expresada en unidades ug/m3 y mg/m3, ¬puesto que #[b.c2 la concentración de los contaminantes expuestos en el aire que se respira presenta minúsculas partículas que fácilmente llegan al sistema respiratorio del ser humano, generando enfermedades respiratorias que se reflejan en cifras impactantes en la mortalidad.] 

      .row.justify-content-center.align-items-end.mb-4 
        .col-lg-6.my-3
          p(data-aos="fade-down") Según el portal El Tiempo (2019), entre las grandes urbes (de más de 14 millones de habitantes) que ha analizado la OMS, la peor tajada del pastel se la llevan Nueva Delhi, El Cairo, Dacca, Bombay, Pekín, Shanghái, Estambul, Buenos Aires y Sao Paulo. Pero si vive en Bogotá o Medellín, se puede encontrar el peor aire de Colombia.
 
          p(data-aos="fade-down") De acuerdo con el último informe del Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM), para el material particulado 2,5, las mayores concentraciones están en las estaciones de monitoreo Carvajal – Sevillana y Kennedy, localizadas en el Distrito Capital; y Tráfico Sur, Tráfico Centro, Universidad Nacional Facultad de Minas, Corporación Lasallista (Caldas) y Casa de Justicia (Itagüí), en el Área Metropolitana del Valle de Aburrá.     
        .col-lg-6.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png')

      p(data-aos="fade-down").mb-5 Como parte de los conceptos que debe aprender, se invita a continuar revisando el siguiente tema.

    .row.justify-content-center.align-items-center        
      .col-lg-10.up
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/31.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Para profundizar en el tema, se invita a revisar la sección de materiales complementarios, donde encontrará el video: Puntaje Nacional Chile (4 abril 2013), denominado “Unidades de concentración” y otros objetos de aprendizaje que son de sumo interés para su aprendizaje.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.c6.fas.fa-file-download     


    Separador
    #t_1_10.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.10 Ley de gases ideales 

    p(data-aos="fade-down").mb-5 Para comprender cómo se comportan los contaminantes que se mezclan en el aire atmosférico, debe entender qué son los gases y cuáles son sus principales características. Para contextualizar el tema, se invita a ver el siguiente contenido audiovisual sobre cómo el área caliente produce efectos en los objetos. 

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10.up
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/31.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Para profundizar en el tema, se le invita a revisar el video que se encuentra en la sección de materiales de apoyo denominado ¨Experimento densidad del aire¨.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.c6.fas.fa-file-download 

    p(data-aos="fade-down") Por otra parte, las más importantes leyes físicas que relaciona la historia sobre el aire atmosférico fueron investigadas por los más importantes científicos que estudiaron las teorías que rigen las principales leyes fisicoquímicas del aire.

    p(data-aos="fade-down").mb-5 Para explicar sus componentes, se debe dar un viaje al pasado para conocer los estudios de los principales protagonistas, los cuales se mencionan en el siguiente objeto de aprendizaje:

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png') 
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png') 
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png')
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png') 

    p(data-aos="fade-down").mb-5 Para profundizar en la investigación de cada uno de estos científicos y conocer cómo afectaron las ciencias posteriormente, se invita a revisar la siguiente información. 

    .row.justify-content-start.mb-5          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Ley de Boyle

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6 
        p(data-aos="fade-down") Nacido en 1627, el menor de los catorce hijos del conde de Cork estudió en las mejores universidades de Europa. Él estableció la química como una ciencia y enunció la primera definición moderna de elemento químico, como sustancia que no es posible descomponer en otras. En 1660, en una obra titulada Sobre la Elasticidad del Aire, anunció su descubrimiento sobre la relación entre el volumen de un gas y su presión, según la página web Educaplus (s. f.-d). 

        p(data-aos="fade-down") Boyle define el comportamiento del aire así:

        h5(data-aos="fade-down") A temperatura constante, el volumen de una masa fija de gas es inversamente proporcional a la presión que este ejerce, es decir, si el volumen aumenta, la presión disminuye, y si la presión aumenta, el volumen disminuye.        
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.png') 

    .bg10
      p.pt-4(data-aos="fade-down") En términos matemáticos se puede expresar como: 

      .row.justify-content-center.align-items-stretch.mb-4           
        .col-lg-3.my-3.bgw.brad.p-4.j
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.svg')                    
        .col-lg-6.my-3
          p(data-aos="fade-down") Donde:
          p(data-aos="fade-down").ps-4 #[b P], es presión
          p(data-aos="fade-down").ps-4 #[b V], es volumen

          p(data-aos="fade-down") Suponga que tiene un cierto volumen de gas V1 que se encuentra a una presión P1 al comienzo del experimento. Si se varía el volumen de gas hasta un nuevo valor V2, entonces la presión cambiará a P2, y se cumplirá:                          
        .col-lg-3.my-3.bgw.brad.p-4.j
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.svg')                    
      p(data-aos="fade-down") Lo anterior se muestra en el documento del Departamento de Fisiología de la Facultad de Medicina de la Universidad Nacional Autónoma de México (2019), que habla sobre las Leyes generales de los gases: su aplicación en Fisiología. 

      .row.justify-content-center.align-items-center.my-5        
        .col-lg-10.up
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/38.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Para profundizar en el tema, puede revisar las referencias o buscar por su cuenta en una página de Internet con contenido de alta calidad educativa el tema.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      span Descargar
                      i.c6.fas.fa-file-download 

    .row.justify-content-start.mb-5.pt-5          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Ley de Charles

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6 
        p(data-aos="fade-down") Jacques Alexandre César Charles, químico, físico y aeronauta francés, nació en Beaugency (Loiret) el 2 de noviembre de 1746 y falleció en París el 7 de abril de 1823. Al conocer los experimentos de los hermanos Montgolfier con su globo aerostático, él propuso la utilización del hidrógeno para elevarlo porque era el gas más ligero que se conocía en ese momento, por ser más eficiente para mantenerlo en el aire.

        p(data-aos="fade-down") En 1783, construyó los primeros globos de hidrógeno y subió él mismo hasta una altura de unos 2 km, experiencia que supuso la locura por la aeronáutica que se desató en la época. Su descubrimiento más importante fue, en realidad, un redescubrimiento, ya que, en 1787, retomó un trabajo anterior de Montons y demostró que los gases se expanden de la misma manera al someterlos a un mismo incremento de temperatura, según la información publicada en la web Educaplus (s. f.-b).       
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.png')                       


    .row.justify-content-center.align-items-center.mb-5  
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.png')                 
      .col-lg-6 
        p(data-aos="fade-down") Según lo estudiado por Charles, el comportamiento del aire muestra lo siguiente:

        .color-fondo-text.bg-color.mb-4(data-aos="fade-down")
          .color-fondo-text__texto.p-2 
            p texto #[b.c2 El volumen (V) de un gas es directamente proporcional a su temperatura absoluta (T), considerando una presión constante]. A nivel pulmonar se encuentra una mayor temperatura que en el medio ambiente, por lo que los gases inhalados en el aire se expandirán, aumentando así el volumen pulmonar. 
        .bgn.p-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.svg')                 

    p(data-aos="fade-down") Esta ley no afecta la ventilación tanto como lo hace la Ley de Boyle, pero tiene un efecto. 

    p(data-aos="fade-down") Considere un ejemplo que se encuentra en el documento de la UNAM sobre: Leyes generales de los gases: ¨ …cómo se respira en un día frío (-10º C) y la diferencia en un día cálido (37º C). En el caso del día frío el aire se expande mientras pasa por el sistema respiratorio y se calienta hasta 37º C. Ahora bien, calcule con la fórmula de arriba. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.my-3(data-aos="fade-left")
        .bgg.brad.p-4
          .row.justify-content-center.align-items-center           
            .col-auto.my-3 
              img.img-a.img-t.rot1(src='@/assets/curso/temas/45.png') 
            .col.my-3.text-white
              h5(data-aos="fade-down").mb-3 REFLEXIÓN
              p(data-aos="fade-down").mb-0 ¿Qué volumen de aire tiene que tomar para llenar sus pulmones con 500 ml en el caso de un día frío o un día cálido? ¨              

      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/44.png')  

    .bg11
      .row.justify-content-start.mb-5.pt-5          
        .col-auto.bg9.p-3(data-aos="flip-down")
          h5.mb-0(data-aos="fade-down") Ley de Gay Lussac 
   

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6.my-3
          p(data-aos="fade-down") Químico y físico francés, nacido el 6 de diciembre de 1778, en Saint-Léonard-de-Noblat, y fallecido el 9 de mayo de 1850, en París. En 1802, publicó los resultados de sus experimentos, que ahora se conocen como Ley de Gay-Lussac. Esta ley establece que, a volumen constante, la presión de una masa fija de un gas dado es directamente proporcional a la temperatura Kelvin.            
          .cajon.color-acento-botones(data-aos="flip-down").p-4
            p.mb-0(data-aos="fade-down") #[b En el campo de la física, se llevaron a cabo, en 1804, dos ascensiones en globo hasta altitudes de 7.000 metros, en las que se estudió la composición de las capas altas de la atmósfera y el magnetismo terrestre]. Entre 1805 y 1808, se dio a conocer #[b la Ley de los volúmenes de combinación, que afirma que los volúmenes de los gases que intervienen en una reacción química (tanto de reactivos como de productos) están en la proporción de números enteros sencillos]. 
        .col-lg-6.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.png')  

      p(data-aos="fade-down") En relación con estos estudios, investigó, junto con el naturalista alemán Alexander Von Humboldt, la composición del agua, descubriendo que se compone de dos partes de hidrógeno por una de oxígeno, según se evidencia en la página web Educaplus (s. f.-c), la cual puede consultar en las referencias de este documento.

      p(data-aos="fade-down").mb-5 Según lo estudiado por Gay Lussac, se define el comportamiento de la siguiente forma: 
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10.bgw.brad.p-4
          .row.justify-content-center.align-items-center         
            .col-lg-8
              p.mb-0.j(data-aos="fade-down") A un volumen constante, la presión de un gas (P) es directamente proporcional a su temperatura (T). Como ya se mencionó, la temperatura pulmonar provocará que los gases inhalados tengan mayor presión.                             
            .col-lg-4 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.svg')  
      .row.justify-content-center.align-items-center.mb-5        
        .col-lg-10.up
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/38.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Si está interesado en profundizar en el tema, se invita a revisar la sección de contenidos complementarios, en la cual se encuentra el video con el título: leyes generales de los gases, su aplicación en fisiología, un documento de la UNAM (2019).
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      span Descargar
                      i.c6.fas.fa-file-download 

    .row.justify-content-start.pt-5          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Ley de Avogadro

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.my-3
        p(data-aos="fade-down") Químico y físico italiano. Nació el 9 de junio de 1776 en Turín, Italia, y murió el 9 de julio de 1856.           
        .cajon.color-acento-contenido(data-aos="flip-down").p-4.mb-4
          p.mb-0(data-aos="fade-down") Reflexionó sobre el descubrimiento de Charles (publicado por Gay -Lussac) que todos los gases se dilatan en la misma proporción con la temperatura. Decidió que esto debía implicar que cualquier gas a una temperatura dada debía contener el mismo número de partículas por unidad de volumen.

        p(data-aos="fade-down") Avogadro tuvo la precaución de especificar que las partículas no tenían por qué ser átomos individuales, sino que podían ser combinaciones de átomos (lo que hoy llamamos moléculas). Con esta consideración, pudo explicar con facilidad la ley de la combinación de volúmenes que había sido anunciada por Gay-Lussac y, basándose en ella, dedujo que el oxígeno era 16 veces más pesado que el hidrógeno y no ocho, como defendía Dalton en aquella época.

        p(data-aos="fade-down") Por lo anterior, el científico enunció la siguiente hipótesis: iguales volúmenes de gases distintos, contienen el mismo número de moléculas, si ambos se encuentran a igual temperatura y presión.

        p(data-aos="fade-down") Ese número es equivalente a 6,022 * 10, el cual es constante, según se publicó en 1811.  Sin embargo, la Ley de Avogadro permite explicar por qué los gases se combinan en proporciones simples.            
      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/49.png') 

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10.up
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/50.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Para profundizar en el tema, puede ver en referencias la página web de Educaplus sobre la Biografía de Avogadro (Educaplus.org, s. f.-a).

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3
        p(data-aos="fade-down") Avogadro descubre en 1811 que, a presión y temperaturas constantes, la misma cantidad de gas tiene el mismo volumen, independientemente del elemento químico que lo forme. El volumen (V) es directamente proporcional a la cantidad de partículas de gas (n), independiente del elemento químico que forme el gas.
      .col-lg-3.my-3                  
        .cajon.color-acento-contenido(data-aos="flip-down").p-3
          p.mb-4(data-aos="fade-down") Por lo tanto:  
          img.img-a.img-t.mb-0(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg') 
          
      .col-lg-4.my-3
        p(data-aos="fade-down") Lo cual tiene como consecuencia que:      
        ul.lista-ul.mb-0(data-aos="fade-down")
          li 
            i.fas.fa-check.c1
            | Si aumenta la cantidad de gas, aumenta el volumen.
          li 
            i.fas.fa-check.c1
            | Si disminuye la cantidad de gas, disminuye el volumen. 

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10.up
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/50.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Para aprender más sobre las Leyes de los gases, puede consultar la página web colegios (Colegio Cristiano Jireth, s. f.) que se encuentra en las referencias del documento o hacer búsquedas por su cuenta en páginas de alta calidad académica en Internet.                            
              
    p(data-aos="fade-down").mb-5.text-center A continuación, se muestra la figura sobre la Ley de Avogadro.  
    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/52.png') 

    .row.justify-content-center.align-items-center.bg12.p-4.mb-5           
      .col-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/54.png') 
      .col-lg-5
        p(data-aos="fade-down").mb-0 Por la relación de las leyes anteriores, se podría concluir que la Ley de los Gases Ideales se puede incluir en una ecuación, la cual se expresa de la siguiente manera:      
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.svg') 

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10.up
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/31.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Para profundizar en el tema, se invita a revisar la sección de materiales complementarios, donde encontrará el video: Puntaje Nacional Chile (4 abril 2013), denominado “Unidades de concentración” y otros objetos de aprendizaje que son de sumo interés para su aprendizaje.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.c6.fas.fa-file-download   

    .bg13
      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-4
          p(data-aos="fade-down") Teniendo en cuenta las leyes que se han visto en esta unidad, se puede concluir, #[b que se cumplen cuando se trabaja a bajas presiones y temperaturas moderadas, según muestra la siguiente tabla:]    
        .col-lg-8    
          .titulo-sexto.color-acento-contenido
            h5 Tabla 3.
            span Propiedades constantes.   
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.svg')        

      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-4
          .color-fondo-text1.bg-color.mb-4(data-aos="fade-down")
            .color-fondo-text__texto1.p-2 
              p #[b Cuando estas leyes se combinan en una sola ecuación, se obtiene la denominada ecuación general de los gases ideales: P V = n R T, donde la nueva constante de proporcionalidad se denomina R, constante universal de los gases ideales, que tiene el mismo valor para todas las sustancias gaseosas]. El valor numérico de R dependerá de las unidades en las que se trabajen las otras propiedades, P, V, T y n. 
        .col-lg-8    
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/58.png')  

    p(data-aos="fade-down").mb-5.pt-5 En consecuencia, se debe tener cuidado al elegir el valor de R que corresponda a los cálculos que se están realizando, así:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10    
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Comportamiento ideal de los gases.     
        .tabla-a.color-acento-contenido.mt-2
          table.mb-2
              thead.tab-x
                tr.th-1.text-center.tab-x
                  th Valor de R  
                  th Unidades
                  th Observaciones  
              tbody              
                tr
                  td.text-center 0,082
                  td.text-center 
                    img.img-a.img-t(src='@/assets/curso/temas/59.svg')  

                  td(rowspan='3') Los gases tienen un comportamiento ideal cuando se encuentran a bajas presiones y temperaturas moderadas, en las cuales se mueven lo suficientemente alejadas unas de las otras, de modo que se pueda considerar que sus moléculas no interactúan entre sí, (no hay acción de las fuerzas intermoleculares).
                tr
                  td.text-center 8,314
                  td.text-center 
                    img.img-a.img-t(src='@/assets/curso/temas/60.svg')  

                tr
                  td.text-center 1,987
                  td.text-center 
                    img.img-a.img-t(src='@/assets/curso/temas/61.svg') 


    .row.justify-content-center.align-items-center.bg14.p-4.pb-0.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.png') 
      .col-lg-8.mt-4
        p(data-aos="fade-down") Como se ha observado, son cuatro (4) las propiedades que definen el estado o las condiciones en las que se encuentra una sustancia en estado gaseoso:
        ul.lista-ul(data-aos="fade-down")
          li 
            i.fas.fa-check.c1
            | La cantidad de sustancia o número de moles, n.
          li 
            i.fas.fa-check.c1
            | La presión que ejercen sus moléculas, P.
          li 
            i.fas.fa-check.c1
            | La temperatura a la que se encuentra, T.
          li 
            i.fas.fa-check.c1
            | El volumen que ocupa, V.                    
        p(data-aos="fade-down").mb-0 Como se ha observado, son cuatro (4) las propiedades que definen el estado o las condiciones en las que se encuentra una sustancia en estado gaseoso: 

    p(data-aos="fade-down") A continuación, se tocará el tema "#[b Densidad y masa molar de un gas ideal]":

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6.my-3
        p(data-aos="fade-down") La ecuación de los gases ideales permite determinar la densidad, d, y la masa molar, M, de un determinado gas ideal. Según las definiciones de densidad, d, el número de moles, n, y de la ecuación del gas ideal, se tiene la siguiente información (revise la tabla 5): 
        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-8   
            .titulo-sexto.color-acento-contenido
              h5 Tabla 5.
              span Ecuación de gases ideales.    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/65.svg') 
        p(data-aos="fade-down") Para continuar aprendiendo sobre el tema, se le invita a revisar el siguiente punto: ¨Diagrama de entradas y salidas de la contaminación atmosférica¨.               
      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/64.png') 

    Separador
    #t_1_11.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.11 Diagrama de entradas y salidas de la contaminación atmosférica
    p(data-aos="fade-down").mb-5 Para valorar la estimación de los contaminantes que emite una fuente, es importante reconocer el proceso y/o actividad que produce la contaminación. Según el Protocolo para el Control y Vigilancia de la Contaminación Atmosférica Generada por Fuentes Fijas, se definen una serie de pasos importantes para establecer tanto las entradas como las salidas provenientes de un proceso. Para lo anterior, se le invita a revisar el siguiente objeto de aprendizaje:

    .tarjeta.tarjeta-verde.p-4.mb-5(data-aos="fade-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Paso 1
            h5 Información general de la fuente fija 
            p Para realizarla es necesario describir de manera general las actividades productivas que se realizan y obtener la información necesaria para identificar y clasificar la fuente fija de acuerdo con lo establecido en la Resolución 909 de 2008 o la que la adicione, modifique o sustituya.
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/67.png', alt='')  
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Paso 2
            h5 Descripción de las instalaciones 
            p Para hacerla, se requiere una descripción detallada del proceso productivo, incluyendo una explicación clara de las actividades realizadas (lo cual se puede realizar a través de un plano de distribución de planta), de los parámetros de emisión y de las chimeneas (si aplica).
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/68.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Paso 3
            h5 Información del proceso 
            p a información sobre los procesos que generan emisiones debe incluir un diagrama de flujo de cada uno de los procesos que están siendo analizados, así como su descripción. Se deben incluir los equipos de control de emisiones al aire que se utilizan en el proceso. 

            p Adicionalmente, se deben incluir variables del proceso, como: materias primas e insumos utilizados, la máxima tasa de operación de los equipos, las tasas máximas, normal y promedio de operación de los equipos, la caracterización y tasa de alimentación del combustible que utiliza y las horas de operación diarias, semanales y mensuales. En caso tal que el proceso se realice por lotes o cochadas (tipo batch), es necesario suministrar información sobre la duración y el número de lotes por día, por semana o por mes.
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/69.svg', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Paso 4
            h5 Descripción de la fuente o fuentes de emisión 
            p Se debe realizar una descripción detallada de la fuente de emisión, comenzando por las generalidades del sector, según referencias bibliográficas nacionales o internacionales, incluyendo una explicación detallada de la fuente de emisión, teniendo en cuenta la tecnología, las características de operación y mantenimiento, de acuerdo con lo establecido en la ficha o manuales técnicos de los equipos. 

            p Además, es necesario explicar los procesos productivos y los mecanismos mediante los cuales se generan las emisiones.
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/70.png', alt='') 

    p(data-aos="fade-down").mb-5 Teniendo en cuenta los pasos anteriormente expuestos, es importante construir un diagrama de procesos en la organización, en el que se evidencien las entradas y las salidas que resultan de un proceso productivo, teniendo en cuenta que la Guía Práctica para la Gestión Ambiental Empresarial (2008) resalta que es vital conocer los conceptos asociados, los cuales se mencionan a continuación:

    .titulo-sexto.color-acento-contenido
      h5 Figura 11.
      span Procesos Organizacionales.   

    .bg15.p-5
      ImagenInfografica.color-acento-contenido
        template(v-slot:imagen)
          figure
            img.img-a.img-t(src='@/assets/curso/temas/71.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="28.5%" y="100%" numero="+")
          .h5.mb-2 Entrada
          p Son los insumos, las materias primas y los recursos que al someterse a procesos de transformación darán como resultado un producto, un servicio o una entrada para otra actividad.       
        .tarjeta.color-secundario.p-3(x="46.5%" y="0%" numero="+")
          .h5.mb-2 Proceso 
          p Conjunto de actividades que toman una entrada, la transforman y generan como resultado un producto o servicio.  
        .tarjeta.color-primario1.p-3(x="70.2%" y="100%" numero="+")
          .h5.mb-2 Salida
          p Son los productos, servicios, residuos, emisiones o subproductos que resultan de cada actividad en un proceso productivo.    

    p(data-aos="fade-down").my-5 El diagrama de procesos es la representación de cada una de las etapas del proceso productivo. Se   construye a través de bloques secuenciales que relacionan las actividades, las entradas y las salidas. Como ejemplo, se puede observar el diagrama de entradas y salidas de un proceso productivo relacionado con la industria metalmecánica:

    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/72.svg')

    .row.justify-content-center.align-items-center        
      .col-lg-10.up
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/31.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Para contextualizar el tema, puede consultar el siguiente recurso audiovisual que se encuentra en la sección de contenidos complementarios en formato de video, denominado Evaluación de impacto ambiental - diagramas de proceso. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.c6.fas.fa-file-download  

        p(data-aos="fade-down").mt-5 En conclusión, se puede observar que todo proceso productivo puede generar emisiones a la atmósfera, por lo cual es necesario hacer un análisis completo y detallado de estas, con el fin de reducir el impacto en el medio ambiente y en la calidad de vida del ser humano. A continuación, se invita a continuar su aprendizaje sobre el tema.                            

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
