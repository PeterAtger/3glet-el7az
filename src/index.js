
  import { Wheel } from './scripts/wheel';
  import { loadFonts } from './scripts/publicUtil';
  import props from './scripts/props';
  import './styles/styles.css';

  window.onload = async () => {
    await loadFonts(props.map(i => i.itemLabelFont));
    init();
  }

  function init() {

    const wheel = new Wheel(document.querySelector('.wheel-wrapper'));

    wheel.init({
      ...props[0],
      rotationSpeed: wheel.rotationSpeed, // Preserve value so it doesn't get reset.
      rotation: wheel.rotation, // Preserve value so it doesn't get reset.
      onCurrentIndexChange: e => console.log(e),
      onSpin: e => console.log(e),
    });

    window.w = wheel;

  }
