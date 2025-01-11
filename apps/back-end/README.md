## Endpoints

### POST `/login`

Recebe um body com um email e uma senha, verifica se ambos existem em conjunto dentro do banco de dados, caso exista retorna um token de autenticação.

<details>
  <summary>Exemplo de corpo de requisição:</summary>
  
```json
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```
  
</details>

<details>
  <summary>Exemplo de corpo de resposta:</summary>
  
#### Retorna um status `200`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

#### Caso não exista retorna um erro com status `404`

```json
{
  "message": "User not found"
}
```

</details>

<hr/>

### POST `/register`

Registra um cliente no banco de dados e retorna um token de autenticação.

<details>
  <summary>Exemplo de corpo de requisição:</summary>
  
```json
{
  "name": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456"
}
```
  
</details>

<details>
  <summary>Exemplo de resposta:</summary>

#### Retorna um status `201`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

#### Caso alguma informação esteja com formato inválido retorna um status `422`

```json
{
  "message": "Error message"
}
```

#### Caso o usuário já exista retorna um status `409`

```json
{
  "message": "User already exists"
}
```

</details>

<hr/>

### GET `/products`

Retorna uma lista com todos os produtos registrados no banco de dados.

<details>
  <summary>Exemplo de resposta:</summary>
  
```json
[
  {
    "id": 1,
    "name": "Skol Lata 250ml",
    "price": 2.20,
    "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg"
  },
  /* ... */
]
```
  
</details>

<hr/>

### GET `/products/:id`

Retorna um produto específico.

<details>
  <summary>Exemplo de resposta:</summary>
  
```json
{
  "id": 1,
  "name": "Skol Lata 250ml",
  "price": 2.20,
  "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg"
},
```
  
#### Caso não exista retorna um erro com status `404`

```json
{
  "message": "Product not found"
}
```

</details>

<hr/>

### POST `/sales`

Cria um novo pedido no banco de dados.

<details>
  <summary>Exemplo de Requisição:</summary>
  
```json
{
  "sellerId": 2,
  "totalPrice": 9.70,
  "deliveryAddress": "Av. Marechal Rondon",
  "deliveryNumber": "149",
  "products": [
    {
      "id": 1,
      "quantity": 3
    },
    {
      "id": 2,
      "quantity": 2
    },
    {
      "id": 3,
      "quantity": 1
    }
  ]
}
```

</details>

<details>
  <summary>Exemplo de Resposta:</summary>
  
```json
{
  "id": 1,
  "userId": 3,
  "sellerId": 1,
  "totalPrice": 20,
  "deliveryAddress": "Av. Municipal",
  "deliveryNumber": "1234",
  "saleDate": "2022-11-30T21:36:47.000Z",
  "status": "PENDENTE",
  "products": [
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": 2.2,
      "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg",
      "quantity": 2
    },
    {
      "id": 3,
      "name": "Antarctica Pilsen 300ml",
      "price": 2.49,
      "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
      "quantity": 1
    }
  ]
}
```

#### Caso alguma informação esteja com formato inválido retorna um status `422`

```json
{
  "message": "Error message"
}
```

</details>

<hr/>

### GET `/sales/:id`

Retorna um pedido específico

<details>
  <summary>Exemplo de Resposta:</summary>
  
```json
{
  "id": 1,
  "userId": 3,
  "sellerId": 1,
  "totalPrice": 20,
  "deliveryAddress": "Av. Municipal",
  "deliveryNumber": "1234",
  "saleDate": "2022-11-30T21:36:47.000Z",
  "status": "PENDENTE",
  "products": [
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": 2.2,
      "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg",
      "quantity": 2
    },
    {
      "id": 3,
      "name": "Antarctica Pilsen 300ml",
      "price": 2.49,
      "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
      "quantity": 1
    }
  ]
}
```

#### Caso não exista retorna um status `404`

```json
{
  "message": "Sale not found"
}
```

</details>

<hr/>

### GET `/sales/history`

Retorna todos os pedidos do usuário autenticado.

