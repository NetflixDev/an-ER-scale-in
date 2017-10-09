# Netflix CTA Component

## Interface

### Attributes
- data-dynamic-key: property to bind dynamic text to.
- (when using this component in GWD, the attribute becomes:
    'bind-data-dynamic-key')
### Methods
- text(text, size): 
    * text to display
    * size to render cta
    
- resize(w, h)
    * resize cta based on width/height

- mouseover
    * action to perform on mouseover
    
- mouseout 
    * action to perform on mouseout
### Events

## How to use

#### GWD
  - Import netflix-cta.zip to the `Components` panel in the GWD UI.
  - Drag and drop the `Netflix CTA` component anywhere in your creative area. Set its width and height to the size required.
  - Set 'bind-dynamic-key' to the key to pull the actual source from. 
   
  
### Non-GWD
  - Use like any other web component with the interface as specified above.

