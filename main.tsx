import * as React from "react";
import * as ReactDom from "react-dom";
import { css } from "@emotion/css";

const App = (props: { count: number }): React.ReactElement => {
  return (
    <div
      className={css({
        display: "grid",
        gap: 8,
      })}
    >
      <Card count={1} />
      <Card count={2} />
    </div>
  );
};

const Card = (props: { count: number }): React.ReactElement => {
  return <div>{props.count}</div>;
};

const entryElement = document.createElement("div");
document.body.append(entryElement);

ReactDom.render(<App count={2} />, entryElement);
