'use strict';

function Tower_Of_Hanoi () {
  const game = {
      A : ['A'],
      B : ['B'],
      C : ['C'],

    print() {
      console.log(`${this.A}   ${this.B}   ${this.C}`)
    },

    moveDiscs(n, source, dest, spare) {
      if (n === 1) { 
        dest.push(1), 
        source.pop()
        this.print(); 
      }
      else {
        this.moveDiscs(n-1, source, spare, dest); 
        dest.push(n);
        source.pop();
        this.print();
        this.moveDiscs(n-1, spare, dest, source);
      }
    },

    play(n) {
      for (let i = n; i > 0; i--) this.A.push(i);
      this.print();
      this.moveDiscs(n, this.A, this.B, this.C);
    }
  }
  return game;
}

// Example run with 7 discs
const theGame = Tower_Of_Hanoi();
theGame.play(7);
