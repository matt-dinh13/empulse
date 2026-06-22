# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Access Rights
- **Diagram ID**: 120397
- **Elements**: 9
- **Connectors**: 6

```mermaid
graph TD
    ADD_08_064_Create_request_for_change_due_date_common["{ADD}08.064 Create request for change due date common"]
    MOD_08_064_Create_request_for_change_due_date_common["{MOD}08.064 Create request for change due date common"]
    n_08_063_Process_request_for_change_due_date["08.063 Process request for change due date"]
    n_08_063_Process_request_for_change_due_date["08.063 Process request for change due date"]
    n_08_062_Create_request_for_change_due_date_change_fee["08.062 Create request for change due date - change fee"]
    n_08_061_Show_parameters_for_change_due_date["08.061 Show parameters for change due date"]
    MOD_08_062_Create_request_for_change_due_date["{MOD}08.062 Create request for change due date"]
    n_08_061_Show_parameters_for_change_due_date["08.061 Show parameters for change due date"]
    n_08_062_Create_request_for_change_due_date["08.062 Create request for change due date"]
    n_08_063_Process_request_for_change_due_date -->|unnamed| n_08_063_Process_request_for_change_due_date
    n_08_061_Show_parameters_for_change_due_date -->|unnamed| n_08_061_Show_parameters_for_change_due_date
    MOD_08_064_Create_request_for_change_due_date_common -->|unnamed| ADD_08_064_Create_request_for_change_due_date_common
    MOD_08_062_Create_request_for_change_due_date -->|unnamed| n_08_062_Create_request_for_change_due_date_change_fee
    MOD_08_062_Create_request_for_change_due_date -->|unnamed| n_08_062_Create_request_for_change_due_date
    MOD_08_062_Create_request_for_change_due_date -->|unnamed| MOD_08_064_Create_request_for_change_due_date_common
```
