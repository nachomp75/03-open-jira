# Next.JS OpenJira App

To run the app in localhost you need a database

```
docker-compose up -d
```

- -d means **detached**

- Local MongoDB URL:

```
mongodb://localhost:27017/entriesdb
```

## Configure environment variables

Rename **.env.template** to **.env**

- Rebuild node modules and run Next app

```
yarn install
yarn dev
```

## Fill the databse with testing data

Request to:

```
​http://localhost:3000/api/seed
```
