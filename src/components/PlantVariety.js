import React from "react"
import '../styles/PlantVariety.css'

class PlantVariety extends React.Component {
  render() {
    return (
      <div className="variety-item">
        {this.props.item.name}
      </div>
    )
  }
}

export default PlantVariety