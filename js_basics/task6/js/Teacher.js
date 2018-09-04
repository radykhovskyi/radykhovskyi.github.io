class Teacher extends Actor {
	constructor(name, age, specialization) {
		super(name, age);
		this._specialization = specialization;
		this._scientificWorkCount = 0;
	}

	setScientificWorkCount(count) {
		this._scientificWorkCount = count;
		return this;
	}

	getScientificWorkCount() {
		return this._scientificWorkCount;
	}

	getSpecialization() {
		return this._specialization;
	}

	canGoToLesson() {
		return Math.random(0, 1) >= 0.2;
	}

	rateStudent(student) {
		const rating = Math.ceil(Math.random(0, 9) * 10);
		student.rate(this.getSpecialization(), rating);
		return this;
	}
}