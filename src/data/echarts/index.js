import * as echarts from 'echarts'
export const subsidy_option = {
  color: ['#F5CBFA', '#FAC9D6',],
  title: {
    text: '政府補貼政策',
    top: "0",
    textStyle: {
      fontSize: "14px",
      fontWeight: 'bold',
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    },
    textStyle: {
      fontSize: 12, // 字體大小
      color: '#333', // 文字顏色
      fontFamily: 'Arial' // 字體類型
    },
  },
  legend: {
    data: ['預購隊列', '成交數量',],
    left: "right",
  },
  toolbox: {
    feature: {
      // saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 70,
      name: '價格',
      axisLabel: {
        show: true,  // 显示刻度标签
        fontSize: 12,  // 字体大小
        color: '#333',  // 字体颜色
      },
      splitLine: {
        show: true,  // 显示分隔线
      },
      splitNumber: 7,  // 刻度点数量
    }
  ],

  series: [
    {
      name: '預購隊列',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 2,
        color: "rgb(216, 132, 255)"
      },
      showSymbol: true,
      symbol:'circle',
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(216, 132, 255, 0.87)'
          },
          {
            offset: 1,
            color: 'rgba(240, 77, 255, 0.0)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [0, 41.1, 30.4, 65.1, 53.3, 53.3, 53.3, 40.1, 30.4, 45.1, 53.3, 10]
    },
    {
      name: '成交數量',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 2,
        color: "rgb(255, 171, 158)"
      },
      showSymbol: true,
      symbol:'circle',
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 203, 200)'
          },
          {
            offset: 1,
            color: 'rgb(255, 203, 200, 0.0)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [0, 24.1, 7.2, 15.5, 42.4, 42.4, 43.2, 24.1, 7.2, 15.5, 42.4, 0]
    },
  ]
};

export const unit_option = {
  title: {
    text: '房屋建築工程', // 主標題
    left: 'left', // 標題居中，可設 'left'、'right'、'center'
    top: '0%', // 距離上方的距離
    textStyle: {
      fontSize: 14, // 字體大小
      fontWeight: 'bold' // 字體加粗
    },
    subtextStyle: {
      fontSize: 12, // 副標題字體大小
      color: '#666' // 副標題顏色
    }
  },
  tooltip: {
    trigger: 'item',
    position: function (point) {
      return [point[0] + 10, point[1] + 10];
    },
    textStyle: {
      fontSize: 12, // 字體大小
      color: '#333', // 文字顏色
      fontFamily: 'Arial' // 字體類型
    },
  },
  legend: {
    top: 'center',
    right: '5%',
    orient: 'vertical'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['40%', '50%'], // 圓環左移
      avoidLabelOverlap: false,
 
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '房屋及結構物' },
        { value: 735, name: '專用設備' },
        { value: 580, name: '通用設備' },
        { value: 484, name: '文物和陳列物' },
        { value: 300, name: '圖書、檔案' }
      ]
    }
  ]
}