<details>
  <summary>Exemplo de Resposta:</summary>
  
```json
[
  {
    "id": 1,
    "userId": 3,
    "sellerId": 2,
    "totalPrice": 10,
    "deliveryAddress": "Av. Marechal Rondon",
    "deliveryNumber": "149",
    "saleDate": "2022-12-01T18:26:00.000Z",
    "status": "PENDENTE"
  },
  /* ... */
]
```

</details>

<hr/>

### PUT `/sales/:id/processing`

Marca um pedido como `"PREPARANDO"`. Só pode ser acessado pelo token de um usuário vendedor.

<details>
  <summary>Exemplo de resposta:</summary>
  
```json
{
  "id": 1,
  "userId": 3,
  "sellerId": 1,
  "totalPrice": 20,
  "deliveryAddress": "Av. Municipal",
  "deliveryNumber": "1234",
  "saleDate": "2022-11-30T21:36:47.000Z",
  "status": "PREPARANDO",
  "products": [
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": 2.2,
      "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg",
      "quantity": 2
    },
    {
      "id": 3,
      "name": "Antarctica Pilsen 300ml",
      "price": 2.49,
      "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
      "quantity": 1
    }
  ]
}
```
  
</details>

<hr>

### PUT `/sales/:id/delivering`

Marca um pedido como `"EM TRÂNSITO"`. Só pode ser acessado pelo token de um usuário vendedor.

<details>
  <summary>Exemplo de resposta:</summary>
  
```json
{
  "id": 1,
  "userId": 3,
  "sellerId": 1,
  "totalPrice": 20,
  "deliveryAddress": "Av. Municipal",
  "deliveryNumber": "1234",
  "saleDate": "2022-11-30T21:36:47.000Z",
  "status": "EM TRÂNSITO",
  "products": [
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": 2.2,
      "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg",
      "quantity": 2
    },
    {
      "id": 3,
      "name": "Antarctica Pilsen 300ml",
      "price": 2.49,
      "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
      "quantity": 1
    }
  ]
}
```
  
</details>

<hr>

### PUT `/sales/:id/delivered`

Marca um pedido como `"ENTREGUE"`. Só pode ser acessado pelo token de um usuário cliente.

<details>
  <summary>Exemplo de resposta:</summary>
  
```json
{
  "id": 1,
  "userId": 3,
  "sellerId": 1,
  "totalPrice": 20,
  "deliveryAddress": "Av. Municipal",
  "deliveryNumber": "1234",
  "saleDate": "2022-11-30T21:36:47.000Z",
  "status": "ENTREGUE",
  "products": [
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": 2.2,
      "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg",
      "quantity": 2
    },
    {
      "id": 3,
      "name": "Antarctica Pilsen 300ml",
      "price": 2.49,
      "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
      "quantity": 1
    }
  ]
}
```
  
</details>

<hr>

### POST `/user`

Recebe as informações de um usuário e o salva no banco de dados.

<details>
  <summary>Exemplo de corpo de requisição:</summary>
  
```ts
{
  "name": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "role": "customer" | "seller" | "administrator"
}
```
  
</details>

<details>
  <summary>Exemplo de resposta:</summary>
  
```json
{
  "id": 4,
  "name": "Brett Wiltshire",
  "email": "brett@email.com",
  "role": "seller"
}
```

#### Caso o usuário já exista retorna um status `409`

```json
{
  "message": "User already exists"
}
```

</details>

<hr/>

### GET `/user`

Retorna todos os usuários cadastrados no banco de dados, com exceção do usuário que faz a requisição.

<details>
  <summary>Exemplo de resposta:</summary>
  
```json
[
  {
    "id": 4,
    "name": "Brett Wiltshire",
    "email": "brett@email.com",
    "role": "seller"
  },
  /* ... */
]
```

</details>

<hr>

### DELETE `/user/:id`

Deleta um cliente ou vendedor do banco de dados. Em caso de sucesso retorna um corpo vazio com status `204`.
