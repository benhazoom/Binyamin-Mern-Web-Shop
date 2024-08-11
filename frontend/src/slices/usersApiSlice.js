import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// Extends the existing apiSlice by injecting additional endpoints to comunicate with the server
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Adds a login mutation because we are making a post request 
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method:'POST',
                body:data,

            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method:'POST',
            }),
        }),
    })
});

// Exports a custom hook for the getProducts query
export const { useLoginMutation,useLogoutMutation} = usersApiSlice;
