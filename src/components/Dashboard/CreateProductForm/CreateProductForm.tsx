"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const CreateProductForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="py-3">
        <Input
          label="Product Name"
          name="name"
          size="sm"
          type="text"
          fullWidth
        />
      </div>
      <div className="py-3">
        <Input label="Price" name="price" size="sm" type="number" fullWidth />
      </div>
      <div className="py-3">
        <Input
          label="Stock Quantity"
          name="stockQuantity"
          size="sm"
          type="number"
          fullWidth
        />
      </div>
      <div className="py-3">
        <Input
          label="Category"
          name="category"
          size="sm"
          type="text"
          fullWidth
        />
      </div>
      <div className="py-3">
        <Input label="Brand" name="brand" size="sm" type="text" fullWidth />
      </div>
      <div className="py-3">
        <Input
          name="images"
          size="sm"
          type="file"
          label="File"
          multiple
          fullWidth
        />
      </div>

      <Button
        className="my-3 w-full rounded-md bg-default-900 text-default"
        size="lg"
        type="submit"
      >
        Create Product
      </Button>
    </form>
  );
};

export default CreateProductForm;
