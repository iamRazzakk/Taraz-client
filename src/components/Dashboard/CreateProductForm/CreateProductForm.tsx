"use client";

import { Button } from "@nextui-org/button";
import TForm from "../../Form/TForm";
import TInput from "../../Form/TInput";
import { Input } from "@nextui-org/input";

const CreateProductForm = ({ onSubmit }) => {
  return (
    <TForm onSubmit={onSubmit}>
      <div className="py-3">
        <TInput label="Product Name" name="name" size="sm" type="text" />
      </div>
      <div className="py-3">
        <TInput label="Price" name="price" size="sm" type="number" />
      </div>
      <div className="py-3">
        <TInput
          label="Stock Quantity"
          type="number"
          name="stockQuantity"
          size="sm"
        />
      </div>
      <div className="py-3">
        <TInput label="Category" name="category" size="sm" />
      </div>
      <div className="py-3">
        <TInput label="Brand" name="brand" size="sm" />
      </div>
      <div className="py-3">
        {/* <TInput label="File" name="images" type="file" size="sm" multiple /> */}
        <Input size="sm" type="file" label="File" multiple />
      </div>

      <Button
        className="my-3 w-full rounded-md bg-default-900 text-default"
        size="lg"
        type="submit"
      >
        Create Product
      </Button>
    </TForm>
  );
};

export default CreateProductForm;
