// import React from 'react';

// const WithColourPicker = (ChildComponent) => {
//   return class ColourPicker extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         color: "white"
//       };
//     }
  
//     changeColor(e) {
//       this.setState({
//         color: e.target.value
//       });
//     }
  
//     render() {
//       const stylesObj = {
//         background: this.state.color
//       };
//       return (
//         <div style={stylesObj} className="container">
//           <div className="box">
//             <p><small>Choose your background colour</small></p>
//             <p>
//               <small>Name or #HEX value</small>
//             </p>
//             <input
//               value={this.state.color}
//               onChange={this.changeColor.bind(this)}
//             />
//             <br />
//             <ChildComponent />
//           </div>
//         </div>
//       );
//     }
//   }
// }

// export default WithColourPicker;
