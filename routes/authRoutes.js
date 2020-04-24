const passport = require('passport');

module.exports = (app) => {
    // 'google' is an interanl identifier of GoogleStrategy.
    app.get(
        '/auth/google',
        passport.authenticate('google', {       
            scope : ['profile', 'email']
        })
    )

    app.get('/auth/google/callback', passport.authenticate('google'))
}
