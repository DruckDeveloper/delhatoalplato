//IMPORT PRODUCT IMAGES
/* 
=================
    RES
=================
*/
import carne_molida_res from "../img/products/carne-molida.jpg"; 
import punta_de_anca_madurada from "../img/products/punta-anca-res.jpg"; 
import carnes_finas_asar from "../img/products/carnes-finas-asar.jpg"; 
import lomo_fino_res from "../img/products/lomo-fino-res.jpg"; 
import carne_tajada_porcionada_res from "../img/products/carne-tajada-porcionada-res.jpg"; 
/* 
==============
    CERDO
==============
*/
import costilla_cerdo from "../img/products/costilla-cerdo.jpeg"; 
import lomo_cerdo from "../img/products/lomo-cerdo.jpg"; 
import pezuña_cerdo from "../img/products/pezuña_cerdo"; 
import tocino_carnudo_cerdo from "../img/products/tocino-carnudo-cerdo.jpg"; 
import chorizo_mixto from "../img/products/chorizo-mixto-res-cerdo.png"; 
/* 
==============
    POLLO
==============
*/
import pechuga_pollo from "../img/products/pechuga-pollo.jpg"; 
import piernas_pollo from "../img/products/piernas-pollo.jpg"; 
import cuadril_pollo from "../img/products/cuadril-pollo.jpg"; 
import alas_pollo from "../img/products/alas_pollo"; 
/* 
==============
    PESCADO
==============
*/
import x from "../img/products/"; 
import x from "../img/products/"; 
import x from "../img/products/"; 
import x from "../img/products/"; 
import x from "../img/products/"; 


products = [
    /*=======================
    CATEGORY: "Carne de res"
    ======================== */
    {
        id: "1", 
        title: "carne molida (libra)", 
        price: 11000, 
        image: carne_molida_res, 
        stock: true,
        description: "",
        category: "carne de res",
        tags: ["carne de res"]
    }, 
    {
        id: "2", 
        title: "Punta de anca madurada (libra)",
        price: 14500, 
        image: punta_de_anca_madurada,
        stock: true,
        description: "", 
        category: "carne de res", 
        tags: ["carne de res", "carnes maduradas"]
    }, 
    {
        id: "3", 
        title: "carnes finas para asar (libra)",
        price: 13000, 
        image: carnes_finas_asar,
        stock: true,
        description: "", 
        category: "carne de res", 
        tags: ["carne de res", "carnes finas"]
    },
    {
        id: "4", 
        title: "Lomo fino (libra)",
        price: 17000, 
        image: lomo_fino_res,
        stock: true,
        description: "", 
        category: "carne de res", 
        tags: ["carne de res", "carnes finas"]
    },
    {
        id: "5", 
        title: "Carne tajada (libra)",
        price: 13000, 
        image: carne_tajada_porcionada_res,
        stock: true,
        description: "", 
        category: "carne de res", 
        tags: ["carne de res"]
    }, 
    /*=======================
    CATEGORY: "Carne de cerdo"
    ======================== */
    {
        id: "6", 
        title: "Costilla de cerdo (libra)",
        price: 11500, 
        image: costilla_cerdo,
        stock: true,
        description: "", 
        category: "carne de cerdo", 
        tags: ["carne de cerdo"]
    }, 
    {
        id: "7", 
        title: "Lomo de cerdo  (libra)",
        price: 12500, 
        image: lomo_cerdo,
        stock: true,
        description: "", 
        category: "carne de cerdo", 
        tags: ["carne de cerdo"]
    }, 
    {
        id: "8", 
        title: "Pezuña de cerdo (libra)",
        price: 5000, 
        image: pezuña_cerdo,
        stock: true,
        description: "", 
        category: "carne de cerdo", 
        tags: ["carne de cerdo"]
    }, 
    {
        id: "9", 
        title: "Tocino carnudo de cerdo (libra)",
        price: 9500, 
        image: tocino_carnudo_cerdo,
        stock: true,
        description: "", 
        category: "carne de cerdo", 
        tags: ["carne de cerdo", "panceta de cerdo"]
    }, 
    {
        id: "10", 
        title: "Chorizo mixto (libra)",
        price: 11000, 
        image: chorizo_mixto,
        stock: true,
        description: "", 
        category: "carne de res", 
        tags: ["carne de res", "carne de cerdo", "receta propia"]
    }, 
    /*=======================
    CATEGORY: "Pollo"
    ======================== */
    {
        id: "11", 
        title: "Pechuga de pollo (libra)",
        price: 7300, 
        image: pechuga_pollo,
        stock: true,
        description: "", 
        category: "pollo", 
        tags: ["pollo", "no marinado"]
    }, 
    {
        id: "12", 
        title: "Pierna de pollo (libra)",
        price: 6050, 
        image: piernas_pollo,
        stock: true,
        description: "", 
        category: "pollo", 
        tags: ["pollo", "no marinado"]
    },
    {
        id: "13", 
        title: "Cuadril de pollo (libra)",
        price: 5800, 
        image: cuadril_pollo,
        stock: true,
        description: "", 
        category: "pollo", 
        tags: ["pollo", "no marinado", "muslo"]
    },
    {
        id: "14", 
        title: "Alas de pollo (libra)",
        price: 5300, 
        image: alas_pollo,
        stock: true,
        description: "", 
        category: "pollo", 
        tags: ["no marinado"]
    },
    /*=======================
    CATEGORY: "Pescado"
    ======================== */
    {
        id: "16", 
        title: "",
        price: 0, 
        image: x,
        stock: true,
        description: "", 
        category: x, 
        tags: []
    },
    {
        id: "17", 
        title: "",
        price: 0, 
        image: x,
        stock: true,
        description: "", 
        category: x, 
        tags: []
    },
    {
        id: "18", 
        title: "",
        price: 0, 
        image: x,
        stock: true,
        description: "", 
        category: x, 
        tags: []
    },
    {
        id: "19", 
        title: "",
        price: 0, 
        image: x,
        stock: true,
        stock: true,
        description: "", 
        category: x, 
        tags: []
    },
    {
        id: "20", 
        title: "",
        price: 0, 
        image: x,
        stock: true,
        description: "", 
        category: x, 
        tags: []
    },
]

export default products