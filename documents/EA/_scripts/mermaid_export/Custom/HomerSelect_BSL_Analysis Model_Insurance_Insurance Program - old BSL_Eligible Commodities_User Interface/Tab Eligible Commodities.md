# Tab Eligible Commodities

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Eligible Commodities/User Interface
- **Diagram ID**: 125437
- **Elements**: 8
- **Connectors**: 5

```mermaid
graph TD
    Eligible_Commodities_Set_additional_data["Eligible Commodities - Set additional data"]
    n_08_503_Update_eligible_commodity_data["08.503 Update eligible commodity data"]
    User_Interface_Eligible_commodities_Assign["User Interface : Eligible commodities - Assign"]
    n_08_502_Assign_Eligible_Commodities_for_Insurance_Program["08.502 Assign Eligible Commodities for Insurance Program"]
    n_08_560_Show_Insurance_Program_version_detail["08.560 Show Insurance Program version detail"]
    Assign_eligible_commodities["Assign eligible commodities"]
    Eligible_commodities["Eligible commodities"]
    Eligible_commodities["Eligible commodities"]
    Eligible_commodities -->|unnamed| n_08_560_Show_Insurance_Program_version_detail
    Assign_eligible_commodities -->|unnamed| n_08_502_Assign_Eligible_Commodities_for_Insurance_Program
    Assign_eligible_commodities -->|unnamed| User_Interface_Eligible_commodities_Assign
    Eligible_Commodities_Set_additional_data -->|unnamed| n_08_503_Update_eligible_commodity_data
    Eligible_commodities -->|unnamed| n_08_503_Update_eligible_commodity_data
```
