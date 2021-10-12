function getBase64Image(imgId){
  var img = document.getElementById(imgId);
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  var image64 = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  var  image64Element = document.createElement("image64");
  image64Element.setAttribute('id', 'image64');
  image64Element.innerHTML=image64;
  document.body.appendChild(image64Element);
}

function getBase64ImageFromIFrame(frameId,imgId){
  var img = document.getElementById(frameId).contentWindow.document.getElementById(imgId);
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  var image64 = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  var  image64Element = document.createElement("image64");
  image64Element.setAttribute('id', 'image64');
  image64Element.innerHTML=image64;
  document.body.appendChild(image64Element);
}

