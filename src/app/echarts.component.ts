import {Component, NgZone, OnInit, QueryList, ViewChildren} from "@angular/core";

@Component({
  selector: 'e-chart',
  template: `
    <div>
        <div echarts [options]="chartOption" class="demo-chart"></div>
    </div>
  `,
  styles: [
    '.demo-chart {height: 400px;}'
  ]
})
export class EchartComponent implements OnInit {

  private chartOption: any;

  constructor(private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.chartOption = {
      title: {
        text: 'chart-title'
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['A','B','C','D','E']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['AA','BB','CC','DD','EE','FF','GG']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'A',
          type:'line',
          stack: 'stack',
          areaStyle: {normal: {}},
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'B',
          type:'line',
          stack: 'stack',
          areaStyle: {normal: {}},
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'C',
          type:'line',
          stack: 'stack',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'D',
          type:'line',
          stack: 'stack',
          areaStyle: {normal: {}},
          data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
          name:'E',
          type:'line',
          stack: 'stack',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {normal: {}},
          data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    }
  }
}
