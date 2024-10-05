import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Review } from 'shared/types/types';

export const viewsApi = createApi({
  reducerPath: 'views',
  tagTypes: ['Views'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'BASE_URL'
  }),
  endpoints: builder => ({
    createReview: builder.mutation<Review, void>({
      query: body => ({
        url: '/api/v1/create',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Views', id: 'LIST' }]
    }),

    getViews: builder.query<Review[], void>({
      query: id => `/api/v1/analysis/correct/${id}`
    })
  })
});

export const { useGetViewsQuery, useCreateReviewMutation } = viewsApi;