import * as React from "react";
import * as ReactDom from "react-dom";

const entryElement = document.createElement("div");
document.body.append(entryElement);

ReactDom.render(<div>Reactだよ</div>, entryElement);
