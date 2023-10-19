import { useState } from "react";
import Table from "./components/Table";
import LineChart from "./components/LineChart";

function App() {

  //  line chart dummy data 
  const dummyData = [
    {
      "Id": 1,
      "Year": 2004,
      "Medals": 1
    },
    {
      "Id": 2,
      "Year": 2008,
      "Medals": 3
    },
    {
      "Id": 3,
      "Year": 2012,
      "Medals": 6
    },
    {
      "Id": 4,
      "Year": 2016,
      "Medals": 2
    },
    {
      "Id": 5,
      "Year": 2020,
      "Medals": 7
    }
  ]
  //  active tab state
  const [activeTab, setActiveTab] = useState(0)
  // handeling the active tab 
  const handleActiveTab = (id) => {

    if (id === 0) {
      document.getElementById("table").classList.add("active")
      document.getElementById("linechart").classList.remove("active")
      setActiveTab(0)
    }
    else if (id === 1) {
      document.getElementById("table").classList.remove("active")
      document.getElementById("linechart").classList.add("active")
      setActiveTab(1)
    }
  }
  return (
    <>
      <div className="container">
        <div className="">
          Name : Moinuddn Ansari<br/>
          Email : moinuddin2908@gmail.com<br/>
          Contact number : 8574619917
        </div>
        <br/>
        <div className="tab-container">
          <button id="table" className="active" onClick={() => { handleActiveTab(0) }}>Table</button>
          <button id="linechart" onClick={() => { handleActiveTab(1) }}>Line Chart</button>
        </div>
        {
          // if active tab is 0 Table is display else line chart display
          activeTab === 0 ? <Table data={dummyData} /> : <LineChart data={dummyData} />
        }
      </div>
    </>
  );
}

export default App;
