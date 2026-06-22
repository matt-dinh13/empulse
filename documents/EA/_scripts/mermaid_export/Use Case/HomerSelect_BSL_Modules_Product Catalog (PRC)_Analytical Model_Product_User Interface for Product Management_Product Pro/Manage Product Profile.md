# Manage Product Profile

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/Use Case
- **Diagram ID**: 162477
- **Elements**: 11
- **Connectors**: 13

```mermaid
graph LR
    User[/"User"/]
    User_Interface_Search_for_Product_Profile["User Interface : Search for Product Profile"]
    User_Interface_Show_Product_Profile["User Interface : Show Product Profile"]
    User_Interface_Set_main_Product_Profile_properties["User Interface : Set main Product Profile properties"]
    DEL_Main_Product_Profile_properties_validation_rules["{DEL}}Main Product Profile properties - validation rules"]
    DEL_02_015_Set_main_Product_Profile_properties(("{DEL}02.015 Set main Product Profile properties"))
    DEL_02_014_Show_Product_Profile_detail(("{DEL}02.014 Show Product Profile detail"))
    DEL_02_013_Clone_Product_Profile(("{DEL}02.013 Clone Product Profile"))
    DEL_02_012_Create_Product_Profile(("{DEL}02.012 Create Product Profile"))
    DEL_Evaluate_Product_Profile_search_criteria["{DEL}Evaluate Product Profile search criteria"]
    DEL_02_011_Search_for_Product_Profiles(("{DEL}02.011 Search for Product Profiles"))
    DEL_02_011_Search_for_Product_Profiles -->|unnamed| DEL_Evaluate_Product_Profile_search_criteria
    DEL_02_015_Set_main_Product_Profile_properties -->|unnamed| DEL_Main_Product_Profile_properties_validation_rules
    DEL_02_013_Clone_Product_Profile -->|unnamed| DEL_Main_Product_Profile_properties_validation_rules
    DEL_02_015_Set_main_Product_Profile_properties -->|unnamed| User_Interface_Set_main_Product_Profile_properties
    DEL_02_013_Clone_Product_Profile -->|unnamed| User_Interface_Set_main_Product_Profile_properties
    DEL_02_012_Create_Product_Profile -->|unnamed| User_Interface_Set_main_Product_Profile_properties
    DEL_02_014_Show_Product_Profile_detail -->|unnamed| User_Interface_Show_Product_Profile
    DEL_02_011_Search_for_Product_Profiles -->|unnamed| User_Interface_Search_for_Product_Profile
    User --- DEL_02_011_Search_for_Product_Profiles
    User --- DEL_02_013_Clone_Product_Profile
    User --- DEL_02_015_Set_main_Product_Profile_properties
    User --- DEL_02_014_Show_Product_Profile_detail
    User --- DEL_02_012_Create_Product_Profile
```
