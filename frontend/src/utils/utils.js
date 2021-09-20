import React from "react";
import * as FontAwesome from "react-icons/fa";

const Icon = props => {
  const { name, size, className, color } = props

  const final_name = FontAwesome[name] === undefined ? 'FaTruckLoading' : name
  const icon = React.createElement(FontAwesome[final_name]);

  return (
      <div style={{ fontSize: size, color: color }}className={className}>
          {icon}
      </div>
  )
};

export default Icon;