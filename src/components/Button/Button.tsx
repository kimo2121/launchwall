import "./Button.css";
import { Button } from "semantic-ui-react";
// import { ButtonProps } from '../../Type';
import { useState } from "react";
// import Loader from 'components/Loader';

export const ButtonCustomized = ({}) => {
  return (
    <Button
    // disabled={isLoading}
    // className={`button click-effect ${className}`}
    // type={type}
    // variant={variant}
    // onClick={() => onClick && onClick()}
    >
      {/* {!isLoading && homeLoadMore && (
        <span
          style={{
            verticalAlign: "middle",
            fontSize: "20px",
            marginRight: ".5vw",
            fontWeight: "bold",
          }}
        >
          +
        </span>
      )} */}
      {/* {isLoading && <Loader message={loadingMessage || "Saving..."} />}
      {!isLoading && img && <Image src={img} />}
      {!isLoading && label} */}
      Button
    </Button>
  );
};
