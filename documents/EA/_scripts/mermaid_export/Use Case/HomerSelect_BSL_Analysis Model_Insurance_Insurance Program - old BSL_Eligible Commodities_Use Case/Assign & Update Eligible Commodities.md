# Assign & Update Eligible Commodities

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Eligible Commodities/Use Case
- **Diagram ID**: 125300
- **Elements**: 7
- **Connectors**: 8

```mermaid
graph LR
    User_Interface_Eligible_Commodities_Set_additional_data["User Interface : Eligible Commodities - Set additional data"]
    n_08_503_Update_eligible_commodity_data(("08.503 Update eligible commodity data"))
    User_Interface_Eligible_commodities_Assign["User Interface : Eligible commodities - Assign"]
    User_Interface_Tab_Eligible_Commodities["User Interface : Tab Eligible Commodities"]
    n_08_560_Show_Insurance_Program_version_detail(("08.560 Show Insurance Program version detail"))
    n_08_502_Assign_Eligible_Commodities_for_Insurance_Program(("08.502 Assign Eligible Commodities for Insurance Program"))
    User[/"User"/]
    n_08_502_Assign_Eligible_Commodities_for_Insurance_Program -->|unnamed| User_Interface_Tab_Eligible_Commodities
    n_08_502_Assign_Eligible_Commodities_for_Insurance_Program -->|unnamed| User_Interface_Eligible_commodities_Assign
    User_Interface_Tab_Eligible_Commodities -->|unnamed| n_08_503_Update_eligible_commodity_data
    User_Interface_Eligible_Commodities_Set_additional_data -->|unnamed| n_08_503_Update_eligible_commodity_data
    User --- n_08_502_Assign_Eligible_Commodities_for_Insurance_Program
    User --- n_08_560_Show_Insurance_Program_version_detail
    User --> n_08_503_Update_eligible_commodity_data
    n_08_560_Show_Insurance_Program_version_detail -->|unnamed| User_Interface_Tab_Eligible_Commodities
```
