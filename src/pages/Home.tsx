import React from 'react'
import { useLocation } from 'react-router-dom'
import '../style/home/index.scss'

import ReactECharts from 'echarts-for-react';
function Home() {
  document.title = '川煒堂員工管理後台系統'
  const location = useLocation()
  console.log(location);
  const option = {
    title: {
      text: '近期銷量'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
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
        <div>
          <i className='iconfont user1'></i>
          <span>用戶</span>
        </div>
        <div>
          <i className='iconfont gouwuche'></i>
          <span>商品</span>
        </div>
        <div>
          <i className='iconfont list-1-copy'></i>
          <span>訂單</span>
        </div>
        <div>
          <i className='iconfont xunxi'></i>
          <span>評價</span>
        </div>
        <div>
          <i className='iconfont tupian'></i>
          <span>圖庫</span>
        </div>
        <div>
          <i className='iconfont ziyuan'></i>
          <span>公告</span>
        </div>
        <div>
          <i className='iconfont peizhi1'></i>
          <span>配置</span>
        </div>
        <div>
          <i className='iconfont youhuiquan'></i>
          <span>優惠券</span>
        </div>
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