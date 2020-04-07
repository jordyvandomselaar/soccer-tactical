import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Tactical from './compo/index'
import IconZoom from "./compo/icons/IconZoom";
import IconZoomOut from "./compo/icons/IconZoomOut";
const styles = require('./compo/style.less');

class Main extends React.Component {
  state = {
    width: 1000
  };

  render() {
    return <div style={{
      width: this.state.width,
      margin: '0 auto'
    }}>
      <div className={styles["controls-wrapper"]}>
        <button className={styles["control"]} onClick={() => this.setState({ width: this.state.width - 100 })}>
          <IconZoomOut />
        </button>
        <button className={styles["control"]} onClick={() => this.setState({ width: this.state.width + 100 })}>
          <IconZoom />
        </button>
      </div>
      <Tactical width={this.state.width}/>
    </div>
  }
}

ReactDOM.render(<Main />, document.getElementById('main'));
