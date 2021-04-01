import React from "react";
import Button from "@material-ui/core/Button";

export default function ({
  size,
  outlined,
  color,
  onClick,
  slim,
  disable,
  faded,
  background,
  ...props
}) {
  const styles = {
    color: faded ? "#31BDF4" : "#fff",
    borderRadius: "5px",
    background: "#4CAF50",
    height: !slim && "50px",
    border: !outlined && "none",
    width: props.width || "",
  };

  return (
    <Button
      style={styles}
      onClick={onClick}
      {...props}
      size={slim ? "middle" : "large"}
      disabled={disable}
    >
      {props.children}
    </Button>
  );
}
