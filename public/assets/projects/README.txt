PROJECT IMAGE GUIDE

Put project/research images in a folder that matches the work slug:

  public/assets/projects/gesture-amplification/
  public/assets/projects/virtual-assistants/
  public/assets/projects/gmao/
  public/assets/projects/gazerayhand/
  public/assets/projects/circle-game/
  public/assets/projects/haul/
  public/assets/projects/current-work/

Then add them to that project's `images` array in:
  src/data/work.js

Example:

images: [
  { src: './assets/projects/gesture-amplification/01.png', alt: 'System overview', caption: 'Collaborative VR system' },
  { src: './assets/projects/gesture-amplification/02.png', alt: 'Study task', caption: 'Rowing task' },
  { src: './assets/projects/gesture-amplification/03.png', alt: 'Gesture conditions', caption: 'Gesture amplification conditions' },
],

The first image is used as the thumbnail on the Work list.
All images appear as a carousel on the detail page.
