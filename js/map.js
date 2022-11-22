function initMap() {
	 new google.maps.Map(document.getElementById("map"), {
    mapId: "8e0a97af9386fef",
    center: { lat: 41.948006, lng: 87.688036},
    zoom: 12,
	};
	const DHCinfo = "<h3>Dave's hot chickent</h3>"
	
	const DHCMarker = new google.maps.Marker({
		position: new google.maps.LatLng(41.948006, 87.688036);
		title: "Dave's Hot Chicken";
	});
	
	const DHCInfo = new google.maps.InfoWindow({
		content: DHCinfo,
		ariaLabel: "Dave's Hot Chicken"
		
	new google.maps.Marker({
		position: new google.maps.LatLng(41.998277, 87.688539);
		label: "Khan BBQ";
	});
	
	new google.maps.Marker({
		position: new google.maps.LatLng(41.998813, 87.690471);
		label: "Spinzer";
	});
}

window.initMap = initMap;