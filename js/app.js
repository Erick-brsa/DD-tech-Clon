const ratones = [
    new Mouse('Dark Core', 'Corsair', 1059, 'Mouse gamer innalámbrico Corsair Dark Core RGB', 'img/Dark-Core.jpg'),
    new Mouse('Aurora Blue', 'VSG', 599, 'Mouse ultraliviano de 72g, ambidiestro, con sensor PMW3330, 7,200 DPI, 150 IPS', 'img/Aurora.jpg'),
    new Mouse('G502 HERO', 'Logitech', 899, 'Mouse Gamer Alambrico Logitech G502 Hero RGB USB 16000DPI / 11 Botones Programables / LED Azul control de peso', 'img/Logitech-G502.jpg')
];

const teclados = [
    new Teclado('Quasar', 'VSG', 1200, 'Teclado Gamer VSG Quasar White / Outemu RED / Tenkeyless / RGB / Español / VG-K387-WHT-RED', 'img/Quasar.jpg'),
    new Teclado('G PRO', 'Logitech', 1990, 'Teclado Mecanico Gamer Logitech G PRO / RGB / Ingles / 920-009388', 'img/Logitech-G-PRO.jpg'),
    new Teclado('Alloy Core', 'HyperX', 844, 'Teclado Gamer HyperX Alloy Core RGB / Español / HX-KB5ME2-LA', 'img/HyperX-Alloy-Core.jpg')
];

const camaras = [
    new Camara('WG400', 'Game Factor', 599, 'Camara Web FHD Game Factor WG400 / 1080P-30FPS / Plug and Play / WG400', 'img/GameFactor-WG400.jpg'),
    new Camara('C922 PRO', 'Logitech', 2099, 'Camara Web FHD Logitech C922 PRO Stream / 960-001087', 'img/Logitech-C922-PRO.jpg'),
    new Camara('C3', 'ASUS', 1299, 'Camara Web Asus C3 / Calidad FHD (1080p) / USB / Varias Posiciones', 'img/Asus-C3.jpg')
];

const monitores = [
    new Monitor('VG24VQ', 'ASUS', 4699, 'Monitor Gamer ASUS 24" / AMD Freesync / 1ms / HDMIx2 / DP / FULL HD (1080p) - 144Hz / TUF GAMING VG24VQ', 'img/Asus-VG24VQ.jpg'),
    new Monitor('MG300', 'Game Factor', 3299, 'Monitor Gamer Game Factor MG300 24.5" / 5ms / 75hz / FullHd / Freesync / 1x HDMI / 1 DP / VESA / FRAMELESS / MG-300', 'img/GameFactor-MG300.jpg'),
    new Monitor('XZMX015B ', 'Xzeal', 4200, 'Monitor Gamer Xzeal XZMX015B / Negro / 23.8" / 1MS / 165HZ / Full HD / Curvo / VA / Freesync / HDMI / DP ', 'img/Xzeal-XZMX015B.jpg')
];

