const capitalFirstLetterWord = (str) => str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())

export default capitalFirstLetterWord
