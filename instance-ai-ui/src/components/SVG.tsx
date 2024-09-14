import React, { FC } from "react";

interface IProps {
  style?: React.CSSProperties;
  color?: string;
}

export const Logo: FC<IProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <mask id="ipSVoiceOne0">
      <g strokeWidth="4">
        <path
          fill={props.color ?? "#000"}
          stroke={props.color ?? "#000"}
          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
        ></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          d="M30 18v12m6-8v4m-18-8v12m-6-8v4m12-12v20"
        ></path>
      </g>
    </mask>
    <path
      fill="currentColor"
      d="M0 0h48v48H0z"
      mask="url(#ipSVoiceOne0)"
    ></path>
  </svg>
);
