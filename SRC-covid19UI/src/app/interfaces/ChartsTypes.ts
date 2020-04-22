import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexTooltip,
    ApexStroke,
    ApexYAxis,
    ApexGrid,
    ApexFill
  } from 'ng-apexcharts';

  export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    fill: ApexFill,
    grid: ApexGrid,
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
  };