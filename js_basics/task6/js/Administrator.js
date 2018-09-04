class Administrator extends Actor {

	canGoToLesson() {
		return Math.random(0, 1) >= 0.3;
	}

	performLesson(teacher, students) {
		console.log(teacher.getSpecialization());
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
			student.logAction('go to the lesson')
			teacher.rateStudent(student);
		});
		return true;
	}
	
}