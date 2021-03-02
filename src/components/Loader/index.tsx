import React, { ReactNode } from "react";
import ContentLoader from "react-content-loader";

type Props = {
  width: number;
  height: number;
  children: ReactNode;
  max?: boolean;
};

const Loader = ({ width, height, children, max }: Props) => {
  return (
    <ContentLoader
      style={{ width: "100%" }}
      preserveAspectRatio={max ? "none" : ""}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {children}
    </ContentLoader>
  );
};

export default Loader;
