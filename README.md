<div align="center">

# Contactless Menu

Scan a QR code on the table, browse the menu and order without touching a paper menu.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Expo](https://img.shields.io/badge/Expo_SDK_40-000020?style=flat-square&logo=expo&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

</div>

<table>
  <tr><th>Scan</th><th>Menu</th><th>Cart</th></tr>
  <tr><td><img src="client/assets/readme_images/1.jpg" alt="Scan screen" width="250" /></td><td><img src="client/assets/readme_images/2.jpg" alt="Menu screen" width="250" /></td><td><img src="client/assets/readme_images/3.jpg" alt="Cart screen" width="250" /></td></tr>
</table>

## About

Contactless Menu is a mobile app for restaurants, built during a hackathon. Every restaurant gets its own QR code. A customer scans the code on their table, browses that restaurant's menu, adds items to a cart and places the order for their table number. The restaurant owner logs in with their restaurant ID to see live orders for each table, add new dishes to the menu and contact support.

## Screenshots

| Order placed | Owner: live orders | Owner: add item |
| :---: | :---: | :---: |
| <img src="client/assets/readme_images/4.jpg" alt="Order placed" width="250" /> | <img src="client/assets/readme_images/5.jpg" alt="Live orders by table" width="250" /> | <img src="client/assets/readme_images/6.jpg" alt="Add a menu item" width="250" /> |

## Features

**For customers**

- Scan the restaurant's QR code to open its menu
- Add and remove items, change quantities and see the running total
- Enter the table number and place the order

**For restaurant owners**

- Log in with a restaurant ID
- See current orders grouped by table, with the items and order total
- Mark an order as received once it is served
- Add new items (name, price, category and image URL) to the menu

## Tech Stack

| Area | Technology |
| --- | --- |
| Mobile app | React Native, Expo SDK 40, Expo Barcode Scanner |
| Backend | Node.js, Express, Helmet, Morgan |
| Database | MongoDB with Mongoose |

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/getMenu/:id` | Menu items for a restaurant |
| `POST` | `/placeOrder` | Place an order for a table |
| `GET` | `/getOrders/:id` | Current orders for a restaurant |
| `DELETE` | `/deleteOrder/:id` | Remove an order once it is served |
| `GET` | `/login/:id` | Restaurant owner login |
| `POST` | `/addItem` | Add an item to the menu |

## Getting Started

**Prerequisites:** Node.js, the Expo CLI, a MongoDB database, and the Expo Go app on your phone

### 1. Start the server

```bash
cd server
npm install
MONGODB_URI="<your MongoDB connection string>" node index.js
```

The server listens on port `3000`, or on `PORT` if it is set.

### 2. Start the app

Point `client/HttpLink.js` at your server's URL, then run:

```bash
cd client
npm install
npm start
```

Scan the QR code from the Expo CLI with the Expo Go app.

### Environment variables

| Variable | Description |
| --- | --- |
| `MONGODB_URI` | MongoDB connection string used by the server |
| `PORT` | Server port (default `3000`) |

## Project Structure

```
.
├── client/            # React Native (Expo) app
│   ├── screens/       # Home (scan), Menu, Cart and Owner screens
│   ├── assets/        # images, fonts and README screenshots
│   └── HttpLink.js    # server URL used by the app
└── server/            # Express + MongoDB API
    └── index.js
```
