# Pixabay Image Fetching API
Basic Pixabay API interface that fetches images from Pixabay.

See it in action at http://pixapi.rrex.cc/<query\>

# Endpoint
## `/:query`
This is the only endpoint for the API, the domain followed by the query for the image. 
Returns a:
- `200` with the image if successful, 
- `404`: Image not found if a relevant image isn't available on Pixabay
- or a `500` status in case of any other server-side errors.

# Demo and Screenshots

![demo](https://github.com/user-attachments/assets/1d9dc6bd-682c-4143-9624-0848d01a456c)
![image](https://github.com/user-attachments/assets/4382b29e-71a4-4f72-aa12-051f573c479a)


# Hosting 
Dependencies: `node` and `npm`.

- Clone the repo and cd into it
```bash
git clone https://github.com/rohit-a4s5/pixabay-img-api
cd pixabay-img-api
```
- Install node modules with npm
```bash
npm i
```
- Create a .env file with the following contents
```env
API_KEY=<insert API key here>
```
Your API key should be at https://pixabay.com/api/docs/ after you have logged in, under the parameters table.
![image](https://github.com/user-attachments/assets/eb9a390c-77f1-40f7-860b-e64a71d34e75)

- Run the API
```bash
node app.js
````


  
