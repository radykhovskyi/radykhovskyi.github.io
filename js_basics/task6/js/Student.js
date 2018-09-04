class Student extends Actor {

	constructor(name, age) {
		super(name, age);
		this._ratings = [];
	}

	canGoToLesson() {
		return Math.random(0, 1) >= 0.45;
	}

	rate(specialization, rating) {
		this._ratings.push({specialization, rating});
		return this;
	}

	getAvgRating() {
		return this._ratings.reduce((state, item) => state + item.rating, 0) / this._ratings.length;
	}
}