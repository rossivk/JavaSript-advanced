
function listProcessor(array) {
  let result = [];
  
  array.forEach(command => {
    let [order, string] = command.split(' ')
    if (order === 'add') {
      result.push(string);
    } else if (order === 'remove') {
      let uniqueResult = [...new Set(result)]
      uniqueResult.splice(result.indexOf(string), 1);
      result = uniqueResult;
    } else if (order === 'print') {
      console.log(result.join(','));
    }
  });
}
