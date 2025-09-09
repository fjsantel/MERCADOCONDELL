# 📋 Guía de Administración - Mercado Condell

## 🎯 ¿Qué es este sistema?

Has recibido un **sistema de administración web** que te permite cambiar el contenido de tu sitio web sin necesidad de conocimientos técnicos, GitHub o programadores.

## 📁 Archivos en tu carpeta

```
📁 SITIO MAQUETA/
├── 🏠 index.html          → Sitio principal (NO TOCAR)
├── 🧪 sitio-prueba.html   → Sitio para probar cambios
├── ⚙️ admin.html          → Panel de administración
├── 🎨 styles.css          → Estilos del sitio
├── 🎨 admin-styles.css    → Estilos del admin
├── 📋 GUIA-ADMINISTRACION.md → Este documento
└── 📁 assets/             → Carpeta de imágenes
```

## 🚀 ¿Cómo empezar?

### Paso 1: Acceder al sitio de prueba
1. Abre el archivo `sitio-prueba.html` en tu navegador
2. Verás un banner naranja que dice "SITIO DE PRUEBA"
3. Este sitio funciona igual que el original, pero se pueden hacer cambios

### Paso 2: Ingresar al panel de administración
1. En el sitio de prueba, haz clic en el menú "MENÚ" (esquina superior derecha)
2. Selecciona "Admin" (aparece al final, en gris)
3. Ingresa la contraseña: `mercadocondell2024`

## 🎛️ Panel de Administración

### Interfaz del Admin
El panel tiene **3 columnas**:

**📝 Columna Izquierda: Lista de Negocios**
- Muestra todos los negocios del mercado (1-20)
- Cada uno con su número, nombre y categoría
- Haz clic en cualquiera para editarlo

**✏️ Columna Central: Editor**
- Formulario para editar el negocio seleccionado
- Campos: Nombre, Categoría, Descripción
- Botones: Guardar, Cancelar, Eliminar

**🖼️ Columna Derecha: Gestión de Imágenes**
- Subir nuevas imágenes
- Ver imágenes actuales
- Función drag & drop

## 🔧 Cómo editar un negocio

### 1. Seleccionar negocio
- En la lista izquierda, haz clic en el negocio que quieres editar
- Se iluminará en azul y aparecerá el formulario en el centro

### 2. Hacer cambios
- **Nombre**: Cambia el nombre del negocio
- **Categoría**: Selecciona de la lista desplegable
- **Descripción**: Escribe una nueva descripción

### 3. Guardar cambios
- Haz clic en "GUARDAR CAMBIOS"
- Aparecerá un mensaje verde confirmando que se guardó
- Los cambios se ven inmediatamente

### 4. Ver los cambios
- Ve al sitio de prueba (`sitio-prueba.html`)
- Haz clic en el número del negocio que editaste
- Verás los cambios aplicados

## 🖼️ Gestión de Imágenes

### Subir nueva imagen
1. En la columna derecha, arrastra una imagen al área punteada
2. O haz clic en "busca archivos" para seleccionar
3. Verás una vista previa
4. Haz clic en "SUBIR IMAGEN"

### Formatos aceptados
- JPG, PNG, SVG
- Máximo 5MB por imagen
- Se muestran en la galería una vez subidas

## ➕ Agregar nuevo negocio

1. Haz clic en "+ AGREGAR NEGOCIO" (botón verde)
2. Se creará un negocio nuevo con datos por defecto
3. Edítalo con tu información
4. Guarda los cambios

## 🗑️ Eliminar negocio

1. Selecciona el negocio que quieres eliminar
2. Haz clic en "ELIMINAR" (botón rojo)
3. Confirma la eliminación
4. El negocio desaparecerá permanentemente

## ⚡ Funciones importantes

### 🔄 Sincronización automática
- Los cambios se guardan en tu navegador (localStorage)
- Persisten entre sesiones
- Se aplican automáticamente al sitio de prueba

