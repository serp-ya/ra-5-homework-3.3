'use strict';

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
        const { MonthTable, YearTable, SortTable } = this.props.tableComponents;
        const { decorator, monthsDictionary } = this.props;
        const { list } = this.state;

        const carriedDecorator = (Component) => (
          decorator(Component, monthsDictionary)
        );

        const MonthTableConverted = carriedDecorator(MonthTable);
        const YearTableConverted = carriedDecorator(YearTable);
        const SortTableConverted = carriedDecorator(SortTable);

        return (
            <div id="app">
                <MonthTableConverted list = {list} type = 'months' />
                <YearTableConverted list = {list} type = 'years' />
                <SortTableConverted list = {list} />
            </div>
        );
    }
};