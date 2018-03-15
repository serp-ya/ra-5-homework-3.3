const withPrettyDate = (Component) => {
  
  return class DateTimePretty extends React.Component {

    getTimeDifference(dateFromData, dateTo = new Date()) {
      const dateFrom = dateFromData instanceof Date ? dateFromData : new Date(dateFromData);
      const timeDiff = Math.abs(dateTo.getTime() - dateFrom.getTime());

      return {
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(timeDiff / (1000 * 60 * 60)),
        minutes: Math.floor(timeDiff / (1000 * 60))
      };
    }

    prettifyDateFunction(timeDifference) {
      if (timeDifference.days) {
        return `${timeDifference.days} дней`;

      } else if (timeDifference.hours) {
        return `${timeDifference.hours} часов`;

      } else if (timeDifference.minutes) {
        return `${timeDifference.minutes} минут`;
      }

      return null;
    }

    render() {
      const { date } = this.props;
      const dateDifference = this.getTimeDifference(date);
      const prettifyDate = this.prettifyDateFunction(dateDifference);

      return (
        <Component {...this.props} date = {prettifyDate} />
      );
    }
  }
};