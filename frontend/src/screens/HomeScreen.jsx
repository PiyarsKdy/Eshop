import {Row, Col} from 'react-bootstrap';
import Product from '../components/product';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/loader';
import Message from '../components/message';

const HomeScreen = () => {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const {data} = await axios.get('/api/products');
    //         setProducts(data);
    //     };
    //     fetchProducts();         
    // },[]);
    const {data: products, isLoading, error} = useGetProductsQuery();

  return (
    <>
        {isLoading ? (
            <Loader/>
        ) : error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>) : 
        (
            <>
                <h1>Latest Products</h1><Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
                </Row>
            </>
        )}
    </>
  )
}

export default HomeScreen