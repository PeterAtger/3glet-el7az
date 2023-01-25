import {AlignText} from './constants';
import image from '../assets/example-0-image.svg'
import overlayImage from '../assets/example-0-overlay.svg'

export default [
  {
    name: 'Workout',
    radius: 0.84,
    itemLabelRadius: 0.93,
    itemLabelRadiusMax: 0.35,
    itemLabelRotation: 180,
    itemLabelAlign: AlignText.left,
    itemLabelColors: ['#fff'],
    itemLabelBaselineOffset: -0.07,
    itemLabelFont: 'Amatic SC',
    itemLabelFontSizeMax: 55,
    lineWidth: 1,
    lineColor: '#fff',
    itemBackgroundColors: ['#ffc93c', '#66bfbf', '#a2d5f2', '#515070', '#43658b', '#ed6663', '#d54062' ],
    image,
    overlayImage,
    items: [
      {
        label: 'TWISTS',
      },
      {
        label: 'PRESS UPS',
      },
      {
        label: 'JOGGING',
      },
      {
        label: 'SQUATS',
      },
      {
        label: 'PLANKS',
      },
      {
        label: 'LUNGES',
      },
      {
        label: 'BURPIES',
      },
      {
        label: 'CRUNCHES',
      },
      {
        label: 'MOUNT. CLIMB',
      },
      {
        label: 'STAR JUMPS',
      },
      {
        label: 'KANGAROOS',
      },
      {
        label: 'ROPE CLIMB',
      },
      {
        label: 'KICK BOXING',
      },
      {
        label: 'WALL SIT',
      },
    ],
    onRest: ()=>{
      window.alert('Fuck off');
    }
  }
];
