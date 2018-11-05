
const config = {
    projectId: process.env.PROJECT_ID,
    cookieSecret: process.env.COOKIE_SECRET,
    mongoUri: process.env.MONGODB_URI,
    oauth2: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUrl: process.env.REDIRECT_URL || 'http://localhost:5000/authorize/oauth2callback'
    }
  };

  module.exports = config; 
  