# Rails React Todo App
## Requirements
  - must have postgresql installed

## Usage
  - bundle install
  - rake db:create db:migrate
  - run rails server via `rails s -p 5000`
  - open another terminal and cd into `client` and run `npm start`
  - once npm start has ran, should open a new browser to display the website

## Rails
  - Generated using `rails new <project name> --api --database=postgresql`

## Rails Setup

### GemFile

  - commented in 'rack-cors'
  - added version 1.3.6 to sqlite
  - added pry to developer / test group

### Config / initializers / cors.rb
  - commented in 8-16 to allow for cross origin resource sharing between the react side and rails side
  ```
  Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:3000'

      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end
  ```

### Resources
  - generated todos via scaffold, gave attributes title:string completed:boolean which was set to default of false

## React
  - react side generated using `create-react-app client --use-npm` (client folder inside of rails project)

### Filestructure
  - added directories components, containers, actions, reducers
  - cleaned up index.js / app.js

### Actions
  - created todos.js for all of the todos actions
  - created index.js for importing all actions into the file, then exporting them out for clean imports in components / containers

### Containers
  - currently empty due to no routing in this demo app

### Components
  - created a connected todoList component for connecting to our store of todos and rendering those todos, also dispatches an action that sends a get request to our index action in componentDidMount in order to grab all of the todos in case of a refresh
  - created a connected todoForm in order to dispatch an action to create a todo that makes a post request to our rails backend

### Reducers
  - Created a todosReducer to handle data coming in and syncing it up with the store
  - Created an index to combine the reducers for the redux store

### App.js
  - our root component, not connected to the store, renders both the list and the form for todos.

### Index.js
  - imported provider from react-redux
  - imported createStore and applyMiddleware from redux
  - imported thunk from redux-thunk
  - created a store from redux passing in the combineReducers imported from the reducers index as well as the applyMiddleware(thunk)
  - Added a provider with a store prop passing in the store created, wrapped around the App component
