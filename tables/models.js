// array of behavior objects
// var behaviorsArray = [{
//     name   : 'make bed',
//     type   : 'chore',
//     tokens : 50
//  },{
//     name   : 'clothes in hamper',
//     type   : 'organize',
//     tokens : 20
//  },{
//     name   : 'brush teeth',
//     type   : 'hygiene',
//     tokens : 25
//  },{
//     name   : 'shred papers',
//     type   : 'chore',
//     tokens : 20
//  },{
//     name   : 'silverware away',
//     type   : 'chore',
//     tokens : 20
//  },{
//     name   : 'clothes on floor',
//     type   : 'organize',
//     tokens : -10
//  },{
//     name   : 'burping',
//     type   : 'manners',
//     tokens : -10
// }];

// array of people objects
// var peopleArray = [
//   {
//     name   : 'jess',
//     type   : 'caregiver',
//     admin  : true
//   },
//   {
//     name   : 'logan',
//     type   : 'child',
//     admin  : false
//   }
// ];

// array of goal objects
// var goalsArray = [
//   {
//     name   : 'weekly',
//     type   : 'duration',
//     date   : null,
//     repeat : true,
//     end    : null
//   },
//   {
//     name   : 'monthly',
//     type   : 'duration',
//     date   : null,
//     repeat : true,
//     end    : null
//   },
//   {
//     name   : 'birthday',
//     type   : 'event',
//     date   : null,
//     repeat : true,
//     end    : null
//   }
// ];
//
// // array of reward objects
// var rewardsArray = [
//   {
//     name   : 'lego chima cragger command ship',
//     type   : 'wishlist',
//     tokens : 1000,
//     image  : 'img/rewards/lego-01.jpg'
//   },
//   {
//     name   : 'mini-golf',
//     type   : 'activity',
//     tokens : 200,
//     image  : 'img/rewards/mini-golf.jpg'
//   },
//   {
//     name   : 'ice cream store',
//     type   : 'activity',
//     tokens : 75,
//     image  : 'img/rewards/ice-cream.jpg'
//   }
// ];
//
// // array of type objects
// var typesArray = [
//   {
//     name   : 'behavior',
//     type   :  ['chore','hygiene','organize','disrespect','energy saving','manners','miscellaneous']
//   },
//   {
//     name   : 'people',
//     type   :  ['caregiver','child']
//   },
//   {
//     name   : 'goal',
//     type   :  ['duration','event','holiday']
//   },
//   {
//     name   : 'reward',
//     type   :  ['activity','wishlist']
//   }
// ];
//
// var panelsArray = [
//   {
//     name   : 'good behaviors',
//     icon   : 'glyphicon-thumbs-up'
//   },
//   {
//     name   : 'bad behaviors',
//     icon   : 'glyphicon-thumbs-down'
//   },
//   {
//     name   : 'rewards',
//     icon   : 'glyphicon-certificate'
//   },
//   {
//     name   : 'goals',
//     icon   : 'glyphicon-star'
//   },
//   {
//     name   : 'people',
//     icon   : 'glyphicon-user'
//   },
//   {
//     name   : 'types',
//     icon   : 'glyphicon-th-list'
//   }
// ];

// export object of arrays
// module.exports = {
//   behaviors : behaviorsArray,
//   people    : peopleArray,
//   goals     : goalsArray,
//   rewards   : rewardsArray,
//   types     : typesArray,
//   panels    : panelsArray
// };

module.exports = [{
    panelName: "Good Behaviors",
    icon: 'glyphicon-thumbs-up',
    headers: ['Name','Type','Tokens'],
    // data: mongoResponse,
    data: [{
        name   : 'make bed',
        type   : 'chore',
        tokens : 50
     },{
        name   : 'clothes in hamper',
        type   : 'organize',
        tokens : 20
     },{
        name   : 'brush teeth',
        type   : 'hygiene',
        tokens : 25
     }],
}, {
    panelName: 'People',
    icon: 'glyphicon-user',
    headers: ['Name','Type','Admin'],
    data: [{
        name   : 'jess',
        type   : 'caregiver',
        admin  : true
    },{
        name   : 'logan',
        type   : 'child',
        admin  : false
    }]
},{
    panelName: 'Goals',
    icon: 'glyphicon-star',
    headers: ['Name','Type','Date','Repeat','End'],
    data: [{
        name   : 'weekly',
        type   : 'duration',
        date   : new Date(),
        repeat : true,
        end    : new Date()
    },{
        name   : 'monthly',
        type   : 'duration',
        date   : new Date(),
        repeat : true,
        end    : new Date()
    },{
        name   : 'birthday',
        type   : 'event',
        date   : new Date(),
        repeat : true,
        end    : new Date()
    }]
},{
    panelName: 'Types',
    icon: 'glyphicon-th-list',
    headers: ['Name','Type'],
    data: [{
        name   : 'behavior',
        type   :  ['chore','hygiene','organize','disrespect','energy saving','manners','miscellaneous']
    },{
        name   : 'people',
        type   :  ['caregiver','child']
    },{
        name   : 'goal',
        type   :  ['duration','event','holiday']
    },{
        name   : 'reward',
        type   :  ['activity','wishlist']
    }]
}]
