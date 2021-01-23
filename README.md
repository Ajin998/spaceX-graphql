# SpaceX application using express-graphql as a backend for fetching data

## Summary

This project demonstrate how we can fetch data from graphql instead of REST api approach

## Technologies used

1. GraphQL
2. Node.js
3. Express

## Instructions and Installations:-

1. Firsty to get started you have to clone this repository in your local repository by typing:-

```
$ git clone https://github.com/Ajin998/spaceX-graphql.git
```

2. After that you have to install all the node dependencies in your project by doing:-

```
npm install
```

This will install all the node dependencies in your project

3. After installing all the dependencies you are good to go with the application, Now to get start you have to type

```
npm start

```

4. You will notice that the backend server is running on port 5000
5. Head to localhost:5000/graphql
6. You will notice that a GUI will open in your browser where you can simply query and get the result of the query, Basically a playground for graphql queries.

# Instruction for setting environment variables:-

1. Make a new file in your root directory as .env
2. Inside .env file mention PORT=5000

---

**NOTE:-**

```
Setting env variable for PORT is optional
```

---

## Project Snippet along with small descriptions.

1. To fetch all the launches by spaceX we specify launches as a root query.

![alt text ](https://user-images.githubusercontent.com/73870819/105542072-c6c2f680-5d1e-11eb-9a71-ee4b9875bd5f.png)

2. To fetch only single entry launch by id then we specify launch as a singular root query

![alt text](https://user-images.githubusercontent.com/73870819/105542498-7009ec80-5d1f-11eb-9a89-1110560a5947.png)

## Author

Ajin Varghese
