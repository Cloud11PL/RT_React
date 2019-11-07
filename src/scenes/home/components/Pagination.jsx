import React from 'react';
// import prop-types from 'prop-types'
import './Pagination.scss';

export default function Pagination({ pageInfo, currentPage, setCurrentPage }) {
  const renderPages = () => {
    const lastIndex = Math.ceil(pageInfo.count / 10);
    const buttons = [];
    const isActive = (index) => (index === currentPage ? 'pag_active' : '');

    for (let i = 1; i <= lastIndex; i++) {
      buttons.push(<button type="button" onClick={() => setCurrentPage(i)} key={i} className={`${isActive(i)} pagination-link`}>{i}</button>);
    }
    return buttons;
  };

  return (
    <div className="pagination">
      <button type="button" className="pagination_arrow" onClick={() => setCurrentPage(currentPage - 1)} disabled={!pageInfo.previous}>Previous</button>
      {renderPages()}
      <button type="button" className="pagination_arrow" onClick={() => setCurrentPage(currentPage + 1)} disabled={!pageInfo.next}>Next</button>
    </div>
  );
}
