//IMPORT PRODUCT IMAGES
/* 
=================
    RES
=================
*/
import carne_molida_res from '../img/products/carne-molida.jpg'
import punta_de_anca_madurada from '../img/products/punta-anca-res.jpg'
import carnes_finas_asar from '../img/products/carnes-finas-asar.jpg'
import lomo_fino_res from '../img/products/lomo-fino-res.jpg'
import carne_tajada_porcionada_res from '../img/products/carne-tajada-porcionada-res.jpg'
/* 
==============
    CERDO
==============
*/
import costilla_cerdo from '../img/products/costilla-cerdo.jpeg'
import lomo_cerdo from '../img/products/lomo-cerdo.jpg'
import pezuña_cerdo from '../img/products/pezuña-de-cerdo.jpg'
import tocino_carnudo_cerdo from '../img/products/tocino-carnudo-cerdo.jpg'
import chorizo_mixto from '../img/products/chorizo-mixto-res-cerdo.png'
/* 
==============
    POLLO
==============
*/
import pechuga_pollo from '../img/products/pechuga-pollo.jpg'
import piernas_pollo from '../img/products/piernas-pollo.jpg'
import cuadril_pollo from '../img/products/cuadril-pollo.jpg'
import alas_pollo from '../img/products/alas-de-pollo.jpg'

const productsData = [
  /*=======================
    CATEGORY: "Carne de res"
    ======================== */
  {
    id: '1',
    title: 'carne molida (libra)',
    price: 11000,
    image: carne_molida_res,
    stock: true,
    description: '',
    category: 'carne de res'
  },
  {
    id: '2',
    title: 'Punta de anca madurada (libra)',
    price: 15500,
    image: punta_de_anca_madurada,
    stock: true,
    description: '',
    category: 'carne de res'
  },
  {
    id: '3',
    title: 'carnes finas para asar (libra)',
    price: 13000,
    image: carnes_finas_asar,
    stock: true,
    description: '',
    category: 'carne de res'
  },
  {
    id: '4',
    title: 'Lomo fino (libra)',
    price: 18000,
    image: lomo_fino_res,
    stock: true,
    description: '',
    category: 'carne de res'
  },
  {
    id: '5',
    title: 'Carne tajada (libra)',
    price: 13000,
    image: carne_tajada_porcionada_res,
    stock: true,
    description: '',
    category: 'carne de res'
  },
  /*=======================
    CATEGORY: "Carne de cerdo"
    ======================== */
  {
    id: '6',
    title: 'Costilla de cerdo (libra)',
    price: 11500,
    image: costilla_cerdo,
    stock: true,
    description: '',
    category: 'carne de cerdo'
  },
  {
    id: '7',
    title: 'Lomo de cerdo  (libra)',
    price: 12800,
    image: lomo_cerdo,
    stock: true,
    description: '',
    category: 'carne de cerdo'
  },
  {
    id: '8',
    title: 'Pezuña de cerdo (libra)',
    price: 5500,
    image: pezuña_cerdo,
    stock: true,
    description: '',
    category: 'carne de cerdo'
  },
  {
    id: '9',
    title: 'Tocino carnudo de cerdo (libra)',
    price: 10000,
    image: tocino_carnudo_cerdo,
    stock: true,
    description: '',
    category: 'carne de cerdo'
  },
  {
    id: '10',
    title: 'Chorizo mixto (libra)',
    price: 11500,
    image: chorizo_mixto,
    stock: true,
    description: '',
    category: 'carne de res'
  },
  /*=======================
    CATEGORY: "Pollo"
    ======================== */
  {
    id: '11',
    title: 'Pechuga de pollo (libra)',
    price: 7600,
    image: pechuga_pollo,
    stock: true,
    description: '',
    category: 'pollo'
  },
  {
    id: '12',
    title: 'Pierna de pollo (libra)',
    price: 6300,
    image: piernas_pollo,
    stock: true,
    description: '',
    category: 'pollo'
  },
  {
    id: '13',
    title: 'Cuadril de pollo (libra)',
    price: 5900,
    image: cuadril_pollo,
    stock: true,
    description: '',
    category: 'pollo'
  },
  {
    id: '14',
    title: 'Alas de pollo (libra)',
    price: 5550,
    image: alas_pollo,
    stock: true,
    description: '',
    category: 'pollo'
  }
]
export default productsData
