class School {
	
	constructor() {
		this._lessons = getRandomInt(9, 14) + 1;
	}

	run(administrator, teacher, students) {
		for (let i = 0; i < this._lessons; i++) {
			console.log(`Lesson${i + 1} started`);
			teacher.forEach(teacher => administrator.performLesson(teacher, students));
		}
	}
}