<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Interpretación de los resultados y las emisiones

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7
        p(data-aos="fade-down") Uno de los pasos más importantes para hacer control de la calidad del aire que hay en Colombia es hacer mediciones de manera periódica de las emisiones lanzadas al aire y luego realizar la interpretación de los datos obtenidos en ellas, con el fin de identificar si están acordes con los estándares internacionales definidos para el control de la concentración de estas sustancias que las empresas lanzan al medio ambiente, esto con el fin de diseñar políticas y dar pautas para su adecuado manejo, y de esa forma cumplir con la agenda 2030 definida por la UNESCO.

        .cajon.color-acento-contenido(data-aos="flip-down").p-4.mb-4
          p.mb-0(data-aos="fade-down") En Colombia, las normas relacionadas con la emisión e inmisión de contaminantes al aire establecen una serie de correcciones a los resultados que se registran en campo después de obtenidas las muestras de los contaminantes. A tales adaptaciones de presión y temperatura se les denominan correcciones de referencia, las cuales establecen a una temperatura 298.15 ºK y una presión atmosférica de 760 mmHg o 1 atmósfera.      
        p(data-aos="fade-down") A continuación, verá cómo se realizan estas correcciones tanto en inmisión como en emisión.           
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/158.png')

    Separador 
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1   Correcciones de resultados en inmisión o calidad del aire 
    p(data-aos="fade-down") Las correcciones de resultados en emisión o calidad del aire son establecidas en el Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire, Manual de Operación de Sistemas de Vigilancia de la Calidad del Aire, del año 2008. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/159.png')                
      .col-lg-7.my-3
        p(data-aos="fade-down") A continuación, se presenta una metodología para el cálculo de las concentraciones a condiciones de referencia #[b (Temperatura: 298.15 ºK y Presión: 760 mmHg ≈ 101325 Pa ≈ 101.325 kPa)] a partir de los valores promedios horarios de concentración.

        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img.img-t.img-a(src='@/assets/curso/temas/156.png' alt='AvatarTop')
          .tarjeta.bg37.j
            .p-2.ps-0
              p.mb-0 La #[b Resolución 2254 de 2017 establece, en su Capítulo I, Artículo 2,] los niveles máximos permisibles para contaminantes criterio y los tiempos de exposición para cada contaminante.
  
    p(data-aos="fade-down") Para comparar los datos de calidad de aire obtenidos de las mediciones con la norma, debe hacer un procedimiento básico. Se sugiere el procedimiento que a continuación se presenta:
    
    .row.justify-content-center.mb-5           
      .col-lg-6
        .bg38.h-100.p-5
          ul.lista-ul.fa-ul.mb-0(data-aos="fade-down")
            li 
              i.fas.fa-check.c1
              p.mb-0 Con los datos ya validados (e identificados con banderas) y organizados por orden cronológico, se calculará primeramente el valor promedio horario (#[i promedio de todos los datos recolectados y válidos obtenidos en una hora]).

            li 
              i.fas.fa-check.c1
              | Una vez se tienen estimados los valores promedio de concentración horaria del contaminante, se procede con el cálculo de la media móvil.

            li 
              i.fas.fa-check.c1
              | Debido a que las normas establecidas en la legislación colombiana se encuentran definidas a condiciones de referencia o condiciones estándar, es necesario expresar cada promedio de ocho (8) horas obtenido a estas mismas condiciones estándar. En ningún momento es correcto expresar la norma nacional (condiciones de referencia) a norma local (condiciones propias de cada ciudad), para realizar la comparación. 
      .col-lg-6
        .bg39.h-100.p-5
          p Para expresar la media móvil (obtenida a partir de los datos promedios horarios de la estación) a condiciones de referencia o condiciones estándar y poder establecer la comparación con la norma, se parte de la ecuación de gas ideal y se establecen las correspondientes relaciones, esto es:
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/160.svg')
          p Donde:

          p #[b P:] presión.
          p #[b V:] volumen.
          p #[b n:] número de moles.
          p #[b R:] constante de los gases ideales (8.314 m3Pa/Kmol.K ≈ 0.082 l.atm/mol.K)
          p #[b T:] temperatura (siempre expresada en grados Kelvin, ºK).                          

    .bg40
      .row.justify-content-center.align-items-end.mb-4.pt-3         
        .col-lg-4.my-3
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/162.png')

        .col-lg-3.my-3
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/163.svg')

        .col-lg-5.my-3
          p(data-aos="fade-down") En esta serie de ecuaciones, se encuentran los siguientes términos:
          p(data-aos="fade-down") #[b m: ]masa de la sustancia que se quiere determinar en el gas (#[i Kg]).
          p(data-aos="fade-down") #[b PM:] peso molecular de la sustancia a determinar (#[i Kg/Kmol]).
          p(data-aos="fade-down") #[b C: ]Concentración de la sustancia en el gas (#[i Kg/m3 ó g/l]). 
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          p(data-aos="fade-down") Ahora bien, del tratamiento matemático anterior realizado a la ecuación del gas ideal, se llega a la conclusión que, dependiendo del contaminante (de sus propiedades físicas, como masa y peso molecular) y de las condiciones atmosféricas (presión y temperatura), se obtendrán determinados valores de concentración.

          p(data-aos="fade-down") Por lo tanto, es válido afirmar que la concentración del contaminante i, a condiciones estándar, es igual al producto del peso molecular de dicho contaminante por la relación existente entre las condiciones estándar de presión y temperatura (#[b Pst, Tst]):   
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/164.svg')
          p(data-aos="fade-down") Como los datos promedio de concentración que se obtienen del monitoreo de calidad de aire corresponden a los valores de concentración de cada contaminante en particular obtenidos a las condiciones locales de presión y temperatura, y dichas condiciones son diferentes a las condiciones de referencia, entonces los datos que se obtienen, en realidad, de concentración corresponden a:
          .row.justify-content-center.align-items-center.mb-4           
            .col-lg-4.my-4
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/165.svg')

            .col-lg-8.my-4
              .bgw.brad.p-4
                p Donde:

                p(data-aos="fade-down") #[b (C#[sub #[i i]]) j:] concentración del contaminante i en la región o ciudad j.
                p(data-aos="fade-down") #[b (P) j:] presión en la región o ciudad j, es decir, la condición local de presión.
                p(data-aos="fade-down") #[b (T)#[sub #[i j]]:] temperatura en la región o ciudad j, es decir, la condición local de temperatura.
                p(data-aos="fade-down") #[b PM#[sub #[i i]]:] peso molecular del contaminante medido.
                p(data-aos="fade-down").mb-0 #[b R:] constante de los gases ideales (8.314 m3. Pa/kmol.K ≈ 0.082 l.atm/mol.K). 
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-8.my-4
              p(data-aos="fade-down") Concluyendo, los datos obtenidos de valores promedio (media móvil para el periodo de tiempo que se va a evaluar) se tienen referenciados a las condiciones locales de la región o ciudad para los cuales se realizó la medición; pero estos, a su vez, deben ser comparados con la norma nacional, la cual se encuentra expresada a condiciones de referencia o condiciones estándar (760 mmHg de presión o 101325 Pa o 101.325 KPa y a una temperatura de 298.15 ºK). 

              p(data-aos="fade-down") Por ese motivo, es necesario expresar los datos promedios obtenidos de la medición a valores promedios de concentración expresados a condiciones estándar o de referencia. Esto se realiza de la siguiente forma: los datos promedios de ocho horas obtenidos a condiciones locales  (Cj  )j son expresados bajo condiciones de referencia.

              p(data-aos="fade-down") Finalmente, tan pronto se hayan expresado los datos promedio de concentración a condiciones de referencia o condiciones estándar, se procede a compararlos con la norma nacional para el periodo de tiempo estipulado.            
            .col-lg-4.my-4
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/166.png')

    Separador 
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2 Correcciones de resultados de emisión en fuentes fijas
    p(data-aos="fade-down") Según lo establecido en la Resolución 909 de 2008, en el Capítulo XXI disposiciones finales, Artículo 86, todos los resultados de las mediciones de los diferentes contaminantes deben ser corregidos a condiciones de referencia, por medio de la siguiente ecuación: 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bg41.brad.p-2
          .row.justify-content-center.align-items-center          
            .col-lg-4.my-3
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/167.svg')
            .col-lg-8.my-3(data-aos="fade-down") 
              p Donde:

              p #[b C#[sub CR]:] Concentración del contaminante a condiciones de referencia en mg/m3
              p #[b C#[sub CL]:] Concentración del contaminante a condiciones locales en mg/m3
              p #[b T#[sub CL]:] Temperatura de los gases a la salida del ducto en °K
              p #[b P#[sub CR]:] Presión a condiciones de referencia en mm Hg
              p #[b P#[sub CL]:]  Presión de los gases a la salida del ducto en mm Hg
              p.mb-0 #[b T#[sub CR]:] Temperatura a condiciones de referencia en °K.    

    p(data-aos="fade-down") La misma resolución, en su Artículo 88, define adicionalmente que los resultados en los que se vean implicados los contaminantes derivados de una relación de combustión deben realizar adicionalmente la corrección de oxígeno, de acuerdo con la siguiente ecuación:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bg41.brad.p-2
          .row.justify-content-center.align-items-center          
            .col-lg-4.my-3
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/168.svg')
            .col-lg-8.my-3(data-aos="fade-down") 
              p Donde: 

              p #[b C]#[sub CR(0#[sub 2ref])]: Concentración del contaminante a condiciones de referencia con la corrección de oxígeno, basado en el oxígeno de referencia, de conformidad con lo establecido en la presente resolución.
              p #[b C]#[sub CR(X#[sub %])]: Concentración del contaminante a condiciones de referencia.
              p %0_(2ref): Oxígeno de referencia de la medición, de conformidad con lo establecido en la presente resolución, en porcentaje (%).
              p #[b X%:] Oxígeno medido a la salida de los gases, en porcentaje (%).                 

    p(data-aos="fade-down") Dependiendo si la fuente de contaminación proviene de una actividad industrial más NO de una fuente de combustión externa, la resolución 909 de 2008, Artículo 87, establece que se debe calcular el flujo del contaminante. Para calcular el flujo de los contaminantes, se debe emplear la siguiente ecuación: 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bg41.brad.p-2
          .row.justify-content-center.align-items-center          
            .col-lg-4.my-3
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/169.svg')
            .col-lg-8.my-3(data-aos="fade-down") 
              p Donde: 

              p #[b FC:] flujo del contaminante en kg/h.
              p #[b CCR:] concentración del contaminante a condiciones de referencia (25 °C, 760 mm Hg) en mg/m3.
              p #[b QCR:] caudal del contaminante a condiciones de referencia (25 °C, 760 mm Hg) en m3/h.    

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10.up
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/50.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Para complementar su aprendizaje, se invita a revisar la Resolución 909 de 2008. Para esto debe ir a la sección de referencias.

    p(data-aos="fade-down").mb-5 Una vez obtenidos los resultados, se comparan directamente con la norma. Dependiendo si la fuente corresponde a procesos relacionados a actividades industriales, se toma como base el Artículo 4, como lo muestra la siguiente tabla. 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 10.
      span Estándares de emisión admisible     
    .tabla-a.color-acento-contenido.mt-2
      table.mb-2
          thead.tab-x.btop2
            tr.th-1.text-center.tab-x
              th Contaminante
              th Flujo del contaminante kg/h
              th(colspan="2") Estándares de emisión de contaminantes mg/m#[sup 3]
          tbody.bgw
            tr  
              td Material Particulado (MP)              
              td.text-center ≤0,5              
              td.text-center 250
              td.text-center 150                    
            tr  
              td Dióxido de azufre (SO#[sub #[i 2]])              
              td.text-center >0,5              
              td.text-center 150
              td.text-center 50
            tr  
              td Óxidos de nitrógeno (NO#[sub #[i X]] )              
              td.text-center TODOS              
              td.text-center 550
              td.text-center 500                    
            tr  
              td Compuestos de flúor inorgánico (HF)            
              td.text-center TODOS              
              td.text-center 550
              td.text-center 500                     
            tr  
              td Compuestos de cloro inorgánico (HCI)
              
              td.text-center TODOS              
              td.text-center(colspan="2") 8
   
            tr  
              td Hidrocarburos Totales (HC#[sub #[i T]])              
              td.text-center TODOS              
              td.text-center(colspan="2") 40   
            tr  
              td Dioxina y furanos              
              td.text-center TODOS              
              td.text-center(colspan="2") 50   
            tr  
              td Neblina ácida o trióxido de azufre,               
              td.text-center TODOS              
              td.text-center(colspan="2") 0,5*  
            tr  
              td expresado como: (H#[sub #[i 2]]SO#[sub #[i 4]])              
              td.text-center TODOS              
              td.text-center(colspan="2") 150   
            tr  
              td Plomo (Pb)              
              td.text-center TODOS              
              td.text-center(colspan="2") 1   
            tr  
              td Cadmio (Cd) y sus compuestos             
              td.text-center TODOS              
              td.text-center(colspan="2") 1
            tr  
              td Cobre (Cu) y sus compuestos       
              td.text-center TODOS              
              td.text-center(colspan="2") 8


    p(data-aos="fade-down").mt-5 Las dioxinas y furanos se expresan en las siguientes unidades (ng - EQT/m#[sup 3]), EQT: Equivalencia de toxicidad.     
    p(data-aos="fade-down").mb-5 Si, por el contrario, corresponde a una fuente de combustión externa, se tomarán como referentes los estándares contenidos en el Capítulo III, Artículos 7 y 8, y hacer la comparación directa.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 11.
      span Estándares de emisión admisibles en equipos de combustión externa
    .tabla-a.color-acento-contenido.mt-2.mb-4
      table.mb-2
          thead.tab-x.btop2
            tr.th-1.text-center.tab-x
              th(rowspan="2") Combustible 
              th(colspan="3") Estándares de emisión admisibles (mg/m#[sup 3])

            tr.th-1.text-center.tab-x             
              th MP 
              th SO#[sub #[i 2]]
              th NO#[sub #[i X]]
          tbody.bgw
            tr  
              td Sólido       
              td.text-center 200 
              td.text-center 500 
              td.text-center 350 
            tr  
              td Líquido       
              td.text-center 200 
              td.text-center 500 
              td.text-center 350  
            tr  
              td Gaseoso       
              td.text-center NO APLICA   
              td.text-center NO APLICA
              td.text-center 350     

    .titulo-sexto.color-acento-contenido
      h5 Tabla 12.
      span Estándares de emisión admisibles en equipos de combustión externa nuevos
    .tabla-a.color-acento-contenido.mt-2.mb-4
      table.mb-2
          thead.tab-x.btop2
            tr.th-1.text-center.tab-x
              th(rowspan="2") Combustible 
              th(colspan="3") Estándares de emisión admisibles (mg/m#[sup 3])

            tr.th-1.text-center.tab-x             
              th MP 
              th SO#[sub #[i 2]]
              th NO#[sub #[i X]]
          tbody.bgw
            tr  
              td Sólido       
              td.text-center 50 
              td.text-center 500 
              td.text-center 350 
            tr  
              td Líquido       
              td.text-center 50 
              td.text-center 500 
              td.text-center 350  
            tr  
              td Gaseoso       
              td.text-center NO APLICA   
              td.text-center NO APLICA
              td.text-center 350 
              
    .row.justify-content-center.align-items-end          
      .col-lg-3.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/171.png')

      .col-lg-9.my-3
        p(data-aos="fade-down") Cuando se habla del concepto inmisión, se están relacionando los contaminantes presentes en el aire que el ser humano respira; a ello se le denomina calidad del aire y la normativa que en la actualidad la regula es la Resolución 2254 de 2017. Y cuando se refiere al concepto de emisión, se está hablando de los contaminantes que emiten las fuentes móviles y fuentes fijas desde sus ductos o chimeneas; las normas en Colombia que las regulan actualmente son las Resoluciones 910 y 909 de 2008.
        .cajon.color-acento-contenido(data-aos="flip-down").p-4.mb-4
            p.mb-0(data-aos="fade-down") Como conclusión, Colombia ha venido cumpliendo el pacto propuesto por la UNESCO con la Agenda 2030- Objetivos de Desarrollo Sostenible, puesto que tiene normatividad y resoluciones, se hace seguimiento al sector productivo y se definen pautas a seguir en el caso de que se encuentre que se está saliendo una empresa del límite de emisiones dañinas al medio ambiente.  
        p(data-aos="fade-down").mb-0 Para profundizar en el tema, se invita a revisar la zona de referencias, con el fin de aclarar su conocimiento al leer directamente los contenidos que las entidades del Estado colombiano han diseñado para cuidar el medio ambiente y, de esa forma, poder cumplir con los Objetivos de Desarrollo Sostenible que la Agenda 2030 y la Unesco han desarrollado.               
</template>

<script>
export default {
  name: 'Tema5',
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
