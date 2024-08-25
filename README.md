# Binyamin-Mern-Web-Shop

> Full stack application for a web eCommerce shop built using the MERN stack (MongoDB, Express, React, Node.js).

<img src="./frontend/public/images/screens.png" alt="Project Screenshot">

<!-- toc -->

- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#Environment-Variables)
  - [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
  - [Seed Database](#seed-database)

* [WorkFlow and thought process](#WorkFlow-and-thought-process)
* [Bug Fixes, corrections and code FAQ](#bug-fixes-corrections-and-code-faq)
* [License](#license)
* [Future Enhancements and Improvements](Future-Enhancements-and-Improvements)
<!-- tocstop -->

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Environment Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to your preferred values

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

john@email.com (Customer)
123456

jane@email.com (Customer)
123456
```

## WorkFlow and thought process

### functionalities

using defined methodology can help you be more efficient and your project to be more scaleable clear and bug free

whenever wanting to add new functionality like 'Delete User By Id' or 'Update Product' I used this flow
Pre Steps:
1.make sure that we have that functionality frontend endpoint like delete user button or edit product button
2.make sure that we have nothing else to commit and that the last commit works properly

and than we:
1.build the api call - in the _Controller_ and _Route_.
2.define the query/mutation - in the _Slice_.
3.import the query/mutation to the frontend - in the frontend _Component_.
4.test the change - To be discussed

## Bug Fixes, corrections and code FAQ

### TO-FIX

multer not working properly pictures are not uploading from choose image to directory

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact Information

For any questions or support, please reach out to me via email: benhazoom12@gmail.com

## Acknowledgments

I would like to acknowledge Brad Traversy, Full Stack Web Developer & Instructor at Traversy Media, for his major help in making this project.
The course for this project can be found here [MERN Stack From Scratch | eCommerce Platform](https://www.traversymedia.com/mern-stack-from-scratch) course.

## Credits

This project was developed as part of a course taught by Brad Traversy. The original code and structure were created by Brad Traversy, and parts of this README were adapted from his original project README. His guidance and resources were invaluable in the creation of this project.

## Future Enhancements and Improvements

1. changing the time format of "Paid on" and "Delivered on" messages in the order page Delivered on 2024-08-25T08:06:41.770Z to Delivered on 2024-08-25 08:06:41
2. uploadind pictures of product doesnt work
