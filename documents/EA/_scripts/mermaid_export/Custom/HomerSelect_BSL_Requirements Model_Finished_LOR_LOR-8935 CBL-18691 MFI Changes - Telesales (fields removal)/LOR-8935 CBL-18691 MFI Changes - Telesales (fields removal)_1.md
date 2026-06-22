# LOR-8935 CBL-18691 MFI Changes - Telesales (fields removal)

```mermaid
graph TD
    Mandatory["Mandatory"]
    Income["Income"]
    BigInteger["BigInteger"]
    X_sell_offer_recalculation_IN["X-sell offer recalculation - IN"]
    Phone_to_sales_agent["Phone to sales agent"]
    Contact_to_sales_agent_product_AF["Contact to sales agent - product AF"]
    Unique_phones["Unique phones"]
    Net_income["Net income"]
    Mandatory["Mandatory"]
    Household_income["Household income"]
    Net_income["Net income"]
    Monthly_income_expenses_IN["Monthly income/expenses IN"]
    LOR_8964_MFI_Changes_Telesales_fields_removal["LOR-8964 MFI Changes - Telesales (fields removal)"]
    LOR_8935_CBL_18691_MFI_Changes_Telesales_fields_removal["LOR-8935 CBL-18691 MFI Changes - Telesales (fields removal)"]
    DEL_Comparing_household_and_net_income["{DEL}Comparing household and net income"]
    DEL_Phone_to_sales_agent["{DEL}Phone to sales agent"]
    DEL_Income["{DEL}Income"]
    LOR_8964_MFI_Changes_Telesales_fields_removal -->|unnamed| LOR_8935_CBL_18691_MFI_Changes_Telesales_fields_removal
    Net_income -->|{DEL LOR-8964/}| Mandatory
    Net_income -->|{DEL LOR-8964}| Net_income
    Household_income -->|unnamed| Mandatory
    Mandatory -->|unnamed| Mandatory
    Net_income -->|{DEL LOR-8964}| DEL_Comparing_household_and_net_income
    Household_income -->|{DEL LOR-8964}| DEL_Comparing_household_and_net_income
```
