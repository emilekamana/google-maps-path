interface LocationProps {
    lat: number,
    lng: number,
}

interface MapProps {
    start: LocationProps;
    stops: LocationProps[];
    end: LocationProps;
};