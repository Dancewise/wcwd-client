import * as Ariakit from "@ariakit/react";
import "./style.css";

export default function Search() {
  return (
    <Ariakit.ComboboxProvider>
      <Ariakit.ComboboxLabel className="label">
        <div className="font-normal text-sm pt-6">Find dance events in</div>
      </Ariakit.ComboboxLabel>
      <Ariakit.Combobox placeholder="Select city" className="combobox" />
      <Ariakit.ComboboxPopover gutter={4} sameWidth className="popover">
        <Ariakit.ComboboxItem className="combobox-item" value="Apple">
          🍎 Apple
        </Ariakit.ComboboxItem>
        <Ariakit.ComboboxItem className="combobox-item" value="Grape">
          🍇 Grape
        </Ariakit.ComboboxItem>
        <Ariakit.ComboboxItem className="combobox-item" value="Orange">
          🍊 Orange
        </Ariakit.ComboboxItem>
        <Ariakit.ComboboxItem className="combobox-item" value="Strawberry">
          🍓 Strawberry
        </Ariakit.ComboboxItem>
        <Ariakit.ComboboxItem className="combobox-item" value="Watermelon">
          🍉 Watermelon
        </Ariakit.ComboboxItem>
      </Ariakit.ComboboxPopover>
    </Ariakit.ComboboxProvider>
  );
}
