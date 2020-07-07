import React from "react";
import "./tile.css";
const randomColor = import("randomcolor");

// interface TileColor {

// }

// // * Random Color
// let tileColor = randomColor: Promise<{
//     default: {
//         (luminosity?: "bright" | undefined): string;
//     };
// }>({luminosity: "bright"})

// class TileComponent extends React.Component {
//   state = {
//     clickCount: 0
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

const TileComponent = (props: {
  id: number;
  icon: string;
  count: number;
  handleClick: any;
}) => {
  return (
    // *on click, deliver tile id prop to handleClick function
    <div className="tile" onClick={() => props.handleClick(props.id)}>
      <i
        style={{
          color: "lightBlue"
        }}
        className={props.icon}
      />
    </div>
  );
};
// }

export default TileComponent;
