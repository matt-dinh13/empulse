# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Client Composite Communication/Access Rights
- **Diagram ID**: 156265
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    ADD_Get_communication_sensitive_data["{ADD}Get communication sensitive data "]
    ADD_Search_communication_data["{ADD}Search communication data"]
    MOD_Search_communication["{MOD}Search communication"]
    Get_communication_detail["Get communication detail"]
    MOD_Get_external_communication_detail["{MOD}Get external communication detail"]
    MOD_Get_external_communication_detail -->|unnamed| ADD_Get_communication_sensitive_data
    Get_communication_detail -->|unnamed| ADD_Get_communication_sensitive_data
    MOD_Search_communication -->|unnamed| ADD_Get_communication_sensitive_data
    MOD_Search_communication -->|unnamed| ADD_Search_communication_data
```
