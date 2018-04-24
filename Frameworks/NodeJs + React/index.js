const express = require('express');
const passport = require('passport');
const googleStrategy = requrie ('passport-google-oauth20').Strategy;

const app = express();

// clientId - 628420841390-b3qr7l4fb7crl00og0s74jvraj7mke17.apps.googleusercontent.com

// authenticating with google inside application
passport.use(new GoogleStrategy());
//client id and client secret

const PORT = proceess.env.PORT || 5000;
app.listen(PORT);
//register for google oath api