import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";

import CategoryForm from "components/category-form";

import { createCategory } from "store/category/action-creators";

const EditCreateCategoryRoute = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFormSubmit = ({
    name,
    imageUrl,
    description,
  }: {
    name: string;
    imageUrl: string;
    description: string;
  }) => {
    console.log(name);
    console.log(imageUrl);
    console.log(description);
    dispatch(createCategory({ name, imageUrl, description, navigate }));
  };

  return (
    <div>
      <CategoryForm headerText="Create Category" onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default EditCreateCategoryRoute;
