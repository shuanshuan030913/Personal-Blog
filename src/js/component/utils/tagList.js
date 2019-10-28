import React from 'react';

const TagList = ({ tagArr }) => {
  return (
    <div className="footer__info">
      <div className="tag__group">
        tag:
        { tagArr.map((e,i) => (
          <button key={e} type="button" className="tag btn">{e}</button>
        ))}
      </div>
    </div>
  );
}

export default TagList;


