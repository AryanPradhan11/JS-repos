const books = [
    { name: 'Lord of the rings', genre: 'Fiction' },
    { name: 'A good girl guide to murder', genre: 'Romance' },
    { name: 'Reminders of him', genre: '18+'}
]

let userBooks = books.filter((bk) => bk.genre === 'Fiction')

userBooks = books.filter( (bk) => { 
    return bk.name >= 'Reminders of him' && bk.genre === "History"
})

console.log(userBooks)