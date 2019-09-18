// async await

const getUser = fname => {
	var user = {
		id: 3,
		fname: 'Jane'
	};
	return new Promise((resolve, reject) => {
		console.log('getting user');
		setTimeout(() => {
			if (fname == user.fname) {
				resolve(user);
			} else {
				reject('Error: user not found');
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
				reject('Error: no tweets found for this user');
			}
		}, 2000);
	});
};

const printUserTweet = async fname => {
	const user = await getUser(fname);
	const tweet = await getTweet(user.id);

	return `${user.fname} ${tweet.post}`;
};

console.log(printUserTweet('Jane'));
