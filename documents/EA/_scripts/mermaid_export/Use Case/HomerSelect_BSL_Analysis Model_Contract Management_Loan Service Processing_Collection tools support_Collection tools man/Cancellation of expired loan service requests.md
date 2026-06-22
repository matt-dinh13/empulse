# Cancellation of expired loan service requests

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools management/Use case model
- **Diagram ID**: 156556
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph LR
    n_11_110_Cancel_insurance_contract(("11.110 Cancel insurance contract"))
    Set_Contract_Condition_Rejected["Set Contract Condition Rejected"]
    Cancel_Loan_Service_Request_rule["Cancel Loan Service Request rule"]
    Cancel_expired_loan_service_requests_job["Cancel expired loan service requests - job"]
    Time[/"Time"/]
    n_08_925_Cancel_expired_loan_service_requests(("08.925 Cancel expired loan service requests"))
    n_08_925_Cancel_expired_loan_service_requests -->|unnamed| Cancel_expired_loan_service_requests_job
    n_08_925_Cancel_expired_loan_service_requests -->|unnamed| Cancel_Loan_Service_Request_rule
    n_08_925_Cancel_expired_loan_service_requests -->|unnamed| Set_Contract_Condition_Rejected
    n_08_925_Cancel_expired_loan_service_requests -.->|include| n_11_110_Cancel_insurance_contract
    Time --> n_08_925_Cancel_expired_loan_service_requests
```
