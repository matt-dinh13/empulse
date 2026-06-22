# CLM-819 (CBL-860) Unification reimbursement from credit cards

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-819 (CBL-860) Unification reimbursement from credit cards
- **Diagram ID**: 103392
- **Elements**: 7
- **Connectors**: 6

```mermaid
graph TD
    MOD_01_187_Sign_contract["{MOD}01.187 Sign contract"]
    n_01_184_Process_ContractSignTransactionsSE_event["01.184 Process ContractSignTransactionsSE event"]
    MOD_Sign_contract_finalization["{MOD}Sign contract finalization"]
    Account_Management_Structures_Account_management_structures_["Account Management - Structures : Account management structures - Initial Transaction"]
    Account_Management_AccountManagementWS_Contract_signing["Account Management : AccountManagementWS - Contract signing"]
    Requirement_2_Modification_transaction_authorization_confirm["Requirement #2 Modification transaction authorization/confirmation calling for REL contracts"]
    Requirement_1_Change_in_payment_generation_for_REL_CEL_on_th["Requirement #1 Change in payment generation for REL/CEL on the contract sign"]
    Account_Management_AccountManagementWS_Contract_signing -->|unnamed| Requirement_2_Modification_transaction_authorization_confirm
    Account_Management_Structures_Account_management_structures_ -->|unnamed| Requirement_2_Modification_transaction_authorization_confirm
    MOD_01_187_Sign_contract -->|unnamed| n_01_184_Process_ContractSignTransactionsSE_event
    MOD_01_187_Sign_contract -->|unnamed| Requirement_2_Modification_transaction_authorization_confirm
    MOD_01_187_Sign_contract -->|unnamed| MOD_Sign_contract_finalization
    n_01_184_Process_ContractSignTransactionsSE_event -->|unnamed| Requirement_2_Modification_transaction_authorization_confirm
```
