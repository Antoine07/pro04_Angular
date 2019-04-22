const { of } = require('rxjs');

// opérateur
const { max } = require('rxjs/operators');

// Observable
const source = of(
    { x: 10.5, y: -10.6 },
    { x: 5.5, y: 8.3 },
    { x: -7.3, y: 3.3 },
    { x: 8.9, y: -2.6 }
);

// A(x1, y1) O(x2;y2) Math.sqrt( (x2-x1)**2 + (y2-y1)**2 ) => O(0;0) Math.sqrt( x1**2 + y1**2 )
source.pipe(
    max((a, b) => Math.sqrt(a.x ** 2 + a.y ** 2) < Math.sqrt(b.x ** 2 + b.y ** 2) ? -1 : 1)
).subscribe(coord => console.log(coord));
