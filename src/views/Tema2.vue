<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Cálculo de emisiones
      
    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/73.png')

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8.bg16.p-5
        p(data-aos="fade-down") Cuando de mediciones de contaminantes en las fuentes fijas puntuales se trata, estas se realizan directamente en los ductos de emisión o chimeneas.  En este tipo de mediciones, se emplean técnicas tanto directas como indirectas, sin embargo, los muestreos en chimeneas son los procedimientos más complejos y de más alto riesgo ocupacional que existen en el campo ambiental.
        p(data-aos="fade-down") La medición de las fuentes fijas en Colombia depende específicamente de tres factores importantes para tener en cuenta: 
        .row.justify-content-center.align-items-center     
          .col-auto 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/74.png') 
          .col
            ul.lista-ul.fa-ul.mb-0(data-aos="fade-down")
              li 
                i.fas.fa-check.c1
                | Infraestructura de las instalaciones (fuente de emisión o chimenea).
              li 
                i.fas.fa-check.c1
                | Tipos de contaminantes para monitorear.
              li.mb-0 
                i.fas.fa-check.c1
                | Metodología a emplear.           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/75.png')

    p(data-aos="fade-down").mb-5 El Protocolo para el Control y Vigilancia de la Contaminación Atmosférica generada por fuentes fijas, versión II, define los procedimientos para la medición de las emisiones atmosféricas. Lea los siguientes párrafos para aclarar la idea.

    .bg17.p-4
      .row.justify-content-center.align-items-center        
        .col-lg-3.my-3.mb-md-3.p-0
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png')
        .col-lg-9.my-3
          p.fst-italic(data-aos="fade-down") “Estos procedimientos de evaluación incluyen medición directa, balance de masas y factores de emisión. Durante la evaluación de emisiones contaminantes, se puede emplear una única metodología o se pueden emplear dos o más de ellas para determinar la confiabilidad de la información obtenida en la cuantificación de las emisiones.

          p.fst-italic(data-aos="fade-down") De acuerdo con lo establecido en el Artículo 76 de la Resolución 909 del 5 de junio de 2008 o la que la adicione, modifique o sustituya, el cumplimiento de los estándares se debe determinar mediante medición directa de las emisiones a través del ducto o chimenea que se debe construir en cada fuente fija puntual. 

          p.fst-italic(data-aos="fade-down") En aquellos casos en que por las condiciones físicas de los equipos que hacen parte del proceso que genera la emisión de los contaminantes al aire no sea posible la construcción de un ducto para la descarga de los contaminantes o cuando la construcción del ducto no permita contar con las condiciones para realizar la medición directa se deberá aplicar balance de masas. 

          p.fst-italic.mb-0(data-aos="fade-down") En el caso que no se cuente con la información necesaria para realizar el cálculo de las emisiones por balance de masas (cantidades y caracterización de materiales, consumo de combustibles y la demás información que establece el presente protocolo para la aplicación de dicha metodología) y que se demuestre técnicamente que dicha información no se pueda hallar para el desarrollo de la evaluación de emisiones, se deberá aplicar factores de emisión”. 

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Medición directa 
    p(data-aos="fade-down").mb-5 La Resolución 909 de 2008 y el Protocolo para el Control y Vigilancia de la Contaminación Atmosférica Generada por Fuentes Fijas, versión II, la define como aquella que:
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0.fst-italic “se realiza a través de procedimientos donde se recolecta una muestra (usando equipos muestreadores) para su posterior análisis o mediante el uso de analizadores instrumentales (analizadores en tiempo real).<br><br>El primer procedimiento corresponde a la captura de la muestra en la chimenea o ducto de la fuente, para su posterior análisis en laboratorio. El analizador instrumental es un equipo que mide directamente la concentración de los contaminantes en la chimenea o ducto de emisión y reporta los valores de las emisiones de manera inmediata.     

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10.up
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/50.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 El documento lo puede consultar en la sección de referencias (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2010a, p. 6).    

    .row.justify-content-start.pt-5.mb-4          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Descripción de equipos muestreadores en chimenea  
        
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7 
        p(data-aos="fade-down") Los principales componentes empleados en la determinación de los contaminantes son el muestreador isocinético, el Orsat y el tren de muestras de óxidos de nitrógeno. Cada uno de estos componentes está constituido por varios elementos que son descritos en la siguiente sección.
        h5(data-aos="fade-down") El Muestreo isocinético 
        .row.justify-content-center.align-items-center     
          .col-auto 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/78.png') 
          .col
            p(data-aos="fade-down") Los muestreos isocinéticos son herramientas de gran utilidad que permiten determinar fácilmente el flujo de los contaminantes que se emite a la atmósfera a través de chimeneas o ductos y sistemas de extracción. Su estructura modular está diseñada para el análisis de un amplio rango de compuestos químicos, por medio de métodos estandarizados.  
        h5(data-aos="fade-down") Equipo de muestreo isocinético
        p(data-aos="fade-down") El muestreador isocinético es un equipo dotado con múltiples componentes e instrumentos de medición que garantizan la lectura de variables tales como:  temperatura, presión, humedad y velocidad de los gases en la chimenea. 

        p(data-aos="fade-down") Este equipo tiene la propiedad de tomar las muestras isocinéticamente, constituyéndose en una herramienta indispensable para poder caracterizar las emisiones de una fuente estacionaria. Se divide en 2 partes: tren de muestreo y unidad de control, ambas constituyen el equipo que mide las concentraciones de contaminantes en las chimeneas.                                       
      .col-lg-5
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/77.png')


    TabsB.color-primario.mb-5
      .py-4.py-md-5.bg18(titulo="El tren de muestreo" :icono="require('@/assets/curso/temas/79.svg')")
        .px-5
          .row.justify-content-center.align-items-center          
            .col-lg-8
              p El tren de muestreo cuenta con las siguientes partes:

              .titulo-sexto.color-acento-contenido
                h5 Figura 3.
                span Tren de muestreo.     
              .tabla-a.color-acento-contenido.mt-2
                table.mb-2
                    thead.tab-x.btop
                      tr.th-1.text-center.tab-x
                        th(colspan='2') Partes principales  
                    tbody.bgw              
                      tr
                        td.bright.ps-5
                          ul.lista-ul.fa-ul.mb-0(data-aos="fade-down")
                            li 
                              i.fas.fa-circle.c3
                              | Sonda
                            li 
                              i.fas.fa-circle.c3
                              | Boquilla
                            li 
                              i.fas.fa-circle.c3
                              | Tubo Pitot
                            li 
                              i.fas.fa-circle.c3
                              | Caja calientes                         
                        td
                          ul.lista-ul.fa-ul.mb-0(data-aos="fade-down")
                            li 
                              i.fas.fa-circle.c3
                              | Caja fría
                            li 
                              i.fas.fa-circle.c3
                              | Unidad de Control
                            li 
                              i.fas.fa-circle.c3
                              | Bomba de vacío
                            li 
                              i.fas.fa-circle.c3
                              | Línea de muestra o cordón                               

            .col-lg-4
              img.img-a.img-t(src='@/assets/curso/temas/80.png')


      .py-4.py-md-5.bg18(titulo="La unidad de control" :icono="require('@/assets/curso/temas/79.svg')")
        .px-5
          .row.justify-content-center.align-items-center           
            .col-lg-8
              p La unidad de control es la más importante de este equipo, ya que desde él se monitorean las diferentes variables de medición en la chimenea.
              p Este controlador básicamente consta de #[b un sistema mecánico y automático] que permite ajustar y monitorear temperaturas y ratas de flujo de la muestra de gas para alcanzar una condición de muestreo isocinético. Dentro de la unidad, se encuentran #[b un manómetro diferencial de presión, un indicador y controlador de temperatura, un medidor de gas seco] (DGM) capaz de medir volúmenes dentro del 2 por ciento, y un #[b orificio crítico], que componen el sistema de medición para chimeneas.       

            .col-lg-4
              img.img-a.img-t(src='@/assets/curso/temas/80.png')

    .row.justify-content-start.pt-5.mb-4          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Métodos de medición directa 

    .bg16.p-5
      .row.justify-content-center.align-items-center.mb-4     
        .col-auto.my-3 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/81.png') 
        .col.my-3
          p(data-aos="fade-down").mb-0 Cuando se habla de métodos de medición en fuentes fijas, es importante reconocer que las principales metodologías son adoptadas por medio de los procedimientos que son promulgados por la Agencia de Protección Ambiental de los Estados Unidos, conocida por sus siglas en inglés como la EPA; y en el Código Federal de Regulaciones de los Estados Unidos (CFR) se listan los principales métodos para la aplicación de los protocolos para la medición de fuentes fijas industriales. Por otro lado, en el Protocolo para el Control y Vigilancia de la Contaminación Atmosférica generada por fuentes fijas, versión II, se muestran los más empleados en Colombia.   

      p(data-aos="fade-down").mb-5 A continuación, se presenta un listado de los diferentes métodos que se pueden utilizar en la medición directa. 

      a.boton.me-3.indicador__container(data-aos="zoom-in-left")(
        :href="obtenerLink('/downloads/Metodos_directos.pdf')"
        target="_blank"
        type="application/pdf"
        @mouseover="mostrarIndicador = false"
      )
        span Ver Tabla 6 Métodos directos
        i.fas.fa-file-download
        .indicador--click(v-if="mostrarIndicador")  

      .row.justify-content-center.align-items-center.mt-5        
        .col-lg-10.up
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/50.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Para profundizar en el tema, se invita a revisar el documento del Ministerio de Ambiente, Vivienda y Desarrollo territorial "Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas" (2008, p. 6-9), que se encuentra en la sección de referencias.  

    p(data-aos="fade-down").mt-5 Aquí es importante resaltar que el protocolo da una salvedad con respecto al empleo de estas metodologías, como lo cita: …   

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Los métodos de que trata la tabla anterior, que se utilicen para la realización de mediciones directas que serán los publicados por el #[b Instituto de Hidrología, Meteorología y Estudios Ambientales – IDEAM]. En ningún caso se aceptará cambio o modificación que no esté incluido en los métodos publicados por el IDEAM, como, por ejemplo, el cambio de las especificaciones técnicas de los equipos de medición o las pruebas para verificar su calibración. #[b En caso de que el método no se encuentre publicado por el IDEAM, se deberá utilizar el aprobado o propuesto por la Agencia de Protección Ambiental] de los Estados Unidos US-EPA.
            i.fas.fa-quote-right                 
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/82.png') 

    .row.justify-content-start.pt-5.mb-4          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Infraestructura para la medición directa en fuentes de emisión. 

    p(data-aos="fade-down") Una vez definidos los métodos a emplear para realizar la medición en las fuentes fijas, es importante garantizar que la chimenea cumpla con las condiciones necesarias para la realización de los muestreos para determinar la concentración de los contaminantes tipo criterio que se descargan a la atmósfera, según cita la Resolución 909 de 2008:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/83.png')
      .col-lg-8
        .bg16.p-4.mb-4
          p(data-aos="fade-down").mb-0.fst-italic   “..el Artículo 71 de la Resolución 909 de 2008 o la que la adicione, modifique o sustituya, y con el fin de garantizar que los resultados obtenidos mediante medición directa puedan ser comparados con los límites máximos permisibles establecidos para las fuentes fijas, se debe tener en cuenta que además de seguir los procedimientos establecidos en los métodos, contar con personal profesional y técnicos idóneos, para controlar las variables del proceso, se requiere contar con instalaciones físicas que permitan realizar las mediciones directas”.  
        p(data-aos="fade-down") Teniendo en cuenta esta referencia, la empresa deberá suministrar la infraestructura necesaria para que el personal profesional pueda acceder al sitio o puertos de muestreo con la seguridad apropiada para tal fin. Por ello, el protocolo de fuentes fijas establece las condiciones mínimas a tener en cuenta, que son:
        ul.lista-ul.fa-ul.mb-0(data-aos="fade-down")
          li 
            i.fas.fa-check.c4
            | Deberá suministrar como mínimo puertos de toma de muestra adecuados para los métodos aplicables a la fuente fija”.
          li 
            i.fas.fa-check.c4
            | “En los casos que existan sistemas de control de emisiones, estos deben estar instalados de manera tal que el flujo y la emisión de contaminantes pueda ser determinada con los métodos y procedimientos aplicables y contar con un ducto o chimenea libre de flujo ciclónico durante la realización de las mediciones directas, de acuerdo con lo establecido en los métodos y procedimientos de medición aplicables”.
          li 
            i.fas.fa-check.c4
            | “Plataformas y acceso seguro para realizar la toma de muestra”.
          li 
            i.fas.fa-check.c4
            | “Dispositivos y aditamentos necesarios para la toma de muestra y análisis”. 

    .row.justify-content-start.mb-4          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Instalaciones mínimas 

    p(data-aos="fade-down").mb-5 Según lo establecido en el Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas, toda fuente susceptible de medición para cumplir los estándares establecidos en la Resolución 909 de 2008, como las chimeneas, debe contar como mínimo con las siguientes instalaciones:

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Estándares de la Resolución 909 de 2008. 
    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/84.svg')

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Puertos de muestreo     

    p(data-aos="fade-down") Los puertos de muestreo se convierten en los conductos que se instalan perpendicularmente a la chimenea, los cuales permiten el ingreso del equipo a la chimenea para poder tomar la muestra, así como lo ilustra el protocolo en fuentes fijas en la tabla #[b Instalaciones mínimas para la realización de mediciones directas.]

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span Esquema de los puertos de muestreo (Niples).    
    p(data-aos="fade-down").mb-5 Esquema de la ubicación y dimensiones de los puertos de toma de muestras (Niples)  

    .bg19.mb-5
      .row.justify-content-center.align-items-end.mb-5           
        .col-lg-8
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/86.png')
          p(data-aos="fade-down") Puertos de toma de muestra: El diámetro interno del niple (puerto) debe ser superior a 3 pulgadas para que la sonda empleadas en la medición pueda ser ingresada a la chimenea sin ningún tipo de restricción. Para la determinación De PM10 el diámetro del niple deberá ser mínimo de 6 pulgadas.

          p(data-aos="fade-down").mb-0 La longitud de los niples ubicados en la chimenea debe ser mínimo de 10 cm y deben contar con tapa fácilmente removible para impedir el ingreso de elementos que modifiquen las condiciones físicas internas del ducto; Dicha tapa debe ser revisada y lubricada periódicamente para evitar que se adhiera al niple y cause problemas al momento de la medición. 
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/87.png')
      p(data-aos="fade-down") En los casos que el espesor de la pared de la chimenea sea superior a 10 cm, un orificio con los diámetros mencionados anteriormente, puede ser utilizado como niple.

      p(data-aos="fade-down") Los puertos de toma de muestra deben ubicarse formando un ángulo de 90 grados uno con respecto al otro, para distribuir los puntos de toma de muestra en dos direcciones diferentes. Se debe verificar que los bordes internos de los puertos coincidan con el diámetro interno de la chimenea y no interfieren con el flujo de los gases de salida.

      p(data-aos="fade-down").mb-4 Se debe garantizar que la chimenea o ducto se encuentre libre de flujo ciclónico. La construcción de la chimenea o ducto debe garantizar condiciones de flujo no ciclónico tanto a condiciones de carga bajo como de carga máxima.
      .row.justify-content-center.align-items-center.mt-5        
        .col-lg-10.up
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/50.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Para profundizar en el tema, puede consultar el documento del Ministerio de Ambiente, Vivienda y Desarrollo territorial llamado Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas (2008, p. 21-22), que se encuentra en la sección de referencias.  

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Plataforma de muestreo 

    p(data-aos="fade-down").mb-5 La plataforma es una estructura metálica que proporciona un área segura de trabajo, la cual permite que los trabajadores o personal competente, puedan tomar las muestras de forma segura. Generalmente, rodean la chimenea o parte de ella, para que los equipos que van a estar instalados puedan registrar los datos de las concentraciones que emiten las fuentes a la atmósfera, como lo ilustra el protocolo en fuentes fijas en la tabla #[b Instalaciones mínimas para la realización de mediciones directas.]

    .titulo-sexto.color-acento-contenido
      h5 Figura 4.
      span  Tipo de plataformas de toma de muestras.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/88.png')
      .col-lg-7
        p(data-aos="fade-down") #[b Plataforma segura de medición:] Las dimensiones y ubicación de la plataforma deben permitir una distancia mínima de 1 metro entre el equipo que se utilice para la medición y los obstáculos más cercanos, tales como: paredes o columnas, entre otros. 

        p(data-aos="fade-down") Lo anterior, con el fin de contar con un área libre para la ubicación y manipulación del tren de toma de muestra.

        p(data-aos="fade-down") En los casos en los cuales se tengan obstáculos cercanos y no se pueda garantizar una distancia superior a 1 metro, se deberá utilizar una sonda y extensión flexibles para el desarrollo de la medición.

        p(data-aos="fade-down") La plataforma deberá #[b contar con piso y escaleras firmas y antideslizantes que soporten el peso como mínimo de tres (3) personas y el equipo de toma de muestra]. Esta plataforma deberá estar instalada de manera permanente.

        p(data-aos="fade-down") Se aceptarán plataformas temporales siempre y cuando al ser instaladas cumplan con las condiciones de seguridad y dimensiones establecidas en la tabla.

        p(data-aos="fade-down") La plataforma o zona de medición debe contar con un suministro de energía de 110 voltios con polo a tierra y protección necesaria para evitar cortocircuitos y choques eléctricos.    

    p(data-aos="fade-down") #[b La base de la plataforma] deberá estar a una distancia vertical de los puertos o niples, que permita maniobrar cómodamente los equipos y los dispositivos de toma de muestra (entre 1,2 y 1,6 metros).

    p(data-aos="fade-down") Cuando la plataforma este ubicada a una altura igual o superior a 25 metros, se debe acondicionar un área de descanso o bahía para maniobrar el equipo con mayor facilidad y seguridad.

    p(data-aos="fade-down") Los equipos se pueden subir a través de la escalera de la plataforma o izados desde el suelo hasta la plataforma mediante un sistema tipo "polea", siempre y cuando se garantice que el sistema soporta el peso del equipo y de los dispositivos que hace parte del mismo.

    p(data-aos="fade-down") Se puede usar cualquiera de los siguientes tipos de plataforma.  

    .row.justify-content-center.align-items-center.mt-5        
        .col-lg-10.up
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/50.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Para conocer más del tema, se invita a revisar el documento del Ministerio de Ambiente, Vivienda y Desarrollo Territorial denominado Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas (2008, p.23), el cual se encuentra en la sección de referencias para ser consultado.  

    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.4 Acceso al sitio de muestreo 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/89.png')

      .col-lg-8 
        p(data-aos="fade-down") Cuando se va a realizar el estudio de emisiones, es importante que el acceso al sitio de muestreo cuente con las condiciones de seguridad, como pasamanos, escaleras, barandas y demás infraestructura necesaria para evitar cualquier tipo de accidentes, y que permita el monitoreo de los contaminantes, como lo ilustra el Protocolo en Fuentes Fijas en la tabla #[b Instalaciones mínimas para la realización de mediciones directas.] 
      
    .row.justify-content-center.align-items-center          
      .col-lg-10      
        .tabla-a.color-acento-contenido.mt-2
          table.mb-2
            tbody.bgg1              
              tr 
                td.w-300.bordertab.p-4.text-bold.btab1 Acceso seguro a plataforma de toma de muestras.           
                td.bordertab.p-4 Debe contar con escaleras resistentes y antideslizantes para el acceso del personal responsable de la medición y de los equipos y contar con los dispositivos que permitan la instalación adecuada de los instrumentos de medición, La escalera debe tener como mínimo un ancho de 1 metro y debe contar con baranda de protección (para el caso de escaleras perimetrales la altura de la baranda debe ser mínimo de 1 metro). 

    .bg20
      p(data-aos="fade-down").pt-3.mb-5 La chimenea, o ducto, por donde se descargan los gases contaminantes se convierte en la principal infraestructura necesaria para la medición de las emisiones. Esta puede ser tanto circular como rectangular, y debe cumplir los estándares mínimos establecidos en el método 1 EPA, con el fin de estandarizar las estructuras y la forma de medir sus contaminantes, como lo ilustra el protocolo en fuentes fijas en la tabla Instalaciones mínimas para la realización de mediciones directas.
      .row.justify-content-center.align-items-center.mb-5.bgw.p-4.brad           
        .col-lg-5
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/91.png')

        .col-lg-7
          p(data-aos="fade-down") "El diámetro mínimo de la chimenea deberá ser de 0,30 metros, a menos que se apliquen los métodos alternativos establecidos en este protocolo.

          p(data-aos="fade-down") Para chimeneas con un diámetro interno superior a 2,5 metros se debe disponer de 4 puertos de toma de muestra, a menos que se cuente con condiciones de anclaje y sonda de 11 pies que permita realizar la medición con dos puntos de toma de muestra.

          p(data-aos="fade-down") El ducto o chimenea debe contar con dispositivos de anclaje de la guaya o cadena que soporta el tren de toma de muestra. Estos dispositivos deben estar ubicados como mínimo a 1 metros de la parte central del niple en dirección vertical hacia arriba; se requiere un dispositivo por cada niple para que el tren de toma de muestra pueda ser desplazado a cada uno de los puertos de toma de muestra durante la evaluación de emisiones, tal y como se muestra en la figura.

          p(data-aos="fade-down") En todo momento se debe garantizar que la temperatura exterior del ducto o chimenea permita el desarrollo de la medición, sin poner en riesgo la integridad del personal que la realiza.

          p(data-aos="fade-down") Esquema del ducto y soporte para el equipo de toma de muestra (El esquema no se encuentra a escala por lo que se deben tener en cuenta únicamente como referencia las dimensiones acotadas)." 
      .row.justify-content-center.align-items-center.mt-4        
          .col-lg-10.up
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/50.png")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-0 Para profundizar en el tema de instalaciones mínimas, puede revisar el documento del Ministerio de Ambiente, Vivienda y Desarrollo Territorial Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas (2008, p. 24), que se encuentra en la sección de referencias.

    Separador 
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.5 Instalaciones para equipos de toma de muestra y análisis 

    p(data-aos="fade-down").mb-5 Teniendo en cuenta el protocolo en fuentes fijas, se hace importante que la actividad en la cual se realice la medición directa debe facilitar un área limpia para la preparación de los equipos empleados en el procedimiento manual. Cuando se empleen sistemas de monitoreo continuo de emisiones, se debe destinar un espacio para la instalación de los analizadores, para la realización de la calibración del sistema de adquisición y procesamiento de datos, y para el personal encargado de su operación.

    .row.justify-content-center.align-items-center.mb-5  
        .col-lg-10.up
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/50.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Como parte de su aprendizaje autónomo, se invita a leer el documento del Ministerio de Ambiente, Vivienda y Desarrollo Territorial #[i Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas] (2008, p. 24), el cual le permite profundizar en el tema. Se encuentra ubicado en la sección de referencias.

    Separador 
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.6 Medición indirecta

    p(data-aos="fade-down").mb-4 La medición indirecta en las fuentes de emisión es una alternativa cuando la fuente no presenta las condiciones indicadas (infraestructura) para realizar la medición con equipos como los analizadores instrumentales o como los muestreadores isocinéticos o similares. Por esta razón, se pueden emplear otras metodologías indirectas, como lo son:  

    .row.justify-content-start.mb-4          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Balance de masas 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7
        p(data-aos="fade-down") El Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas define el balance de masas como: “la cuantificación de emisiones por balance de materia y energía. En ocasiones, por las características del proceso industrial, es el único método para la cuantificación de emisiones que se puede emplear, por ejemplo, en las actividades industriales que manufacturan o emplean en sus procesos compuestos orgánicos volátiles, especialmente cuando las emisiones se producen de manera fugitiva, este procedimiento de evaluación se convierte en la primera alternativa para cuantificar la emisión de contaminantes”.                      
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/92.png')

    p(data-aos="fade-down") Esta metodología es aplicada solo en las siguientes condiciones: 

    .cajon.color-acento-contenido.mt-4(data-aos="flip-down").p-4.mb-0
      p.fst-italic(data-aos="fade-down") “A través de la aplicación del método de balance de masas se representan las entradas y salidas de un sistema con el fin de estimar de manera indirecta la emisión de sustancias contaminantes a la atmósfera, es decir, las emisiones que se producen y pueden cuantificarse durante periodos de tiempo prolongados. El balance de masas es muy utilizado en situaciones donde se presentan reacciones químicas, siendo apropiados en situaciones donde se pierde determinada cantidad de material por liberación a la atmósfera”.

      p.fst-italic.mb-0(data-aos="fade-down") “Los balances de masas se deben utilizar en aquellas actividades o procesos donde un alto porcentaje de los materiales se pierde en el aire, por ejemplo: el contenido de azufre del combustible o la pérdida de solvente en un proceso incontrolado de recubrimiento. Por otra parte, son inapropiados cuando el material es químicamente combinado o consumido en el proceso, o cuando las pérdidas de materiales en la atmósfera representan una pequeña porción, con respecto a los materiales que ingresan al proceso. Por esta razón, los balances de masas no son aplicables para la determinación de material particulado producto de procesos de combustión”. 

    h5(data-aos="fade-down").mt-5 Características de la estimación por balance de masas.
    p(data-aos="fade-down").mb-5 Es importante que, en la estimación de emisiones, cuando se realiza un balance de masas, se tengan en cuenta las siguientes características:  

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg21.p-4.h-100.text-center
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
        p.mb-0 Identificar las operaciones unitarias, que originan cambios o transformaciones en las propiedades físicas de los materiales.   
      .tarjeta.bg21.p-4.h-100.text-center
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
        p.mb-0 Identificar las operaciones unitarias, que originan cambios o transformaciones por medio de reacciones químicas.  
      .tarjeta.bg21.p-4.h-100.text-center
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
        p.mb-0 Establecer los límites físicos de los procesos unitarios, cuando las líneas de producción están bien diferenciadas, o imaginarios, cuando existen varias líneas en un mismo espacio cerrado.    
      .tarjeta.bg21.p-4.h-100.text-center
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
        p.mb-0 Establecer los límites de las operaciones unitarias, de una manera similar a la delimitación de los procesos unitarios.       
      .tarjeta.bg21.p-4.h-100.text-center
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
        p.mb-0 Identificar las entradas y salidas del proceso, lo cual se debe realizar a través de un diagrama de flujo del mismo. En sistemas de producción complejos, donde existan varios procesos independientes, se puede preparar un diagrama general con todos los procesos, cada uno representado por un bloque y preparar diagramas de flujo para cada proceso individual, indicando en detalle sus operaciones unitarias, procesos unitarios y los equipos utilizados en cada uno de ellos.   
      .tarjeta.bg21.p-4.h-100.text-center
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
        p.mb-0 Cuantificar las entradas o insumos, teniendo en cuenta que todos los insumos que entran a un proceso u operación salen como productos o como residuos, vertimientos o emisiones. Los insumos de entrada a un proceso u operación unitaria pueden incluir, además de materias primas, materiales reciclados, productos químicos, agua y aire, entre otros.   
      .tarjeta.bg21.p-4.h-100.text-center
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
        p.mb-0 Cuantificar las salidas como productos, subproductos o residuos.   
      .tarjeta.bg21.p-4.h-100.text-center
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
        p.mb-0 Realizar el balance de masas, teniendo en cuenta que la suma de todas las masas que entran en un proceso u operación debe ser igual a la suma de todas las masas que salen de dicho proceso u operación (es decir, la suma de masas de los productos, residuos y de todos los materiales de salida no identificados).                    


    .row.justify-content-center.align-items-center.my-5.pb-5  
        .col-lg-10.up
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/50.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Para profundizar en el tema, se invita a revisar el documento del Ministerio de Ambiente, Vivienda y Desarrollo Territorial Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas (2008, p. 26-27), en el cual puede acceder a más información. Este se encuentra en la sección de referencias. 

    .bg22    
      p(data-aos="fade-down").mb-5 En este protocolo se indica particularmente cómo se deben representar e indicar y dónde se encuentran los puntos que generan las emisiones, sobre todo dónde se ejecuta el balance de masa, como se representa en el siguiente gráfico.
      img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/95.svg', alt='')


    Separador 
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.7 Factores de emisión

    p(data-aos="fade-down") Los factores de emisión son una de las técnicas más empleadas para la estimación de emisiones de fuentes industriales, su versatilidad le da una facilidad al usuario que desee calcular la concentración de los contaminantes que se emiten.      
    .row.justify-content-center.align-items-center.mb-4     
      .col-auto.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/96.svg') 
      .col.my-3
        p(data-aos="fade-down").mb-0 Sin embargo, los factores de emisión establecen una serie de constantes, las cuales han sido estimadas y proyectadas bajo criterios estadísticos que provienen de diversas fuentes. Uno de los países con más avance en estos factores es EE.UU., que por medio del Código Federal de Regulaciones (CFR. 40 / AP 42) proyecta esta información, la cual está disponible para cualquier público y país que la necesite. Por supuesto, Colombia no es la excepción, por lo que adopta esta metodología para realizar cálculos de importancia a nivel nacional.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        p(data-aos="fade-down") El documento AP-42 es una publicación que compila los factores de emisión de contaminantes atmosféricos, el cual se ha publicado desde 1972 como la síntesis de la información de factores de emisiones de la EPA. Este contiene factores de emisión e información de proceso para más de 200 categorías de fuentes de contaminación del aire. 

        p(data-aos="fade-down") Por otro lado, una categoría de fuente es un sector industrial específico o un grupo de fuentes emisoras similares. Los factores de emisión se han desarrollado y compilado a partir de datos de prueba de origen, estudios de balance de materiales y estimaciones de ingeniería. La quinta edición de AP-42 se publicó en enero de 1995. Desde entonces, la EPA ha publicado suplementos y actualizaciones de los quince capítulos disponibles en el Volumen I, Fuentes de puntos y áreas estacionarias.              
      .col-lg-6 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/97.png') 


    .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.up
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/50.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Para profundizar en el tema, se invita a revisar la sección de referencias para acceder a la información sobre los factores de emisión del aire, documento en inglés de la EPA.  

    .row.justify-content-start.mb-4          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") ¿Qué es un factor de emisión? 


    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/98.png')               
      .col-lg-9
        p(data-aos="fade-down") Son herramientas que sirven para elaborar inventarios de fuentes fijas, móviles y de área, entre otras, las cuales sirven también para tomar decisiones con respecto a la calidad del aire y el diseño de políticas que vayan en pro del control y el mejoramiento de la calidad del aire. Por esto, los factores de emisión son considerados como el valor representativo, donde la relación de la cantidad del contaminante y la actividad que lo produce genera una emisión a la atmósfera. Sin embargo, diversos conceptos se relacionan para definir específicamente esta constante. 

        .tarjeta.color-primario.p-3.mb-4
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/50.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Por otro lado, el Instituto Tecnológico de Monterrey tiene un video sobre ¿Qué es un factor de emisión? (Septiembre 27, 2017). Para acceder al material audiovisual, se invita a revisar la sección de material complementario, ya que le permitirá reforzar el aprendizaje sobre el tema visto.

        p(data-aos="fade-down") Según la EPA, un factor de emisión es:                   
        .cajon.color-acento-contenido.mt-4(data-aos="flip-down").p-4.mb-0
          p.fst-italic(data-aos="fade-down") “un valor representativo que intenta relacionar la cantidad de un contaminante liberado a la atmósfera con una actividad asociada con la liberación de ese contaminante. Estos factores generalmente se expresan como el peso del contaminante dividido por una unidad de peso, volumen, distancia o duración de la actividad que emite el contaminante (por ejemplo, kilogramos de partículas emitidas por megagramo de carbón quemado).

          p.fst-italic(data-aos="fade-down").mb-0 Estos facilitan la estimación de las emisiones de diversas fuentes de contaminación atmosférica. Por lo que, en la mayoría de los casos, estos factores son simplemente promedios de todos los datos disponibles de calidad aceptable y generalmente se supone que son representativos de los promedios a largo plazo para todas las instalaciones en la categoría de fuente (es decir, un promedio de la población)”.


    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-6
        p(data-aos="fade-down").mb-4 A continuación, se muestra la ecuación general para la estimación de emisiones:
        .row.justify-content-center.align-items-center
          .col-lg-4     
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/99.svg') 
          .col-lg-8
            p(data-aos="fade-down") donde:
            p(data-aos="fade-down").mb-1 #[b E = ] emisiones;
            p(data-aos="fade-down").mb-1 #[b A = ] tasa de actividad;
            p(data-aos="fade-down").mb-1 #[b EF =]  factor de emisión, y
            p(data-aos="fade-down").mb-1 #[b ER =]  eficiencia global de reducción de emisiones, %              

      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/100.png')   

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.up
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/50.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Como parte de su aprendizaje autónomo, se invita a revisar la página web de EPA (2020), específicamente sobre el tema Factores de emisiones atmosféricas y cuantificación. Para acceder, puede ir a la sección de referencias. 

    .row.justify-content-center.align-items-end.mb-5 
      .col-lg-8
        p(data-aos="fade-down") A continuación, se tocan otros conceptos relacionados con los factores de emisión, los cuales también se explican en la ¨Guía metodológica para la estimación de emisiones atmosféricas de fuentes fijas y móviles Chile¨, la cual hace el registro de emisiones y transferencia de contaminantes, y cuyo concepto no difiere del establecido por la EPA. Esta última expone la metodología general empleada para la estimación de emisiones con la siguiente fórmula: 
        .row.justify-content-center.align-items-center.bg16.p-3
          .col-lg-4     
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/102.svg') 
          .col-lg-8
            p(data-aos="fade-down") donde:
            p(data-aos="fade-down").mb-1 #[b E: ]emisión
            p(data-aos="fade-down").mb-1 #[b fe:] factor de emisión
            p(data-aos="fade-down").mb-1 #[b Na:] Nivel de actividad diaria, semanal y mensual de la fuente estimada.
            p(data-aos="fade-down").mb-1 #[b Ea:] Eficiencia de abatimiento       
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/101.png') 

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.up
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/50.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Para aprender más sobre el tema, se invita a revisar el documento de la Comisión Nacional del Medio Ambiente Chile (2009), denominado Guía Metodológica para la Estimación de Emisiones Atmosféricas de Fuentes Fijas y Móviles en el Registro de Emisiones y Transferencia de Contaminantes (p.13), el cual se encuentra en la sección de referencias.

    p(data-aos="fade-down").mb-5 Como se puede apreciar, la ecuación para estimación de emisiones es la misma en ambas entidades, lo único que difiere son las siglas, que cambian de nombre más no de contenido. En Colombia, se aplica lo establecido por el AP-42 de la Agencia de Protección Ambiental EPA y se define en el Protocolo de Fuentes Fijas de la siguiente manera:   


    .row.justify-content-center.align-items-end.mb-5 
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/103.png')     
      .col-lg-8
        .cajon.color-acento-contenido.mt-4(data-aos="flip-down").p-4.mb-0
            p.fst-italic(data-aos="fade-down") “Un factor de emisión es la relación entre la cantidad de contaminante emitido a la atmósfera y una unidad de actividad o del proceso, tales como el consumo de energía, el consumo de materia prima, el consumo de combustible, las unidades de producción, el calendario de operación, el número de dispositivos o las características de estos, entre otros.

            p.fst-italic(data-aos="fade-down") El uso de los factores de emisión es apropiado cuando los materiales que se emplean son consumidos o combinados químicamente en los procesos o cuando se producen bajas y pérdidas de material por liberación a la atmósfera, en comparación con las cantidades que se tratan en el proceso.

            p.fst-italic(data-aos="fade-down").mb-0 Los factores de emisión representan valores promedio de un rango de tasas de emisión, es decir, que en algunos casos las emisiones de la actividad variarán con respecto al resultado del factor de emisión, dependiendo de los valores que se utilizan para el análisis”.       

    .row.justify-content-start.mb-4          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Información básica para el cálculo de las emisiones por factores de emisión. 

    p(data-aos="fade-down").mb-5 Teniendo en cuenta que el cálculo de las emisiones por factores de emisión constituye un factor determinante en la estimación de estas concentraciones, el Protocolo en Fuentes Fijas establece una serie de componentes importantes para la presentación de estos valores como referente de una emisión industrial. Por lo anterior, a continuación, se revisa la información requerida para identificar las fuentes de emisión.

    .bg23
      .row.justify-content-center.align-items-end.mb-5.pt-5
        .col-lg-7 
          h5(data-aos="fade-down") Identificación de las fuentes de emisión 
          p(data-aos="fade-down") Es necesario realizar una amplia descripción de las fuentes de emisión teniendo en cuenta las variables que afectan la emisión, en especial las características de las siguientes fuentes: 
          ul.lista-ul.fa-ul.mb-0(data-aos="fade-down")
              li 
                i.fas.fa-check.c1
                | Construcción y demolición de edificaciones. 
              li 
                i.fas.fa-check.c1
                | Manejo de materiales: apilamiento, transferencia y/o beneficio de materiales. 
              li 
                i.fas.fa-check.c1
                | Superficie de vías pavimentadas: calles, autopistas y zonas de parqueo.
              li 
                i.fas.fa-check.c1
                | Superficie de vías no pavimentadas: carreteras, calles, vías y zonas de parqueo. 
              li 
                i.fas.fa-check.c1
                | Erosión eólica en zonas destapadas: zonas de apilamiento de materiales y demás zonas destapadas.                                                             
        .col-lg-5
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/105.png') 

      p(data-aos="fade-down").mb-5 La existencia de las fuentes listadas anteriormente debe ser tenida en cuenta a una distancia de 0,8 km en todas las direcciones con respecto a la fuente de emisión. También se deben tener en cuenta los siguientes factores: 

      AcordionA(tipo="b" clase-tarjeta="tarjeta bg24 ")
        .row.justify-content-center.align-items-center(titulo="Nivel de actividad") 
          .col-12
            p Se debe realizar una descripción y justificación del factor de emisión seleccionado y utilizado, la fuente, y los estándares de emisión que le aplican a la actividad. Para el caso del cálculo de emisiones por combustión, se debe tener en cuenta lo establecido por la US-EPA.     
        .row.justify-content-center.align-items-center(titulo="Desarrollo de factores de emisión") 
          .col-12
            p El primer paso para realizar una evaluación por factores de emisión involucra el análisis de la información de las fuentes y recolección de datos del proceso. Estas acciones requieren que la actividad suministre la información necesaria para realizar el análisis. Dicha información dependerá del factor de emisión seleccionado y puede hacer referencia al consumo de combustible, la masa o volumen de compuestos contenidos en el combustible o el poder calorífico del mismo, entre otros.
        .row.justify-content-center.align-items-center(titulo="Recolección de datos y cálculo de la incertidumbre") 
          .col-12
            p El proceso de recolección de datos debe proporcionar la información suficiente para calcular los factores de emisión y la incertidumbre asociada a estos. Se debe contar además con una exacta caracterización de la fuente (dispositivos de control, capacidad del equipo y fabricante del mismo). La incertidumbre en los datos obtenidos de una fuente se da como resultado de la inexactitud de la instrumentación y errores en los procedimientos de las pruebas, mientras que la incertidumbre en la información de los procesos es causada por la inexactitud e imprecisión en la cuantificación de las variables del proceso. 
        .row.justify-content-center.align-items-center(titulo="Información básica de la fuente") 
          .col-12
            p Para realizar esta acción se debe llevar un registro de la siguiente información:
               
            .row.justify-content-center
              .col-lg-4.my-3
                .bg25.p-3.h-100
                  h5 Proceso
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check.c1
                      | Descripción y nombre.
                    li 
                      i.fas.fa-check.c1
                      | Capacidad nominal de los equipos. 
                    li 
                      i.fas.fa-check.c1
                      | Tipo y consumo del combustible.
                    li 
                      i.fas.fa-check.c1
                      | Materias primas utilizadas.
                    li 
                      i.fas.fa-check.c1
                      | Capacidad instalada de operación de la planta.                                               
              .col-lg-4.my-3
                .bg25.p-3.h-100
                  h5 Capacidad
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check.c1
                      | Capacidad de operación de la planta al momento de la evaluación de los dispositivos de control y sus correspondientes parámetros de operación de vida útil de los dispositivos de control.                                                
              .col-lg-4.my-3
                .bg25.p-3.h-100
                  h5 Frecuencia
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check.c1
                      | Frecuencia con la cual se realiza el mantenimiento preventivo de los equipos y los correspondientes sistemas de control.
                    li 
                      i.fas.fa-check.c1
                      | Descripción del último mantenimiento realizado a los equipos y a los correspondientes sistemas de control (en caso de tenerlos).                                                
              .col-lg-4.my-3
                .bg25.p-3.h-100
                  h5 Cambios
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check.c1
                      | Cambios que se hayan presentado en el proceso o en los sistemas de control durante la evaluación. 
                    li 
                      i.fas.fa-check.c1
                      |                         Contaminantes monitoreados y descripción de los métodos utilizados durante la evaluación.                                               
              .col-lg-4.my-3
                .bg25.p-3.h-100
                  h5 Datos
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check.c1
                      | Deficiencias y/o desviaciones en el procedimiento de evaluación. 
                    li 
                      i.fas.fa-check.c1
                      | Número y duración de las corridas de la evaluación.  

      .row.justify-content-center.align-items-center.my-5
          .col-lg-10.up
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/50.png")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-0 Para profundizar en el tema, se invita a revisar el documento que se encuentra en la sección de material complementario denominado Factores de Emisión, de Jairo Páez (2013), información que pertenece a  la EPA, organización de los Estados Unidos.    
                      
    .row.justify-content-center.align-items-center.pt-5     
      .col-lg-10.up 
        h5(data-aos="fade-down") Conclusiones:
        .row.justify-content-center.align-items-center.mb-4     
          .col-auto.my-3 
            img.img-a.img-t.rot1(src='@/assets/curso/temas/106.svg') 
          .col.my-3
            p(data-aos="fade-down").mb-0 Como ha venido aprendiendo durante el proceso de aprendizaje en este contenido, el medio ambiente está siendo enrarecido por el volumen de emisiones dañinas que las empresas y el sector productivo están arrojando al aire; este debe ser medido con el fin de que se cumplan los estándares internacionales y nacionales en temas de calidad del medio ambiente, cumpliendo así el control de emisiones propuesto por la UNESCO en la agenda 2030, entidad de las Naciones Unidas.                
</template>
<script>
export default {
  name: 'Tema2',
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
