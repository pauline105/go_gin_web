import React, { useEffect } from "react";
import * as echarts from 'echarts';
import '../../style/home/index.scss'
import { subsidy_option } from '../../data/echarts/index.js'

function Home() {
  useEffect(() => {
    // 获取 DOM 元素
    var chartDom = document.getElementById('echarts_subsidy');
    var myChart = echarts.init(chartDom);

    // 设置图表配置项
    myChart.setOption(subsidy_option);
  }); // 空依赖数组，确保只在组件挂载时执行一次

  return (
    <div className="home_container">
      <div className="info_box">
        <div>
          <div>
            <span>125,12<i className="decrease">-12.32%</i> </span>
            <span>訂單統計信息</span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#sanhuamao"></use>
            </svg>
          </div>
        </div>
        <div>
          <div>
            <span>653,33<i className="add">+42.32%</i></span>
            <span>月度計劃信息 </span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#heimao"></use>
            </svg>
          </div>
        </div>
        <div>
          <div>
            <span>125,65 <i className="add">+17.32%</i> </span>
            <span> 年度計劃信息 </span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#nainiumao"></use>
            </svg>
          </div>
        </div>
        <div>
          <div>
            <span>520,43<i className="decrease">-10.01%</i></span>
            <span>訪問統計信息</span>
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#hashiqi"></use>
            </svg></div>
        </div>
      </div>
      <div id="echarts_subsidy" ></div>
    </div>
  );
}

export default Home;
