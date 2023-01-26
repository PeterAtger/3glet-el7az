import { AlignText } from './constants';
import image from '../assets/example-0-image.svg'
import overlayImage from '../assets/example-0-overlay.svg'

export default [
  {
    name: 'Workout',
    radius: 0.84,
    itemLabelRadius: 0.82,
    itemLabelRadiusMax: 0.35,
    itemLabelRotation: 180,
    itemLabelAlign: AlignText.left,
    itemLabelColors: ['#fff'],
    itemLabelBaselineOffset: -0.07,
    itemLabelFont: 'Amatic SC',
    itemLabelFontSizeMax: 55,
    lineWidth: 1,
    lineColor: '#fff',
    itemBackgroundColors: ['#ffc93c', '#66bfbf', '#a2d5f2', '#515070', '#43658b', '#ed6663', '#d54062', '#515070'],
    image,
    overlayImage,
    items: [
      {
        label: 'كتاب مقدس 1',
        id: '1'
      },
      {
        label: 'تاريخ كنيسة 1',
        id: '2'
      },
      {
        label: 'رياضة 1',
        id: '3'
      },
      {
        label: 'كتاب مقدس 2',
        id: '4'
      },
      {
        label: 'تاريخ كنيسة 2',
        id: '5'
      },
      {
        label: 'رياضة 2',
        id: '6'
      },
      {
        label: 'كتاب مقدس 3',
        id: '7'
      },
      {
        label: 'بطاركة',
        id: '8'
      }
    ],
  }
];
