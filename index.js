const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const titleCasedTutorials = tutorials.map(item => {
    const eachWord = item.split(' ')
    const uppercasedWords = eachWord.map(item => item.charAt(0).toUpperCase() + item.slice(1))
    const newStr = uppercasedWords.join(' ')
    return newStr
  })
  return titleCasedTutorials
}


// console.log('what does the this keyword mean?'.split(' '));