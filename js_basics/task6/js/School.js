class School {
	
	constructor() {
		this._lessons = getRandomInt(10, 15);
	}

	getLessonsCount() {
		return this._lessons;
	}

	run(administrator, teacher, students) {
		for (let i = 0; i < this._lessons; i++) {
			console.log(`Lessons cycle ${i + 1} started`);
			teacher.forEach(teacher => administrator.performLesson(teacher, students));
		}
	}
}