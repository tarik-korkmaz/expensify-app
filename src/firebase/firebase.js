import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // });

// // database.ref('expenses').push({
// //     description: 'expense1',
// //     note: '',
// //     amount: 105500,
// //     createdAt: 1837923479234
// // });

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     const name = val.name;
// //     const title = val.job.title;
// //     const company = val.job.company;
// //     console.log(`${name} is a ${title} at ${company}.`);
// // });

// // database.ref().update({
// //     name: 'Tarik',
// //     'job/company': 'Home',
// //     location: {
// //         city: 'Munich',
// //         country: 'Germany'
// //     },
// //     stressLevel: 5
// // });

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data', e);
// //     });

// // database.ref().set({
// //     name: 'Tarik Korkmaz',
// //     age: 23,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Home'
// //     },
// //     location: {
// //         city: 'Istanbul',
// //         country: 'Turkey'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log('This failed,', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     location: {
// //         city: 'Seattle',
// //         country: 'United States'
// //     }
// // });

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('Data was removed.');
// //     }).catch((e) => {
// //         console.log('Did not remove data.');
// //     });