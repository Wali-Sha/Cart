function calculateTotal() {
	// Get the quantities of each fruit
	var apples = parseInt(document.getElementById("apples").value);
	var bananas = parseInt(document.getElementById("bananas").value);
	var oranges = parseInt(document.getElementById("oranges").value);
	var grapes = parseInt(document.getElementById("grapes").value);
	var pineapple = parseInt(document.getElementById("pineapple").value);

	// Calculate the total items
	var totalItems = apples + bananas + oranges + grapes + pineapple;
	document.getElementById("totalItems").innerHTML = totalItems;

	// Calculate the total cost
	var appleCost = 200;
	var bananaCost = 150;
	var orangeCost = 120;
	var grapeCost = 400;
	var pineappleCost = 550;

	var totalCost = (apples * appleCost) + (bananas * bananaCost) + (oranges * orangeCost) + (grapes * grapeCost) + (pineapple * pineappleCost);
	document.getElementById("totalCost").innerHTML = "RS" + totalCost.toFixed(2);
}