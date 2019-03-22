class BoardMember {
    constructor(name, homeState, training) {
        this.name = name
        this.homeState = homeState
        this.training = training
    }
    veto() {return 'No, I must disagree'}
    approve() {return 'You can do that!'}
    doCharity() {return 'I like to help people.'}
    releasePressStatement() {return 'You will see great things from Scuber.'}
    sayHi() {return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`}
}

class Ceo extends BoardMember {
    hireEmployee() {return 'Welcome aboard!'}
}

const polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")
const backSlappingGene = new BoardMember("Mr. Gene", "Delaware", "business")

// describe('Ceo class', function() {
//   let ceo
//   let polishedBoardMember
  
//   before(() => {
//     ceo = new Ceo("Mr. Ceo", "South Carolina", "business")
//     polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")
//   })

//   describe('Ceo class', function() {
//     it('can create a ceo with a name, home state, and training', function() {
//       expect(ceo).to.be.an.instanceof(Ceo)
//       expect(ceo.name).to.equal("Mr. Ceo")
//       expect(ceo.homeState).to.equal("South Carolina")
//       expect(ceo.training).to.equal("business")
//     })

//     it('inherits the sayHello method from the BoardMember class', function() {
//       expect(ceo).to.be.an.instanceof(Ceo)
//       expect(ceo.sayHello).to.equal(polishedBoardMember.sayHello)
//     })

//     it('adds a method hireEmployee that is not available on the board member', function() {
//       expect(ceo).to.be.an.instanceof(Ceo)
//       expect(ceo.hireEmployee()).to.equal("Welcome aboard!")
//       expect(polishedBoardMember.hireEmployee).to.equal(undefined)
//     })
//   })
// })
