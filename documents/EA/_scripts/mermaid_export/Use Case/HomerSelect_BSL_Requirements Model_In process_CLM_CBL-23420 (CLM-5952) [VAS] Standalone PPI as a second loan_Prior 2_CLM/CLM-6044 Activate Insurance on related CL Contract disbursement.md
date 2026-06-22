# CLM-6044 Activate Insurance on related CL Contract disbursement

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23420 (CLM-5952) [VAS] Standalone PPI as a second loan_Prior 2/CLM-6044 Activate Insurance on related CL Contract disbursement
- **Diagram ID**: 156877
- **Elements**: 10
- **Connectors**: 8

```mermaid
graph LR
    MOD_05_091_Generate_outgoing_payment_insurance(("{MOD}05.091 Generate outgoing payment - insurance"))
    n_11_040_Activate_insurance_contract(("11.040 Activate insurance contract"))
    Algorithm_Find_tariff_items_by_usage["Algorithm: Find tariff items by usage"]
    MOD_Algorithm_Calculate_tariff_item_amount["{MOD}Algorithm: Calculate tariff item amount"]
    Create_first_Insurance_Period_upon_related_Contract_disburse["Create first Insurance Period upon related Contract disbursement"]
    Determine_first_insurance_period["Determine first insurance period"]
    System_event[/"System event"/]
    Get_Service_definition_from_Services["Get Service definition from Services"]
    MOD_11_775_Activate_Standalone_Insurance_on_Cash_Loan_disbur(("{MOD}11.775 Activate Standalone Insurance on Cash Loan disbursement"))
    MOD_Process_CashDisbursementConfirmedSE(("{MOD}Process CashDisbursementConfirmedSE"))
    MOD_11_775_Activate_Standalone_Insurance_on_Cash_Loan_disbur -.->|include| n_11_040_Activate_insurance_contract
    MOD_11_775_Activate_Standalone_Insurance_on_Cash_Loan_disbur -->|unnamed| Get_Service_definition_from_Services
    MOD_11_775_Activate_Standalone_Insurance_on_Cash_Loan_disbur -->|unnamed| Create_first_Insurance_Period_upon_related_Contract_disburse
    MOD_11_775_Activate_Standalone_Insurance_on_Cash_Loan_disbur -.->|include| MOD_05_091_Generate_outgoing_payment_insurance
    System_event --- MOD_Process_CashDisbursementConfirmedSE
    Create_first_Insurance_Period_upon_related_Contract_disburse -->|unnamed| Algorithm_Find_tariff_items_by_usage
    Create_first_Insurance_Period_upon_related_Contract_disburse -->|unnamed| Determine_first_insurance_period
    Create_first_Insurance_Period_upon_related_Contract_disburse -->|unnamed| MOD_Algorithm_Calculate_tariff_item_amount
```
