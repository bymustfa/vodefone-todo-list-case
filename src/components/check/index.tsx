import React, { FC, ChangeEvent, useState, useEffect } from "react";
import "./style.scss";

interface ICheckProps {
  checked: boolean;
  text: string;
  onChange: (checked: boolean) => void;
}

const Check: FC<ICheckProps> = ({ checked, text, onChange }) => {
  const id: number = Math.floor(Math.random() * 1000000);

  const [checkStatus, setCheckStatus] = useState(checked);
  // const [dPath, setDPath] = useState("");

  const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckStatus(e.target.checked);
    onChange(e.target.checked);
  };

  // generate min , max random number
  // const randomNumber = (min: number, max: number) => {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // };
  //
  // const randomPaths = () => {
  //   const repeat = randomNumber(15, 20);
  //   const paths = [];
  //   // loop repeat
  //   for (let i = 0; i < repeat; i++) {
  //     const path = randomNumber(-10, 100) + " " + randomNumber(50, -80);
  //     paths.push(path);
  //   }
  //
  //   const pt = paths.join(",");
  //
  //   console.log("pt", pt);
  //
  //   setDPath(pt);
  // };
  //
  // useEffect(() => {
  //   randomPaths();
  // }, [checkStatus]);

  // @ts-ignore
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="check"
        id={`check-${id}`}
        checked={checkStatus}
        onChange={onChangeCheck}
      />
      <label
        htmlFor={`check-${id}`}
        className="label"
        style={{ position: "absolute", left: 0, marginTop: 8, marginLeft: -80 }}
      >
        <svg
          width="500"
          height="50"
          viewBox="0 0 500 100"
          style={{ marginTop: 10 }}
        >
          <rect
            x="-60"
            y="0"
            width="50"
            height="50"
            stroke="black"
            fill="none"
          />
          <g transform="translate(0,-972.36216)">
            <path
              d="m -50,1010 c 7,9 16,-43 20,-31 0.19,0.60 -7,35 -5,33 2,-2 26,-33 27,-32 3,3 -18,29 -12,32 12,6 20,-41 30,-31 7,7 -15,37 -6,31 9,-6 13,-22 23,-27 8,-4 -10,34 -2,28 2,-1 26,-28 30,-25 2,2 -11,16 -8,22 1,3 29,-17 29,-20 0,-7 -8,16 -4,23 3,6 21,-25 24,-25 6,0 -5,27 -2,21 4,-9 23,-33 23,-22 0,9 -16,28 -6,28 5,0 17,-14 21,-18 14,-15 11,-12 7,4 -0,3 -1,16 -1,12 0,-9 13,-24 21,-28 0,-0.36 -6,27 -2,28 9,3 26,-22 32,-28 5,-6 -3,29 3,25 5,-3 18,-27 26,-27 0.89,0 -9,22 -5,26 4,4 24,-17 29,-20 3,-1.63 -7,14 -4,18 2,2 16,-19 18,-21 1,-1 -9,24 7,11 4,-3 14,-15 21,-15 1,0 -17,37 -3,24 30,-28 -17,12 9,-10 23,-20 0.90,9 12,7 19,-4 16,-28 16,5 0,7 7,-17 15,-17 1,0 -1,17 -0.96,17 5,-2 14,-19 20,-19 1,0 -3,11 -1,13 5,6.1 19,-24 19,-16 0,1 -5,17 -3,17 1,0 12,-12 12,-11 0.50,2 -1,12 0.96,13 12,4 14,-100 14,-1"
              fill="none"
              stroke="#999393"
              className="path2"
              stroke-width="3"
            />
          </g>
        </svg>
        <span>{text}</span>
      </label>
    </div>
  );
};

export default Check;

// m -50,1010 c 7,9 16,-43 20,-31 0.19,0.60 -7,35 -5,33 2,-2 26,-33 27,-32 3,3 -18,29 -12,32 12,6 20,-41 30,-31 7,7 -15,37 -6,31 9,-6 13,-22 23,-27 8,-4 -10,34 -2,28 2,-1 26,-28 30,-25 2,2 -11,16 -8,22 1,3 29,-17 29,-20 0,-7 -8,16 -4,23 3,6 21,-25 24,-25 6,0 -5,27 -2,21 4,-9 23,-33 23,-22 0,9 -16,28 -6,28 5,0 17,-14 21,-18 14,-15 11,-12 7,4 -0,3 -1,16 -1,12 0,-9 13,-24 21,-28 0,-0.36 -6,27 -2,28 9,3 26,-22 32,-28 5,-6 -3,29 3,25 5,-3 18,-27 26,-27 0.89,0 -9,22 -5,26 4,4 24,-17 29,-20 3,-1.63 -7,14 -4,18 2,2 16,-19 18,-21 1,-1 -9,24 7,11 4,-3 14,-15 21,-15 1,0 -17,37 -3,24 30,-28 -17,12 9,-10 23,-20 0.90,9 12,7 19,-4 16,-28 16,5 0,7 7,-17 15,-17 1,0 -1,17 -0.96,17 5,-2 14,-19 20,-19 1,0 -3,11 -1,13 5,6.1 19,-24 19,-16 0,1 -5,17 -3,17 1,0 12,-12 12,-11 0.50,2 -1,12 0.96,13 12,4 14,-100 14,-1
