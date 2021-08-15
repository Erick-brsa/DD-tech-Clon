class Mouse extends Accesorios {
    static contadorMouse = 0;
    constructor(nombre, marca, precio, description, img) {
        super(nombre, marca, precio, description, img);
        this._IdMouse = ++Mouse.contadorMouse;
    }
    get idMouse() {
        return this._IdMouse;
    }
}
