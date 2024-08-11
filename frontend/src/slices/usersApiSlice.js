import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// Extends the existing apiSlice by injecting additional endpoints
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Adds a login mutation because we are making a post request 
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method:'POST',
                body:data,

            }),
            // Keeps unused data in the cache for 5 seconds
            keepUnusedDataFor: 5,
        }),
    })
});

// Exports a custom hook for the getProducts query
export const { useLoginMutation} = usersApiSlice;
