const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Gato' });
kitty.save().then(() => console.log('meow'));