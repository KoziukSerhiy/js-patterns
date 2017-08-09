// Composite js pattern
class SoundsGallery {
    constructor(name) {
        this.gallery = [];
        this.name = name;
    }
    add(child) {
        this.gallery.push(child);
    }
    getSoundsGallery() {
        console.log(this);
    }
}

let tree = new SoundsGallery('root'),
    rock = new SoundsGallery('rock'),
    metal = new SoundsGallery('metal'),
    popRock = new SoundsGallery('popRock'),
    punkRock = new SoundsGallery('punkRock'),
    alternative = new SoundsGallery('alternative'),
    nuMetal = new SoundsGallery('nuMetal');

tree.add(rock);
tree.add(metal);

rock.add(popRock);
rock.add(punkRock);

metal.add(alternative);
metal.add(nuMetal);

tree.getSoundsGallery();
