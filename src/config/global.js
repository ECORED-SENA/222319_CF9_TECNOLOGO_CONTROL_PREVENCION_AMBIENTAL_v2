export default {
  global: {
    componenteFormativo:
      'Interpretación de los resultados de medición de las emisiones',
    descripcionCurso:
      'El objetivo es contextualizar al aprendiz para que incorpore y establezca las metodologías apropiadas en la verificación de las emisiones resultantes de proceso y operaciones productivas con el fin de correlacionar las concentraciones emitidas por la fuente de emisión según los protocolos y metodologías establecidas para realizar las respectivas correlaciones normativas según lo establecido en las leyes, decretos y resoluciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bases conceptuales cálculo valores de emisión ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Unidades de medida de la contaminación atmosférica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistema de unidades',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Unidades de medición',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'El sistema internacional de unidades y notación científica',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Conversión de unidades',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Factor de conversión',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Cifras significativas',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Notación científica',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Conversión de unidades',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Ley de gases ideales',
            hash: 't_1_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo:
              'Diagramas de entrada y salida de la contaminación atmosférica',
            hash: 't_1_11',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cálculo de emisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Medición directa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Puertos de muestreo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Plataformas de muestreo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Acceso al sitio de muestreo',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Instalaciones para equipos de toma de muestra y análisis',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Medición indirecta',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Factores de emisión',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamentación Textil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas).',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Identificación fibras por combustión',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Clasificación de los hilos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Clasificación de tejidos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Caracterización de los tejidos',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Procesos textiles',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Normativa de emisiones ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Calidad del aire',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Fuentes fijas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Interpretación de resultados de las mediciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo:
              'Correcciones de resultados en inmisión o calidad del aire.',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Correcciones de resultados de emisión en fuentes fijas.',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Conversión de unidades',
      referencia:
        'Puntaje Nacional Chile. (Abril 4, 2013). Unidades de concentración [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NGUytYmKAro  ',
    },
    {
      tema: 'Ley de los gases',
      referencia:
        'Education Journal. (Marzo 10, 2017). Experimento densidad del aire [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VjGghz1JBVE  ',
    },
    {
      tema: 'Ley de los gases',
      referencia:
        'Danstein. (Octubre 15, 2019). Leyes de los gases Parte 3-Ley general de los gases y ejemplos prácticos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=b-Dzm6hGPJ8   ',
    },
    {
      tema: 'Diagramas de entrada y salida de la contaminación atmosférica',
      referencia:
        'Ochoa, W. (Marzo 22, 2020). Evaluación de impacto ambiental - Diagramas de proceso [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yqi372crXWY ',
    },
    {
      tema: 'Cálculo de emisiones',
      referencia:
        'Corantioquiaoficial. (Abril 30, 2014). Seguimiento y Control a Fuentes Fijas [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fNBy6k4EKHo ',
    },
    {
      tema: 'Instalaciones para equipos de toma de muestra y análisis',
      referencia:
        'Fluoreciencia Didáctica, lenguaje y cultura. (Marzo 1, 2016) Atmósfera-Muestreo Isocinético en chimenea [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rrXgBvkuJ4w&t=10s ',
    },
    {
      tema: '¿Qué es un factor de emisión?',
      referencia:
        'Tecnológico de Monterrey | Innovación Educativa. (Septiembre 27, 2017). ¿Qué es un factor de emisión? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=A0DKIGHVUsE ',
    },
    {
      tema: 'Factores de Emisión EPA AP-42      ',
      referencia:
        'Páez, J. (Agosto 3, 2013). Factores de Emisión EPA AP-42 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kThVlN83V9g ',
    },
  ],
  glosario: [
    {
      termino: 'Balance de masas',
      significado:
        'El balance de masas hace referencia a la cuantificación de emisiones por balance de materia y energía. En ocasiones, por las características del proceso industrial, es el único método para la cuantificación de emisiones que se puede emplear. Por ejemplo, en las actividades industriales que manufacturan o emplean en sus procesos compuestos orgánicos volátiles, especialmente cuando las emisiones se producen de manera fugitiva, este procedimiento de evaluación se convierte en la primera alternativa para cuantificar la emisión de contaminantes. (MAVDT, 2010a, p. 25).',
    },
    {
      termino: 'Concentración de una sustancia en el aire',
      significado:
        'Es la relación que existe entre el peso o el volumen de una sustancia y la unidad de volumen de aire en la cual está contenida. (Resolución 909 de 2008, p. 33).',
    },
    {
      termino: 'Condiciones de referencia',
      significado:
        'Son los valores de temperatura y presión con base en los cuales se fijan las normas de calidad del aire y de las emisiones, que respectivamente equivalen a 25 ºC y 760 mm de mercurio. (Resolución 909 de 2008, p. 33).',
    },
    {
      termino: 'Contaminación atmosférica',
      significado:
        'Es el fenómeno de acumulación o de concentración de contaminantes en el aire. (Resolución 909 de 2008, p. 33).',
    },
    {
      termino: 'Contaminantes',
      significado:
        'Son fenómenos físicos o sustancias o elementos en estado sólido, líquido o gaseoso, causantes de efectos adversos en el medio ambiente, los recursos naturales renovables y la salud humana, que solos o en combinación, o como productos de reacción, se emiten al aire como resultado de actividades humanas, de causas naturales, o de una combinación de estas. (Resolución 909 de 2008, p. 33).',
    },
    {
      termino: 'Emisión',
      significado:
        'Es la descarga de una sustancia o elemento al aire, en estado sólido, líquido o gaseoso, o en alguna combinación de éstos, proveniente de una fuente fija o móvil. (Resolución 909 de 2008, p. 34).',
    },
    {
      termino: 'Factores de emisión',
      significado:
        'Un factor de emisión es la relación entre la cantidad de contaminante emitido a la atmósfera y una unidad de actividad o del proceso, tal como el consumo de energía, el consumo de materia prima, el consumo de combustible, las unidades de producción, el calendario de protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas en operación, el número de dispositivos o las características de estos, entre otros. (MAVDT, 2010a, p. 28).',
    },
    {
      termino: 'Fuente de emisión',
      significado:
        'Es toda actividad, proceso u operación realizado por los seres humanos, o con su intervención, susceptible de emitir contaminantes al aire. (Resolución 909 de 2008, p. 34)',
    },
    {
      termino: 'Fuente fija dispersa o difusa',
      significado:
        'Es aquella en que los focos de emisión de una fuente fija se dispersan en un área, por razón del desplazamiento de la acción causante de la emisión, como, por ejemplo, en el caso de las quemas abiertas controladas en zonas rurales. (Resolución 909 de 2008, p. 34).',
    },
    {
      termino: 'Fuente fija puntual',
      significado:
        'Es la fuente fija que emite contaminantes al aire por ductos o chimeneas. (Resolución 909 de 2008, p. 34).',
    },
    {
      termino: 'Fuente fija',
      significado:
        'Es la fuente de emisión situada en un lugar determinado e inamovible, aún cuando la descarga de contaminantes se produzca en forma dispersa. (Resolución 909 de 2008, p. 34).',
    },
    {
      termino: 'Norma de emisión',
      significado:
        'Es el valor de descarga permisible de sustancias contaminantes establecido por la Autoridad ambiental competente, con el objeto de cumplir la norma de calidad del aire. (Resolución 909 de 2008, p. 35).',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia de Protección Ambiental de Estados Unidos [EPA]. (2020). Factores de emisiones atmosféricas y cuantificación. ',
      link:
        'https://www.epa.gov/air-emissions-factors-and-quantification/basic-information-air-emissions-factors-and-quantification#About%20Emissions%20Factors  ',
    },
    {
      referencia:
        'algoestadistica. (2011). Notación científica. Probabilidad y Estadística. ',
      link:
        'http://pedroprobabilidadyestadistica.blogspot.com/2011/04/notacion-cientifica.html',
    },
    {
      referencia: 'Ambiente Bogotá. (2020). Red de calidad del aire.  ',
      link:
        'http://ambientebogota.gov.co/image/image_gallery?uuid=b459b6d1-003d-4333-9484-9d1efbb526e2&groupId=10157&t=1410817522951  ',
    },
    {
      referencia:
        'Arias, M. (s. f.). Cifras Significativas - Física I. Laboratorio de Física I (FI-LUZ). Física I. Laboratorio de Física I (FI-LUZ). ',
      link:
        'https://sites.google.com/site/laboratoriodefisicaifiluz/practicas-de-laboratorio/practica-no-1/cifras-significativas',
    },
    {
      referencia:
        'Brown, T., LeMay, H., Bursten, B. y Burdge, J. (2004). Química. La ciencia central. Pearson Educación. ',
      link:
        'https://academia.utp.edu.co/quimica2/files/2018/09/quc3admica-la-ciencia-central-brown.pdf ',
    },
    {
      referencia: 'Colegio Cristiano Jireth. (s. f.). Leyes de los gases.',
      link: 'https://www.webcolegios.com/file/bb95fd.pdf',
    },
    {
      referencia:
        'Comisión Nacional del Medio Ambiente Chile. (2009). Guía metodológica para la estimación de emisiones atmosféricas de fuentes fijas y móviles en el registro de emisiones y transferencia de contaminantes. Gobierno de Chile.',
      link: 'http://www.declaracionemision.cl/docs/GUIA_CONAMA.pdf   ',
    },
    {
      referencia: 'Educaplus.org. (s. f.-a). Amedeo Avogadro (1776–1856). ',
      link: 'http://www.educaplus.org/gases/bio_avogadro.html',
    },
    {
      referencia: 'Educaplus.org. (s. f.-b). Jacques Charles (1746–1823)',
      link: ' http://www.educaplus.org/gases/bio_charles.html',
    },
    {
      referencia:
        'Educaplus.org. (s. f.-c). Joseph Louis Gay-Lussac (1778–1850). ',
      link: 'http://www.educaplus.org/gases/bio_gay.html',
    },
    {
      referencia: 'Educaplus.org. (s. f.-d). Robert Boyle (1627–1691).',
      link: ' http://www.educaplus.org/gases/bio_boyle.html',
    },
    {
      referencia:
        'El Mundo de la Ciencia. (s. f.). Balanceo de reacciones REDOX - El Mundo de la Ciencia. ',
      link:
        'https://sites.google.com/site/elmundodelacienciaensm/reacciones-redox',
    },
    {
      referencia:
        'El Tiempo. (2019, Junio 4). El 92 % de los habitantes del planeta no respiran un aire limpio.',
      link:
        'https://www.eltiempo.com/vida/medio-ambiente/datos-sobre-la-contaminacion-del-aire-en-el-mundo-370632',
    },
    {
      referencia:
        'Gobierno de Estados Unidos. (s. f.). Leyes y regulaciones federales. USAGov en Español. ',
      link: 'https://www.usa.gov/espanol/leyes-regulaciones-federales',
    },
    {
      referencia:
        'Guía práctica para la gestión ambiental empresarial. (2008). ',
      link:
        'https://docplayer.es/11257606-Guia-practica-para-la-gestion-ambiental-empresarial-2008-guia-practica-para-la-gestion-ambiental-empresarial.html',
    },
    {
      referencia: 'IDEAM. (s. f.-a). Calidad del aire. ',
      link:
        'http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/calidad-del-aire',
    },
    {
      referencia: 'IDEAM. (s. f.-b). Emisiones por fuentes fijas. ',
      link:
        'http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/emisiones-por-fuentes-fijas',
    },
    {
      referencia: 'IDEAM. (s. f.-c). Emisiones por fuentes móviles. ',
      link:
        'http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/emisiones-por-fuentes-moviles',
    },
    {
      referencia: 'IDEAM. (2014). Contaminación y calidad ambiental. ',
      link: 'http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental',
    },
    {
      referencia:
        'Junta de Andalucía. (s. f.). Las reacciones químicas: tipos de reacciones químicas. ',
      link:
        'http://agrega.juntadeandalucia.es/repositorio/30042010/10/es-an_2010043013_9115528/FQ1_U3_T3_Contenidos_v02.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2008). Protocolo para el monitoreo y seguimiento de la calidad del aire. Manual de operación de sistemas de vigilancia de la calidad del aire. ',
      link:
        'http://www.ideam.gov.co/documents/51310/527391/Protocolo+para+el+Monitoreo+y+seguimiento+de+la+calidad+del+aire.pdf/6b2f53c8-6a8d-4f3d-b210-011a45f3ee88 ',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2010a). Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas. ',
      link:
        'http://www.ideam.gov.co/documents/51310/527666/Protocolo+fuentes+fijas.pdf/65780586-e70d-434a-9da7-264d3649b2ba ',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2010b). Protocolo para el monitoreo y seguimiento de la calidad del aire. Manual de diseño de sistemas de vigilancia de la calidad del aire. (2010). ',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/contaminacion_atmosferica/Protocolo_Calidad_del_Aire_-_Manual_Dise%C3%B1o.pdf',
    },
    {
      referencia:
        'Naciones Unidas. (s. f.). Objetivo 7: Garantizar el acceso a una energía asequible, segura, sostenible y moderna.',
      link: 'https://www.un.org/sustainabledevelopment/es/energy/',
    },
    {
      referencia:
        'Pardo, K. (2018, Noviembre 24). Contaminación del aire: un asesino anda suelto. El Tiempo. ',
      link:
        'https://www.eltiempo.com/vida/medio-ambiente/contaminacion-del-aire-un-problema-para-la-salud-en-colombia-292226',
    },
    {
      referencia:
        'Peña, T. y Bautista, J. (2018). Naturaleza de las reacciones químicas. Explorer BioGen. ',
      link:
        'https://explorerbiogen.wordpress.com/2018/02/01/naturaleza-de-las-reacciones-quimicas/',
    },
    {
      referencia:
        'Profe Cerebrito. (2013a). Información cuantitativa a partir de ecuaciones balanceadas teoría y ejercicios resueltos.',
      link:
        ' http://quimica-a1.blogspot.com/2013/02/informacion-cuantitativa-partir-de.html',
    },
    {
      referencia:
        'Profe Cerebrito. (2013b). Reactivos limitantes teoría y ejercicios resueltos. ',
      link:
        'http://quimica-a1.blogspot.com/2013/02/reactivos-limitantes-teoria-y.html',
    },
    {
      referencia:
        'Resolución 909 de 2008. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se establecen las normas y estándares de emisión admisibles de contaminantes a la atmósfera por fuentes fijas y se dictan otras disposiciones. Junio 5 de 2008. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/f0-Resoluci%C3%B3n%20909%20de%202008%20%20-%20Normas%20y%20estandares%20de%20emisi%C3%B3n%20Fuentes%20fijas.pdf',
    },
    {
      referencia:
        'Resolución 910 de 2008. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se reglamentan los niveles permisibles de emisión de contaminantes que deberán cumplir las fuentes móviles terrestres, se reglamenta el artículo 91 del Decreto 948 de 1995 y se adoptan otras disposiciones. Junio 5 de 2008. ',
      link:
        'http://www.bogotaturismo.gov.co/sites/intranet.bogotaturismo.gov.co/files/RESOLUCI%C3%93N%20910%20DE%202008.pdf ',
    },
    {
      referencia:
        'Resolución 650 de 2010. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se adopta el Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire. Marzo 29 de 2010. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/fb-Resolucion%20650%20de%202010%20-%20Adopci%C3%B3n%20protocolo%20calidad%20del%20aire.pdf ',
    },
    {
      referencia:
        'Resolución 2154 de 2010. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se ajusta el Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire adoptado a través de la Resolución 650 de 2010 y se adoptan otras disposiciones. Noviembre 2 de 2010. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/79-Resoluci%C3%B3n%202154%20de%202010%20-%20Ajuste%20Protocolo%20Calidad%20del%20Aire.pdf',
    },
    {
      referencia:
        'Resolución 0935 de 2011. [Instituto de Hidrología, Meteorología y Estudios Ambientales de Colombia]. Por la cual se establecen los métodos para la evaluación de emisiones contaminantes por fuentes fijas y se determina el número de pruebas o corridas para la medición de contaminantes en fuentes fijas. Abril 20 de 2011. DO. Nº 48.085. ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=42971 ',
    },
    {
      referencia:
        'Resolución 2254 de 2017. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se adopta la norma de calidad del aire ambiente y se dictan otras disposiciones. Noviembre 1 de 2017. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/96-res%202254%20de%202017.pdf ',
    },
    {
      referencia:
        'Revista Semana. (2020, septiembre 9). Colombia tendría 190.000 vehículos eléctricos en 2030  ',
      link:
        'https://sostenibilidad.semana.com/actualidad/articulo/colombia-tendria-190000-vehiculos-electricos-en-2030--noticias-hoy/55167   ',
    },
    {
      referencia:
        'Sánchez, C. (2018). Ley de los gases ideales. Instituto Superior Paramédico. ',
      link:
        'https://machete2000.files.wordpress.com/2018/10/08-gases-ideales.pdf',
    },
    {
      referencia:
        'Tecnológico de Monterrey | Innovación Educativa. (Septiembre 27, 2017). ¿Qué es un factor de emisión? [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=A0DKIGHVUsE  ',
    },
    {
      referencia:
        'Troposfera. (s. f.). Unidades de Medición Empleadas en Calidad del Aire. ',
      link:
        'https://www.troposfera.org/conceptos/unidades-de-medicion-empleadas-en-calidad-del-aire/',
    },
    {
      referencia:
        'Universidad de Panamá. (s. f.). El Sistema Internacional. Universidad de Panamá. Cursos de Química Analítica.',
      link:
        'https://alkemist.jimdofree.com/qm-112/sem-2-sistema-internacional/',
    },
    {
      referencia:
        'Universidad Iberoamericana. (s. f.). 2. Soluciones. Unidades de Concentración. ',
      link:
        'https://ibero.mx/campus/publicaciones/quimanal/pdf/2soluciones.pdf',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de México [UNAM]. (s. f.). Ecuación química. ',
      link: 'http://uapas2.bunam.unam.mx/ciencias/ecuacion_quimica/',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de México [UNAM]. (2019). Leyes generales de los gases: su aplicación en Fisiología. ',
      link:
        'http://fisiologia.facmed.unam.mx/wp-content/uploads/2019/11/3-leyes-de-los-gases.pdf  ',
    },
    {
      referencia:
        'Universidad Nacional de Lomas de Zamora. (s. f.). Módulo: Respiración celular. ',
      link:
        'http://agrarias.unlz.edu.ar/archivos_descargables/rvmaterialdebiologaparaelccf/Respiracion%20celular.pdf  ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
