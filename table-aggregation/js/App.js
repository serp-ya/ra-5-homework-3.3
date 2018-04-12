'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };

        const { MonthTable, YearTable, SortTable } = this.props.tableComponents;
        const { decorator, monthsDictionary } = this.props;

        const carriedDecorator = (Conponent) => decorator(Conponent, monthsDictionary)
        
        this.MonthTableConverted = carriedDecorator(MonthTable);
        this.YearTableConverted = carriedDecorator(YearTable);
        this.SortTableConverted = carriedDecorator(SortTable);
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        const { list } = this.state;
        const {
            MonthTableConverted,
            YearTableConverted,
            SortTableConverted
        } = this;

        return (
            <div id="app">
                <MonthTableConverted list = {list} type = 'months' />
                <YearTableConverted list = {list} type = 'years' />
                <SortTableConverted list = {list} />
            </div>
        );
    }
};