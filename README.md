# Pro Shop - MERN project (MongoDB,Express,React,Node.js)

## Explanation on key features

### React Router
allowes us to easely routing to differant pages without sending requests to the server that takes long time
why ? - we use it for simplicity and for much better performance when moving from page to page

### usedComponents:
old approuch:
BrowserRouter - encloses our code to be able to route
Routes - encloses our routes
Route  - renders a component when navigating to certain path
special anchorTags components that intercept the calling to the server and instead rendering a react component
Link                    -  plain link
NavLink (better option) -  a special link that when you are at its path it gets the class="active" so you could have a special style for pressed link

### new approuch version 6.4 or higher - better for
createBrowserRouter -  is a function in React Router that creates a browser-based router instance which uses the HTML5 history API to manage navigation history
RouterProvider -  is a component in React Router that takes a router instance (created by createBrowserRouter) and makes it available to the rest of the application for managing routing.

### here is an example from the project: 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      {/* Registered users */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
      </Route>
    </Route>
  )
);