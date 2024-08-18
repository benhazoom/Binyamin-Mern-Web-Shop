In this Readme you will find some useful information about Slices

# Regular Slice

A regular slice in Redux Toolkit is used to manage a specific part of the application's state. It typically contains the following:

Initial State: The default state for this part of the store.
Reducers: Functions that specify how the state should change in response to actions.
Actions: Automatically generated action creators based on the reducer functions.
Selectors: Functions to retrieve specific parts of the state.

# ApiSlice

## Queries

These are used to fetch data. When you define a query in your slice, it automatically manages the caching, fetching, and re-fetching of the data based on your defined endpoints.

## Mutations

These are used to create, update, or delete data. When you define a mutation, it provides methods for making these changes and also handles the state updates.

## keepUnusedDataFor

This option allows you to specify how long (in seconds) the cached data from a query should be kept in the store after it is no longer used by any component.

## invalidatesTags

This is used in mutations to indicate which cached data should be invalidated when a particular mutation occurs. This ensures that the cache is refreshed with the latest data when the query is refetched.
