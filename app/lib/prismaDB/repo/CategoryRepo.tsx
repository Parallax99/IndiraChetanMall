import { prismaClient } from "@/config/prismadb";
import { CategoryModal } from "../modals/Modals";

export const createCategory = async (params: CategoryModal) => {
  const category = await prismaClient.categories.create({
    data: {
      categoryName: params.categoryName,
      image: params.image,
    },
  });
};

export const getAllCategories = async () => {
  const categories = await prismaClient.categories.findMany();
  return categories;
};
