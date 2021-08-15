class Accesorios {
    constructor(nombre, marca, precio, description, img) {
        this._nombre = nombre;
        this._marca = marca;
        this._precio = precio;
        this._description = description;
        this._img = img;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        this._precio = precio;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get img() {
        return this._img;
    }
    set img(img) {
        this._img = img;
    }
}