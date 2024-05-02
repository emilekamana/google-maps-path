// Location interface for type safety
interface ILocation {
    lat: number,
    lng: number,
}

// Map interface for type safety
interface IMap {
    start: ILocation;
    stops: ILocation[];
    end: ILocation;
};