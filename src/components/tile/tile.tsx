import React from "react";
import "./tile.css";

// * Random Color
const randomColor = import("randomcolor");

// class TileComponent extends React.Component {
//   state = {
//     clickCount: 0
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

const TileComponent = (props: ) => {
  return (
    // *on click, deliver tile id prop to handleClick function
    <div className="tile" onClick={() => props.handleClick(props.id)}>
      <i
        style={{
          color: randomColor({
            luminosity: "bright"
          })
        }}
        className={props.icon}
      />
    </div>
  );
}
// }

export default TileComponent;
