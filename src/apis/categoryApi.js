import { AxiosService } from "../services/axiosService";

export const getAllCategories = () => AxiosService.get("/categories");
export const createCategory = (data) => AxiosService.post("/categories", data);

export const getCategoryById = (categoryId) =>
  AxiosService.get(`/categories}/${categoryId}`);

export const updateCategory = (categoryId, data) =>
  AxiosService.put(`/categories/${categoryId}`, data);

export const deleteCategory = (categoryId) =>
  AxiosService.delete(`/categories/${categoryId}`);
