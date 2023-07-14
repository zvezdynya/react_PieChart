import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["Task", "Hours per Day"],
  ["Studies", 7],
  ["Eat", 1],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 6],
  ["Sing", 2],
  ["Family time", 3],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

function App() {

  return (
    <div>
      <h1>Hello React</h1>
      <Chart 
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"600px"}
      />
    </div>
  );
}

export default App;
