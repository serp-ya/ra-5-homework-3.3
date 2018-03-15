const Popular = props => {
  const { Component, ...otherProps } = props;
  const popularStyles = {
    boxShadow: '0 0 10px 5px rgba(255, 0, 0, 0.3)',
    margin: '20px'
  };

  return (
    <div style = {popularStyles}>
      <Component {...otherProps} />
    </div>
  )
};