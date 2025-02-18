import React from 'react'
import { useLocation } from 'react-router-dom'
import '../style/home/index.scss'

import ReactECharts from 'echarts-for-react';
function Home() {
  const location = useLocation()
  console.log(location);
  const option = {
    title: {
      text: '近期繳費記錄',
      textStyle: {
        color: '#fff', // 修改標題文字顏色
        fontSize: "14px",
      },
      left: '40px',
    },
    tooltip: {
      textStyle: {
        color: '#fff' // 修改提示框文字顏色
      }
    },
    yAxis: {
      axisLabel: {
        color: '#fff' // 修改 y 軸標籤文字顏色
      }
    },
    legend: {
      data: ['销量'],
      textStyle: {
        color: '#fff' // 修改圖例文字顏色
      }
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      axisLabel: {
        color: '#fff' // 修改 x 軸標籤文字顏色
      }
    },
    series: [{
      name: '销量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };
  return (

    <div className='home_container'>
      <div className='title'>數據概覽</div>

      {/* 數據盒子 */}
      <div className='data_box'>
        <div>
          <span>
            <i className='iconfont list-1-copy'></i>
          </span>
          <div>
            <span>當年訂單量</span>
            <span>555 /筆</span>
          </div>
        </div>
        <div>
          <span>
            <i className='iconfont daifukuan'></i>
          </span>
          <div>
            <span>當月訂單量</span>
            <span>49 /筆</span>
          </div>
        </div>
        <div></div>
        <div>
          <span>
            <i className='iconfont list-1-copy'></i>
          </span>
          <div>
            <span>當年銷售額</span>
            <span>354 /萬</span>
          </div>
        </div>
        <div>
          <span>
            <i className='iconfont daifukuan'></i>
          </span>
          <div>
            <span>當月繳費金額</span>
            <span>112000 /元</span>
          </div>
        </div>
        <div></div>
        <div>
          <span>
            <i className='iconfont list-1-copy'></i>
          </span>
          <div>
            <span>當月開戶數量</span>
            <span>22 /戶</span>
          </div>
        </div>
        <div>
          <span>
            <i className='iconfont list-1-copy'></i>
          </span>
          <div>
            <span>總開戶數量</span>
            <span>2912 /戶</span>
          </div>
        </div>
      </div>
      {/* 導航卡片 */}
      <div className='navigate_card'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* 數據可視化區域 */}
      <div className='echarts_text'>相關統計</div>
      <div className='echarts_box'>
        <div>
          <ReactECharts
            option={option}
            opts={{ locale: 'FR' }}
          />;
        </div>
        <div>
          <ReactECharts
            option={option}
          />;
        </div>
      </div>
    </div>
  )
}

export default Home