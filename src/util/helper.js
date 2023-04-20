const date = new Date;
const months =['jan','february','march','April']
const month = date.getMonth()
const printDate = ( ) => {console.log(date.getDate())} 

const printMonth = ( ) => {console.log(months[month])}

const printBatchInfo = () => {console.log("Technatium, W5D1, the topic for today is Nodejs module system")}


module.exports = {printDate, printMonth, printBatchInfo}