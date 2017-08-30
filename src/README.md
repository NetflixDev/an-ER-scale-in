# Netflix Logo Component

## Interface

### Attributes
- _duration_ : The duration of the logo animation in seconds. Default is set to 2.75. 

### Methods
- _play()_ : By default the logo animation is paused. Call this to play the logo animation. This can be done through code or in GWD on the timeline with a timeline event.

### Events
- _complete_ : A complete event is dispatched when the logo animation is complete.

## How to use

#### GWD
  - Import netflix-logo.zip to the `Components` panel in the GWD UI.
  - Drag and drop the `Netflix Logo` component anywhere in your creative area. Set its width and height to the size required.
  - Call the _play()_ method either from a timeline event (preferred) or from code view.
  
### Non-GWD
  - Use like any other web component with the interface as specified above.

