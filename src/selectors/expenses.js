// // Get visible expenses
// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
//   return expenses.filter((expense)=> {
//     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//     return textMatch;
//   }).sort((a, b) => {
//     if (sortBy === 'date'){
//       return a.createdAt < b.createdAt ? 1 : -1;
//     }
//     if (sortBy === 'amount'){
//       return a.amount < b.amount ? 1 : -1;
//     }
//   });
// }

// export default getVisibleExpenses;