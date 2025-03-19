import * as echarts from 'echarts'
export const subsidy_option = {
  color: ['#F5CBFA', '#FAC9D6',],
  title: {
    text: '政府補貼政策',
    textStyle: {
      fontSize: "14px",
      fontWeight: 'normal',
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['預購隊列', '成交數量',],
    left:"right",
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
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(224, 175, 247, 0.87)'
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
        width: 0
      },
      showSymbol: false,
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