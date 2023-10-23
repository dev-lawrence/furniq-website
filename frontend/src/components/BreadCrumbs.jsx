import { useState, useEffect } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from '../libs/client';

const BreadCrumbs = ({ id }) => {
  const location = useLocation();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        const singleData = data.find((product) => product._id === id);

        if (singleData) {
          setProducts(singleData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);
  let currentLink = '';
  let separator = ' > ';
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      // Check if it's the last crumb in the array
      if (index === array.length - 1) {
        return (
          <div key={uuidv4()} className="breadcrumbs">
            {product.category && (
              <>
                <span className="category">{product.category}'s</span>
                <span className="separator">{separator}</span>
              </>
            )}
            <span className="crumb">{product.name || crumb}</span>
          </div>
        );
      }
      // Check if it's the product page
      if (crumb === 'product') {
        return null;
      }
    });
  const additionalCrumb = (
    <div key={uuidv4()} className="breadcrumbs">
      <Link className="home" to="/">
        <i className="fa-solid fa-house home-icon"></i> Home
      </Link>
      <span className="separator">{separator}</span>
    </div>
  );
  // Add the additional breadcrumb to the beginning of the breadcrumbs array
  crumbs.unshift(additionalCrumb);
  return <div>{crumbs}</div>;
};

export default BreadCrumbs;
