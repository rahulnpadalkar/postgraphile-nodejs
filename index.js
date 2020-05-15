const express = require("express")
const app = express()
const { postgraphile } = require("postgraphile")
const PgSimplifyInflectorPlugin = require('@graphile-contrib/pg-simplify-inflector')
const PgConnectionFilterPlugin = require('postgraphile-plugin-connection-filter')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(
    postgraphile("postgres://sociallab@localhost:5432/sociallab", "sociallab_public", {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        appendPlugins: [PgConnectionFilterPlugin, PgSimplifyInflectorPlugin]
    })
)

app.listen(4000)