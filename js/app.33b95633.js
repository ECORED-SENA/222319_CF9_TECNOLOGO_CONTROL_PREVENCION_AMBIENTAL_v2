(function(e){function a(a){for(var n,o,s=a[0],c=a[1],l=a[2],d=0,u=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&u.push(t[o][0]),t[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,a=0;a<r.length;a++){for(var i=r[a],n=!0,o=1;o<i.length;o++){var s=i[o];0!==t[s]&&(n=!1)}n&&(r.splice(a--,1),e=c(c.s=i[0]))}return e}var n={},o={app:0},t={app:0},r=[];function s(e){return c.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"39c6774d","chunk-0206bfa0":"23834d76","chunk-0c047e41":"346dcdef","chunk-13a6037e":"141cece7","chunk-18f95272":"6679ff83","chunk-25b302c8":"2c0b1ccf","chunk-26fc7596":"b8585c4b","chunk-2c06842c":"7d5c266b","chunk-2d0c5615":"625de244","chunk-2d0e96ec":"c56a4167","chunk-2d208d90":"16c0fcea","chunk-2d21d0e2":"62993821","chunk-2d22c123":"93688b5d","chunk-2d2747e2":"16e43c29","chunk-2e80bb9a":"2809e191","chunk-319206de":"cb1e7823","chunk-32334cb6":"a3ac75bc","chunk-36769079":"9a3e3df5","chunk-3c57cd7b":"60d32933","chunk-4cdd78c0":"00ecc3eb","chunk-4f2d402a":"219043e3","chunk-515a8379":"d844e075","chunk-53ccb27e":"b39b8d46","chunk-55d286b8":"243ae0d2","chunk-59974754":"52dd4b1c","chunk-60cbc06b":"ff34f7c2","chunk-659152b8":"02f6d70b","chunk-6e1e538a":"32fe5932","chunk-766a929b":"42486e17","chunk-c796899c":"dbc88330","chunk-e8a7823a":"e78ac50f","chunk-f2df7d2c":"57627739","chunk-fde47172":"767880ef",comple:"0f24b2b6",creditos:"6c15de97",glosario:"f50bc307",intro:"3e4ba447",referencias:"5817c6ec",sintesis:"363b1ac6",tema1:"65cffbcf",tema2:"c1bcbb6e",tema3:"efbffc52"}[e]+".js"}function c(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(e){var a=[],i={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1,tema3:1};o[e]?a.push(o[e]):0!==o[e]&&i[e]&&a.push(o[e]=new Promise((function(a,i){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"be25a6af","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"41f8687e","chunk-60cbc06b":"d3a83979","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"126808df","chunk-766a929b":"87fd8c0c","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"3d214811",creditos:"ef20f2bf",glosario:"51c308df",intro:"31d6cfe0",referencias:"e5878bf9",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"66458a03"}[e]+".css",t=c.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===t))return a()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===n||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete o[e],m.parentNode.removeChild(m),i(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var n=t[e];if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,i){n=t[e]=[a,i]}));a.push(n[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var i=t[e];if(0!==i){if(i){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,i[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},c.m=e,c.c=n,c.d=function(e,a,i){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)c.d(i,n,function(a){return e[a]}.bind(null,n));return i},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),i()})({0:function(e,a,i){e.exports=i("56d7")},"52e5":function(e,a,i){e.exports=i.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,i){"use strict";i.r(a);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("68f3"),o=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"app",attrs:{id:"app"}},[i("Header"),i("div",{staticClass:"contenedor-principal"},[i("AsideMenu"),i("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[i("router-view")],1)],1),i("BarraAvance"),i("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},s=r,c=i("2877"),l=Object(c["a"])(s,o,t,!1,null,null,null),d=l.exports,u=(i("d3b7"),i("3ca3"),i("ddb0"),i("b0c0"),i("2b0e")),m=i("8c4f"),f=i("ae58"),p=i("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return i.e("intro").then(i.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return i.e("tema1").then(i.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return i.e("tema2").then(i.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return i.e("tema3").then(i.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return i.e("tema3").then(i.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return i.e("tema3").then(i.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return i.e("actividad").then(i.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return i.e("glosario").then(i.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return i.e("comple").then(i.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return i.e("referencias").then(i.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return i.e("sintesis").then(i.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return i.e("creditos").then(i.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var i={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?i:new Promise((function(e){setTimeout((function(){e(i)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=i("1c2c"),v=(i("a3a0"),{global:{componenteFormativo:"Interpretación de los resultados de medición de las emisiones",descripcionCurso:"El objetivo es contextualizar al aprendiz para que incorpore y establezca las metodologías apropiadas en la verificación de las emisiones resultantes de proceso y operaciones productivas con el fin de correlacionar las concentraciones emitidas por la fuente de emisión según los protocolos y metodologías establecidas para realizar las respectivas correlaciones normativas según lo establecido en las leyes, decretos y resoluciones.",imagenBannerPrincipal:i("74b5"),fondoBannerPrincipal:i("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:i("71f8")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Bases conceptuales cálculo valores de emisión ",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Unidades de medida de la contaminación atmosférica",hash:"t_1_1"},{numero:"1.2",titulo:"Sistemas de unidades",hash:"t_1_2"},{numero:"1.3",titulo:"Unidades de medición",hash:"t_1_3"},{numero:"1.4",titulo:"El sistema internacional de unidades y notación científica",hash:"t_1_4"},{numero:"1.5",titulo:"Conversiones de unidades",hash:"t_1_5"},{numero:"1.6",titulo:"Factor de conversión",hash:"t_1_6"},{numero:"1.7",titulo:"Notación científica",hash:"t_1_7"},{numero:"1.8",titulo:"Conversión de unidades",hash:"t_1_8"},{numero:"1.9",titulo:"Ley de gases ideales",hash:"t_1_9"},{numero:"1.10",titulo:"Diagrama de entradas y salidas de la contaminación atmosférica",hash:"t_1_10"}]},{nombreRuta:"tema2",numero:"2",titulo:"Cálculo de emisiones",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Medición directa",hash:"t_2_1"},{numero:"2.2",titulo:"Puertos de muestreo",hash:"t_2_2"},{numero:"2.3",titulo:"Plataforma de muestreo",hash:"t_2_3"},{numero:"2.4",titulo:"Acceso al sitio de muestreo",hash:"t_2_4"},{numero:"2.5",titulo:"Instalaciones para equipos de toma de muestra y análisis",hash:"t_2_5"},{numero:"2.6",titulo:"Medición indirecta",hash:"t_2_6"},{numero:"2.7",titulo:"Factores de emisión",hash:"t_2_7"}]},{nombreRuta:"tema3",numero:"3",titulo:"Combustión",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Leyes de las reacciones químicas",hash:"t_3_1"},{numero:"3.2",titulo:"Ecuaciones químicas",hash:"t_3_2"},{numero:"3.3",titulo:"Procesos de combustión",hash:"t_3_3"},{numero:"3.4",titulo:"Combustibles",hash:"t_3_4"},{numero:"3.5",titulo:"Balanceo de ecuaciones químicas",hash:"t_3_5"},{numero:"3.6",titulo:"Estequiometría",hash:"t_3_6"}]},{nombreRuta:"tema4",numero:"4",titulo:"Normativa de emisiones ",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Calidad del aire",hash:"t_4_1"},{numero:"4.2",titulo:"Fuentes fijas",hash:"t_4_2"}]},{nombreRuta:"tema5",numero:"5",titulo:"Interpretación de los resultados y las emisiones",desarrolloContenidos:!0,subMenu:[{numero:"5.1",titulo:"Correcciones de resultados en inmisión o calidad del aire",hash:"t_5_1"},{numero:"5.2",titulo:"Correcciones de resultados de emisión en fuentes fijas",hash:"t_5_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/222319_CF09_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Conversión de unidades",referencia:"Puntaje Nacional Chile. (Abril 4, 2013). <i>Unidades de concentración</i> [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=NGUytYmKAro"},{tema:"Ley de los gases",referencia:"Gallegos, C. (2015). <i>Experimento densidad del aire</i> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=TipL5b7dqig"},{tema:"Ley de los gases",referencia:"Danstein. (Octubre 15, 2019). <i>Leyes de los gases Parte 3-Ley general de los gases y ejemplos prácticos</i> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=b-Dzm6hGPJ8"},{tema:"Diagramas de entrada y salida de la contaminación atmosférica",referencia:"Ochoa, W. (Marzo 22, 2020). <i>Evaluación de impacto ambiental - Diagramas de proceso</i> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=yqi372crXWY"},{tema:"Cálculo de emisiones",referencia:"Corantioquiaoficial. (Abril 30, 2014). <i>Seguimiento y Control a Fuentes Fijas</i> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=fNBy6k4EKHo"},{tema:"Instalaciones para equipos de toma de muestra y análisis",referencia:"Fluoreciencia Didáctica, lenguaje y cultura. (Marzo 1, 2016) <i>Atmósfera-Muestreo Isocinético en chimenea</i> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=rrXgBvkuJ4w&t=10s "},{tema:"¿Qué es un factor de emisión?",referencia:"Tecnológico de Monterrey | Innovación Educativa. (Septiembre 27, 2017). <i>¿Qué es un factor de emisión?</i> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=A0DKIGHVUsE "},{tema:"Factores de Emisión EPA AP-42      ",referencia:"Páez, J. (Agosto 3, 2013). <i>Factores de Emisión EPA AP-42 </i>[Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=kThVlN83V9g "}],glosario:[{termino:"Balance de masas",significado:"El balance de masas hace referencia a la cuantificación de emisiones por balance de materia y energía. En ocasiones, por las características del proceso industrial, es el único método para la cuantificación de emisiones que se puede emplear. Por ejemplo, en las actividades industriales que manufacturan o emplean en sus procesos compuestos orgánicos volátiles, especialmente cuando las emisiones se producen de manera fugitiva, este procedimiento de evaluación se convierte en la primera alternativa para cuantificar la emisión de contaminantes. (MAVDT, 2010a, p. 25)."},{termino:"Concentración de una sustancia en el aire",significado:"Es la relación que existe entre el peso o el volumen de una sustancia y la unidad de volumen de aire en la cual está contenida. (Resolución 909 de 2008, p. 33)."},{termino:"Condiciones de referencia",significado:"Son los valores de temperatura y presión con base en los cuales se fijan las normas de calidad del aire y de las emisiones, que respectivamente equivalen a 25 ºC y 760 mm de mercurio. (Resolución 909 de 2008, p. 33)."},{termino:"Contaminación atmosférica",significado:"Es el fenómeno de acumulación o de concentración de contaminantes en el aire. (Resolución 909 de 2008, p. 33)."},{termino:"Contaminantes",significado:"Son fenómenos físicos o sustancias o elementos en estado sólido, líquido o gaseoso, causantes de efectos adversos en el medio ambiente, los recursos naturales renovables y la salud humana, que solos o en combinación, o como productos de reacción, se emiten al aire como resultado de actividades humanas, de causas naturales, o de una combinación de estas. (Resolución 909 de 2008, p. 33)."},{termino:"Emisión",significado:"Es la descarga de una sustancia o elemento al aire, en estado sólido, líquido o gaseoso, o en alguna combinación de éstos, proveniente de una fuente fija o móvil. (Resolución 909 de 2008, p. 34)."},{termino:"Factores de emisión",significado:"Un factor de emisión es la relación entre la cantidad de contaminante emitido a la atmósfera y una unidad de actividad o del proceso, tal como el consumo de energía, el consumo de materia prima, el consumo de combustible, las unidades de producción, el calendario de protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas en operación, el número de dispositivos o las características de estos, entre otros. (MAVDT, 2010a, p. 28)."},{termino:"Fuente de emisión",significado:"Es toda actividad, proceso u operación realizado por los seres humanos, o con su intervención, susceptible de emitir contaminantes al aire. (Resolución 909 de 2008, p. 34)"},{termino:"Fuente fija dispersa o difusa",significado:"Es aquella en que los focos de emisión de una fuente fija se dispersan en un área, por razón del desplazamiento de la acción causante de la emisión, como, por ejemplo, en el caso de las quemas abiertas controladas en zonas rurales. (Resolución 909 de 2008, p. 34)."},{termino:"Fuente fija puntual",significado:"Es la fuente fija que emite contaminantes al aire por ductos o chimeneas. (Resolución 909 de 2008, p. 34)."},{termino:"Fuente fija",significado:"Es la fuente de emisión situada en un lugar determinado e inamovible, aún cuando la descarga de contaminantes se produzca en forma dispersa. (Resolución 909 de 2008, p. 34)."},{termino:"Norma de emisión",significado:"Es el valor de descarga permisible de sustancias contaminantes establecido por la Autoridad ambiental competente, con el objeto de cumplir la norma de calidad del aire. (Resolución 909 de 2008, p. 35)."}],referencias:[{referencia:"Agencia de Protección Ambiental de Estados Unidos [EPA]. (2020). <i>Factores de emisiones atmosféricas y cuantificación</i>. ",link:"https://www.epa.gov/air-emissions-factors-and-quantification/basic-information-air-emissions-factors-and-quantification#About%20Emissions%20Factors  "},{referencia:"algoestadistica. (2011). <i>Notación científica</i>. Probabilidad y Estadística. ",link:"http://pedroprobabilidadyestadistica.blogspot.com/2011/04/notacion-cientifica.html"},{referencia:"Ambiente Bogotá. (2020). <i>Red de calidad del aire</i>."},{referencia:"Arias, M. (s. f.). <i>Cifras Significativas - Física I. Laboratorio de Física I (FI-LUZ)</i>. Física I. Laboratorio de Física I (FI-LUZ). "},{referencia:"Brown, T., LeMay, H., Bursten, B. y Burdge, J. (2004). <i>Química. La ciencia central</i>. Pearson Educación. ",link:"https://academia.utp.edu.co/quimica2/files/2018/09/quc3admica-la-ciencia-central-brown.pdf "},{referencia:"Colegio Cristiano Jireth. (s. f.). <i>Leyes de los gases</i>.",link:"https://www.webcolegios.com/file/bb95fd.pdf"},{referencia:"Comisión Nacional del Medio Ambiente Chile. (2009). <i>Guía metodológica para la estimación de emisiones atmosféricas de fuentes fijas y móviles en el registro de emisiones y transferencia de contaminantes<i>. Gobierno de Chile.",link:"http://www.declaracionemision.cl/docs/GUIA_CONAMA.pdf   "},{referencia:"Educaplus.org. (s. f.-a). <i>Amedeo Avogadro (1776–1856)</i>. ",link:"http://www.educaplus.org/gases/bio_avogadro.html"},{referencia:"Educaplus.org. (s. f.-b). <i>Jacques Charles (1746–1823)</i>",link:" http://www.educaplus.org/gases/bio_charles.html"},{referencia:"Educaplus.org. (s. f.-c). <i>Joseph Louis Gay-Lussac (1778–1850).</i> ",link:"http://www.educaplus.org/gases/bio_gay.html"},{referencia:"Educaplus.org. (s. f.-d). <i>Robert Boyle (1627–1691).</i>",link:" http://www.educaplus.org/gases/bio_boyle.html"},{referencia:"El Mundo de la Ciencia. (s. f.). <i>Balanceo de reacciones REDOX - El Mundo de la Ciencia</i>. "},{referencia:"El Tiempo. (2019, Junio 4). <i>El 92 % de los habitantes del planeta no respiran un aire limpio</i>.",link:"https://www.eltiempo.com/vida/medio-ambiente/datos-sobre-la-contaminacion-del-aire-en-el-mundo-370632"},{referencia:"Gobierno de Estados Unidos. (s. f.). <i>Leyes y regulaciones federales</i>. USAGov en Español. "},{referencia:"<i>Guía práctica para la gestión ambiental empresarial</i>. (2008). ",link:"https://docplayer.es/11257606-Guia-practica-para-la-gestion-ambiental-empresarial-2008-guia-practica-para-la-gestion-ambiental-empresarial.html"},{referencia:"IDEAM. (s. f.-a). <i>Calidad del aire</i>. ",link:"http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/calidad-del-aire"},{referencia:"IDEAM. (s. f.-b). <i>Emisiones por fuentes fijas</i>. ",link:"http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/emisiones-por-fuentes-fijas"},{referencia:"IDEAM. (s. f.-c). <i>Emisiones por fuentes móviles</i>. ",link:"http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/emisiones-por-fuentes-moviles"},{referencia:"IDEAM. (2014).<i> Contaminación y calidad ambiental<i>. ",link:"http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental"},{referencia:"Junta de Andalucía. (s. f.). <i>Las reacciones químicas: tipos de reacciones químicas</i>. "},{referencia:"Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2008). Protocolo para el monitoreo y seguimiento de la calidad del aire. Manual de operación de sistemas de vigilancia de la calidad del aire. ",link:"https://www.minambiente.gov.co/wp-content/uploads/2021/06/Protocolo_Calidad_del_Aire_-_Manual_Operacion.pdf"},{referencia:"Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2010a). <i>Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas</i>. ",link:"http://www.ideam.gov.co/documents/51310/527666/Protocolo+fuentes+fijas.pdf/65780586-e70d-434a-9da7-264d3649b2ba "},{referencia:"Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2010b). <i>Protocolo para el monitoreo y seguimiento de la calidad del aire. Manual de diseño de sistemas de vigilancia de la calidad del aire.</i> (2010). ",link:"https://www.minambiente.gov.co/wp-content/uploads/2021/06/Protocolo_Calidad_del_Aire_-_Manual_Diseno.pdf"},{referencia:"Naciones Unidas. (s. f.). <i>Objetivo 7: Garantizar el acceso a una energía asequible, segura, sostenible y moderna<i>.",link:"https://www.un.org/sustainabledevelopment/es/energy/"},{referencia:"Pardo, K. (2018, Noviembre 24). <i>Contaminación del aire: un asesino anda suelto</i>. El Tiempo. ",link:"https://www.eltiempo.com/vida/medio-ambiente/contaminacion-del-aire-un-problema-para-la-salud-en-colombia-292226"},{referencia:"Peña, T. y Bautista, J. (2018). <i>Naturaleza de las reacciones químicas</i>. Explorer BioGen. ",link:"https://explorerbiogen.wordpress.com/2018/02/01/naturaleza-de-las-reacciones-quimicas/"},{referencia:"Profe Cerebrito. (2013a). <i>Información cuantitativa a partir de ecuaciones balanceadas teoría y ejercicios resueltos</i>.",link:" http://quimica-a1.blogspot.com/2013/02/informacion-cuantitativa-partir-de.html"},{referencia:"Profe Cerebrito. (2013b). R<i>eactivos limitantes teoría y ejercicios resueltos</i>. ",link:"http://quimica-a1.blogspot.com/2013/02/reactivos-limitantes-teoria-y.html"},{referencia:"Resolución 909 de 2008. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se establecen las normas y estándares de emisión admisibles de contaminantes a la atmósfera por fuentes fijas y se dictan otras disposiciones. Junio 5 de 2008. ",link:"https://www.minambiente.gov.co/wp-content/uploads/2021/08/resolucion-909-de-2008.pdf"},{referencia:"Resolución 910 de 2008. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se reglamentan los niveles permisibles de emisión de contaminantes que deberán cumplir las fuentes móviles terrestres, se reglamenta el artículo 91 del Decreto 948 de 1995 y se adoptan otras disposiciones. Junio 5 de 2008. ",link:"https://www.minambiente.gov.co/documento-entidad/resolucion-910-de-2008/"},{referencia:"Resolución 650 de 2010. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se adopta el Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire. Marzo 29 de 2010. ",link:"https://www.ins.gov.co/Normatividad/Resoluciones/RESOLUCI%C3%93N%200650%20DE%202010.pdf"},{referencia:"Resolución 2154 de 2010. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se ajusta el Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire adoptado a través de la Resolución 650 de 2010 y se adoptan otras disposiciones. Noviembre 2 de 2010. ",link:"https://www.minambiente.gov.co/documento-normativa/resolucion-2154-de-2010/"},{referencia:"Resolución 0935 de 2011. [Instituto de Hidrología, Meteorología y Estudios Ambientales de Colombia]. Por la cual se establecen los métodos para la evaluación de emisiones contaminantes por fuentes fijas y se determina el número de pruebas o corridas para la medición de contaminantes en fuentes fijas. Abril 20 de 2011. DO. Nº 48.085. ",link:"https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=42971 "},{referencia:"Resolución 2254 de 2017. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se adopta la norma de calidad del aire ambiente y se dictan otras disposiciones. Noviembre 1 de 2017. ",link:"http://www.ideam.gov.co/documents/51310/527391/2.+Resoluci%C3%B3n+2254+de+2017+-+Niveles+Calidad+del+Aire..pdf/c22a285e-058e-42b6-aa88-2745fafad39f"},{referencia:"Revista Semana. (2020, septiembre 9). <i>Colombia tendría 190.000 vehículos eléctricos en 2030</i>  ",link:"https://sostenibilidad.semana.com/actualidad/articulo/colombia-tendria-190000-vehiculos-electricos-en-2030--noticias-hoy/55167   "},{referencia:"Sánchez, C. (2018). <i>Ley de los gases ideales</i>. Instituto Superior Paramédico. ",link:"https://machete2000.files.wordpress.com/2018/10/08-gases-ideales.pdf"},{referencia:"Tecnológico de Monterrey | Innovación Educativa. (Septiembre 27, 2017).<i> ¿Qué es un factor de emisión?</i> [Video]. YouTube.",link:"https://www.youtube.com/watch?v=A0DKIGHVUsE  "},{referencia:"Troposfera. (s. f.). Unidades de Medición Empleadas en Calidad del Aire. ",link:"https://www.troposfera.org/conceptos/unidades-de-medicion-empleadas-en-calidad-del-aire/"},{referencia:"Universidad de Panamá. (s. f.). <i>El Sistema Internacional</i>. Universidad de Panamá. Cursos de Química Analítica.",link:"https://alkemist.jimdofree.com/qm-112/sem-2-sistema-internacional/"},{referencia:"Universidad Iberoamericana. (s. f.). 2. Soluciones. Unidades de Concentración. ",link:"https://ibero.mx/campus/publicaciones/quimanal/pdf/2soluciones.pdf"},{referencia:"Universidad Nacional Autónoma de México [UNAM]. (s. f.). Ecuación química. ",link:"https://e1.portalacademico.cch.unam.mx/alumno/quimica1/unidad1/reaccionesQuimicas/ecuacionquimica"},{referencia:"Universidad Nacional Autónoma de México [UNAM]. (2019).<i> Leyes generales de los gases: su aplicación en Fisiología</i>. ",link:"http://fisiologia.facmed.unam.mx/wp-content/uploads/2019/11/3-leyes-de-los-gases.pdf  "},{referencia:"Universidad Nacional de Lomas de Zamora. (s. f.). <i>Módulo: Respiración celular</i>. ",link:"https://es-static.z-dn.net/files/d99/468954146caa09ddd2e3306c84541203.pdf"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable de Línea de Producción",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Diana Carolina Triana Guarnizo",cargo:"Instructora",centro:"Regional Distrito Capital - Centro de Gestión Industrial"},{nombre:"Juan Carlos Cárdenas Sánchez",cargo:"Instructor",centro:"Regional Distrito Capital - Centro de Gestión Industrial"},{nombre:"Gloria Esperanza Ortiz Russi",cargo:"Evaluadora y diseñadora instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial"},{nombre:"Martha Isabel Martínez Vargas",cargo:"Productora audiovisual",centro:"Centro Industrial del Diseño y la Manufactura"},{nombre:"Ana Vela Rodríguez Velásquez",cargo:"Diseño instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Evaluadora Instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial"},{nombre:"Darío González",cargo:"Corrección de estilo",centro:"Regional Tolima – Centro Agropecuario La Granja"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Juan Daniel Polanco Muñoz",cargo:"Diseñador de Contenidos Digitales",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Edward Leonardo Pico Cabra",cargo:"Desarrollador Fullstack",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Carlos Eduardo Garavito Parada",cargo:"Producción audiovisual ",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Emilsen Alfonso Bautista",cargo:"Actividad Didáctica",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Zuleidy María Ruiz Torres",cargo:"Validador de Recursos Educativos Digitales",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Validador de Recursos Educativos Digitales",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});n["a"].prototype.$config=v;var w=i("9224");n["a"].prototype.$package=w,new n["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"71f8":function(e,a,i){e.exports=i.p+"img/banner-principal-decorativo-1.a69563bd.svg"},"74b5":function(e,a,i){e.exports=i.p+"img/banner-princiapal.23510bd0.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,i){e.exports=i.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,i){},ce7c:function(e,a,i){e.exports=i.p+"img/fondo-banner-principal.2e1e7130.png"}});
//# sourceMappingURL=app.33b95633.js.map