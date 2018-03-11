'use strict';

const withDateTimePretty = (Component) => ({ date }) => {
  const timeDiff = getTimeDifference(new Date(date));
  let resultDate;

  if (timeDiff.days) {
    resultDate = `${timeDiff.days} дней`;
  } else if (timeDiff.hours) {
    resultDate = `${timeDiff.hours} часов`;
  } else {
    resultDate = `${timeDiff.minutes} минут ${timeDiff.seconds} секунд`;
  }

  return <Component date = {`${resultDate} назад`} />;
};

const DateTimePretty = withDateTimePretty(DateTime);