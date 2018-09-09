class SourceFactory {
	static getSourceData() {
		const students = SourceFactory.source.students.map(data => new Student(...data));
		const teachers = SourceFactory.source.teachers.map(data => new Teacher(...data.slice(0, 3)).setScientificWorkCount(data[3]));
		const administrator = new Administrator(...SourceFactory.source.administrator);
		return { students, teachers, administrator };
	}
}

SourceFactory.source = {
	students: [
		['Micheal', 25],
		['Owen', 22],
		['Amanda', 23],
		['Diane', 22],
		['Harry', 21]
	],
	teachers: [
		['Ricky', 33, 'math', 15],
		['Wesley', 29, 'biology', 5],
		['Hudson', 38, 'chemistry', 10],
	],
	administrator: ['Fiona', 31]
};