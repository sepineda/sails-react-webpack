# sails-react-webpack

A simple Sails and React starter app

To run project, please follow this steps,

#Steps

Install packages and depencies

`npm install`

For Development environment, we just run,
  
  `npm run start`
  
  This command will start and open webpack dev-server and sails in dev mode.
  
  If you want to take a different approach. You might compile the assets first and then start sails to serve assets as it normally does in production. You might proceed with:
  
* `npm run build`: Builds the project's assets in the production environment. Add `build:dev` for development, it won't minify javascript or CSS.
* `npm run dev`: Will start running sails in dev environment (run `npm run build:dev` before).
* `npm run prod`: Will run sails in the production environment. You should use this for deploying to a public server (run `npm run build:prod` before).
