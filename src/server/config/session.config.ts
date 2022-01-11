export const SessionConfig = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: false, // Development only
    secure: false, // Development only
    maxAge: 1000 * 60 * 3,
  },
};
