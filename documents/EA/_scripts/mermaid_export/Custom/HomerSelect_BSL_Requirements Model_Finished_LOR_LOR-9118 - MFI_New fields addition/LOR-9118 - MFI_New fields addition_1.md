# LOR-9118 - MFI_New fields addition

```mermaid
graph TD
    Monthly_family_expenses["Monthly family expenses"]
    Equal_or_greater_then_zero["Equal or greater then zero"]
    Monthly_family_expenses["Monthly family expenses"]
    MOD_Switches_for_LOR_tasks["{MOD}Switches for LOR tasks"]
    LOR_9147_Add_field_Household_expenses_to_2BoD_application_fo["LOR-9147 - Add field Household expenses to 2BoD application forms"]
    LOR_9118_MFI_New_fields_addition["LOR-9118 - MFI_New fields addition"]
    LOR_9147_Add_field_Household_expenses_to_2BoD_application_fo -->|unnamed| LOR_9118_MFI_New_fields_addition
    Monthly_family_expenses -->|{ADD LOR-9147/}| Monthly_family_expenses
    Monthly_family_expenses -->|unnamed| Equal_or_greater_then_zero
```
