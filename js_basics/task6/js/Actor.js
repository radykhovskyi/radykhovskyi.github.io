class Actor {

	constructor(name, age) {
		this._name = name;
		this._age = age;
		this._missedCount = 0;
	}

	getName() {
		return this._name;
	}

	getAge() {
		return this._age;
	}

	getMissedCount() {
		return this._missedCount;
	}

	missLesson() {
		this.logAction('missed the lesson');
		this._missedCount++;
		return this;
	}

	canGoToLesson() {
		return true;
	}

	logAction(text) {
		console.log(`${this.getName()} (${this.constructor.name.toLowerCase()}) ${text}`);
	}
}