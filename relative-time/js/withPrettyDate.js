const withPrettyDate = (Component, getTimeDifference, prettifyDateFunction) => {
  
  return class DateTimePretty extends React.Component {
    render() {
      const { date } = this.props;
      const dateDifference = getTimeDifference(date);
      const prettifyDate = prettifyDateFunction(dateDifference);

      return (
        <Component {...this.props} date = {prettifyDate} />
      );
    }
  }
};