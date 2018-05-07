'use strict';

const WrappedMonthTable = tableWrapper(MonthTable, 'month');
const WrappedYearTable = tableWrapper(YearTable, 'year');
const WrappedSortTable = tableWrapper(SortTable);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <WrappedMonthTable list={this.state.list} />
                <WrappedYearTable list={this.state.list} />
                <WrappedSortTable list={this.state.list} />
            </div>
        );
    }
};