const a = [{
        fName: 'Hari',
        lName: '42',
        age: 22
    },
    {
        fName: 'Hari',
        lName: '42',
        age: 22
    },
    {
        fName: 'Hari',
        lName: '42',
        age: 22
    }
]

const ids = a.map(function(user) {
    return user.fName;
})