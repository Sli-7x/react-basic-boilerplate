import * as React from 'react';
import { render } from 'react-dom';
import { Select } from './select/Select';

export interface IAppProps {}

export default class App extends React.Component<IAppProps, any> {
  onChange() {}

  render() {
    return (
      <div>
        <Select onChange={this.onChange} list={[]} value="" />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
