import { Fragment, type ReactNode } from "react";

export function ContentGen() {
  return (
    <>
      ContentGen<sup className="reg">®</sup>
    </>
  );
}

export function withMark(text: string): ReactNode {
  return text
    .split(/(ContentGen)/)
    .map((part, i) =>
      part === "ContentGen" ? (
        <Fragment key={i}>
          ContentGen<sup className="reg">®</sup>
        </Fragment>
      ) : (
        part
      )
    );
}
