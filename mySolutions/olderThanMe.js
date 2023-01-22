class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) { 
		return(
		this.age < other.age ? `${other.name} is older than me.`: 
		this.age > other.age ? `${other.name} is younger than me.`:
		`${other.name} is the same age as me.`)
	}
}