export function total(...numbers){
    return numbers.reduce((s,n) => s+n, 0);
}