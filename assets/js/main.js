// async await

const getUser = fname => {
	var user = {
		id: 6,
		fname: 'Jane'
	};
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('getting user');
			if (fname == user.fname) {
				resolve(user);
			} else {
				reject('user not found');
			}
		}, 2000);
	});
};

const getTweet = id => {
	var tweet = {
		user_id: 6,
		post: 'Love star wars'
	};
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('getting tweet');
			if (tweet.user_id === id) {
				resolve(tweet);
			} else {
				reject('no tweets found for this user');
			}
		}, 2000);
	});
};

const printUserTweet = async fname => {
	try {
		const tweet = await getTweet(user.id);
		const user = await getUser(fname);
		console.log(`${user.fname} ${tweet.post}`);
		return `${user.fname} ${tweet.post}`;
	} catch (error) {
		console.log(`Error: ${error}`);
	}
};

// printUserTweet('Jane')
// 	.then(value => {
// 		console.log(value);
// 	})
// 	.catch(error => {
// 		console.log(`Error: ${error}`);
//     });

printUserTweet('Jane');
