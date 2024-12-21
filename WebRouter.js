import express from "express";
import * as ProductController from "./controllers/ProductController";
import * as CategoryController from "./controllers/CategoryController";
import * as OrderController from "./controllers/OrderController";
import * as OrderDetailController from "./controllers/OrderDetailController";
import * as ShopController from "./controllers/ShopController";
import * as ServiceController from "./controllers/ServiceController";
import asyncHandler from "./middlewares/asyncHandler";
import validate from "./middlewares/validate";
import InsertProducRequest from "./DataTransferObjects/requests/products/InsertProducRequest";
import InsertCategoryRequest from "./DataTransferObjects/requests/InsertCategoryRequest";
import InsertOrderDetailRequest from "./DataTransferObjects/requests/InsertOrderDetailRequest";
import InsertOrderRequest from "./DataTransferObjects/requests/InsertOrderRequest";
import InsertShopRequest from "./DataTransferObjects/requests/shops/InsertShopRequest";
import InsertServiceRequest from "./DataTransferObjects/requests/InsertServiceRequest";
import UpdateProducRequest from "./DataTransferObjects/requests/products/UpdateProductRequest";
import UpdateShopRequest from "./DataTransferObjects/requests/shops/UpdateShopRequest";
import UpdateOrderRequest from "./DataTransferObjects/requests/UpdateOrderRequest";

const router = express.Router();
export function AppRouter(app) {
  router.get("/products", asyncHandler(ProductController.getProduct));
  router.get("/products/:id", asyncHandler(ProductController.getProductById));
  router.post(
    "/products",
    validate(InsertProducRequest),
    asyncHandler(ProductController.insertProduct)
  );
  router.put(
    "/products/:id",
    validate(UpdateProducRequest),
    asyncHandler(ProductController.updateProduct)
  );
  router.delete(
    "/products/:id",
    asyncHandler(ProductController.deleateProduct)
  );

  //Category route
  router.get("/categories", asyncHandler(CategoryController.getCategories));
  router.get(
    "/categories/:id",
    asyncHandler(CategoryController.getCategoryById)
  );
  router.post(
    "/categories",
    validate(InsertCategoryRequest),
    asyncHandler(CategoryController.insertCategory)
  );
  router.put("/categories", asyncHandler(CategoryController.updateCategory));
  router.delete("/categories/:id", CategoryController.deleateCategory);

  //Order route
  router.get("/orders", asyncHandler(OrderController.getOrders));
  router.get("/orders/:id", asyncHandler(OrderController.getOrderById));
  router.post(
    "/orders",
    validate(InsertOrderRequest),
    asyncHandler(OrderController.insertOrder)
  );
  router.put(
    "/orders",
    validate(UpdateOrderRequest),
    asyncHandler(OrderController.updateOrder)
  );
  router.delete("/orders/:id", asyncHandler(OrderController.deleteOrder));

  //OrderDetail route
  router.get("/orderdetails", asyncHandler(OrderDetailController.getOrderDetails));
  router.get("/orderdetails/:id", asyncHandler(OrderDetailController.getOrderDetailById));
  router.post(
    "/orderdetails",
    validate(InsertOrderDetailRequest),
    asyncHandler(asyncHandler(OrderDetailController.insertOrderDetail))
  );
  router.put("/orderdetails", asyncHandler(OrderDetailController.updateOrderDetail));
  router.delete("/orderdetails/:id", asyncHandler(OrderDetailController.deleateOrderDetail));

  //Shop route
  router.get("/shops", asyncHandler(ShopController.getShops));
  router.get("/shops/:id", asyncHandler(ShopController.getShopById));
  router.post(
    "/shops",
    validate(InsertShopRequest),
    asyncHandler(ShopController.insertShop)
  );
  router.put(
    "/shops/:id",
    validate(UpdateShopRequest),
    asyncHandler(ShopController.updateShop)
  );
  router.delete("/shops/:id", asyncHandler(ShopController.deleteShop));

  //Service route
  router.get("/services", asyncHandler(ServiceController.getServices));
  router.get("/services/:id", asyncHandler(ServiceController.getServiceById));
  router.post(
    "/services",
    validate(InsertServiceRequest),
    asyncHandler(ServiceController.insertService)
  );
  router.put("/services", asyncHandler(ServiceController.updateService));
  router.delete("/services/:id", asyncHandler(ServiceController.deleateService));

  app.use("/api/", router);
}
