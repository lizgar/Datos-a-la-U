console.log(datax)

$(document).ready(function () {

  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,

    data: {
      items: [
        {text: "Seguridad", count: datax[datax.length-1][1]},
        {text: "Movilidad social", count: datax[datax.length-1][2]},
        {text: "Competitividad", count: datax[datax.length-1][3]},
        {text: "Nuestro futuro", count: datax[datax.length-1][4]},
        {text: "Crecimiento", count: datax[datax.length-1][5]},
        {text: "Plan de Desarrollo de Zipaquirá", count: datax[datax.length-1].presupuesto},
        {text: "Gobierno bonito", count: datax[datax.length-1][6]},
     
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
    
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "28px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });

  $("g").on("click", function() {
    moneda()
    $("#infoData").hide();
    if((this.className.baseVal).search("Seguridad") >=0)
    {     
      $("#infoData").html(text1);
    }

    if((this.className.baseVal).search("Movilidadsocial") >=0)
    {      
      $("#infoData").html(text2);      
    }

    if((this.className.baseVal).search("PlandeDesarrollo") >=0)
    {      
      $(".count")[index].innerHTML="" 
    }
    

    if((this.className.baseVal).search("Competitividad") >=0)
    {      
      $("#infoData").html(text3);      
    }

    if((this.className.baseVal).search("Nuestrofuturo") >=0)
    {      
      $("#infoData").html(text4);      
    }

    if((this.className.baseVal).search("Crecimiento") >=0)
    {
      $("#infoData").html(text5);
    }

    if((this.className.baseVal).search("Gobiernobonito") >=0)
    {
      $("#infoData").html(text6);
    }

    $("#infoData").show('slow');
    
  });
  moneda()
});


function moneda(){
  
  $(".count").each(function( index ) {
    if(($(".count")[index].innerHTML/1).toLocaleString()!="NaN")
    {
      $(".count")[index].innerHTML="$"+($(".count")[index].innerHTML/1).toLocaleString()
    }
    
  });
}


const text1 = `
  <li class="activado"><h5>Seguridad, Convivencia, justicia y democracia</h5>
      <ul>
          <li>1. Seguridad y convivencia para la paz</li>
          <li>2. Desarrollo comunitario una oportunidad para todos</li>  
          <li>3. Gestión del  riesgo</li>
      </ul>
  </li> `

const text2 = `
  <li class="activado"><h5>Movilidad social, nada más importante que la gente</h5>
      <ul>
        <li>4.Educación base de la paz y la equidad</li>
        <li>5.Zipaquirá saludable nuestra responsabilidad</li>  
        <li>6.Revolución deportiva, recreativa y de actividad física</li>
        <li>7.Revolución cultural para la identidad y pertinencia</li>
        <li>8.Gente que merece nuestro amor</li>
        <li>9.Vivienda para  una ciudad amable</li>
      </ul>
  </li> `

const text3 = `
  <li class="activado"><h5>Competitividad y estructura una ciudad dinámica</h5>
      <ul>
        <li>10.Transporte y vías amables</li>
        <li>11.Promoción del desarrollo, empleo y turismo</li>  
        <li>12.Agua potable y saneamiento básicp</li>
        <li>13.Otros servicios públicos</li>
        <li>14.Equipamiento</li>
      </ul>
  </li> `

const text4 = `
  <li class="activado"><h5>Nuestro futuro la transformación del campo</h5>
      <ul>
        <li>15. El campo - La ría de nuestra ciudad</li>
      </ul>
  </li> `

const text5 = `
  <li class="activado"><h5>Crecimiento verde un ambiente para todos</h5>
      <ul>
        <li>16.Ambiente - Núcleo del desarrollo</li>
      </ul>
  </li> `

const text6 = `
  <li class="activado"><h5>Un gobierno bonito, un alcalde para la gente</h5>
      <ul>
        <li>17.Fortalecimiento institucional un gobierno de participación y concertación</li>
      </ul>
  </li> `





