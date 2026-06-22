# CLM-6205 Condition accepted for related SAI contract

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23420 (CLM-5952) [VAS] Standalone PPI as a second loan_Prior 2/CLM-6205 Condition accepted for related SAI update
- **Diagram ID**: 157602
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    MOD_01_187_Sign_contract["{MOD}01.187 Sign contract"]
    ADD_Set_condition_accepted_for_SAI_contract_on_related_Cash_["{ADD}Set condition accepted for SAI contract on related Cash Loan disbursement"]
    MOD_Process_CashDisbursementConfirmedSE["{MOD}Process CashDisbursementConfirmedSE"]
    Set_contract_Condition_Accepted["Set contract Condition Accepted"]
    MOD_Sign_contract_finalization["{MOD}Sign contract finalization"]
    MOD_01_187_Sign_contract -->|unnamed| MOD_Sign_contract_finalization
    MOD_Sign_contract_finalization -->|unnamed| Set_contract_Condition_Accepted
    ADD_Set_condition_accepted_for_SAI_contract_on_related_Cash_ -->|unnamed| Set_contract_Condition_Accepted
```
