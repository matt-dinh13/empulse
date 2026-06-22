# Debt calculator

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/UseCase Model
- **Diagram ID**: 164573
- **Elements**: 12
- **Connectors**: 12

```mermaid
graph LR
    Calculation_of_future_debt_for_REL_contract["Calculation of future debt for REL contract"]
    n_01_478_Show_supposed_debt_for_CEL_contract(("01.478 Show supposed debt for CEL contract"))
    CaBus_AM[/"CaBus-AM"/]
    MOD_Algorithm_Calculate_tariff_item_amount["{MOD}Algorithm: Calculate tariff item amount"]
    Collection_system[/"Collection system"/]
    n_01_479_Show_supposed_debt_for_REL_contract(("01.479 Show supposed debt for REL contract"))
    Algorithm_Find_tariff_by_Current_Tariff_Use_flag["Algorithm: Find tariff by Current Tariff Use flag"]
    Contract_Fees_Service_Contract_Fees_Service["Contract Fees Service : Contract Fees Service"]
    Is_Flag_on_Tariff_Item_Type["Is Flag on Tariff Item Type"]
    Calculate_Tariff_Item_amount_for_period_from_debt["Calculate Tariff Item amount for period from debt"]
    User[/"User"/]
    Debt_calculator_Debt_calculator["Debt calculator : Debt calculator"]
    Collection_system --> n_01_478_Show_supposed_debt_for_CEL_contract
    User --> n_01_478_Show_supposed_debt_for_CEL_contract
    Algorithm_Find_tariff_by_Current_Tariff_Use_flag -->|unnamed| Is_Flag_on_Tariff_Item_Type
    n_01_478_Show_supposed_debt_for_CEL_contract -->|unnamed| Algorithm_Find_tariff_by_Current_Tariff_Use_flag
    n_01_478_Show_supposed_debt_for_CEL_contract -->|unnamed| Calculate_Tariff_Item_amount_for_period_from_debt
    n_01_478_Show_supposed_debt_for_CEL_contract -->|unnamed| MOD_Algorithm_Calculate_tariff_item_amount
    n_01_478_Show_supposed_debt_for_CEL_contract -->|unnamed| Contract_Fees_Service_Contract_Fees_Service
    User --- n_01_479_Show_supposed_debt_for_REL_contract
    n_01_479_Show_supposed_debt_for_REL_contract --- CaBus_AM
    n_01_479_Show_supposed_debt_for_REL_contract -->|unnamed| Debt_calculator_Debt_calculator
    n_01_478_Show_supposed_debt_for_CEL_contract -->|unnamed| Debt_calculator_Debt_calculator
    n_01_479_Show_supposed_debt_for_REL_contract -->|unnamed| Calculation_of_future_debt_for_REL_contract
```
