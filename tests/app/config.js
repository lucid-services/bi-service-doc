module.exports = {
    apps: {
        app1: {
            baseUrl: 'http://127.0.0.1',
            listen: null,
            bodyParser: {
                json: {
                    extended: true,
                    type: 'application/json',
                    limit: "2mb"
                }
            },
        },
        app2: {
            baseUrl: 'http://127.0.0.1',
            listen: null,
            bodyParser: {
                json: {
                    extended: true,
                    type: 'application/json',
                    limit: "2mb"
                }
            },
        }
    }
};
