import { baseApi } from "../baseApi";

export const ProductApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Signup endpoint
        createProduct: builder.mutation({
            query: (productData) => ({
                url: "/product/create",
                method: "POST",
                body: productData,
            }),
        }),

    }),
    overrideExisting: false,
});

// Export hooks for usage in functional components
export const {
    useCreateProductMutation
} = ProductApi;