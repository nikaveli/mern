import React from "react";

import UserList from "../components/UserList";


const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Nick Molina',
            image: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-9/49039896_10156787804187357_5853824404772880384_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=nBhTzg4surgAX-R9Ni_&tn=0PVYcBylhiO1Qx9f&_nc_ht=scontent.fapa1-2.fna&oh=cbdbe4bc9d8cad5bfa174bbbd23e8bc2&oe=61C772AF',
            place: 3
        }
    ];

    return <UserList items={USERS} />;
};

export default Users;
