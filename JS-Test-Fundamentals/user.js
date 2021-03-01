class User {

  constructor(details) {
    const {firstname, lastname} = details
    this.firstname = firstname
    this.lastname = lastname
  }

  get name() {
    return `${this.firstname} ${this.lastname}`
  }
}

const nameTest = function() {
  const userDetails = {
    firstname: 'Jane',
    lastname: 'Doe'
  }

const testUser = new User(userDetails)
console.log('Username is correct: ', testUser.name === 'Jane Doe')
}

nameTest()
