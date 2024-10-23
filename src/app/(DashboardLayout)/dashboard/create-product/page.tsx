"use client";
import CreateProductForm from "@/src/components/Dashboard/CreateProductForm/CreateProductForm";
import { useCreateProductMutation } from "@/src/redux/Provider/Api/ProductApi/ProductApi";
import { toast } from "sonner";

const CreateProductPage = () => {
  const [createProduct, { isLoading, isError }] = useCreateProductMutation();
  const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const imageFiles = formData.getAll("images") as File[];
    const uploadedImages: string[] = [];

    for (const image of imageFiles) {
      const imageData = new FormData();
      imageData.append("image", image);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
          {
            method: "POST",
            body: imageData,
          }
        );

        const result = await response.json();
        if (result.success) {
          uploadedImages.push(result.data.url);
          console.log("Image uploaded successfully");
        }
      } catch (error) {
        console.error("Failed to upload image:", error);
        toast.error("Image upload failed");
        return;
      }
    }

    const productData = {
      name: formData.get("name"),
      price: parseFloat(formData.get("price") as string),
      stockQuantity: parseInt(formData.get("stockQuantity") as string),
      category: formData.get("category"),
      brand: formData.get("brand"),
      images: uploadedImages,
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
