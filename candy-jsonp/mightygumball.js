window.onload = function() {
	/*var url = "http://gumball.wickedlysmart.com";
	var http = new XMLHttpRequest();
	http.onload = function() {
		if (http.status == 200) {
			updateSales(http.responseText);
		}
	};
	http.open("GET", url);
	http.send(null);*/
}

function updateSales(sales) {
	var salesDiv = document.getElementById("sales");
	//salesDiv.innerHTML = responseText;
	//var sales = JSON.parse(responseText);
	for (var i = 0; i < sales.length; i++) {
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		salesDiv.appendChild(div);
	}
}