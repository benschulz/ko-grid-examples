'use strict';

define(['./generic-data-source-factory', './data-promiser'], function (genericDataSourceFactory, dataPromiser) {
    return genericDataSourceFactory({
        entries: dataPromiser('json!data/people.json', function (e) {
            return {
                id: e.user.SSN,
                gender: e.user.gender,
                title: e.user.name.title,
                firstName: cap(e.user.name.first),
                lastName: cap(e.user.name.last),
                birthday: new Date((e.user.dob - e.user.dob % (24 * 60 * 60)) * 1000),
                pictures: e.user.picture,
                email: e.user.email,
                phone: e.user.phone
            };
        }),
        observableProperties: ['firstName', 'lastName', 'birthday', 'email', 'phone']
    });

    function cap(s) {
        return s[0].toUpperCase() + s.slice(1);
    }
});
