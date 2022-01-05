# Pets Server

Just a simple PE(R)N server that I will use as boilerplate.
Uses nodemon.

## Install and run

```bash
npm install
npm start
```
Who would have thank.

## Some example usage

### Get all pets

`curl http://localhost:3000/api/pets`

### Get one pet

`curl http://localhost:3000/api/pets/1`

### Create a new pet

`curl -d '{"name": "gracie", "person_id": 2, "type": "dog", "age": 7, "features": "alertedness, tinyness"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/pets`

### Delete a pet

`curl -X DELETE http://localhost:3000/api/pets/6`

### Update a pet
`curl -d '{"name": "gracey", "person_id": 3, "type": "dog", "age": 8, "features": "alertedness, tinyness"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/api/pets/4`
