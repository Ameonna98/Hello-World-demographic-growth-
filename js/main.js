$(function () {

	$.getJSON( // MONDO
		"https://api.myjson.com/bins/5z23c",

		function (data) {
			//console.log(data);	FUNZIONA

			// Bottone fatto con Handlebars		FUNZIONA
			let t = Handlebars.compile('<option value="{{ Country }}">{{ Country }}</option>');

			data.forEach(function (el) {
				$("#selezione").append(t(el));
			})

			$('#selezione').change(function () {
				let countrySel = document.getElementById('selezione').value;
				let labels = [];
				let test = [];
				// console.log(countrySel)	FUNZIONA
				for (let i = 0; i < data.length; i++) {
				 if (countrySel == data[i].Country) {
						labels.push(countrySel);
						test.push(data[i].a1960);
						test.push(data[i].a1965);
						test.push(data[i].a1970);
						test.push(data[i].a1975);
						test.push(data[i].a1980);
						test.push(data[i].a1985);
						test.push(data[i].a1990);
						test.push(data[i].a1995);
						test.push(data[i].a2000);
						test.push(data[i].a2005);
						test.push(data[i].a2010);
						test.push(data[i].a2015);
						// console.log(test);	FUNZIONA
					}
				}

				// Genero il grafico
				var ctx = document.getElementById("WorldC").getContext("2d"); // Grafico 
				var myChart = new Chart(ctx, {
					type: 'bar',
					"data": {
						"labels": [1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015], // anni dei dati del json 
						"datasets": [
							{
								"label": " Crescita della popolazione demografica ",
								"data": test,
								// passo al grafico le percentuali scritte prima
								"backgroundColor": ["#8EB4CF", "#7BA7C7", "#699BBF", "#568EB7",    //scaletta 
																		"#4382AF",	"#3176A8", "#2C6A97", "#275E86",   //dei 
																		"#225376", "#1D4765", "#193B54", "#142F43",],  // colori
								"borderColor": ["#8EB4CF", "#7BA7C7", "#699BBF", "#568EB7",        //cromotici
																"#4382AF",	"#3176A8", "#2C6A97", "#275E86",       
																 "#225376", "#1D4765", "#193B54", "#142F43",],
								"borderWidth": 1
							}
						],
						"options": {
							scales: {
								yAxes: [{
									ticks: {
										beginAtZero: true
									}
								}]
							}
						}
					},
				})
			})
		}
	)
})

