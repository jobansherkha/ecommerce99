import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Product.css";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const offset = currentPage * props.itemsPerPage;
//   const currentPageData = props.data.slice(offset, offset + props.itemsPerPage);

  return (
    <>
         <div id={props.id} key={props.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={props.id}>
                <img
                  className="card-img-top p-3"
                  src={props.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {props.title}...
                  </h5>
                  <p className="card-text">
                    {props.description}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {props.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to={`/product/getproduct/${props.id}`} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => props.click(props.data)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
      {/* <div className="containerProduct">
        <div class="product-list"> */}
          {/* Render your data here */}
          {/* {currentPageData.map((product) => (
            
          ))} */}
        {/* </div>
      </div> */}

      {/* Pagination component */}
      {/* <ReactPaginate
        pageCount={Math.ceil(props.data.length / props.itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      /> */}
    </>
  );
};

export default ProductItem;
