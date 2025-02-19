export const environment = {
    production: false,
    auth: {
      domain: 'dev-lk47ska3rjo61ptl.us.auth0.com',
      clientID: 'sASuYQDzWREMDS9iytbGbmYub8pDlKAp',
      redirect: 'http://localhost:5600/callback',  // Redirect URI after login
      audience: 'https://vehiclemanagement.com/api',
      useRefreshTokens: true,
      cacheLocation: 'localstorage'   
    },
    
        makeUrl: 'http://localhost:5000/api/makes',        // API endpoint for vehicle makes
        featureUrl: 'http://localhost:5000/api/features',   // API endpoint for vehicle features
        detailsUrl: 'http://localhost:5000/api/vehicle-details'     // API endpoint for vehicle details
      
  };