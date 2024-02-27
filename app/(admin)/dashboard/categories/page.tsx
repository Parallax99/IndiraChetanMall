import CategoriesComponent from "@/app/components/admin/Categories/CategoriesComponent";
import { getAllCategories } from "@/app/lib/prismaDB/repo/CategoryRepo";
import { GridColDef } from "@mui/x-data-grid";
import { Categories } from "@prisma/client";

const mutateCategoriesData = () => {
  const res = getAllCategories();
  let categories: Categories[] = [];
  res.then((data) => {
    categories = data;
  });
  let rows = categories.map((data, index) => {
    return {
      id: data.id,
      categoryName: data.categoryName,
      image: data.image,
      isFeatured: data.isFeatured,
    };
  });

  let columns: GridColDef[] = [
    {
      field: "id",
      headerName: "CategoryId",
      width: 150,
      editable: false,
    },
    {
      field: "categoryName",
      headerName: "Category name",
      width: 150,
      editable: false,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      editable: false,
    },
    {
      field: "isFeatured",
      headerName: "Featured",
      width: 150,
      editable: false,
    },
  ];

  return { rows, columns };
};

export default function Page() {
  let { rows, columns } = mutateCategoriesData();
  return <CategoriesComponent data={{ rows: rows, columns: columns }} />;
}
