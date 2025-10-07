// Store data loader - connects CMS data to website
let storeData = {};

// Load store data from CMS JSON file
async function loadStoreData() {
    try {
        const response = await fetch('data/negocios.json');
        const data = await response.json();
        
        // Convert array format from CMS to object format for website
        if (data.negocios && Array.isArray(data.negocios)) {
            const loadedData = {};
            data.negocios.forEach(negocio => {
                loadedData[negocio.numero] = {
                    name: negocio.nombre.toUpperCase(),
                    category: negocio.categoria,
                    description: negocio.descripcion
                };
            });
            storeData = loadedData;
            console.log('✅ Store data loaded from CMS:', Object.keys(storeData).length, 'businesses');
        } else {
            throw new Error('Invalid CMS data format');
        }
    } catch (error) {
        console.log('⚠️ Loading default data (CMS data not available)');
        // Fallback to default data
        loadDefaultData();
    }
    
    // Initialize the map after data is loaded
    initializeMap();
}

// Default data fallback
function loadDefaultData() {
    storeData = {
        1: {
            name: "CAFÉ MERCADO",
            category: "alimentos", 
            description: "Acogedora cafetería especializada en café de especialidad y repostería artesanal. Ideal para comenzar el día o tomar un descanso con productos frescos y de origen local."
        },
        2: {
            name: "DELICIAS DEL MAR",
            category: "alimentos",
            description: "Restaurante de mariscos frescos que ofrece lo mejor de la costa chilena. Especialidad en ceviches, empanadas de mariscos y pescados a la plancha con vista al mercado."
        },
        3: {
            name: "FRUTAS Y VERDURAS EL HUERTO", 
            category: "alimentos",
            description: "Puesto de frutas y verduras frescas seleccionadas diariamente desde los mejores campos de la región. Productos orgánicos y de temporada a precios accesibles."
        },
        4: {
            name: "CARNES SELECTAS DON JOSÉ",
            category: "alimentos",
            description: "Carnicería tradicional con más de 30 años de experiencia. Ofrece cortes premium, embutidos caseros y preparaciones especiales para asados y ocasiones especiales."
        },
        5: {
            name: "PANADERÍA ARTESANAL",
            category: "alimentos", 
            description: "Pan recién horneado cada mañana con recetas tradicionales y técnicas artesanales. Especialidad en pan amasado, sopaipillas y empanadas horneadas."
        }
        // Add more default data as needed...
    };
}