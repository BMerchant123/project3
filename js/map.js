
let map;: google.maps.Map;

function initMap(): void {
	var centerMap = {
      zoom: 15,
      center: {lat: 41.948006, lng: 87.688036},
    }
	
	const map = new google.maps.Map(document.getElementById("map") as HTMLElement, centerMap);
	
	const DHCinfo = "<h3>Dave's hot chickent</h3>"
	
	const DHCMarker = new google.maps.Marker({
		position: new google.maps.LatLng(41.948006, 87.688036),
		title: "Dave's Hot Chicken",
	});
	
	const DHCWindow = new google.maps.InfoWindow({
		content: DHCinfo,
		ariaLabel: "Dave's Hot Chicken",
	)};
	
	DHCMarker.addListner("click", () => {
      DHCWindow.open({
        anchor: DHCMarker,
        map,
	  )};
    });
	
	const KBBQMarker = new google.maps.Marker({
		position: new google.maps.LatLng(41.998277, 87.688539),
		title: "Khan BBQ",
	});
	
	const KBBQinfo = "<h3>test</h3>"
	
	const KBBQWindow = new google.maps.InfoWindow({
		content: KBBQinfo,
		ariaLabel: "Khan BBQ",
	});
	
	KBBQMarker.addListner("click", () => {
      KKBQWIndow.open({
        anchor: KBBQMarker,
        map,
	  )};
    });
	
	
	const SMarker = new google.maps.Marker({
		position: new google.maps.LatLng(41.998813, 87.690471),
		label: "Spinzer",
	});

}


window.initMap = initMap;
