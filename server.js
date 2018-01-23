var mongoUri = process.env.MONGODB_URI
const port = process.env.PORT || 3000;
mongoose.connect(mongoUri);

app.listen(port)
