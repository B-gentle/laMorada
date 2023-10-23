import { apiSlice } from "./baseApiSlice";

export const apartmentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getApartments: builder.query({
            query: () => ({
                url: '/api/houses',
            }),
            keepUnusedDataFor: 5
        }),

        getApartmentDetails: builder.query({
            query: (ID) => ({
                url: `/api/houses/${ID}`,
            }),
            keepUnusedDataFor: 5
        }),

    })
});

export const { useGetApartmentsQuery, useGetApartmentDetailsQuery } = apartmentApiSlice;