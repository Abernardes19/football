import { IStatiscsRequest } from "../../service/Teams/teams.structure";

export default function Table({ statistic }: { statistic: IStatiscsRequest }) {
  return (
    <div className=" w-screen flex items-center justify-center">
      <table className=" border sm:w-[800px] sm:h-[350px] text-black-1">
        <tr className=" border-b bg-gray-1">
          <th className=" pl-2"></th>
          <th className="border-x px-2 pt-2">Home</th>
          <th className="border-x px-2">Away</th>
          <th className="border-x px-2">All</th>
        </tr>
        <tr className=" border-b bg-white">
          <td className=" pl-2 border-r">Games played</td>
          <td className=" pl-2 border-r">{ statistic.fixtures.played.home }</td>
          <td className=" pl-2 border-r">{ statistic.fixtures.played.away }</td>
          <td className=" px-2 border-r">{ statistic.fixtures.played.total }</td>
        </tr>
        <tr className=" border-b bg-white">
          <td className=" pl-2 border-r">Wins</td>
          <td className=" px-2 border-r">{ statistic.fixtures.wins.home }</td>
          <td className=" px-2 border-r">{ statistic.fixtures.wins.away }</td>
          <td className=" px-2 border-r">{ statistic.fixtures.wins.total }</td>
        </tr>
        <tr className=" border-b bg-white">
          <td className=" pl-2 border-r">Draws</td>
          <td className=" px-2 border-r">{ statistic.fixtures.draws.home }</td>
          <td className=" px-2 border-r">{ statistic.fixtures.draws.away }</td>
          <td className=" px-2 border-r">{ statistic.fixtures.draws.total }</td>
        </tr>
        <tr className=" border-b bg-white">
          <td className=" pl-2 border-r">Loss</td>
          <td className=" px-2 border-r">{ statistic.fixtures.loses.home }</td>
          <td className=" px-2 border-r">{ statistic.fixtures.loses.away }</td>
          <td className=" px-2 border-r">{ statistic.fixtures.loses.total }</td>
        </tr>
        <tr className=" border-b bg-gray-1">
          <td className=" pl-2">GOALS</td>
          <td />
          <td />
          <td />
        </tr>
        <tr className=" border-y bg-white">
          <td className=" pl-2 border-r">Goals For</td>
          <td className=" px-2 border-r">{ statistic.goals.for.total.home }</td>
          <td className=" px-2 border-r">{ statistic.goals.for.total.away }</td>
          <td className=" px-2 border-r">{ statistic.goals.for.total.total }</td>
        </tr>
        <tr className=" border-b bg-white">
          <td className=" pl-2 border-r">Goals Against</td>
          <td className=" px-2 border-r">{ statistic.goals.against.total.home }</td>
          <td className=" px-2 border-r">{ statistic.goals.against.total.away }</td>
          <td className=" px-2 border-r">{ statistic.goals.against.total.total }</td>
        </tr>
        <tr className=" border-b bg-gray-1">
          <td className=" pl-2">GOALS AVERAGE</td>
          <td />
          <td />
          <td />
        </tr>
        <tr className=" border-y bg-white">
          <td className=" pl-2 border-r">Goals For</td>
          <td className=" px-2 border-r">{ statistic.goals.for.average.home }</td>
          <td className=" px-2 border-r">{ statistic.goals.for.average.away }</td>
          <td className=" px-2 border-r">{ statistic.goals.for.average.total }</td>
        </tr>
        <tr className=" bg-white">
          <td className=" pl-2 border-r">Goals Against</td>
          <td className=" px-2 border-r">{ statistic.goals.against.average.home }</td>
          <td className=" px-2 border-r">{ statistic.goals.against.average.away }</td>
          <td className=" px-2 border-r">{ statistic.goals.against.average.total }</td>
        </tr>
      </table>
    </div>
  )
}