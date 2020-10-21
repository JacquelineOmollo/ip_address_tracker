import React, {useState, useRef} from "react";
import ReactMapGL, {Marker, FlyToInterpolator} from "react-map-gl";
import useSupercluster from "use-supercluster";
import useSwr from "swr";


const fetcher = (...args) => fetch(...args).then(
    response => response.json()
);

export default function Map() {
    const [mapview, setMapview] = useState({
        width: "80vw",
        height: "80vh",
        latitude: 35.18215 ,
        longitude: -79.841861,
        zoom: 10
    })

    // const mapRaf = useRef(null);

    // const url = <DataSetup/>

    // const { data, error } = useSwr(url, {fetcher});
    // const status = data && !error ? data.slice(0, 1000) : [];
    // const points = status.map(location => ({
    //     type: "Feature",
    //     geometry: {
    //         type: "Point",
    //         coordinates: [
    //             parseFloat(location.lng),
    //             parseFloat(location.lat)
    //         ]
    //     },

        // properties: {
        //     id: "unique_id",
        //     country: "USA",
        //     state: "North Carolina",
        //     cases: 300000,
        //     deaths: 3000


    //     }
    // }))

    return (
        <div className="maps">
            <ReactMapGL
                {...mapview} maxZoom={200}
                mapboxApiAccessToken={"pk.eyJ1IjoiamxvbW9sbG8iLCJhIjoiY2tnaGNvY2dlMDVyeTJ5bnNkY2ZvNDJ3aCJ9.Kski3PT9yEFquwMybXACmg"}
                mapStyle = "mapbox://styles/jlomollo/ckduo3i4f0raf19nvhwfezuez"
                onViewportChange={nextMapview => {
                    setMapview({...nextMapview});
                }} 
                
                >
                 
            </ReactMapGL>
        </div>
    )
}