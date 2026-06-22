# Loan service request management

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model
- **Diagram ID**: 164586
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph LR
    n_08_351_Rollback_loan_service_request(("08.351 Rollback loan service request"))
    MOD_08_352_Process_LoanServiceRequestRollbackSE_event(("{MOD}08.352 Process LoanServiceRequestRollbackSE event"))
    n_08_359_Print_service_request_document(("08.359 Print service request document"))
    User[/"User"/]
    n_08_357_Cancel_request_for_loan_service(("08.357 Cancel request for loan service"))
    User --> n_08_359_Print_service_request_document
    User --> n_08_357_Cancel_request_for_loan_service
```
