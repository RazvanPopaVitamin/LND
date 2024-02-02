import { StyleSheet, Text, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Shoes",
    amount: 30.12,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Hat",
    amount: 1.41,
    date: new Date("2022-11-19"),
  },
  {
    id: "e3",
    description: "Chocolate",
    amount: 111.77,
    date: new Date("2023-01-22"),
  },
  {
    id: "e4",
    description: "Bananas",
    amount: 5.89,
    date: new Date("2024-01-13"),
  },
  {
    id: "e5",
    description: "MTG Packs",
    amount: 99.29,
    date: new Date("2023-08-26"),
  },
];

function ExpensesOutput({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
