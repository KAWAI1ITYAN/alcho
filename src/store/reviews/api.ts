import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { bidI, ReviewCreateI, ReviewI } from 'shared/types/types';


export const viewsApi = createApi({
  reducerPath: 'views',
  tagTypes: ['Views'],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://127.0.0.1:8000/api/`
  }),
  endpoints: builder => ({
    createReview: builder.mutation<void, ReviewCreateI>({
      query: body => ({
        url: 'reviews/create',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Views', id: 'LIST' }]
    }),

    createBid: builder.mutation<void, bidI>({
      query: body => ({
        url: 'bid/create',
        method: 'POST',
        body
      })
    }),

    getViews: builder.query<ReviewI[], void>({
      query: () => ({
        url: 'reviews/',
        providesTags: ['Views']
      })
    }),

    getLatestViews: builder.query<ReviewI[], void>({
      query: () => ({
        url: 'reviews/latest',
        providesTags: ['Views']
      })
    })
  })
});

export const {
  useCreateBidMutation,
  useGetLatestViewsQuery,
  useGetViewsQuery,
  useCreateReviewMutation
} = viewsApi;