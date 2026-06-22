# Access Rights

```mermaid
graph TD
    MOD_Get_external_communication_detail["{MOD}Get external communication detail"]
    Get_communication_detail["Get communication detail"]
    MOD_Search_communication["{MOD}Search communication"]
    ADD_Search_communication_data["{ADD}Search communication data"]
    ADD_Get_communication_sensitive_data["{ADD}Get communication sensitive data "]
    MOD_Get_external_communication_detail -->|unnamed| ADD_Get_communication_sensitive_data
    Get_communication_detail -->|unnamed| ADD_Get_communication_sensitive_data
    MOD_Search_communication -->|unnamed| ADD_Get_communication_sensitive_data
    MOD_Search_communication -->|unnamed| ADD_Search_communication_data
```
