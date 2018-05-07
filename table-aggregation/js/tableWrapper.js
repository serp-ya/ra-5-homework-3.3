const tableWrapper = (Component, tableType) => {
    return class WrappedTable extends React.Component {
        constructor(props) {
            super(props);

            this.convertedList = [];
            this.currentYear = this.getYearFromDate()
        }

        componentWillUpdate(newProps) {
            let list = [...newProps.list];

            switch(tableType) {
                case 'year': {
                    list = list.reduce(this.aggregateDatesByYear, []);
                    break;
                }

                case 'month': {
                    list = list.reduce(this.aggregateDatesByMonthOnlyCurrentYear, []);
                    break;
                }

                default: {
                    list.sort((a, b) => a.date < b.date ? 1 : -1);
                }
            }

            this.convertedList = list;
        }

        getYearFromDate = (date = new Date()) => new Date(date).getFullYear();

        getShortMonthName = (date) => new Date(date).toLocaleString('en-us', {month: 'short'});

        aggregateDatesByMonthOnlyCurrentYear = (result, item) => {
            const { date, amount } = item;

            if (this.getYearFromDate(date) !== this.currentYear) {
                return result;
            }

            const monthName = this.getShortMonthName(date);
            const indexOfCurrentMonth = result.findIndex(el => el.month === monthName);

            if (indexOfCurrentMonth != -1) {
                result[indexOfCurrentMonth].amount += amount;
            } else {
                result = [...result, {month: monthName, amount}];
            }

            return result;
        };

        aggregateDatesByYear = (result, item) => {
            const { date, amount } = item;
            const dateYear = this.getYearFromDate(date);
            const indexOfCurrentYear = result.findIndex(el => el.year === dateYear);

            if (indexOfCurrentYear != -1) {
                result[indexOfCurrentYear].amount += amount;
            } else {
                result = [...result, {year: dateYear, amount}]
            }

            return result;
        };

        render() {
            return (
                <Component {...this.props} list={this.convertedList}/>
            )
        }
    }
}