# IP - Eligible Commodities - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Use Case Model/Eligible Commodities
- **Diagram ID**: 135235
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    Eligible_commodities_tab_Update_Eligible_commodity["Eligible commodities tab : Update Eligible commodity"]
    Eligible_commodities_tab_Assign_Eligible_commodities["Eligible commodities tab : Assign Eligible commodities"]
    User[/"User"/]
    n_08_503_Update_eligible_commodity_data(("08.503 Update eligible commodity data"))
    n_08_502_Assign_Eligible_Commodities_for_Insurance_Program(("08.502 Assign Eligible Commodities for Insurance Program"))
    Eligible_commodities_tab_Assign_Eligible_commodities -->|unnamed| n_08_502_Assign_Eligible_Commodities_for_Insurance_Program
    Eligible_commodities_tab_Update_Eligible_commodity -->|unnamed| n_08_503_Update_eligible_commodity_data
    User --> n_08_502_Assign_Eligible_Commodities_for_Insurance_Program
    User --> n_08_503_Update_eligible_commodity_data
```
