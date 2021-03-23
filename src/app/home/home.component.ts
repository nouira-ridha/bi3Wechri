import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, ChartOptions, ChartDataSets, RadialChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, MultiDataSet, Color  } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

   color1: Color[] = [
    {
      backgroundColor: [
        '#40407a',
        '#ff793f',
        '#218c74'
      ]
    }
  ];



  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  color2: Color[] = [
    {
      backgroundColor: [
        '#7d5fff',
        '#ff3838',
        '#c56cf0'
      ]
    }
  ];
  doughnutChartType: ChartType = 'doughnut';



  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Punctuality', 'Communication', 'Problem Solving',
    'Team Player', 'Coding', 'Technical Knowledge', 'Meeting Deadlines'];
  public radarChartData: ChartDataSets[] = [
    { data: [0, 1, 2, 3, 4, 5, 6], label: 'Employee Skill Analysis', borderColor: '#ffa801'}
  ];
  color3: Color[] = [
    {
      backgroundColor: [
        '#7d5fff',
        '#ff3838',
        '#c56cf0',
        '#7d5fff',
        '#ff3838',
        '#c56cf0',
        '#ff3838'
      ]
    }
  ];
  public radarChartType: ChartType = 'radar';





  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits'}
  ];
  color4: Color[] = [
    {
      backgroundColor: [
        '#8c7ae6',
        '#0097e6',
        '#718093',
        '#40739e',
        '#192a56',
        '#2f3640'

      ]
    }
  ];


  constructor() { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();

  }

  ngOnInit(): void {
  }

}
