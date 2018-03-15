const popularitySwitcher = (Component, NewComponent, PopularComponent, views) => {
  return class PopularitySwitcher extends React.Component {
    render() {
      if (views < 100) {
        return (
          <NewComponent {...this.props} Component = {Component} />
        );

      } else if (views > 1000) {
        return (
          <PopularComponent {...this.props} Component = {Component} />
        )
      }

      return (
        <div style = {{margin: '20px'}}>
          <Component {...this.props} />
        </div>
      );
    }
  }
};