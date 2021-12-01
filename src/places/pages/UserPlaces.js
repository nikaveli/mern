import React from "react";
import { useParams } from 'react-router-dom';


import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empower Field at Mile High',
        description: 'place I want to visit.',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipO2ULOJm8PhvQuXN3W5vKVLx_lEpuBNXtEGYbwR=w408-h306-k-no',
        address: '1701 Bryant St, Denver, CO 80204',
        location: {
            lat: 39.7438936,
            lng: -105.0223034
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empower Field at Mile High',
        description: 'place I want to visit.',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOKC_23HorcQqdqNw14HAtZlbAJ9P-7CTW-dqBI=w408-h272-k-no',
        address: '1701 Bryant St, Denver, CO 80204',
        location: {
            lat: 39.7438936,
            lng: -105.0223034
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId= useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
