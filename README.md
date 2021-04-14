# RESTful API built in Node and Express

Using the new Express 4.0 Router to build an API

## Requirements

- Node and npm

## Installation

- Clone the repo: `git clone https://github.com/NehaUpadhyay25/bowling-server.git`
- Install dependencies: `npm install`
- Start the server: `node server.js`

## Testing the API
Test your API using [Postman](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop)

### Get Balance
- API <br> GET/ <localhost:8000/balance>

### Add Transaction
- API <br> POST/ <localhost:8000/transaction>
- **Input** <br> 
  `{ "payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z" }` <br>
  `{ "payer": "UNILEVER", "points": 200, "timestamp": "2020-10-31T11:00:00Z" }`<br>
  `{ "payer": "DANNON", "points": -200, "timestamp": "2020-10-31T15:00:00Z" }` <br>
  `{ "payer": "MILLER COORS", "points": 10000, "timestamp": "2020-11-01T14:00:00Z" }`<br>
  `{ "payer": "DANNON", "points": 300, "timestamp": "2020-10-31T10:00:00Z" }`

### Add Batch Transaction
- API <br> POST/ <localhost:8000/transaction>
- **Input** <br>
  ```
  {
    "transactions": [
        { "payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z" },
        { "payer": "UNILEVER", "points": 200, "timestamp": "2020-10-31T11:00:00Z" },
        { "payer": "DANNON", "points": -200, "timestamp": "2020-10-31T15:00:00Z" },
        { "payer": "MILLER COORS", "points": 10000, "timestamp": "2020-11-01T14:00:00Z" },
        { "payer": "DANNON", "points": 300, "timestamp": "2020-10-31T10:00:00Z" }
    ]}

### Redeem Points
- API <br> POST/ <localhost:8000/redeem>
- **Input** <br>
  `{"points": 5000}` <br>
