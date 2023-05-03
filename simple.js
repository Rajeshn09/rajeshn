function changeRed() {
    var img = new SimpleImage(256, 200);
  
    for (var pixel of img.values()) {
      pixel.setRed(pixel.getX());
      pixel.setGreen(0);
      pixel.setBlue(0);
      return img;
    }
  
    
  }
  