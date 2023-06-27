<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Normativa de emisiones

    .row.justify-content-center.align-items-start.mb-4           
      .col-lg-6.my-3
        p(data-aos="fade-down") Conocer el marco normativo que regula la contaminación del aire en nuestro país es muy importante para establecer las acciones de prevención y control de los contaminantes que nos afectan en la actualidad. En esta sección, conocerá: las leyes, los decretos, las resoluciones, los protocolos y demás documentación vigente.      
      .col-lg-6.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/148.png')

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 Calidad del aire      
      
    .row.justify-content-center.align-items-end.mb-4           
      .col-lg-7.my-3      
        .cajon.color-acento-contenido(data-aos="flip-down").p-4.mb-4
          p.mb-0(data-aos="fade-down") Las normas de calidad del aire en Colombia se convierten en la base para el seguimiento, así lo afirma El Instituto de Hidrología Meteorología y Estudios Ambientales –IDEAM, donde "... el monitoreo y control de la contaminación atmosférica ha tomado día a día mayor relevancia, debido a que, según cifras de la Organización Mundial para la Salud, una de cada ocho muertes ocurridas a nivel mundial es ocasionada por la contaminación del aire. A nivel nacional, el Departamento Nacional de Planeación estimó que, durante el año 2015, los efectos de este fenómeno estuvieron asociados a 10.527 muertes y 67,8 millones de síntomas y enfermedades".
        p(data-aos="fade-down").mb-0 Adicionalmente, los costos ambientales asociados a la contaminación atmosférica en Colombia, durante los últimos años, se incrementaron, pasando de 1,1% del PIB de 2009 ($5,7 billones de pesos) a 1,59% del PIB de 2014 ($12 billones de pesos) y del 1,93% del PIB en 2015 ($15.4 billones de pesos), lo cual pone en evidencia la necesidad de seguir implementando estrategias para controlar, evaluar y monitorear estas sustancias”.            
      .col-lg-5.my-3      
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/149.png')


    .row.justify-content-start.pt-5.mb-4          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Normas asociadas

    p(data-aos="fade-down") A continuación, encontrará un listado de normas colombianas que dan las pautas a nivel nacional en el tema del manejo de la contaminación del aire. Para profundizar en el tema, puede ir a la sección de materiales de apoyo.  

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-6.my-3
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Resolución 2254 de 2017") Por la cual se adopta la norma de calidad del aire ambiente y se dictan otras disposiciones.       
          p(numero="2" titulo="Resolución 650 de 2010") Por la cual se adopta el Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire.       
          p(numero="3" titulo="Resolución 2154 de 2010") Por la cual se ajusta el Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire adoptado a través de la Resolución 650 de 2010 y se adoptan otras disposiciones.       

      .col-lg-6.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/151.png')

    .row.justify-content-start.pt-5.mb-4          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Protocolo asociado 

    p(data-aos="fade-down") Un protocolo es una serie de datos detallados sobre un proceso de actuación científica o técnica, por lo que a continuación se mencionan dos que son claves para la conceptualización y aplicación de sus conocimientos en su vida laboral. 

    .row.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg26.h-100.p-4
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/152.svg')
          h5 Protocolo para el monitoreo y seguimiento de la calidad del aire
          p.mb-0 #[b Nota:] Ministerio de Medio Ambiente, Vivienda y Desarrollo Territorial. ¨Protocolo para el monitoreo y seguimiento de la calidad del aire¨ (2008).
      .col-lg-4.my-3
        .bg26.h-100.p-4
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/153.svg')
          h5 Manual de diseño de Sistemas de Vigilancia de Calidad del Aire.
          p.mb-0 #[b Nota:] Ministerio de Medio Ambiente, Vivienda y Desarrollo Territorial. ¨Protocolo para el monitoreo y seguimiento de la calidad del aire. Manual de diseño de sistemas de vigilancia de la calidad del aire¨ (2010). 

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10.up
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/50.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Para reforzar su aprendizaje, se invita a revisar los anteriores documentos en la sección de referencias, con el fin de leer los documentos completos. 

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Fuentes fijas 

    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-7.my-3      
        .cajon.color-acento-contenido(data-aos="flip-down").p-4.mb-4
          p.mb-0(data-aos="fade-down") Las fuentes fijas puntuales, mejor conocidas como “#[b chimeneas]” o ductos, por donde se expulsan gases contaminantes ( Mp,Sox,Nox, Co,.Cov´s, entre otros) de las industrias que hacen parte del sector productivo que mueve la economía de nuestro país, aportan de manera importante al continuo deterioro de la calidad del aire que se respira, especialmente en la principales ciudades del país. Por esta razón, la normativa asociada a las fuentes fijas es fundamental para el seguimiento y control de las emisiones en Colombia. 
        p(data-aos="fade-down") A continuación, se menciona la norma asociada relacionada con este tema.  
        .row.justify-content-start.mb-2         
          .col-auto.bg9.p-3(data-aos="flip-down")
            h5.mb-0(data-aos="fade-down") Normas asociadas

        .row.justify-content-center.align-items-end     
          .col-auto.my-3 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/155.png') 
          .col.my-3
            p(data-aos="fade-down").mb-0 Resolución 909 de 2008.  Por la cual se establecen las normas y estándares de emisión admisibles de contaminantes a la atmósfera por fuentes fijas y se dictan otras disposiciones.                             
      .col-lg-5.my-3      
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/154.png') 

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10.up
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/50.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Para complementar su aprendizaje, se invita a revisar la página web del Ministerio de Medio Ambiente, Vivienda y Desarrollo Territorial (2008), donde se toca el tema de la resolución 909 de 2008. Para esto debe ir a la sección de referencias 
                  
    .row.justify-content-start.mb-4      
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Métodos de medición y protocolos asociados 
    .row.mb-5
      .col-lg-6(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img.img-t(src='@/assets/curso/temas/156.png' alt='AvatarTop')
          .tarjeta.bg36.j
            .p-2
              p.mb-0 #[b Resolución 0935 de 2011.] Por la cual se establecen los métodos para la evaluación de emisiones contaminantes por fuentes fijas y se determina el número de pruebas o corridas para la medición de contaminantes en fuentes fijas. #[b Nota:] Instituto de Hidrología, Meteorología y Estudios Ambientales de Colombia (2011). 

      .col-lg-6(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img.img-t(src='@/assets/curso/temas/156.png' alt='AvatarTop')
          .tarjeta.bg36.j
            .p-2
              p.mb-0 #[b Protocolo para el control y vigilancia] de la contaminación atmosférica generada por fuentes fijas. #[b Nota:] Ministerio de Medio Ambiente, Vivienda y Desarrollo Territorial. #[b "Protocolo para el monitoreo y seguimiento de la calidad del aire"] (2008).  


    p(data-aos="fade-down").mb-5 Los métodos de medición son:
    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/157.svg') 


</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass">
.tarjeta--gris
  background-color: #D2E1F1
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #C9D9B6
.linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #F8F8F8
</style>
