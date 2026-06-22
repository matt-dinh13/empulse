# Business Rules

```mermaid
graph TD
    ADD_Check_ContractCHDDRequest_input_parameters["{ADD}Check ContractCHDDRequest input parameters"]
    Check_changed_due_date_is_not_too_close_to_last_due_date["Check changed due date is not too close to last due date"]
    Prepare_virtual_IS_to_change_due_date["Prepare virtual IS to change due date"]
    Prepare_change_due_date_simulation["Prepare change due date simulation"]
    Prepare_change_due_date_simulation -->|unnamed| Check_changed_due_date_is_not_too_close_to_last_due_date
    Prepare_change_due_date_simulation -->|unnamed| Prepare_virtual_IS_to_change_due_date
```
