import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LIMIT_LINK } from '../../api/apis';
/**
 * Base API service to be used across the application.
 * Endpoints can be injected using the .injectEndpoints method.
 */
export const baseApi = createApi({
	reducerPath: 'limitApiReducer',
	baseQuery: fetchBaseQuery({
		baseUrl: LIMIT_LINK,
	}),
	endpoints: (builder:any) => ({
        geData:builder.query({
            query:()=>LIMIT_LINK

        })
    }),
});
