// transform expenses

export const getExpensesUtil = (expenses) => {
  const newExpenses = expenses.map((item) => ({
    ...item.expense,
    category_name: item.category.category_name,
    key: item.expense.id,
  }));
  return newExpenses;
};
