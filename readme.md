# node-auth

## curl
```shell script
// Register
curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' -d '{"email": "aziaev@gmail.com", "name":"artur", "password":"Secret12", "passwordConfirmation":"Secret12"}'
curl -X POST localhost:3000/register -H 'Content-Type: application/json' -d '{"email": "aziaev@gmail.com", "name":"artur", "password":"Secret12", "passwordConfirmation":"Secret12"}'
curl -v -X POST localhost:3000/register --cookie 'sessionId=s%3A7eivxdMsKyBTz0PuW_7nVG3mtx68x72w.mjwfTjEsEaqka8uRhSaE0BWF%2BwoqyMZ1lKaFqGhgZDw'

// Login
curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' -d '{"email": "aziaev@gmail.com", "password":"secret12"}'
curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' -d '{"email": "aziaev@gmail.com", "password":"Secret12"}'
curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' -d '{"email": "aziaev@gmail.com", "password":"secret12"}' --cookie 'sessionId=s%3ABKSy6ps72o-8Uuc4zaQMUjdCkeUuqkVK.QwLtyjR5oe7E56DaygHv6tlvLrHiImk3lNejTrX%2FGbw'

// Logout
curl -v -X POST localhost:3000/logout -H 'Content-Type: application/json' -d '{"email": "aziaev@gmail.com", "password":"secret12"}' --cookie 'sessionId=s%3AC4KuRW-WlY29Is8QoOd47d8pCBTtHgjV.xmv%2FdDfaiPF5SHRF9cyP7nPn6a26PkYva5g6iAeVhJo'

// Home
curl -v -X GET localhost:3000/home
curl localhost:3000/home --cookie 'sessionId=s%3AQXsVWRPLPalS_5y_wUxaAG47Rdqozmib.sgGS3Hvip2v2rHkHZa7l3lMh5wgBEavUVkIVAGa5xeo'
curl -v localhost:3000/home --cookie 'sessionId=s%3AQXsVWRPLPalS_5y_wUxaAG47Rdqozmib.sgGS3Hvip2v2rHkHZa7l3lMh5wgBEavUVkIVAGa5xeo'

// Verify

```

## docker commands
```docker
docker ps // Show all images
```

## mongodb
Connect to mongo:
```mongodb
docker exec -it mongodb mongo -u admin -p secret auth
```
```mongodb
db.users.find({}).pretty()
db.users.deleteMany({})
```

## redis
Connect to redis
```redis
docker exec -it node-auth_cache_1 redis-cli -a secret
docker exec -it node-auth_cache_1 redis-cli -a secret flushall
```
```redis
scan 0
get "sess:eHT8QkPrCdpaMhPflp5e8J3V4MglNxtG" 
ttl "sess:eHT8QkPrCdpaMhPflp5e8J3V4MglNxtG" 
set "sess:LViIyMcvNLkd8C6k6UFXL3WhU_bXqEoA" "{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2020-11-23T19:09:44.641Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"userId\":\"5fba77491d5d424288d9d22b\",\"createdAt\":1606156784641}"

```