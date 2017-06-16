var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: 'asdfasd',
        friend: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittnes777',
        friends: ['Peston McNeil', 'Ryan Rasmuessen', 'Terri Ruff']
    }
];
module.exports = {
    login: function(req, res) {
        // for (var i = 0; i < users.length; i++) {
        //     if (users[i].name === req.body.name) {
        //         if(users[i].password === req.body.name) {
        //             req.session.currentUser === users[i];
        //             return res.send({userFound: true})
        //         }
        //     } else {
        //         return res.send({ userFound: false })
        //     }
        // }
        var name =  req.body.name;
        var password = req.body.password;
        for (var i = 0; i < users.length; i++) {
            if (users[i].name === req.body.name && users[i].password === req.body.password) {
                req.session.currentUser = users[i];
               return res.status(200).send({"userFound": true});
            }
        }
        return res.status(200).send( {"userFound": false} );


    }
};
