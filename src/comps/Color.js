import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

class Color extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "255",
      g: "255",
      b: "255",
      a: "1",
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          top: "60px",
          width: "130px",
          height: "20px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });

    return (
      <div>
        <form>
          <label style={{ marginLeft: "20px", marginTop: "20px" }}>
            Add New Color:
            <div style={styles.swatch} onClick={this.handleClick}>
              <div style={styles.color} />
            </div>
            {this.state.displayColorPicker ? (
              <div style={styles.popover}>
                <div style={styles.cover} onClick={this.handleClose} />
                <SketchPicker
                  color={this.state.color}
                  onChange={this.handleChange}
                />
              </div>
            ) : null}
          </label>
          <input type="submit" value="Add" />
          <div className="output"></div>

          <div>
            <hr />
          </div>

          <div
            style={{
              display: "inline-flex",
              flexDirection: "row",
              marginLeft: "20px",
            }}
          >
            <Form.Check aria-label="option 1" label=" Red > 50%" />
            <Form.Check aria-label="option 2" label=" Green > 50%" />
            <Form.Check aria-label="option 3" label=" Blue > 50%" />
            <Form.Check aria-label="option 4" label=" Saturation > 50%" />
          </div>
        </form>
      </div>
    );
  }
}

export default Color;
