import app from './app'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' });

const port = process.env.PORT

app.set('port', port)
app.listen(app.get('port'), () => {
	console.log(`Server is running on port ${port}`)
})
