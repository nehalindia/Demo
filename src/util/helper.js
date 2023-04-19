const date = new Date;
const month = 4
const printDate = ( ) => {console.log(date.getDate())} 

const printMonth = ( ) => {console.log(month)}

const printBatchInfo = () => {console.log("Technatium, W5D1, the topic for today is Nodejs module system")}


module.exports = {printDate, printMonth, printBatchInfo}