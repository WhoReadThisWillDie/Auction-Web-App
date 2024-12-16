# REST API Specifications

## GET /auctions

Returns a list of all auctions.

### Parameters

Query parameters:

- `lowestPrice`: Filters auctions with a current price lower than the specified value.
- `highestPrice`: Filters auctions with a current price higher than the specified value.
- `endTime`: Filters auctions with an end time after the specified value.
- `laptopName`: Filters auctions with a laptop name that contains the specified value.

### Response

Status code: 200 OK
```json
[
  {
    "id": 1,
    "currentPrice": 100,
    "initialPrice": 50,
    "laptopName": "MacBook Pro",
    "endTime": "2022-01-01T00:00:00.000Z"
  },
  {
    "id": 2,
    "currentPrice": 200,
    "initialPrice":  50,
    "laptopName": "Dell XPS",
    "endTime": "2022-02-01T00:00:00.000Z"
  }
]

```

### Error Responses

No error responses.

    
## GET /auctions/{id}

Returns the auction with the specified id.

### Parameters

Path parameter:

- `id`: The id of the auction to retrieve.

### Response

Status code: 200 OK
```json
{
  "id": 1,
  "currentPrice": 100,
  "initialPrice": 50,
  "laptopName": "MacBook Pro",
  "endTime": "2022-01-01T00:00:00.000Z"
}
```

### Error Responses

- 404 Not Found: If the auction with the specified id does not exist.

    
## GET /auctions/{id}/bids

Returns a list of all bids for the auction with the specified id.

### Parameters

Path parameter:

- `id`: The id of the auction to retrieve bids for.

### Response

Status code: 200 OK
```json
[
  {
    "id": 1,
    "userId": 1,
    "price": 100,
    "dateTime": "2022-01-01T00:00:00.000Z"
  },
  {
    "id": 2,
    "userId": 1,
    "price": 200,
    "dateTime": "2022-02-01T00:00:00.000Z"
  }
]

    
```

### Error Responses

- 404 Not Found: If the auction with the specified id does not exist.

    
## POST /auctions

Creates a new auction.  

### Parameters

Body parameters:

- `id`: The id of the auction. Optional.
- `laptopId`: The id of the laptop to bid on.
- `initialPrice`: The initial price of the auction.
- `endTime`: The end time of the auction.

### Response

Status code: 201 Created
```json
{
  "message": "Auction created successfully"
}
```

### Error Responses

- 400 Bad Request: If any of the required fields are missing.
- 400 Bad Request: If the end time is in the past.
- 400 Bad Request: If the laptop with the specified id does not exist.

    
## POST /auctions/{id}/bids

Creates a new bid for the auction with the specified id.  

### Parameters

Path parameter:

- `id`: The id of the auction to create a bid for.

Body parameters:

- `userId`: The id of the user bidding.
- `price`: The price of the bid.

### Response

Status code: 201 Created
```json
{
  "message": "Bid created successfully"
}
```

### Error Responses

- 400 Bad Request: If any of the required fields are missing.
- 400 Bad Request: If the price is lower than the current price of the auction.
- 404 Not Found: If the auction with the specified id does not exist.
- 404 Not Found: If the user with the specified id does not exist.
- 403 Forbidden: If the user is not an admin.

## PATCH /auctions/{id}

Updates the auction with the specified id.  

### Parameters

Path parameter:

- `id`: The id of the auction to update.

Body parameters:

- `laptopId`: The id of the laptop to bid on. Optional.
- `initialPrice`: The initial price of the auction. Optional.
- `endTime`: The end time of the auction. Optional.

### Response

Status code: 200 OK
```json
{
  "message": "Auction updated successfully"
}
```

### Error Responses

- 400 Bad Request: If any of the required fields are missing.
- 400 Bad Request: If the end time is in the past.
- 400 Bad Request: If the laptop with the specified id does not exist.
- 404 Not Found: If the auction with the specified id does not exist.
- 403 Forbidden: If the user is not an admin.

## DELETE /auctions/{id}

Deletes the auction with the specified id.  

### Parameters

Path parameter:

- `id`: The id of the auction to delete.

### Response

Status code: 204 No Content

### Error Responses

- 404 Not Found: If the auction with the specified id does not exist.
- 403 Forbidden: If the user is not an admin.

    
## GET /laptops

Returns a list of all laptops.

### Parameters

No parameters.

### Response

