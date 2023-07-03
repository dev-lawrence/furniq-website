import { Link, useLocation } from 'react-router-dom';

const PageBreadCrumbs = () => {
  // const location = useLocation();
  // let currentLink = '';
  // let separator = ' > ';
  // const crumbs = location.pathname
  //   .split('/')
  //   .filter((crumb) => crumb !== '')
  //   .map((crumb, index) => {
  //     currentLink += `/${crumb}`;
  //     return (
  //       <div key={crumb} className="breadcrumbs">
  //         <span className="crumb">{crumb}</span>
  //       </div>
  //     );
  //   });
  // // Add home as the first crumb
  // crumbs.unshift(
  //   <div className="breadcrumbs">
  //     <Link className="home" to="/">
  //       <i className="fa-solid fa-house home-icon"></i> Home
  //     </Link>
  //     <span className="separator">{separator}</span>
  //   </div>
  // );
  // return <div className="breadcrumb">{crumbs}</div>;
};

export default PageBreadCrumbs;
