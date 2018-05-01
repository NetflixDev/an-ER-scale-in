# Netflix CTA Component

## Interface

### Attributes
- _width_ : Width.
- _height_ : Height.
- _color-1_ : Primary fill color.
- _color-2_ : Secondary fill/font color.
- _font_ : Font family.
- _font-size_: Optional integer. If not specified, the component autosizes the text content to fit in the CTA by default. In GWD, setting the value to 0 is identical as unspecified and triggers font autosize.
- _data-dynamic-key_ : Dynamic data binding.
- _text_ : Static copy when not dynamic.
- _arrow_ : Enabled arrow.
- _border_ : Border size.
- _rtl_ : Right-to-left text.

### Methods
- _mouseover()_ : Call this to programmatically trigger the mouseover animation.
- _mouseout()_ : Call this to programmatically trigger the mouseout animation.
- _text(textContent)_ : Call this to set the CTA text.
- _resize(size)_ : Call this to programmatically set the size of the button. It accepts a size parameter which is an Object with width and height keys.

### Events
- _cta-click_ : This event is dipatched when a mouse click / tap is triggered on the component.

## How to use

#### GWD
  - Import netflix-cta.zip to the `Components` panel in the GWD UI.
  - Drag and drop the `Netflix CTA` component anywhere in your creative area. Set its width and height to the size required.
  - If the monet component is included in the creative, you must add the CTA ID from the backup.json to the components `Dynamic ID` property to bind the dynamic text property to the component.
  
### Non-GWD
  - Use like any other web component with the interface as specified above.

