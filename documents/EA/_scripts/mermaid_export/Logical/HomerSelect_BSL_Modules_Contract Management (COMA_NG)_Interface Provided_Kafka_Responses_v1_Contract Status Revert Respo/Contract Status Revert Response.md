# Contract Status Revert Response

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Responses/v1/Contract Status Revert Response
- **Diagram ID**: 160220
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class diagram_Contract_Status_Revert_Request["$diagram:Contract Status Revert Request"]
    class Response_Result_Code["Response Result Code"]
    class DEL_Contract_Status_Revert_Response["{DEL}Contract Status Revert Response"]
    class DEL_Contract_Status_Revert_Request["{DEL}Contract Status Revert Request"]
    DEL_Contract_Status_Revert_Response ..> DEL_Contract_Status_Revert_Request : unnamed
    DEL_Contract_Status_Revert_Response ..> Response_Result_Code : unnamed
```
