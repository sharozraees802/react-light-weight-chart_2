import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { ChartComponent } from "./components/ChartComponent";

function App() {
  const [graphdata, Setgraphdata] = useState([]);

  const [fgraphdata, Setfgraphdata] = useState([]);
  const [sgraphdata, Setsgraphdata] = useState([]);
  const [dgraphdata, Setdgraphdata] = useState([]);


 

  //   const initialData = [
  // 	{ time: '2018-12-22', value: 32.51 },
  // 	{ time: '2018-12-23', value: 31.11 },
  // 	{ time: '2018-12-24', value: 27.02 },
  // 	{ time: '2018-12-25', value: 27.32 },
  // 	{ time: '2018-12-26', value: 25.17 },
  // 	{ time: '2018-12-27', value: 28.89 },
  // 	{ time: '2018-12-28', value: 25.46 },
  // 	{ time: '2018-12-29', value: 23.92 },
  // 	{ time: '2018-12-30', value: 22.68 },
  // 	{ time: '2018-12-31', value: 22.67 },
  // ];

  //first
  useEffect(() => {
    axios
      .get(
        //"https://res.cloudinary.com/lastshop802/raw/upload/v1673178504/data_bunkgy.csv"
        "https://res.cloudinary.com/dv4ah9yvu/raw/upload/v1673250361/MSFT/MSFT_time_y_train_emugp8.csv"
      )
      .then((response) => {
        const cdata = response.data.split("\n").map((row) => {
          const [time1,open] = row.split(",");
          const arr = time1.split("-");

          return {
            time:{year: parseFloat(arr[0]), month: parseFloat(arr[1]),day:parseFloat(arr[2])},
            //time: new Date(`${time1}, ${time2}`).getTime() / 1000,
            //time: new Date(dateParts).getDay(),	
            value: parseFloat(open)* 1
          };
        });
        
          Setgraphdata(cdata)
		});


    
	},[]);


   // second

   useEffect(() => {
    axios
      .get(
      "https://res.cloudinary.com/dv4ah9yvu/raw/upload/v1673250361/MSFT/MSFT_time_y_train_prediction_a2eqxk.csv"
      )
      .then((response) => {
      
      const sdata =response.data.split("\n").map((row) => {
        const [time1,open] = row.split(",");
        const arr = time1.split("-");

        return {
          time:{year: parseFloat(arr[0]), month: parseFloat(arr[1]),day:parseFloat(arr[2])},
          //time: new Date(`${time1}, ${time2}`).getTime() / 1000,
          //time: new Date(dateParts).getDay(),	
          value: parseFloat(open)* 1
        };
      });
      Setfgraphdata(sdata)
      });
    },[]);


    // third

    useEffect(() => {
      axios
        .get(
        "https://res.cloudinary.com/dv4ah9yvu/raw/upload/v1673250361/MSFT/MSFT_time_y_test_prediction_rxacnt.csv"
        )
        .then((response) => {
        
        const sdata = response.data.split("\n").map((row) => {
          const [time1,open] = row.split(",");
          const arr = time1.split("-");

          return {
            time:{year: parseFloat(arr[0]), month: parseFloat(arr[1]),day:parseFloat(arr[2])},
            //time: new Date(`${time1}, ${time2}`).getTime() / 1000,
            //time: new Date(dateParts).getDay(),	
            value: parseFloat(open)* 1
          };
        });
        Setsgraphdata(sdata)
        });
      },[]);

// fourth
      useEffect(() => {
        axios
          .get(
          "https://res.cloudinary.com/dv4ah9yvu/raw/upload/v1673250361/MSFT/MSFT_time_y_test_wx2u6y.csv"
          )
          .then((response) => {
          
          const sdata = response.data.split("\n").map((row) => {
            const [time1,open] = row.split(",");
            const arr = time1.split("-");
  
            return {
              time:{year: parseFloat(arr[0]), month: parseFloat(arr[1]),day:parseFloat(arr[2])},
              //time: new Date(`${time1}, ${time2}`).getTime() / 1000,
              //time: new Date(dateParts).getDay(),	
              value: parseFloat(open)* 1
            };
          });
          Setdgraphdata(sdata)
          });
        },[]);
	

  return (
    <div >
      
      <ChartComponent data={graphdata} data1={fgraphdata} data2={sgraphdata} data3={dgraphdata} />
    </div>
  );
}

export default App;
