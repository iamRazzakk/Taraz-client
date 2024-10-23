"use client";
import CreateProductForm from "@/src/components/Dashboard/CreateProductForm/CreateProductForm";
import { useCreateProductMutation } from "@/src/redux/Provider/Api/ProductApi/ProductApi";
import { toast } from "sonner";

const CreateProductPage = () => {
  const [createProduct, { isLoading, isError }] = useCreateProductMutation();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = {
      name: formData.get("name"),
      price: parseFloat(formData.get("price") as string),
      stockQuantity: parseInt(formData.get("stockQuantity") as string),
      category: formData.get("category"),
      brand: formData.get("brand"),
      images: formData.getAll("images"), // Assuming it's a multi-select file input
      isFeatured: true, // Add other fields as needed
      ratings: 4.5, // Example hardcoded data
    };
    try {
      const result = await createProduct(productData).unwrap();
      toast.success("Product created successfully");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-[35%] mx-auto">
        <h1>Create Product</h1>
        <CreateProductForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default CreateProductPage;
