// Composite js pattern
class SoundsGallery {
  constructor(name) {
    this.gallery = [];
    this.name = name;
  }
  // public methods
  add(child) {
    this.gallery.push(child);
  }
  getSoundsGallery() {
    console.log(this);
  }
}

// test
const root = new SoundsGallery("root"),
  rock = new SoundsGallery("rock"),
  metal = new SoundsGallery("metal"),
  popRock = new SoundsGallery("popRock"),
  punkRock = new SoundsGallery("punkRock"),
  alternative = new SoundsGallery("alternative"),
  nuMetal = new SoundsGallery("nuMetal");

root.add(rock);
root.add(metal);

rock.add(popRock);
rock.add(punkRock);

metal.add(alternative);
metal.add(nuMetal);

root.getSoundsGallery();
