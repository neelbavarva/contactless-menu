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
    quantity: Number,
    restaurantId: String,
    imgUrl: String,
})

const Orders = new mongoose.Schema({
    restaurantId: String,
    tableNo: Number,
    items: String,
    totalAmount: Number   
})

const Restaurants = mongoose.model('Restaurants', restaurantSchema);

const AllItems = mongoose.model('AllMenuItems', itemSchema);

const AllOrders = mongoose.model('AllOrders', Orders);

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
app.post('/placeOrder', async (req, res) => {
    console.log(JSON.stringify(req.body));

    // restaurantId: String,
    // tableNo: Number,
    // items: String,
    // totalAmount: Number
    let totAmo = 0, itms = [], tableNo = req.body.tableNo;
    for(let i=0 ; i<req.body.cart.length ; i++) {
        totAmo += (req.body.cart[i].price)*(req.body.cart[i].quantity);
        itms[i] = req.body.cart[i].name + " x"+req.body.cart[i].quantity;
    }

    console.log({totAmo, itms, tableNo});

    const order = new AllOrders({
        restaurantId: req.body.cart[0].restaurantId,
        tableNo: tableNo,
        items: itms.toString(),
        totalAmount: totAmo
    })

    try{
        const result = await order.save();
        console.log(result);
    } catch(e) {
        for(field in e.errors)
            console.log("Yaha error1!! :-"+e.errors[field].message);
    }

    res.send("accepted");
})

/************   User-End    ****************/

/************   Owner    ****************/

// GetOrders
app.get('/getOrders/:id', async (req, res) => {
    const id = req.params.id;
    
    const saareKaam = await AllOrders.find({ restaurantId: id });
    console.log(saareKaam);

    res.send(saareKaam);
});

// Login
app.get('/login/:id', async (req, res) => {
    const id = req.params.id;

    let isFound = true;

    const restaus = await Restaurants.findById(id)
                                     .catch(e => {
                                        console.log(e.message);
                                        //res.status(404);
                                        isFound = false;
                                     });
    
    if(isFound) {
        console.log("User is there");
        res.send(restaus);
    } else {
        res.send({
            _id: -1
        })
    }

    // if(!restaus) {       // 404 Not found
    //     res.status(404);//.send('The Restaurant with the given id was not found');
    // } else {
    //     console.log("User is there");
    //     res.send(restaus);
    // }
})

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
        name: "American Supreme",
        price: 145,
        quantity: 1,
        restaurantId: "6015483f3ebd2f8a415a8952",
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
