# Suspend and resume DDM

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Suspend and resume DDM/UseCase Model
- **Diagram ID**: 109675
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    Logical_Data_Model_Contract_DDM["Logical Data Model : Contract - DDM"]
    DirectDebitService_DirectDebitService["DirectDebitService : DirectDebitService"]
    n_01_581_Suspend_DDM_on_request(("01.581 - Suspend DDM on request"))
    n_01_582_Resume_DDM_on_request(("01.582 - Resume DDM on request"))
    BSL[/"BSL"/]
    n_01_582_Resume_DDM_on_request -->|unnamed| DirectDebitService_DirectDebitService
    n_01_581_Suspend_DDM_on_request -->|unnamed| DirectDebitService_DirectDebitService
    BSL --> n_01_581_Suspend_DDM_on_request
    BSL --> n_01_582_Resume_DDM_on_request
```
