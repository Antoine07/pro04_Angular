const { Observable, range, of } = require('rxjs');
const { map, filter, reduce } = require('rxjs/operators');

//console.log(Observable);

const numbers = Observable.create(observer => {
    let count = 1;
    const interval = setInterval(() => {
        observer.next(count);
        count++;
    }, 100);
    // cette méthode sera lancée si on se désinscrit
    return () => { clearInterval(interval); console.log('stop observable ...') }
}
);

// numbers.subscribe( n => console.log(n) );

const seed = 0;
const pipeNumbers = numbers.pipe(
    map(number => number + 10),
    filter(number => number % 2 === 1)
).subscribe(
    number => console.log(`voici la valeur ${number}`)
);

const stopInterval = setInterval(() => {
    pipeNumbers.unsubscribe();
    clearInterval(stopInterval);
}, 2000);

const reduceExample = range(1, 100).pipe(reduce((acc, current) => { return acc + current }, seed)).subscribe(n => console.log(n));

// of Observable qui émet des valeurs dans l'ordre
const exampleOf = of({ a: 1 }, { a: 2 }, { a: 3 }).pipe(map(x => { return { square: Math.sqrt( x.a ** 2 ) } })).subscribe(x => console.log(x));