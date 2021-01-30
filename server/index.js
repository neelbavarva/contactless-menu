const startupDebugger = require('debug')('app:startup');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

//mongodb+srv://thakker:abcd@1234@cluster0.lt0en.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://thakker:abcd@1234@cluster0.lt0en.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true })
        .then(() => console.log('Connection established to MongoDB...'))
        .catch(err => console.log("Could not connect to MongoDB...", err));

const restaurantSchema = new mongoose.Schema({
    name: String,
    OwnerName: String,
})

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    restaurantId: String,
    imgUrl: String,
})

const Restaurants = mongoose.model('Restaurants', restaurantSchema);

const AllItems = mongoose.model('AllMenuItems', itemSchema);

app.use(express.json());
app.use(helmet());  //secures the page by adding various http headers

app.use(morgan('tiny'));    // loggs every request in the console
startupDebugger("Morgan enabled");

app.get('/', (req, res) => {
    res.send("Hello 11th Hour");
});

/************   User    ****************/

// '/getMenu/:id'   GET
app.get('/getMenu/:id', async (req, res) => {
    const id = req.params.id;
    
    const menu_card = await AllItems.find({ restaurantId: id });
    console.log(menu_card);

    res.send(menu_card);
});

// '/placeOrder'    POST 
app.post('/placeOrder', (req, res) => {
    console.log(req.body.cart);

    res.send("accepted");
})

/************   User-End    ****************/

/************   Owner    ****************/
// CreateOwner

// CreateMenu

// CreateItem

// EditItem

/************   Owner-End    ****************/

async function createRestaurant() {
    const restaurant = new Restaurants({
        name: "Burger King",
        OwnerName: "Guptaji Harshit"
    })

    try{
        const result = await restaurant.save();
        console.log(result);
    } catch(e) {
        for(field in e.errors)
            console.log("Yaha error1!! :-"+e.errors[field].message);
    }
}

async function createItem() {
    const item = new AllItems({
        name: "Paneer Overload",
        price: 179,
        restaurantId: "60154892d9bd758ac9a36d63",
        imgUrl: "abcdes"
    })

    try{
        const result = await item.save();
        console.log(result);
    } catch(e) {
        for(field in e.errors)
            console.log("Yaha error2!! :-"+e.errors[field].message);
    }
}
//createItem();

/************   Owner-End    ****************/
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}..`));
