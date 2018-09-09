class CourseAnalizer {

	constructor(lessons, sciences, administrator) {
		this._lessons = lessons;
		this._sciences = sciences;
		this._administrator = administrator;
	}

  isExcellent(student) {
    return this.isPassed(student) && student.getSumRating() >= this._lessons * this._sciences * 10 * 0.8;
  }

	isPassed(student) {
    if (this._administrator.getMissedCount() >= this._lessons * this._sciences * 0.5) {
      return false;
    }
		return student.getSumRating() >= this._lessons * this._sciences * 10 * 0.5;
	}

	isFailed(student) {
		return !this.isPassed(student);
	}
}