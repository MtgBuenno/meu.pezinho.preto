const photos = document.querySelectorAll('.foto'); // Replace '.foto' with the actual class or data attribute

photos.forEach(photo => {
  photo.addEventListener('mousedown', handleMouseDown);
});

function handleMouseDown(event) {
  const photo = event.target;
  let zoomFactor = 1;

  photo.addEventListener('mousemove', handleMouseMove);
  photo.addEventListener('mouseup', handleMouseUp);

  function handleMouseMove(event) {
    const deltaX = event.movementX;
    const deltaY = event.movementY;

    // Update zoom factor
    zoomFactor += 0.01 * (deltaY / 10);

    // Apply zoom transformation
    photo.style.transform = `scale(${zoomFactor})`;
  }

  function handleMouseUp(event) {
    photo.removeEventListener('mousemove', handleMouseMove);
    photo.removeEventListener('mouseup', handleMouseUp);

    // Reset zoom factor and position
    zoomFactor = 1;
    photo.style.transform = `scale(1)`;
  }
}
