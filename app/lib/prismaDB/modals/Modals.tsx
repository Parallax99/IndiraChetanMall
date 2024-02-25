export interface CategoryModal {
  id: string;
  categoryName: string;
  image: any;
  subCategories?: Array<any>;
}

export interface SubCategoryModal {
  id: string;
  subCategoryName: string;
  image: any;
  Category: CategoryModal;
}
