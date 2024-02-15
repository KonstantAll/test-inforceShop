import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Items', 'Comments'],
    endpoints: builder => ({
        getItems: builder.query({
            query: () => '/items',
            providesTags: ['Items']
        }),
        createItem: builder.mutation({
            query: item => ({
                url: '/items',
                method: 'POST',
                body: item
            }),
            invalidatesTags: ['Items']
        }),
        deleteItem: builder.mutation({
            query: id => ({
                url: `/items/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Items']
        }),
        getComment: builder.query({
            query: () => '/comments',
            providesTags: ['Comments']
        }),
        createComment: builder.mutation({
            query: comment => ({
                url: '/comments',
                method: 'POST',
                body: comment
            }),
            invalidatesTags: ['Comments']
        }),
        deleteComment: builder.mutation({
            query: id => ({
                url: `/comments/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Comments']
        })
    })
})

export const {
    useGetItemsQuery,
    useCreateItemMutation,
    useDeleteItemMutation,
    useGetCommentQuery,
    useCreateCommentMutation,
    useDeleteCommentMutation,
} = apiSlice