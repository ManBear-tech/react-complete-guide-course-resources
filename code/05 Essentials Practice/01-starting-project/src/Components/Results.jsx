import { formatter } from "../util/investment";

export default function Results({calculatedData}) {

    const rows = [];
    let totalInterest = 0;
    for(let i = 0; i < calculatedData.length; i++) {
        let row = calculatedData[i]
        totalInterest += row.interest;
        rows.push(
            <tr>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(row.valueEndOfYear - totalInterest)}</td>
            </tr>
        )
    }

    return (
        <table id = "result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
    )
}