let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num) {
        this.meetings = this.meetings + num
    },

    Done: function(num) {
        this.meetDone = this.meetDone - num
    },

    resetDay: function(day) {
        this.day = day
        this.meetings = 0
        this.meetDone = 0
    },

    summary: function() {
        return `You have ${this.meetings + this.meetDone} meetings today!`
    },
}


myTodos.addMeeting(4)
myTodos.Done(2)
console.log(myTodos)
console.log(myTodos.summary())


myTodos.resetDay('Tuesday')
myTodos.addMeeting(4)
myTodos.addMeeting(3)
myTodos.Done(3)
console.log(myTodos)
console.log(myTodos.summary())

// console.log(myTodos.meetings)