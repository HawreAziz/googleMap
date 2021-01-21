
export interface Mappable {
    location: {
        lat: number;
        lng: number
    }
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(elementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elementId) as Element, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent(),
            disableAutoPan: false
        })
        marker.addListener('mouseover', () => {
            infoWindow.open(this.googleMap, marker);
        })

        marker.addListener('mouseout', () => {
            infoWindow.close();
        });
    }
}