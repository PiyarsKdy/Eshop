
# Eshop eCommerce platform  

eCommerce platform built with the MERN stack & Redux.




![App Screenshot](frontend\public\images\screens.jpg?raw=true "Optional Title")

It is full-fledge eCommerce project packed with numerous features.  See it in action at https://eshop-gu5v.onrender.com/




## Features

- Product search
- Product reviews and ratings
- Shopping cart
- Product pagination
- Scale product image to fit.
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- User profile with orders
- PayPal / credit card integration
- Database seeder (products & users)
- Top products carousel




## Seed database

You have the option to utilize the provided commands to initialize the database with sample users and products as well as erase all existing data.

```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
Sample users login

```bash
admin@email.com (Admin)
123456

vishal@email.com (Customer)
123456

tirth@email.com (Customer)
123456
```
## Run

```bash
# Run frontend (:3000) & backend (:8000)
npm run dev

# Run backend only
npm run server
```
## Env variables

```bash
NODE_ENV = development
PORT = 8000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```
Change the `JWT_SECRET` and `PAGINATION_LIMIT` to what you want