import ReactApexChart from 'react-apexcharts'
import { IMinute } from '../../service/Teams/teams.structure'

export default function Graphic({ minutes }: { minutes: IMinute }) {
  const series = Object.values(minutes).filter((e) => e.total !== null).map((e) => e.total);
  const options = {
    chart: {
      width: 380,
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function(_val: any, opts: any) {
        return Object.keys(minutes)[opts.seriesIndex] + " - " + series[opts.seriesIndex]
      }
    },
    title: {
      text: 'Percentage of Goals per minute of match'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }

  return (
    <div id="chart" className=' bg-gray-1 p-2 rounded-2xl'>
      <ReactApexChart options={options} series={series} type="donut" width={380} />
    </div>
  )
}