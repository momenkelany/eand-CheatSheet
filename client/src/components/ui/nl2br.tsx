import React from "react";

type Nl2BrProps = {
  children: string;
  className?: string;
};

export function Nl2Br({ children, className }: Nl2BrProps) {
  if (!children) return null;
  const lines = children.split("\n");
  return (
    <span className={className}>
      {lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <br />}
          {line}
        </React.Fragment>
      ))}
    </span>
  );
}

export default Nl2Br;
