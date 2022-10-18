const produtoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: String,
    price: { type: String, required: true},
})