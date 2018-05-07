const popularitySwitcher = (WrappedComponent) => {
  return class PopularitySwitcher extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const {views} = this.props;

      if (views < 100) {
        return (
          <New>
            <WrappedComponent {...this.props} />
          </New>
        );

      } else if (views > 1000) {
        return (
          <Popular>
            <WrappedComponent {...this.props} />
          </Popular>
        )
      }

      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
};