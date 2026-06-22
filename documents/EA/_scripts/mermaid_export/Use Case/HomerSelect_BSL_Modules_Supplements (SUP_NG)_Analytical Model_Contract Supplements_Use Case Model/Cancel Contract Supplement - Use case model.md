# Cancel Contract Supplement - Use case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model
- **Diagram ID**: 163944
- **Elements**: 10
- **Connectors**: 8

```mermaid
graph LR
    Cancel_authorized_transactions_in_Transaction_Supplement_SUP["Cancel authorized transactions in Transaction Supplement (SUP)"]
    System_Event[/"System Event"/]
    ADD_13_057_Process_Contract_Supplement_Cancelled_event(("{ADD}13.057 Process Contract Supplement Cancelled event"))
    Automatic_contract_supplement_cancellation_job["Automatic contract supplement cancellation job"]
    Cancel_Contract_Supplement_Cancel_Contract_Supplement_method["Cancel Contract Supplement : Cancel Contract Supplement method"]
    Change_status_of_Contract_Supplement_SUP["Change status of Contract Supplement (SUP)"]
    Time[/"Time"/]
    n_13_055_Cancel_Contract_Supplement_automatically(("13.055 Cancel Contract Supplement automatically"))
    External_system[/"External system"/]
    n_13_050_Cancel_Contract_Supplement(("13.050 Cancel Contract Supplement"))
    Cancel_Contract_Supplement_Cancel_Contract_Supplement_method -->|unnamed| n_13_050_Cancel_Contract_Supplement
    External_system --- n_13_050_Cancel_Contract_Supplement
    Time --- n_13_055_Cancel_Contract_Supplement_automatically
    n_13_055_Cancel_Contract_Supplement_automatically -->|unnamed| Change_status_of_Contract_Supplement_SUP
    n_13_050_Cancel_Contract_Supplement -->|unnamed| Change_status_of_Contract_Supplement_SUP
    n_13_055_Cancel_Contract_Supplement_automatically -->|unnamed| Automatic_contract_supplement_cancellation_job
    System_Event --- ADD_13_057_Process_Contract_Supplement_Cancelled_event
    ADD_13_057_Process_Contract_Supplement_Cancelled_event -->|unnamed| Cancel_authorized_transactions_in_Transaction_Supplement_SUP
```
