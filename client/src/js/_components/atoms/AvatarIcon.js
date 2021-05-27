import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

export default function AvatarIcon({ props }) {
  const Email = localStorage.getItem("user_email");
  const [username, setUsername] = useState("");
  let firstName = Email.split("@")[0];
  let firstChar = firstName.charAt(0).toUpperCase();
  let lastName = firstName.split(".")[1];
  if (lastName === undefined) {
    lastName = "";
  }

  let secondChar = lastName.charAt(0).toUpperCase();
  if (username === "") {
    setUsername(firstChar + secondChar);
  }
  return (
    <div data-testid="avatar">
      <Avatar style={{ width: props.spacing, height: props.spacing }}>
        {username}
      </Avatar>
    </div>
  );
}
