"use client"

import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
    version: 'weekly'
});


function Map({ start, stops, end }: MapProps) {

    const mapRef = React.useRef<HTMLDivElement>(null)

    const [map, setMap] = useState<google.maps.Map>();
    const [driverPosition, setDriverPosition] = useState<LocationProps>();
    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
    const [route, setRoute] = useState(null);

    useEffect(() => {

        if ('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;

                setDriverPosition({ lat: latitude, lng: longitude });
            })
        }


    }, []);

    useEffect(() => {
        if (map && directionsService && directionsRenderer) {
            const initRoutes = async () => {

                const waypts: google.maps.DirectionsWaypoint[] = [];

                for (let i = 0; i < stops.length; i++) {
                    waypts.push({
                        location: stops[i],
                        stopover: true,
                    });
                }

                directionsService.route({
                    destination: end,
                    origin: start,
                    travelMode: google.maps.TravelMode.DRIVING,
                    waypoints: waypts,
                }).then((response) => {
                    directionsRenderer.setDirections(response);
                });
            };

            initRoutes();
        }

    }, [directionsRenderer, directionsService, end, map, start, stops]);

    useEffect(() => {
        const initMap = async () => {

            const { Map } = await loader.importLibrary("maps");

            const { AdvancedMarkerElement, PinElement } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

            const position = {
                lat: -1.93132,
                lng: 30.15276
            };

            const mapOptions: google.maps.MapOptions = {
                center: driverPosition ? driverPosition : position,
                zoom: 17,
                mapId: "GOOGLE_MAP_PATH_ID"
            };

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            setMap(map)

            const routesLibrary = await loader.importLibrary('routes');

                let directionServiceInstance = new routesLibrary.DirectionsService();
                let directionsRendererInstance = new routesLibrary.DirectionsRenderer({
                    map: map,
                });

            setDirectionsService(directionServiceInstance);
            setDirectionsRenderer(directionsRendererInstance);

            // Show driver real time location
            if (driverPosition) {

                console.log("driver position", driverPosition);

                const glyphImg = document.createElement('img');
                glyphImg.src = '/car.svg';
                glyphImg.className = 'h-6 w-6 dark:invert';

                const marker = new AdvancedMarkerElement({
                    map: map,
                    position: driverPosition,
                    title: "Driver position",
                    content: new PinElement({
                        glyph: glyphImg,
                        scale: 1
                    }).element
                });

                const contentString =
                    '<div id="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Driver position</h1>' +
                    "</div>";

                const infoWindow = new google.maps.InfoWindow({
                    ariaLabel: 'Driver position',
                    content: contentString
                });


                marker.addListener("click", () => {
                    infoWindow.open({
                        anchor: marker,
                        map,
                    });
                });

                infoWindow.open({
                    anchor: marker,
                    map,
                });
            }


        }

        initMap()
    }, [driverPosition]);

    return (
        <div style={{ height: '600px', width: "600px" }} ref={mapRef} />
    );
}

export default Map;