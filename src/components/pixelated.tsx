import { CSSProperties } from "react";

type PixelatedProp = React.PropsWithChildren<{
  wrapperStyle?: CSSProperties | undefined;
  style?: CSSProperties | undefined;
  className?: string;
}>;

export default function Pixelated({ children, style, className, wrapperStyle }: PixelatedProp) {
  return (
    <div className={`pixel-corners--wrapper ${className ?? ""}`} style={wrapperStyle}>
      <div className="pixel-corners" style={style}>
        {children}
      </div>
    </div>
  );
}
