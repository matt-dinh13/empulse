# Access rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Access rights
- **Diagram ID**: 151601
- **Elements**: 13
- **Connectors**: 8

```mermaid
graph TD
    n_01_420_Create_DDM_all_contract_statuses["01.420 Create DDM (all contract statuses)"]
    n_01_427_Change_DDM_ECS_provider["01.427 Change DDM ECS provider"]
    n_01_425_Update_DDM_all_contract_statuses["01.425 Update DDM (all contract statuses)"]
    n_01_426_Cancel_DDM_all_contract_statuses["01.426 Cancel DDM (all contract statuses)"]
    n_01_430_Receive_DDM["01.430 Receive DDM"]
    n_01_425_Update_DDM["01.425 Update DDM"]
    n_01_420_Create_DDM["01.420 Create DDM"]
    MOD_01_430_Receive_DDM["{MOD}01.430 Receive DDM"]
    MOD_01_425_Update_DDM["{MOD}01.425 Update DDM"]
    n_01_420_Create_DDM_on_the_contract["01.420 Create DDM on the contract"]
    n_01_426_Cancel_DDM["01.426 Cancel DDM"]
    n_01_426_Cancel_DDM["01.426 Cancel DDM"]
    MOD_01_427_Change_DDM_ECS_provider["{MOD}01.427 Change DDM ECS provider"]
    MOD_01_427_Change_DDM_ECS_provider -->|unnamed| n_01_427_Change_DDM_ECS_provider
    MOD_01_430_Receive_DDM -->|unnamed| n_01_430_Receive_DDM
    n_01_426_Cancel_DDM -->|unnamed| n_01_426_Cancel_DDM_all_contract_statuses
    n_01_426_Cancel_DDM -->|unnamed| n_01_426_Cancel_DDM
    n_01_420_Create_DDM_on_the_contract -->|unnamed| n_01_420_Create_DDM
    n_01_420_Create_DDM_on_the_contract -->|unnamed| n_01_420_Create_DDM_all_contract_statuses
    MOD_01_425_Update_DDM -->|unnamed| n_01_425_Update_DDM_all_contract_statuses
    MOD_01_425_Update_DDM -->|unnamed| n_01_425_Update_DDM
```
