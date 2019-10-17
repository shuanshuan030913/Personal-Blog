import React from 'react';

const TagGroup = props => {
  return (
    <div className="tag__group">
      tag:
      { props.tagArr.map((e,i) => (
        <button key={e} type="button" className="tag btn">{e}</button>
      ))}
    </div>
  );
}

export default TagGroup;


