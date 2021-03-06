# Getting started

To get started with Oswald Labs Platform, [sign up for Agastya](https://oswaldlabs.com/platform/agastya/). Enter your name, website details, and create an Oswald Labs account.

## Create an API key

### Agastya Admin

Log in to [Agastya Admin](https://agastya.oswaldlabs.com) and create an API key by clicking on the "Create a New Key" button. Then, remember the newly generated API key and proceed to [Installation](installation.html).

![Screenshot of Agastya admin](https://public-cdn.oswaldlabs.com/help-assets/Screenshot%202019-03-17%20at%2016.07.19.png)

### Platform APIs

Alternately, you can also generate a new API key through our public APIs:

```
PUT https://developer.oswaldlabs.com/agastya/api-keys
```

The response from this `PUT` request looks like this:

```json
{
    "created": "YOUR_API_KEY"
}
```

This request needs authentication, so make sure you pass a Bearer token in the request's header. The token can be generated by sending a request to the `POST /auth/login` endpoint with your credentials.

A request example using [Axios](https://github.com/axios/axios):

```js
const response = await axios({
    method: "PUT",
    url: "https://developer.oswaldlabs.com/agastya/api-keys",
    headers: {
        Authorization: "Bearer YOUR_TOKEN_HERE"
    }
});
const apiKey = response.created;
```
