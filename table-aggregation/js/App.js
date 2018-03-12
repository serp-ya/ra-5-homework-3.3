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
    const {list} = this.state;
    const MonthTableConverted = formatedTables(MonthTable);
    const YearTableConverted = formatedTables(YearTable);
    const SortTableConverted = formatedTables(SortTable);
    return (
      <div id="app">
        <MonthTableConverted list={list} type='months'/>
        <YearTableConverted list={list} type='years'/>
        <SortTableConverted list={list}/>
      </div>
    );
  }
};