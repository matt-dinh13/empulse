# LOR-9159 - MFI_Validations for Monthly household income field

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9159 - MFI_Validations for Monthly household income field
- **Diagram ID**: 150224
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    Greater_than_25000["Greater than 25000"]
    Household_Income["Household Income"]
    MOD_Switches_for_LOR_tasks["{MOD}Switches for LOR tasks"]
    LOR_9159_MFI_Validations_for_Monthly_household_income_field["LOR-9159 - MFI_Validations for Monthly household income field"]
    LOR_9182_Add_validation_for_Monthly_household_income_field["LOR-9182 - Add validation for Monthly household income field"]
    LOR_9182_Add_validation_for_Monthly_household_income_field -->|unnamed| LOR_9159_MFI_Validations_for_Monthly_household_income_field
    Household_Income -->|unnamed| Greater_than_25000
```