Status code: 200 OK
```json
[
  {
    "id": 1,
    "name": "MacBook Pro",
    "price": 100,
    "cpu": 4,
    "gpu": 2,
    "ram": 8,
    "ssd": 256,
    "imagePath": "images/laptops/macbookpro.jpg"
  },
    {
    "id": 2,
    "name": "Dell XPS",
    "price": 200,
    "cpu": 8,
    "gpu": 4,
    "ram": 16,
    "ssd": 512,
    "imagePath": "images/laptops/dellxps.jpg"
  }
]

```

### Error Responses

No error responses.

    
## GET /laptops/{id}

Returns the laptop with the specified id.

### Parameters

Path parameter:

- `id`: The id of the laptop to retrieve.

### Response

Status code: 200 OK
```json
{
  "id": 1,
  "name": "MacBook Pro",
  "price": 100,
  "cpu": 4,
  "gpu": 2,
  "ram": 8,
  "ssd": 256,
  "imagePath": "images/laptops/macbookpro.jpg"
}
```

### Error Responses

- 404 Not Found: If the laptop with the specified id does not exist.

    
## POST /laptops

Creates a new laptop.  

### Parameters

Body parameters:

- `name`: The name of the laptop.
- `brand`: The brand of the laptop.
- `price`: The price of the laptop.
- `cpu`: The number of CPU cores.
- `gpu`: The number of GPU cores.
- `ram`: The amount of RAM.
- `ssd`: The amount of SSD storage.
- `imagePath`: The path to the image of the laptop.

### Response

Status code: 201 Created
```json
{
  "message": "Laptop created successfully"
}
```

### Error Responses

- 400 Bad Request: If any of the required fields are missing.
- 400 Bad Request: If the price is lower than the current price of the auction.
- 400 Bad Request: If the laptop with the specified id does not exist.
- 403 Forbidden: If the user is not an admin.
    
## PATCH /laptops/{id}

Updates the laptop with the specified id.  

### Parameters

Path parameter:

- `id`: The id of the laptop to update.

Body parameters:

- `name`: The name of the laptop. Optional.
- `brand`: The brand of the laptop. Optional.
- `price`: The price of the laptop. Optional.
- `cpu`: The number of CPU cores. Optional.
- `gpu`: The number of GPU cores. Optional.
- `ram`: The amount of RAM. Optional.
- `ssd`: The amount of SSD storage. Optional.

### Response

Status code: 200 OK
```json
{
  "message": "Laptop updated successfully"
}
```

### Error Responses

- 400 Bad Request: If any of the required fields are missing.
- 400 Bad Request: If the price is lower than the current price of the auction.
- 404 Not Found: If the laptop with the specified id does not exist.
- 403 Forbidden: If the user is not an admin.

## DELETE /laptops/{id}

Deletes the laptop with the specified id.  

### Parameters

Path parameter:

- `id`: The id of the laptop to delete.

### Response

Status code: 204 No Content

### Error Responses

- 404 Not Found: If the laptop with the specified id does not exist.
- 403 Forbidden: If the user is not an admin.

## POST /users

Creates a new user.  

### Parameters

Body parameters:

- `username`: The username of the user.
- `password`: The password of the user.
- `isAdmin`: Whether the user is an admin or not.

### Response

Status code: 201 Created
```json
{
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ"
}
```

### Error Responses

- 400 Bad Request: If any of the required fields are missing.
- 400 Bad Request: If the username is already taken.
- 400 Bad Request: If the password is too short or too long.
- 400 Bad Request: If the userId is specified manually.

    
## POST /token

Logs in a user.  

### Parameters

Body parameters:

- `username`: The username of the user.
- `password`: The password of the user.

### Response

Status code: 200 OK
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ"
}
```

### Error Responses

- 401 Unauthorized: If the username or password is incorrect.
- 400 Bad Request: If any of the required fields are missing.
- 400 Bad Request: If the username is already taken.
- 400 Bad Request: If the password is too short or too long.
- 400 Bad Request: If the userId is specified manually.

## GET /wins

Returns a list of all won auctions by a user. User is taken from the token.

### Parameters

No parameters.

### Response

Status code: 200 OK
```json
[
  {
    "id": 1,
    "currentPrice": 100,
    "initialPrice": 50,
    "laptopName": "MacBook Pro",
    "endTime": "2022-01-01T00:00:00.000Z"
  },
  {
    "id": 2,
    "currentPrice": 200,
    "initialPrice":  50,
    "laptopName": "Dell XPS",
    "endTime": "2022-02-01T00:00:00.000Z"
  }
]

```

### Error Responses

- 401 Unauthorized: If the token is invalid.