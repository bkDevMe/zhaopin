import React,{Component} from 'react';
import './AutoScrollView.css';
import AutoScrollViewItem from "./AutoScrollViewItem";

class AutoScrollView extends Component {

  render() {
    const { datas,name,city,time } = this.props;
    const counts = datas.length;
    let styles = {
      animation: `move-move ${0.035*counts*50}s linear infinite running`
    }
    return (
      <div className="newPosition-list">
        <div className="more-position">
          最新职位
          <a className="clickMorePosition" href="/#">更多</a>
        </div>
        {counts >5 && 
        <style>
          {
            `
            @keyframes move-move {
              0% { top: 50px}
              100% { top: -${counts*50-50}px}
            }
            .newPosition-list .position-list:hover {
              animation: move-move ${0.035*counts*50}s linear infinite paused !important;
            }
            `
          }
        </style>}
        <ul style={styles} className="position-list" >
          {
            datas.map(item => (
              <AutoScrollViewItem key={item.positionId} position={item[name]} time={item[time]} city={item[city]}/>
            ))
          }
          {counts > 5 && 
            datas.map(item => (
              <AutoScrollViewItem key={item.positionId+1} position={item[name]} time={item[time]} city={item[city]} />
            ))
          }
        </ul>
        
    </div>
    )
  }
}

export default AutoScrollView;