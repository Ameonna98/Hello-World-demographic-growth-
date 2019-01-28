$(function () {

	$.getJSON( // MONDO
	  "https://api.myjson.com/bins/5z23c",
  
	  function (data) {
		console.log(data);
  
		// Compilo la selezione con HANDLEBARS
		let t = Handlebars.compile('<option value="{{ Country }}">{{ Country }}</option>');
  
			  data.forEach(function (el) {
				  $("#selezione").append(t(el));
		})
		
  
	
	//Bottone fatto con javascript
	$.getJSON(  //Mondo
	  "https://api.myjson.com/bins/5z23c",
	  
	  function(data){
		//console.log(data)
		
		for(let i = 0; i < data.length; i++){
		  document.getElementById("selezione").innerHTML += "<option class=\"opzione\">" + data[i].Country + "</option>"
		}
  
		$("#selezione").change(function () {
		  //let array = data
		  let paeseSel = document.getElementById('selezione').value;
		  let labels = []; //location del primo select
		  let test = [];// dati del primo select
		  //console.log(paeseSel)
		  for (let i = 0; i < data.length; i++) { //loop tra gli elemeni dell'array in modo da prendere solo le location
			if (paeseSel == data[i].Country) {
			  labels.push(paeseSel); //aggiungo all'array labels il paese selezionato
			  test.push(data[i].a1960); // aggiungo all'array data la percentuale arrotondata
			   
				 //console.log(data[i].a,b,c,d,e,f,g,h,i,l,m,n)
		
			}
		  } 
		  var ctx = document.getElementById("WorldC").getContext("2d"); // Grafico 
				var myChart = new Chart(ctx, {
			  type: 'bar',
		         "data":{"labels":[], // passo al grafico i dati aggiunti prima
			       "datasets": [{"label":" ",
						  "data":[test,200-test],
					  // passo al grafico le percentuali scritte prima
					"fill":false,"backgroundColor":["#8EB4CF","#7BA7C7", "#699BBF","#568EB7","#4382AF", "#3176A8","#2C6A97", 
				                                	"#275E86","#225376","#1D4765","#193B54", "#142F43",]}]},
				   "options":{
					  "scales":{"yAxes":[{"ticks":
					           {"beginAtZero":true}}]}}});
		  });
		}
	
		)
	  
	
	  });
	}
	);
	
	// "a1960","a1965","a1970","a1975","a1980","a1985","a1990","a1995","a2000","a2005","a2010","a2015" 
  // "1960","1965","1970","1975","1980","1985","1990","1995","2000","2005","2010","2015"
