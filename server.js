// Importa Express
const express = require('express');
const cors = require('cors');
const oracledb = require('oracledb');

// Crea una instancia de Express
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de conexión a la base de datos
const dbConfig = {
  user: 'system',
  password: '',
  connectString: 'localhost:1521/XE'
};

// Endpoint para obtener restaurantes
app.get('/api/restaurantes', (req, res) => {
  const restaurantes = [
    { id: 1, nombre: 'Restaurante Italiano', descripcion: 'Comida italiana auténtica' },
    { id: 2, nombre: 'Restaurante Japonés', descripcion: 'Especialidad en sushi y ramen' }
  ];
  res.json(restaurantes);
});



// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
