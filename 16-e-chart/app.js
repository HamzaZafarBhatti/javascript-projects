var chartDom = document.getElementById('line_chart');
var myChart = echarts.init(chartDom);

option = {
    color: ['#7668d2'],
    title: {
        text: 'Token Sale Graph',
        textStyle: {
            color: '#474163',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: '20px',
        },
        paddding: '10',
    },
    xAxis: {
        type: 'category',
        data: ['01 Apr', '02 Apr', '03 Apr', '04 Apr', '05 Apr', '06 Apr', '07 Apr'],
        axisTick: {
            show: false,
        },
        boundaryGap: false,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
            },
        },
    },
    series: [
        {
            data: [0, 0, 0, 100, 15000, 55000, 10000],
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: '10',
            lineStyle: {
                // color: '#7668d2', 
                width: 3,

            }
        }
    ]
};

myChart.setOption(option);