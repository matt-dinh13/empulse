# CBL-11279 (CLM-3521) Updating External Bank information after contract signing in Consolidation tab

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11279 (CLM-3521) Updating External Bank information after contract signing in Consolidation tab
- **Diagram ID**: 144830
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    ADD_Check_contract_disbursement["{ADD}Check contract disbursement"]
    MOD_01_366_Update_bank_account_for_refinanced_contract["{MOD}01.366 Update bank account for refinanced contract"]
    n_01_365_Add_bank_account_for_refinanced_contract["01.365 Add bank account for refinanced contract"]
    OutgoingPaymentsWS_OutgoingPaymentsWS["OutgoingPaymentsWS : OutgoingPaymentsWS"]
    REQ_1_Allow_pdating_bank_account_for_consolidated_contracts_["REQ #1 - Allow pdating bank account for consolidated contracts in status signed"]
    n_01_365_Add_bank_account_for_refinanced_contract -->|unnamed| ADD_Check_contract_disbursement
    MOD_01_366_Update_bank_account_for_refinanced_contract -->|unnamed| ADD_Check_contract_disbursement
```
