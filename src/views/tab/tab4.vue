<template>
  <div>
    <div class="demo" style="position: absolute; left: 100px; top: 100px">12</div>
    <div id="main" style="width: 600px;height:400px;margin: 0 auto"></div>
  </div>
</template>

<script>
var echarts = require("echarts");
var img = new Image(); //新建对象
img.src =
  "http://b.hiphotos.baidu.com/baike/c0%3Dbaike60%2C5%2C5%2C60%2C20%3Bt%3Dgif/sign=69d4876c4134970a537e187df4a3baad/6c224f4a20a44623c8f0ea219822720e0cf3d7bf.jpg";
export default {
  mounted() {
    let option = {
      // 控制在x轴可以左右滑动
      dataZoom: [
        {
          show: false,
          realtime: true,
          start: 0,
          end: 50
        },
        {
          type: "inside",
          realtime: true,
          start: 0,
          end: 50
        }
      ],
      // ----  标题 -----
      title: {
        text: "主标题",
        textStyle: {
          color: "red"
        },
        subtext: "副标题",
        subtextStyle: {
          color: "blue"
        },
        padding: [0, 0, 0, 100] // 位置
      },
      // ---- legend ----
      legend: {
        type: "plain", // 图列类型，默认为 'plain'
        top: "right", // 图列相对容器的位置 top\bottom\left\right
        selected: {
          // '销量': true  // 图列选择，图形加载出来会显示选择的图列，默认为true
        },
        textStyle: {
          // 图列内容样式
          color: "black", // 字体颜色
          backgroundColor: "black" // 字体背景色
        },
        tooltip: {
          // 图列提示框，默认不显示
          show: true,
          color: "pink"
        },
        data: [
          // 图列内容
          {
            name: "销量",
            icon: "circle",
            textStyle: {
              color: "red" // 单独设置某一个图列的颜色
              // backgroundColor: "#fff" // 单独设置某一个图列的字体背景色
            }
          }
        ]
      },
      // ---  提示框 ----
      tooltip: {
        show: true, // 是否显示提示框，默认为true
        trigger: "item", // 数据项图形触发
        axisPointer: {
          // 指示样式
          type: "shadow",
          axis: "auto"
        },
        padding: 5,
        textStyle: {
          // 提示框内容的样式
          color: "#fff"
        },
        formatter(val) {
          return val.name;
        }
      },
      // ---- gird区域 ---
      gird: {
        show: false, // 是否显示直角坐标系网格
        top: 80, // 相对位置 top\bottom\left\right
        containLabel: false, // gird 区域是否包含坐标轴的刻度标签
        tooltip: {
          show: true,
          trigger: "item", // 触发类型
          textStyle: {
            color: "#666"
          }
        }
      },
      //  ------  X轴 ------
      xAxis: {
        show: true, // 是否显示
        position: "bottom", // x轴的位置
        offset: 0, // x轴相对于默认位置的偏移
        type: "category", // 轴类型， 默认为 'category'
        name: "月份", // 轴名称
        nameLocation: "end", // 轴名称相对位置
        nameTextStyle: {
          // 坐标轴名称样式
          color: "red",
          padding: [5, 0, 0, -5],
          
        },
        nameGap: 15, // 坐标轴名称与轴线之间的距离
        nameRotate: 0, // 坐标轴名字旋转
        axisLine: {
          // 坐标轴 轴线
          show: true, // 是否显示
          //symbol: ["none", "arrow"], // 是否显示轴线箭头
          symbol: ["none"], // 是否显示轴线箭头
          symbolSize: [8, 8], // 箭头大小
          symbolOffset: [0, 7], // 箭头位置
          // ------   线 ---------
          lineStyle: {
            // color: "blue",
            width: 1,
            type: "solid"
          }
        },
        axisTick: {
          // 坐标轴 刻度
          show: false, // 是否显示
          inside: true, // 是否朝内
          length: 3, // 长度
          lineStyle: {
            // 默认取轴线的样式
            color: "red",
            width: 1,
            type: "solid"
          }
        },
        axisLabel: {
          // 坐标轴标签 显示x轴的几月
          show: true, // 是否显示
          inside: false, // 是否朝内
          rotate: 0, // 旋转角度
          margin: 5, // 刻度标签与轴线之间的距离
          color: "black" ,// 默认取轴线的颜色
           backgroundColor: {
                    image: img
                    // 这里可以是图片的 URL，
                    // 或者图片的 dataURI，
                    // 或者 HTMLImageElement 对象，
                    // 或者 HTMLCanvasElement 对象。
                  }
        },
        splitLine: {
          // gird区域中的分割线
          show: false, // 是否显示
          lineStyle: {
            color: "red",
            width: 1,
            type: "solid"
          }
        },
        splitArea: {
          // 网格区域
          show: false // 是否显示，默认为false
        },
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
          "13月",
          "14月"
        ]
      },
      //   ------   y轴  ----------
      yAxis: {
        show: false, // 是否显示
        // splitNumber: 1,
        // max: function(value) {
        //   return value.max - 2000;
        // },
        // max: 8000,
        // min: 0,
        position: "left", // y轴位置
        offset: 0, // y轴相对于默认位置的偏移
        type: "value", // 轴类型，默认为 ‘category’
        name: "销量", // 轴名称
        nameLocation: "end", // 轴名称相对位置value
        nameTextStyle: {
          // 坐标轴名称样式
          color: "#fff",
          padding: [5, 0, 0, 5] // 坐标轴名称相对位置
        },
        nameGap: 15, // 坐标轴名称与轴线之间的距离
        nameRotate: 270, // 坐标轴名字旋转

        axisLine: {
          // 坐标轴 轴线
          show: true, // 是否显示
          //  -----   箭头 -----
          symbol: ["none", "arrow"], // 是否显示轴线箭头
          symbolSize: [8, 8], // 箭头大小
          symbolOffset: [0, 7], // 箭头位置

          // ----- 线 -------
          lineStyle: {
            color: "#fff",
            width: 1,
            type: "solid"
          }
        },
        axisTick: {
          // 坐标轴的刻度
          show: false, // 是否显示
          inside: true, // 是否朝内
          length: 3, // 长度
          lineStyle: {
            color: "red", // 默认取轴线的颜色
            width: 1,
            type: "solid"
          }
        },
        axisLabel: {
          // 坐标轴的标签
          show: true, // 是否显示
          inside: false, // 是否朝内
          rotate: 0, // 旋转角度
          margin: 8, // 刻度标签与轴线之间的距离
          color: "red", // 默认轴线的颜色
          formatter: "{value}"
        },
        splitLine: {
          // gird 区域中的分割线
          show: true, // 是否显示
          //interval: 2,
          lineStyle: {
            color: "#666",
            width: 1,
            type: "dashed"
          }
        },
        splitArea: {
          // 网格区域
          show: false // 是否显示，默认为false
        }
      },
      //  -------   内容数据 -------
      series: [
        {
          name: "销量", // 序列名称
          type: "bar", // 类型
          legendHoverLink: true, // 是否启用图列 hover 时的联动高亮
          label: {
            // 图形上的文本标签
            show: true,
            position: "insideTop", // 相对位置
            rotate: 0, // 旋转角度
            color: "#eee",
          },
          itemStyle: {
            // 图形的形状
            color: "pink",
            image: img // 赋值
            // barBorderRadius: [18, 18, 0, 0]
          },
          barWidth: 20, // 柱形的宽度
          barCategoryGap: false, // 柱形的间距
          data: [
            10100,
            22000,
            3000,
            4000,
            5000,
            6000,
            4500,
            5020,
            4500,
            5400,
            4300,
            9000,
            3000,
            4000,
            4200,
            4500,
            6000,
            5600,
            4500,
            5020,
            4500,
            5400,
            4300,
            9000,
            10000
          ],
          markLine: {
            //symbol: ["none", "none"], //去掉箭头
            itemStyle: {
              normal: {
                lineStyle: {
                  type: "solid",
                  color: {
                    //设置渐变
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "red " // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "blue" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                },
                label: {
                  show: true,
                  position: "right",
                  backgroundColor: {
                    image: img
                    // 这里可以是图片的 URL，
                    // 或者图片的 dataURI，
                    // 或者 HTMLImageElement 对象，
                    // 或者 HTMLCanvasElement 对象。
                  }
                }
              }
            },
            data: [
              {
                yAxis: 8000 //这里设置false是隐藏不了的，可以设置为-1
              }
            ]
          }
        }
      ]
    };
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart.on('click', function (params) {
    // 控制台打印数据的名称
    console.log(params);
});
  },
  methods: {},
  activited() {},
  beforeRouteUpdate() {},
  filters: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
</style>
