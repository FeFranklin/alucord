import React from 'react';

const Title = (props) => {
  const { Tag = 'h1', children } = props;
  return (
    <>
      <Tag className="text-white text-3xl">{children}</Tag>
    </>
  );
}

export default Title;
