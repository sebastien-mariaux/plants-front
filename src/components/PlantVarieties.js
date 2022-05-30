import React from "react";
import PlantVariety from "./PlantVariety";
import '../styles/PlantVarieties.css'
class PlantVarieties extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      plantVarieties: [],
      DataIsLoaded: false
    };
  }

  componentDidMount() {
    fetch("/plant_varieties", {
      method: "GET",
      mode: "cors",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          plantVarieties: json,
          DataIsLoaded: true
        });
      })
  }

  render() {
    const { DataIsLoaded, plantVarieties } = this.state;
    return (
      <div>
        <h2>Variétés de plantes</h2>
        {DataIsLoaded &&
          <div className="varieties-list">
            {
              plantVarieties.map((plantVariety) => (
                <PlantVariety item={plantVariety} key={plantVariety.id} />
              ))
            }
          </div>}
      </div>
    );
  }

}

export default PlantVarieties;

