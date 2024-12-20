import express from "express";
import * as ProductController from "./controllers/ProductController";
import * as CategoryController from "./controllers/CategoryController";
import * as OrderController from "./controllers/OrderController";
import * as OrderDetailController from "./controllers/OrderDetailController";
import * as ShopController from "./controllers/ShopController";
import asyncHandler from "./middlewares/asyncHandler";
import validate from "./middlewares/validate";
import InsertProducRequest from "./DataTransferObjects/requests/InsertProducRequest";
import * as ServiceController from "./controllers/ServiceController";


const router = express.Router();
export function AppRouter(app) {
    //Product Route (sau nay them validate voi asyncHandler cho cac route)
    router.get('/products', ProductController.getProduct);
    router.get('/products/:id', ProductController.getProductById);
    router.post('/products', 
        validate(InsertProducRequest),
        asyncHandler(ProductController.insertProduct)
    );
    router.put('/products', ProductController.updateProduct);
    router.delete('/products/:id', ProductController.deleateProduct);

    //Category route
    router.get('/categories', CategoryController.getCategories);
    router.get('/categories/:id', CategoryController.getCategoryById);
    router.post('/categories', CategoryController.insertCategory);
    router.put('/categories', CategoryController.updateCategory);
    router.delete('/categories/:id', CategoryController.deleateCategory);

    //Order route
    router.get('/orders', OrderController.getOrders);
    router.get('/orders/:id', OrderController.getOrderById);
    router.post('/orders', OrderController.insertOrder);
    router.put('/orders', OrderController.updateOrder);
    router.delete('/orders/:id', OrderController.deleateOrder);

    //OrderDetail route
    router.get('/orderdetails', OrderDetailController.getOrderDetails);
    router.get('/orderdetails/:id', OrderDetailController.getOrderDetailById);
    router.post('/orderdetails', OrderDetailController.insertOrderDetail);
    router.put('/orderdetails', OrderDetailController.updateOrderDetail);
    router.delete('/orderdetails/:id', OrderDetailController.deleateOrderDetail);

    //Shop route
    router.get('/shops', ShopController.getShops);
    router.get('/shops/:id', ShopController.getShopById);
    router.post('/shops', ShopController.insertShop);
    router.put('/shops', ShopController.updateShop);
    router.delete('/shops/:id', ShopController.deleateShop);

    //Service route
    router.get('/services', ServiceController.getServices);
    router.get('/services/:id', ServiceController.getServiceById);
    router.post('/services', ServiceController.insertService);
    router.put('/services', ServiceController.updateService);
    router.delete('/services/:id', ServiceController.deleateService);

    app.use('/api/', router);
}
