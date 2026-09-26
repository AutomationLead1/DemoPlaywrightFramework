enum OrderStatus {
    New = "New",
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
    Returned = "Returned",
    Refunded = "Refunded"
}
// let Status:OrderStatus = "Delivered"
let Status = OrderStatus.Delivered;
console.log(Status);
OrderStatus.New 
console.log(Status);