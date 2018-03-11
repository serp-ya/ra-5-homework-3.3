'use strict';

const List = props => {
  return props.list.map(item => <TypeSwitcher item = {item} />);
};