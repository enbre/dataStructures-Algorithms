// Collection of values, the relationships among them, and the functions/operations that can be applied to the data

// there are hundreds of types, each with their own strengths/weaknesses. Some general, some very specific



// Class keyword

// Class - a blueprint for creating objects with pre-defined properties and methods


class Student {
   constructor(firstName, lastName, year) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.year = year;
      this.tardies = 0;
      this.scores = [];
   }
   fullName() {
      return `Your full name is ${this.firstName} ${this.lastName}`
   }

   markLate() {
      this.tardies += 1;
      if (this.tardies >= 3) return "You are expelled!!"
      return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
   }
   addScore(score) {
      this.scores.push(score)
      return this.scores
   }
   calculateAverage() {
      let sum = this.scores.reduce(function (a, b) {
         return a + b
      })
      return sum / this.scores.length;
      this.scores.reduce()
   }
}



// instance methods - functions that apply to individual instances of a class


// class methods - functions that utilize the static keyword. not very common. pertinant to classes but not instances. Utility method

// let firstStudent = new Student("Emil", "Katz", 4);
// let secondStudent = new Student("Jonas", "Bonus", 2);