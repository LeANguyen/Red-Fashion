const canvasToBlob = imgSrc => {
  fetch(imgSrc)
    .then(res => res.blob())
    .then(blob => {
      return blob;
    });
};
