
db.createCollection('users');

db.users.createIndex({
    'name': 1
}, {
    unique: true
});

db.users.insert({
    'name': 'dudu',
    'role': 'boss',
    'password': 'b247deafa97a5122eef246b489074c5d'
});
