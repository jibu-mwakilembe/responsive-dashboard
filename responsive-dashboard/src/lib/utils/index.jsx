export function getOrderStatus(status) {
  switch (status) {
    case "PLACED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
          placed
        </span>
      );
    case "CONFIRMED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
          confirmed
        </span>
      );

    case "SHIPPED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100">
          shipped
        </span>
      );

    case "OUT_FOR_DELIVERY":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
          out for delivery
        </span>
      );

    case "DELIVERED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
          delivered
        </span>
      );
    default:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
          no status
        </span>
      );
  }
}
