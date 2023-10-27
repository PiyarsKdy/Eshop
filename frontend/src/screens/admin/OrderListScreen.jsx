import { LinkContainer } from "react-router-bootstrap"
import { Table, Button } from "react-bootstrap"
import { FaTimes, FaTrash } from "react-icons/fa"
import Message from "../../components/message"
import Loader from "../../components/loader"
import { useCancelOrderMutation, useGetOrdersQuery } from "../../slices/ordersApiSlice"
import {toast} from "react-toastify";


const OrderListScreen = () => {
  const {data: orders, isLoading, error, refetch} = useGetOrdersQuery();
  const [cancelOrder, {isLoading: loadingDelete}] = useCancelOrderMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      try {
        await cancelOrder(id);
        refetch();
        toast.success('Order deleted');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  }
  

  return (
    <>
    <h1>Orders</h1>
    {loadingDelete && <Loader/>}
    {isLoading ? <Loader/> : error ? (<Message variant='danger'>{error}</Message>) : (
      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0,10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                    {order.isPaid ? (
                        order.paidAt.substring(0,10)
                    ) : (
                        <FaTimes style={{color: 'red'}}/>
                    )}
                </td>
                <td>
                    {order.isDelivered ? (
                        order.deliveredAt.substring(0,10)
                    ) : (
                        <FaTimes style={{color: 'red'}}/>
                    )}
                </td>
                <td>
                    <LinkContainer to = {`/order/${order._id}`}>
                        <Button className="btn-sm" variant="light">
                            Details
                        </Button>
                    </LinkContainer>
                    <Button variant="danger" className="btn-sm mx-2" onClick={() => deleteHandler(order._id)}>
                      <FaTrash style = {{color: 'white'}}/>
                    </Button>
                </td>
              </tr>
          ))}
        </tbody>
      </Table>
    )}
    </>
  )
}

export default OrderListScreen