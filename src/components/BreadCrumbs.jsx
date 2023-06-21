import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { items } from '../data/AllProductsData';

const BreadCrumbs = ({ name }) => {
  const location = useLocation();
  const product = items.find((item) => item.id === parseInt(name));
  const { title, category } = product || {};

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
          <div key={crumb} className="breadcrumbs">
            {category && (
              <>
                <span className="category">{category}'s</span>
                <span className="separator">{separator}</span>
              </>
            )}
            <span className="crumb">{title || crumb}</span>
          </div>
        );
      }

      // Check if it's the product page
      if (crumb === 'product') {
        return null;
      }
    });

  const additionalCrumb = (
    <div key="product1" className="breadcrumbs">
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
