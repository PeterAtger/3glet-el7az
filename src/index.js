
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
  let items = props[0].items;

  const currentProps =
  {
    ...props[0],
    rotationSpeed: wheel.rotationSpeed, // Preserve value so it doesn't get reset.
    rotation: wheel.rotation, // Preserve value so it doesn't get reset.

    onRest: e => {
      const modal = document.getElementById('modal');
      const message = document.getElementById('message')
      const messageContent = document.getElementById('messageContent')
      const { currentIndex } = e;

      if (currentIndex >= 0) {
        const { label: name, id: imageId } = props[0].items[currentIndex]
        modal.classList.toggle('hidden');
        message.innerText = `السوأل  المطلوب`
        messageContent.innerText = name

        document.getElementById('closeModal').onclick = (e) => {
          document.getElementById('modal').classList.toggle('hidden')
          console.log('Peter',imageId)
          document.getElementById(`img-${imageId}`).classList.toggle('hidden')
        };


        items.splice(currentIndex, 1)

        wheel.init({ ...currentProps, items })
      }
    }
  }


  wheel.init(currentProps);

  window.w = wheel;

}
