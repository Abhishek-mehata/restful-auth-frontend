# API Layer Guide (Axios)

This project follows a simple layered architecture:

```
UI (Pages/Components)
        │
        ▼
Service Layer (Business Logic)
        │
        ▼
Axios Instance (HTTP Client)
        │
        ▼
Backend API
```

---

## Folder Structure

```
src/
├── api/
│   └── axios.js          // Axios configuration
│
├── services/
│   └── authService.js    // Authentication API functions
│
├── utils/
│   └── authStorage.js    // LocalStorage helpers
│
└── pages/
    └── Login.jsx         // Uses the service layer
```

---

# 1. Axios Instance (`api/axios.js`)

The Axios instance is the single entry point for every HTTP request.

```js
const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json"
    }
});
```

### Responsibilities

* Stores the backend base URL.
* Sets default request headers.
* Automatically attaches the JWT token.
* Handles common response errors (401 Unauthorized).

---

## Request Interceptor

Before every request:

```js
const token = localStorage.getItem("token");

config.headers.Authorization = `Bearer ${token}`;
```

Example request:

```
GET /user/me

Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

No API function needs to manually attach the token.

---

## Response Interceptor

Whenever the backend returns:

```
401 Unauthorized
```

The interceptor automatically:

* Removes the saved token.
* Removes the saved user.
* Rejects the request.

```js
localStorage.removeItem("token");
localStorage.removeItem("user");
```

This keeps authentication centralized.

---

# 2. Service Layer (`services/authService.js`)

The service layer contains the application's business logic for API communication.

Pages should never call Axios directly.

Instead:

```
Page
   ↓
authService
   ↓
Axios
   ↓
Backend
```

Example:

```js
export const login = async (credentials) => {
    const { data } = await api.post("/user/login", credentials);
    return data;
};
```

The page simply calls:

```js
const data = await login(formData);
```

without worrying about URLs, headers, or Axios configuration.

---

## Available Functions

### Login

```js
login(credentials)
```

Sends:

```
POST /user/login
```

Returns:

```js
{
    message,
    token,
    user
}
```

---

### Signup

```js
signup(userData)
```

Sends:

```
POST /user/signup
```

Returns the created user data.

---

### Get Profile

```js
getProfile()
```

Sends:

```
GET /user/me
```

The JWT is attached automatically by the request interceptor.

Returns:

```js
response.data
```

---

### Logout

```js
logout()
```

Removes authentication data from Local Storage.

---

# 3. Authentication Storage (`utils/authStorage.js`)

This file is responsible for storing and retrieving authentication data.

### Save

```js
saveAuth({ token, user })
```

Stores:

```
token
user
```

inside Local Storage.

---

### Get Token

```js
getToken()
```

Returns the saved JWT.

---

### Get User

```js
getUser()
```

Returns the parsed user object.

---

### Clear Auth

```js
clearAuth()
```

Removes both token and user.

---

### Authentication Check

```js
isAuthenticated()
```

Returns:

```js
true
```

if a token exists.

---

# 4. Login Flow

```
User submits login form
            │
            ▼
login(formData)
            │
            ▼
authService.js
            │
            ▼
api.post("/user/login")
            │
            ▼
Axios Request Interceptor
(Add JWT if available)
            │
            ▼
Backend
            │
            ▼
Response
            │
            ▼
Login.jsx
            │
            ▼
saveAuth({ token, user })
            │
            ▼
Navigate("/dashboard")
```

---

# Login Response

```js
{
    message: "Login successful",

    token: "<JWT_TOKEN>",

    user: {
        _id: "...",
        name: "name",
        email: "email"
    }
}
```

---

# Why this architecture?

* Single Axios configuration.
* No repeated headers or base URLs.
* Centralized authentication logic.
* Reusable API functions.
* UI remains focused on rendering.
* Easier to maintain and scale as the project grows.
