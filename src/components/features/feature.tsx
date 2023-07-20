import React from "react";

import PropTypes from "prop-types";

import style from "./feature.module.css";

const Feature = (props: {
  Icon: string | undefined;
  Header:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  Description:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className={style["feature"]}>
      <div className={style["heading"]}>
        <img alt="image" src={props.Icon} className={style["icon"]} />
        <h3 className={style["header"]}>{props.Header}</h3>
      </div>
      <p className={style["description"]}>{props.Description}</p>
    </div>
  );
};

Feature.defaultProps = {
  Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  Icon: "../src/assets/Icons/thumbs-up.svg",
  Header: "Hand Picked Guides",
};

Feature.propTypes = {
  Description: PropTypes.string,
  Icon: PropTypes.string,
  Header: PropTypes.string,
};

export default Feature;
