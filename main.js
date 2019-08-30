const app = require('./src/app')

const port = process.env.port || 5000

app.listen(port, '0.0.0.0', () => {
    console.log(`App has started and is running on port: ${port}`)
})