### 📱 Compatible con móviles
- El admin funciona en tablets y móviles
- Interface adaptable
- Funciones táctiles optimizadas

### 🔒 Seguridad
- Protegido con contraseña
- Solo funciona en tu navegador local
- Los datos no se envían a internet

## 🎯 Flujo de trabajo recomendado

### Para cambios menores (nombres, descripciones):
1. Abre `sitio-prueba.html`
2. Ve al admin (contraseña: `mercadocondell2024`)
3. Edita el negocio deseado
4. Guarda y verifica en el sitio de prueba
5. Si está bien, aplica al sitio principal

### Para cambios importantes (muchos negocios):
1. Planifica los cambios en papel primero
2. Usa el sitio de prueba para experimentar
3. Haz los cambios uno por uno
4. Verifica cada cambio antes del siguiente
5. Cuando todo esté perfecto, aplica al sitio real

## 🛠️ Solución de problemas

### "No puedo acceder al admin"
- ✅ Verifica la contraseña: `mercadocondell2024`
- ✅ Usa el enlace desde el menú, no escribas la URL
- ✅ Asegúrate de tener JavaScript habilitado

### "Los cambios no se ven"
- ✅ Verifica que hiciste clic en "GUARDAR CAMBIOS"
- ✅ Actualiza la página del sitio de prueba (F5)
- ✅ Verifica que estés viendo el sitio correcto

### "Se perdieron mis cambios"
- ✅ Los cambios se guardan solo en tu navegador
- ✅ Si cambias de navegador, se pierden
- ✅ Si borras datos del navegador, se pierden
- ✅ Usa siempre el mismo navegador

### "No funciona en mi móvil"
- ✅ Usa navegador moderno (Chrome, Safari, Firefox)
- ✅ Asegúrate de tener internet para las fuentes
- ✅ La funcionalidad táctil puede diferir del mouse

## 📋 Lista de categorías disponibles

- 🍎 **Alimentos**: Restaurantes, cafeterías, fruterías
- 👕 **Ropa**: Boutiques, accesorios, moda
- 🎵 **Música**: Instrumentos, eventos musicales
- 🏠 **Decoración**: Flores, muebles, adornos
- 📚 **Cultura**: Librerías, arte, educación
- 🎨 **Artesanías**: Productos locales, manualidades
- 💻 **Tecnología**: Electrónicos, reparaciones
- 💄 **Belleza**: Perfumes, cosméticos, cuidado personal
- 🧸 **Juguetes**: Entretenimiento infantil
- 🔧 **Hogar**: Ferretería, herramientas, mejoras
- 📋 **Servicios**: Trámites, fotocopias, mensajería

## 🚨 Advertencias importantes

### ❌ NO hagas esto:
- No edites el archivo `index.html` directamente
- No cambies nombres de archivos
- No muevas archivos de carpeta
- No borres la carpeta `assets/`

### ✅ SÍ haz esto:
- Usa siempre el sitio de prueba primero
- Guarda regularmente tus cambios
- Prueba en diferentes dispositivos
- Mantén copias de seguridad de la carpeta completa

## 📞 ¿Necesitas ayuda?

Si algo no funciona o tienes dudas:

1. **Lee esta guía completa nuevamente**
2. **Verifica que sigues los pasos exactamente**
3. **Prueba en un navegador diferente**
4. **Contacta a tu desarrollador con capturas de pantalla del problema específico**

## 🎉 ¡Disfruta tu nuevo sistema!

Ahora tienes control total sobre el contenido de tu sitio web. Puedes cambiar nombres, descripciones, categorías y subir imágenes cuando quieras, sin depender de nadie más.

**¿Listo para comenzar?** 
1. Abre `sitio-prueba.html`
2. Ve al admin 
3. ¡Experimenta!

---
*Documento creado: Enero 2025*  
*Sistema desarrollado para Mercado Condell*