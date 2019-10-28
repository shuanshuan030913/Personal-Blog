import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Aside from './../container/asideContainer';

import '../../scss/style.scss';
import head from '../../images/head.jpg';

const About = (props) => {

  useEffect(() => {
    props.handleAsideInit();
  },[]);

  return (
    <main className={props.nightMode ? "about night__mode" : "about"} >
      <Aside asideToggle={props.asideToggle} history={props.history}/>
      <section className={props.asideToggle ? 'main__content active' : 'main__content'}>
        <article className="wrap">
          <div className="aside__img">
            <img src={head} />
          </div>
          <h1 className="title text__center">Hi, I'm Sena</h1>
          <p>
            哈囉，我是萱瑄，畢業於國立台灣藝術大學視覺設計學系，第一份工作啟蒙我對前端的熱情，從此一去不回頭🤣
          </p>
          <p>
            日前服務於網路資訊公司，主要負責設計與網頁切版，上班之餘熱衷於自我進修，因有感於無法在工作與進修之間兩全其美，決意於 2019.08 辭去職務，全力參與<a className="hover__underline" href="https://github.com/Lidemy/mentor-program-3rd-shuanshuan030913" target="black">第三期程式導師實驗計畫</a>，專心建構自身的前端技能樹。
          </p>
          <hr />
          <h1 className="title">我會什麼？</h1>
          <div className="row article">
            <div className="col-4 col-md-12">
              <h3 className="sub__title">前端技能</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>SCSS</li>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>API 串接</li>
              </ul>
            </div>
            <div className="col-4 col-md-12">
              <h3 className="sub__title">框架 & 工具</h3>
              <ul>
                <li>Git</li>
                <li>Webpack</li>
                <li>Gulp</li>
                <li>React</li>
                <li>React Router、Redux</li>
              </ul>
            </div>
            <div className="col-4 col-md-12">
              <h3 className="sub__title">基礎後端</h3>
              <ul>
                <li>基本資安概念</li>
                <li>MySQL</li>
                <li>PHP</li>
              </ul>
            </div>
          </div>
          <hr />
          <p>
            我喜歡的東西很多，喜歡 coding 也熱愛分享，之前在計畫中製作一些遊戲會分享給朋友，如
            <a className="hover__underline" href="https://scratch.mit.edu/projects/294804417" target="blank">這個跳高小遊戲</a>
            和
            <a className="hover__underline" href="https://lidemy.github.io/mentor-program-3rd-shuanshuan030913/homeworks/week7/hw1/?fbclid=IwAR0BwQXe2jkMwL-YurlI1LDlfPNL_hIOvaNL7wJdh68czSecHS35B7uPWs0" target="blank">點點點小遊戲</a>，
            儘管他只是個學習過程中的作業，但在 coding 中找樂趣是我生活的一部份。
          </p>
          <p>
            以及旅行和攝影，特別喜歡用一首歌的時間記錄旅遊的點滴，下面分享今年春天的環島影片：
          </p>
          <div className="row">
            <div className="col-2 col-md-12" />
            <div className="col-8 col-md-12">
              <iframe className="iframe" src="https://www.youtube.com/embed/XeJFetgO-uc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
          <hr />
          <p className="info text__center">
            本站為結合課程所學建置的 React 部落格頁面。Hope you will like it ❤
          </p>
        </article>
      </section>
    </main>
  )
};

export default withRouter(About);