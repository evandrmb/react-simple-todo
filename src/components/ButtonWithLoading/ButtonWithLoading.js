import React, { useState } from "react";
import Loading from "../Loading/Loading";
import "./styles.css";

export default function ButtonWithLoading(props) {
  const [loading, setLoading] = useState(false);

  return (
    <button
      type="submit"
      className="form__button"
      onClick={() => {
        setLoading(true);
      }}
    >
      {loading ? <Loading></Loading> : props.label}
    </button>
  );
}
