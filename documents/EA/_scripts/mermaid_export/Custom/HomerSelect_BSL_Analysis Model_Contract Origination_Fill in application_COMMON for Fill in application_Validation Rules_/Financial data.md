# Financial data

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Financial data
- **Diagram ID**: 153714
- **Elements**: 17
- **Connectors**: 15

```mermaid
graph TD
    Monthly_family_expenses["Monthly family expenses"]
    Greater_than_25000["Greater than 25000"]
    BigInteger["BigInteger"]
    Equal_or_greater_then_zero["Equal or greater then zero"]
    Salary_day["Salary day"]
    Mandatory["Mandatory"]
    Main_source_of_income["Main source of income"]
    Salary_payment_method["Salary payment method"]
    Salary_day["Salary day"]
    Other_debts["Other debts "]
    Monthly_amount_of_other_debts["Monthly amount of other debts"]
    Additional_Net_Income["Additional Net Income"]
    Household_Income["Household Income"]
    Net_Income["Net Income"]
    Total_Household_Income["Total Household Income"]
    Additional_Net_Income["Additional Net Income"]
    Greater_than_zero["Greater than zero"]
    Net_Income -->|unnamed| Additional_Net_Income
    Net_Income -->|unnamed| Total_Household_Income
    Net_Income -->|unnamed| BigInteger
    Net_Income -->|unnamed| Equal_or_greater_then_zero
    Household_Income -->|unnamed| Total_Household_Income
    Household_Income -->|unnamed| Greater_than_25000
    Household_Income -->|unnamed| Greater_than_zero
    Additional_Net_Income -->|unnamed| Additional_Net_Income
    Additional_Net_Income -->|unnamed| Total_Household_Income
    Monthly_amount_of_other_debts -->|unnamed| Other_debts
    Salary_day -->|unnamed| Mandatory
    Salary_day -->|unnamed| Salary_day
    Salary_payment_method -->|unnamed| Mandatory
    Main_source_of_income -->|unnamed| Mandatory
    Monthly_family_expenses -->|unnamed| Equal_or_greater_then_zero
```
