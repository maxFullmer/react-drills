- Student can write a functioning react application
- Student can write a functioning Express API
- Student can request data from Express API
- Student can display data from Express API

#No-DB Review

## frontend checklist

- reset.css
- update package.json
  - main: server => so we can type nodemon without giving file

### proxy
- setupProxy.js
  - port: 3008

### dependencies

- axios
- http-proxy-middleware

### front-end folder-structure

- src/
  - App.js
  - index.js
  - components/
    - LeaderBoard.js
    - Player.js
    - RatioDisplayer
    - PlayerForm.js

##backend checklist

### server folder-structre

- server/
	- index.js
	- controllers
		- playerController.js
		- gameController.js (if time)

### dependencies
- express
- axios (used more for interacting with servers on backend, but in this case in on front end)

### routes

**playerController.js**

get: '/api/cheetah'

post: '/api/woodpecker'

put: '/api/beaver/:id'

delete: '/api/vulture/:id'

### data

```js
{
  id,
  name,
  campus,
  role,
  wins,
  losses
}
```