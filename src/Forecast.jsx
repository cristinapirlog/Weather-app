import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./search.css";

function refreshPage() {
  window.location.reload(false);
}

function Forecast() {
  const [forecast, setForecast] = useState("");
  const [location, setLocation] = useState("");
  function getForecast() {
    fetch(
      "https://api.aerisapi.com/observations/" +
        location +
        "?&format=json&filter=allstations&limit=1&client_id=8o95k3ytaATSoj2cHVWPN&client_secret=9KTL6e8hcEFnBAtn25zKchSJFKivqMEhuCDvskAJ"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setForecast(data.response.ob.tempC);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  let enterKey = (test) => {
    if (test.key === "Enter") {
      getForecast();
    }
  };
  let decision = "";
  if (forecast > 18.0) {
    decision = "Yes :)";
  } else if (forecast === "") {
    decision = "???";
  } else {
    decision = "No :(";
  }
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Search by city"
          autoFocus
          onChange={(location) => {
            return setLocation(location.target.value);
          }}
          onKeyPress={enterKey}
          style={{
            height: "44px",
            border: "1px solid #dfe1e5",
            borderRadius: "24px",
            backgroundColor: "white",
            boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
            hoverBackgroundColor: "#eee",
            color: "#212121",
            fontSize: "16px",
            fontFamily: "Arial",
            iconColor: "grey",
            lineColor: "rgb(232, 234, 237)",
            placeholderColor: "grey",
          }}
        ></input>
        <p
          style={{
            fontFamily: "Open Sans",
            fontWeight: "800",
          }}
        >
          {location.toUpperCase()}
        </p>
        <p></p>
        <p></p>
        <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>
          Temperature
        </h4>
        <p
          style={{
            fontFamily: "Open Sans",
            fontWeight: "800",
            fontSize: "40px",
          }}
        >
          {forecast}
        </p>
        <p style={{ fontFamily: "Comic Sans MS", fontWeight: "800" }}>
          Is it T-Shirt Weather: {decision}
        </p>

        <div
          className=" d-flex align-items-end flex-column bd-highlight"
          style={{ marginTop: 380 }}
        >
          <button onClick={refreshPage} className="btn btn-info">
            Click to reload!
          </button>
        </div>
      </header>
    </div>
  );
}

export default Forecast;
