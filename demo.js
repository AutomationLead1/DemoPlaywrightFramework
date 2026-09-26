var OrderStatus;
(function (OrderStatus) {
    OrderStatus["New"] = "New";
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
    OrderStatus["Returned"] = "Returned";
    OrderStatus["Refunded"] = "Refunded";
})(OrderStatus || (OrderStatus = {}));
// let Status:OrderStatus = "Delivered"
var Status = OrderStatus.Delivered;
console.log(Status);
OrderStatus.New;
console.log(Status);
