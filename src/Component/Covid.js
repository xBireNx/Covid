import React, {useEffect, useState} from 'react';
import './Covid.css'
function Covid() {
    const [data, setData] = useState([])
    const getCovidData = async() => {
      fetch('https://data.covid19india.org/data.json').then(function(response){
        response.json().then(function(getCovidData) {
            // console.log("second way");
            console.log(getCovidData.statewise);
            setData(getCovidData.statewise)
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    });
    }
  
    useEffect(() => {
    getCovidData();
    }, []);
  return (
      <>
      <h1><center>India's Covid Data</center></h1>
       <table>
    <thead>
      <tr>
        <th>State</th>
        <th>Confirmed</th>
        <th>Recovered</th>
        <th>Death</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody>
    {data.map((curElem, ind) => {
                return(
                  <tr key={ind}>
                      <td>{curElem.state}</td>
                      <td>{curElem.confirmed}</td>
                      <td><p class="status status-recovered">{curElem.recovered}</p></td>
                      <td><p class="status status-death">{curElem.deaths}</p></td>
                      <td>{curElem.active}</td>
                  </tr>
                )
            })}
      
    </tbody>
  </table>
    
</>
  );
}

export default Covid;
