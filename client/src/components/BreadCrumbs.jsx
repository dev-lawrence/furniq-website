import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const { VITE_API_URL, VITE_API_TOKEN } = import.meta.env;
import useFetchData from '../hooks/useFetchData';
import { v4 as uuidv4 } from 'uuid';

const BreadCrumbs = ({ id }) => {
  const location = useLocation();
  const { data } = useFetchData(
    VITE_API_URL + `/products/${id}?populate=*`,
    VITE_API_TOKEN
  );
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
            {data?.attributes?.category && (
              <>
                <span className="category">{data?.attributes?.category}'s</span>
                <span className="separator">{separator}</span>
              </>
            )}
            <span className="crumb">{data?.attributes?.title || crumb}</span>
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
