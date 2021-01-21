import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`;

const LOAD = () => {
    const { loading, data } = useQuery(GET_MOVIES);
    console.log(loading, data);
    return <h1>Home</h1>;
};

export default LOAD;
