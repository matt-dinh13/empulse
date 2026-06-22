# Cancel contract supplement automatically

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/UseCase Model
- **Diagram ID**: 162792
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    Cancel_authorized_transactions_in_Transaction_Supplement["Cancel authorized transactions in Transaction Supplement"]
    Cancel_Loan_Service_Request_rule["Cancel Loan Service Request rule"]
    Automatic_contract_supplement_cancellation_job["Automatic contract supplement cancellation job"]
    Time[/"Time"/]
    n_13_361_Cancel_contract_supplement_automatically(("13.361 Cancel contract supplement automatically"))
    n_13_361_Cancel_contract_supplement_automatically -->|unnamed| Automatic_contract_supplement_cancellation_job
    n_13_361_Cancel_contract_supplement_automatically -->|unnamed| Cancel_Loan_Service_Request_rule
    n_13_361_Cancel_contract_supplement_automatically -->|unnamed| Cancel_authorized_transactions_in_Transaction_Supplement
    Time --> n_13_361_Cancel_contract_supplement_automatically
```
