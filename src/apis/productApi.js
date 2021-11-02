import { AxiosService } from "../services/axiosService";

export const getAllProducts = () => AxiosService.get("/products");
export const createProduct = (data) => AxiosService.post("/products", data);
export const getProductById = (productId) => AxiosService.get(`/products/${productId}`);
export const updateProduct = (productId, data) => AxiosService.put(`/products/${productId}`, data);
export const deleteProduct = (productId) => AxiosService.delete(`/products/${productId}`);
export const getTopHighestPrice = () => AxiosService.get("/products/topHighestPrice");
export const getTopHighestBids = () => AxiosService.get("/products/topHighestBids");
export const getTopProductNearEnd = () => AxiosService.get("/products/topProductNearEnd");