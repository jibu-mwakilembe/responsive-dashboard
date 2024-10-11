import React from "react";
import { Link } from "react-router-dom";
import { getOrderStatus } from "../lib/utils";

const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A Lope",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.80",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove , OR 97424",
  },

  {
    id: "2",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.80",
    current_order_status: "CONFIRMED",
    shipment_address: "Loss Angeles , CA 90017",
  },

  {
    id: "3",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Nasson Mash",
    order_date: "2022-05-17T07:14:00",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminstar ,CA 92945",
  },

  {
    id: "4",
    product_id: "5356",
    customer_id: "98674",
    customer_name: "Asha Nassor",
    order_date: "2022-11-27T09:14:00",
    order_total: "$476.44",
    current_order_status: "PLACED",
    shipment_address: "Ilala Boma ,ST 92395",
  },

  {
    id: "5",
    product_id: "7768",
    customer_id: "77358",
    customer_name: "Jibe Mwakilembe",
    order_date: "2024-05-12T05:14:00",
    order_total: "$7466.44",
    current_order_status: "SHIPPED",
    shipment_address: "Kinondoni ,CA 92945",
  },
];

function RecentOrder() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Order</strong>
      <div className="mt-3">
        <table className="text-gray-700 w-full ">
          <thead>
            <tr className="bg-gray-200">
              <td>ID</td>
              <td>Product ID</td>
              <td>Customer Name</td>
              <td>Order Date</td>
              <td>Order Total</td>
              <td>Shipping Address</td>
              <td>Order Status</td>
            </tr>
          </thead>
          <tbody className="">
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td>
                  <Link
                    className="text-blue-500 underline"
                    to={`/order/${order.order_id}`}
                  >
                    {order.id}
                  </Link>
                </td>
                <td>
                  <Link
                    className="text-blue-500 underline"
                    to={`/product/${order.product_id}`}
                  >
                    {order.product_id}
                  </Link>
                </td>
                <td>
                  <Link
                    className="text-blue-500 underline"
                    to={`/customer/${order.customer_name}`}
                  >
                    {order.customer_name}
                  </Link>
                </td>
                <td>{new Date(order.order_date).toLocaleDateString()}</td>
                <td>{order.order_total}</td>
                <td>{order.shipment_address}</td>
                <td>{getOrderStatus(order.current_order_status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrder;
