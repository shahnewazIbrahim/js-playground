// three sides of a triangle
let s1 = 5, s2 = 6, s3 = 7;

let s = (s1 + s2 + s3) / 2;

let area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));

console.log(area);