const objetos = [
    new Mouse('Dark Core', 'Corsair', 1059, 'Mouse gamer innalámbrico Corsair Dark Core RGB', 'img/Dark-Core.jpg'),
    new Teclado('Quasar', 'VSG', 1200, 'Teclado Gamer VSG Quasar White / Outemu RED / Tenkeyless / RGB / Español / VG-K387-WHT-RED', 'img/Quasar.jpg'),
    new Camara('WG400', 'Game Factor', 599, 'Camara Web FHD Game Factor WG400 / 1080P-30FPS / Plug and Play / WG400', 'img/GameFactor-WG400.jpg'),
    new Monitor('VG24VQ', 'ASUS', 4699, 'Monitor Gamer ASUS 24" / AMD Freesync / 1ms / HDMIx2 / DP / FULL HD (1080p) - 144Hz / TUF GAMING VG24VQ', 'img/Asus-VG24VQ.jpg'),
    new Mouse('Aurora Blue', 'VSG', 599, 'Mouse ultraliviano de 72g, ambidiestro, con sensor PMW3330, 7,200 DPI, 150 IPS', 'img/Aurora.jpg'),
    new Teclado('G PRO', 'Logitech', 1990, 'Teclado Mecanico Gamer Logitech G PRO / RGB / Ingles / 920-009388', 'img/Logitech-G-PRO.jpg'),
    new Camara('C922 PRO', 'Logitech', 2099, 'Camara Web FHD Logitech C922 PRO Stream / 960-001087', 'img/Logitech-C922-PRO.jpg'),
    new Monitor('MG300', 'Game Factor', 3299, 'Monitor Gamer Game Factor MG300 24.5" / 5ms / 75hz / FullHd / Freesync / 1x HDMI / 1 DP / VESA / FRAMELESS / MG-300', 'img/GameFactor-MG300.jpg'),
    new Mouse('G502 HERO', 'Logitech', 899, 'Mouse Gamer Alambrico Logitech G502 Hero RGB USB 16000DPI / 11 Botones Programables / LED Azul control de peso', 'img/Logitech-G502.jpg'),
    new Teclado('Alloy Core', 'HyperX', 844, 'Teclado Gamer HyperX Alloy Core RGB / Español / HX-KB5ME2-LA', 'img/HyperX-Alloy-Core.jpg'),
    new Camara('C3', 'ASUS', 1299, 'Camara Web Asus C3 / Calidad FHD (1080p) / USB / Varias Posiciones', 'img/Asus-C3.jpg'),
    new Monitor('XZMX015B ', 'Xzeal', 4200, 'Monitor Gamer Xzeal XZMX015B / Negro / 23.8" / 1MS / 165HZ / Full HD / Curvo / VA / Freesync ', 'img/Xzeal-XZMX015B.jpg')
];

let cargarApp = () => {
    cargarObjetos();
}

let cargarObjetos = () => {
    let objetosHTML = '';
    for(let objeto of objetos){
        objetosHTML += crearObjeto(objeto);
    }
    document.getElementById('cartas').innerHTML = objetosHTML;
}


let crearObjeto = (objeto) => {
    let objetoHTML = `
        <div class="col-md-4 col-sm-6 my-3" id="carta">
            <div class="card">
                <div class="card-body cuerpo-carta">
                    <div class="text-center img-carta">
                        <img src="${(objeto.img)}"  height="200px" class="" alt="">
                    </div>
                    <div class="texto-carta">
                        <h5 class="card-title">${objeto.nombre}</h5>
                        <p class="card-text text-carta">${objeto.description}</p>
                        <h6>${formatoMoneda(objeto.precio)}</h6>
                        <a href="#" class="btn btn-primary">Agregar al carrito</a> 
                    </div>
                </div>
            </div>
        </div>
    `;
    return objetoHTML;
}

// let cargarRatones = () => {
//     let ratonesHTML = '';
//     for(let raton of ratones){
//         ratonesHTML += crearMouseHTML(raton);
//     }
//     document.getElementById('cartas').innerHTML = ratonesHTML;
// }

let crearMouseHTML = (raton) => {
    let ratonHTML = `
    <div class="col-md-4 col-sm-6 my-3" id="carta">
    <div class="card">
    <div class="card-body carta">
    <div class="text-center">
    <img src="${(raton.img)}"  height="200px" class="" alt="">
    </div>
    <h5 class="card-title">${raton.nombre}</h5>
    <p class="card-text">${raton.description}</p>
    <a href="#" class="btn btn-primary">Agregar al carrito</a> 
    </div>
            </div>
        </div>
    `;
    return ratonHTML;
}
// Formato moneda
const formatoMoneda = (valor) =>{
    return valor.toLocaleString('es-MX',{style: 'currency', currency:'MNX', minimumFractionDigits: 2});
}









