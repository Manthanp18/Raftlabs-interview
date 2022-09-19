import React from "react";
import Select from "react-dropdown-select";

const DropDown = (props) => {
  const inputChangeHandler = (values) => {
    // const value = values[0];
    // if (!props.options.includes(value)) return;
    props.onSelection(values[0]);
  };

  return (
    <Select
      options={props.options}
      values={[]}
      multi={false}
      onChange={(values) => inputChangeHandler(values)}
      placeholder={props.placeholder}
      dropdownHandle={false}
      clearable={true}
    />
  );
};

export default DropDown;
