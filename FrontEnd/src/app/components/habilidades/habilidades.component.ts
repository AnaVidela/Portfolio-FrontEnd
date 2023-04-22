import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartOptions } from 'chart.js';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{

  ngOnInit(): void {
    const ct1 = new Chart("myChart1", {
      type: 'doughnut',
      data: {
        labels: ['Perseverancia'],
        datasets: [{
          label: '',
          data: [75,25],
          borderWidth: 2,
          hoverOffset: 3,
          hoverBorderWidth: 3,
          hoverBorderColor: 'black',
          borderColor: '#36A2EB',
          backgroundColor: ['#000033', ' #839192 '],
          rotation: 135,
        }]
      },
      options: {
        responsive: true
      }
    });

    const ct2 = new Chart ('myChart2', {
      type: 'doughnut',
      data: {
        labels: ['Resistencia al estrés'],
        datasets: [{
          label:'',
          data: [70,30],
          borderWidth: 2,
          hoverOffset: 3,
          hoverBorderWidth: 3,
          hoverBorderColor: 'black',
          borderColor: '#36A2EB',
          backgroundColor: ['#34495e',' #bdc3c7 '],
          rotation: 110
        }]
      },
      options: {
        responsive: true
      }
    });
    const ct3 = new Chart ('myChart3', {
      type: 'doughnut',
      data: {
        labels: ['Capacidad de escucha'],
        datasets: [{
          label: '',
          data: [80,20],
          borderWidth: 2,
                hoverOffset: 3,
                hoverBorderWidth: 3,
                hoverBorderColor: 'black',
                borderColor: '#36A2EB',
          backgroundColor: [' #3e4053 ',' #d0d3d4 '],
          rotation: 105
        }]
      },
      options: {
        responsive: true
      }
    });
    const ct4 = new Chart ("myChart4", {
      type:'doughnut',
      data: {
        labels: ['Html'],
        datasets: [{
          label:'',
          data: [78,22],
          borderWidth: 2,
                hoverOffset: 3,
                hoverBorderWidth: 3,
                hoverBorderColor: 'black',
                borderColor: '#36A2EB',
          backgroundColor: [' #123747 ',' #b3b6b7 '],
          rotation:145
        }]
      },
      options: {
        responsive: true
      }
    });
    
    const ct5 = new Chart('myChart5',{
       type: 'doughnut',
        data: {
          labels: ['CSS'],
          datasets: [{
            label: '',
            data: [72,28],
            borderWidth: 2,
            hoverOffset: 3,
            hoverBorderWidth: 3,
            hoverBorderColor: 'black',
            borderColor: '#36A2EB',
            backgroundColor: [' #154360 ',' #979a9a '],
            rotation: 90
            }]
      },
      options: {
        responsive: true
      }
    });
    
          const ct6 = new Chart('myChart6', {
      type: 'doughnut',
            data: {
              labels: ['Angular'],
              datasets: [{
                label: '',
                data: [60,40],
                borderWidth: 2,
                hoverOffset: 3,
                hoverBorderWidth: 3,
                hoverBorderColor: 'black',
                borderColor: '#36A2EB',
                backgroundColor: [' #1b2631 ', ' #7b7d7d '],
                rotation: 135,
            }]
            },
            options: {
              responsive: true
            }
          });
  }

}
