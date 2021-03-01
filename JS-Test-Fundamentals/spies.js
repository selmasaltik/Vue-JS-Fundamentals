class Session {
  constructor() {
    this.lastUpdate = Date.now()
  }

  touch() {
    this.lastUpdate = Date.now()
  }
}

function spyOn(Object, method) { ... }

const dateSpy = spyOn(Date, 'now')

Date.now()

console.log(dateSpy.called.length > 0)

dateSpy.mockReturnValue(123)