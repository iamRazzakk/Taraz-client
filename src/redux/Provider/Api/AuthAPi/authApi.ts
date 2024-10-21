import { baseApi } from "../baseApi";
export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Signup endpoint
        signUp: builder.mutation({
            query: (userData) => ({
                url: "/auth/register",
                method: "POST",
                body: userData,
            }),
        }),
        // Signin endpoint
        signIn: builder.mutation({
            query: (data) => ({
                url: "/auth/signin",
                method: "POST",
                body: data,
            }),
        }),
    }),
    overrideExisting: false,
});

// Export hooks for usage in functional components
export const {
    useSignUpMutation,
    useSignInMutation,
} = authApi;