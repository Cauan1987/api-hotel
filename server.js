import {app} from "./src/app.js"
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server inicializado na porta: ${PORT}`)
})
