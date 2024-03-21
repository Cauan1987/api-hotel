import {app} from "./src/app.js"
import "./src/routes/hoteis.js"
import "./src/routes/quartos.js"
import "./src/routes/usuarios.js"
import "./src/routes/reservas.js"

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server inicializado na porta: ${PORT}`)
})
