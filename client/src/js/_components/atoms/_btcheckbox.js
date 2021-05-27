import React from "react";
import { Checkbox } from "@material-ui/core";

const BTCheckbox = () => {
  return (
    <Checkbox
      data-testid="checkbox"
      inputProps={{ "aria-label": "primary checkbox" }}
      color="primary"
    />
  );
};

export default BTCheckbox;
