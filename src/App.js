import React,{Component} from 'react';
import './App.css';
import axios from 'axios';
import AutoScrollView from "./AutoScrollView";

class App extends Component {

  state = {
    datas: []
  }

  componentDidMount() {
    axios.get('/mock/doLatestPosition.json')
      .then((response) => {
        this.setState({
          datas: response.data.returnValue
        })
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    // console.log(this.props.test);
    const {datas} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-container">
            <a className="logo" href="/#">
              <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt='...' height="20"/>
            </a>
            <i>|</i>
            <span>社招官网</span>
            <div className="menu">
              <span className="current menu-item">首&nbsp;&nbsp;页</span>
              <span className="menu-item">社会招聘</span>
              <span className="menu-item">校园招聘</span>
              <span className="menu-item">了解阿里</span>
              <span className="menu-item">个人中心</span>
            </div>
            <div className="login">
            欢迎来到阿里巴巴集团招聘！ 
            <a href="/#">登录</a> | <a href="/#">注册</a>
            </div>
          </div>
        </header>
        <main className="App-main">
          <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt='图片' />
          <div className="cover" />
          <div className="main-container">
            <p>If not now, when?</p>
            <p>If not me, who?</p>
            <p className="en-p">此时此刻，非你莫属！</p>
            <div className="search-box">
              <input className="search-text" type="input" maxLength="30" placeholder="请输入职位关键词"  />
              <input className="search-btn" type="submit" value="搜索" />
            </div>
            <div className="hot-text">
              热门搜索：
              <a className="search-key" href="/#">JAVA</a>
              <a className="search-key" href="/#">IOS</a>
              <a className="search-key" href="/#">数据</a>
              <a className="search-key" href="/#">安全</a>
              <a className="search-key" href="/#">搜索</a>
              <a className="search-key" href="/#">算法</a>
              <a className="search-key" href="/#">运营</a>
              <a className="search-key" href="/#">视觉</a>
              <a className="search-key" href="/#">交互</a>
              <a className="search-key" href="/#">前端</a>
            </div>
          </div>
        </main>
        <div className="newPosition">
          <div className="newPosition-container">
            <AutoScrollView datas={datas} name="name" city="workLocation" time="applyTimeDesc"/>
            <div className="show">
              <a className="show-pic" href="/#">
                <img src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png" alt="阿里云"/>
              </a>
              <a className="show-pic" href="/#">
                <img style={{width: '260px'}} src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="xx"/>
              </a>
            </div>
          </div>
        </div>
        <footer className='App-footer'>
          <div className="footer-container">
            阿里巴巴集团 Copyright ©1999-2019 版权所有
          </div>
        </footer>
      </div> 
    );

  }
}

export default App;
