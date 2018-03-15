const New = props => {
  const { Component, ...otherProps } = props;
  const newStyles = {
    boxShadow: '0 0 10px 5px rgba(0, 128, 0, 0.3)',
    margin: '20px'
  };

  return (
    <div style = {newStyles}>
      <Component {...otherProps} />
    </div>
  )
};