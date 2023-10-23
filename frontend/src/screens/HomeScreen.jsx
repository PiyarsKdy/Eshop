import {Row, Col} from 'react-bootstrap';
import Product from '../components/product';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/loader';
import Message from '../components/message';
import { useParams } from 'react-router-dom';
import Paginate from '../components/paginate';

const HomeScreen = () => {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const {data} = await axios.get('/api/products');
    //         setProducts(data);
    //     };
    //     fetchProducts();         
    // },[]);

    const {pageNumber} = useParams();

    const {data, isLoading, error} = useGetProductsQuery({pageNumber});

  return (
    <>
        {isLoading ? (
            <Loader/>
        ) : error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>) : 
        (
            <>
                <h1>Latest Products</h1><Row>
                {data.products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
                </Row>
                <Paginate 
                pages = {data.pages}
                page = {data.page} />

            </>
        )}
    </>
  )
}

export default HomeScreen