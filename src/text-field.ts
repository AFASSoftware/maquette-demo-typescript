///<reference path="typings/tsd.d.ts" />
var h = maquette.h;

// Creates a simple component with a textfield.

var createTextField = (config: {
  placeholder?: string;
  getValue: () => string;
  setValue: (newValue: string) => void;
}) => {
  
  var handleNameInput = (evt: Event) => {
    config.setValue((<HTMLInputElement>evt.target).value);
  };
  
  return {
    renderMaquette: () => h("input", {
      type: "text",
      placeholder: config.placeholder,
      value: config.getValue(),
      oninput: handleNameInput
    })
  };
};

export = createTextField;