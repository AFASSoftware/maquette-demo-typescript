///<reference path="typings/tsd.d.ts" />

import createTextField = require("./text-field");// Typescript 1.5 and ecmascript2015 syntax: import createTextField from "text-field";

document.addEventListener("DOMContentLoaded", () => {
  var h = maquette.h;
  var domNode = document.body;
  var projector = maquette.createProjector();

  var you = "";
  
  // Initializes a textField component which displays and modifies the'you' variable
  var textField = createTextField({
    placeholder: "What is your name?",
    getValue: () => you,
    setValue: newYou => { you = newYou;}
  });

  // Renders the whole application
  var renderMaquette = () => {
    return h("div", [
      textField.renderMaquette(),
      h("p.output", [("Hello " + (you || "you") + "!")])
    ]);
  }
  
  projector.append(domNode, renderMaquette);
});
