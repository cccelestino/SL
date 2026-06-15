# 💌 Tarjeta Interactiva — Para Ti

Experiencia web romántica con 5 tarjetas + mensaje final. Cielo atardecer, partículas animadas y transiciones fluidas.

---

## 🚀 Cómo desplegar en Vercel (paso a paso)

### Opción A — Desde GitHub (recomendado)

1. Sube el proyecto a GitHub:
   git init
   git add .
   git commit -m "first commit"
   gh repo create love-cards --public --push --source=.

2. Entra a vercel.com e inicia sesión con tu cuenta de GitHub.
3. Haz clic en "Add New → Project"
4. Selecciona el repo love-cards.
5. Vercel detecta Vite automáticamente → haz clic en "Deploy".
6. En ~1 minuto tienes tu URL pública lista para compartir.

### Opción B — Desde la terminal (sin GitHub)

1. npm install -g vercel
2. Dentro de la carpeta: vercel
3. Sigue el CLI → te da la URL al finalizar.

---

## ✏️ Personalizar el contenido

Edita src/data/cards.js para cambiar:
- Los nombres (busca "Amor" y "Tu nombre")
- Los mensajes de cada tarjeta (campo body)
- Los títulos (campo title)

## 🛠 Comandos

npm install       instalar dependencias
npm run dev       servidor local en http://localhost:5173
npm run build     compilar para producción
