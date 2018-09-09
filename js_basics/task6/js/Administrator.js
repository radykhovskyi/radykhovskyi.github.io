class Administrator extends Actor {

	canGoToLesson() {
		return Math.random(0, 1) >= 0.1;
	}

	performLesson(teacher, students) {
		if (!this.canGoToLesson()) {
			[this, teacher].concat(students).forEach(actor => actor.missLesson());
			return false;
		}
		if (!teacher.canGoToLesson()) {
			[teacher].concat(students).forEach(actor => actor.missLesson());
			return false;
		}
		
		students.forEach(student => {
			if (!student.canGoToLesson()) {
				student.missLesson();
				return;
			}
			student.logAction(`go to the lesson (${teacher.getSpecialization()})`)
			teacher.rateStudent(student);
		});
		return true;
	}
	
}