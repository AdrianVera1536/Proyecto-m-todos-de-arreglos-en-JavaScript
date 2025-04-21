// app.js

const productos = [
    { nombre: "Audífonos", precio: 99, categoria: "Electrónica" },
    { nombre: "Teclado", precio: 150, categoria: "Electrónica" },
    { nombre: "Camiseta", precio: 80, categoria: "Ropa" },
    { nombre: "Libro", precio: 60, categoria: "Educación" },
    { nombre: "Cargador", precio: 45, categoria: "Accesorios" }
];

// 1️⃣ Filtrar productos menores a $100
const baratos = productos.filter(p => p.precio < 100);
console.log("🟢 Productos menores a $100:");
console.log(baratos);

// 2️⃣ Ordenar alfabéticamente por nombre
const ordenados = [...baratos].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("🔵 Productos ordenados alfabéticamente:");
console.log(ordenados);

// 3️⃣ Crear arreglo solo con los nombres
const nombres = ordenados.map(p => p.nombre);
console.log("🟡 Nombres de productos:");
console.log(nombres);

// 4️⃣ (Bonus) Calcular el total de todos los productos
const total = productos.reduce((acc, p) => acc + p.precio, 0);
console.log(`🔴 Total del valor de todos los productos: $${total}`);
