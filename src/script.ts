///<reference path="typings/tsd.d.ts" />
//import createTextField from "text-field";
import createTextField = require("./text-field");

document.addEventListener('DOMContentLoaded', function () {
  var h = maquette.h;
  var domNode = document.body;
  var projector = maquette.createProjector();

  var you = "";
  var textField = createTextField({
    placeholder: "What is your name?",
    getValue: function () { return you; },
    setValue: function (newYou) {
      you = newYou;
    }
  });
  function renderMaquette() {
    return h("div", [
      textField.renderMaquette(),
      h("p.output", [("Hello " + (you || "you") + "!")])
    ]);
  }
  projector.append(domNode, renderMaquette);
});
