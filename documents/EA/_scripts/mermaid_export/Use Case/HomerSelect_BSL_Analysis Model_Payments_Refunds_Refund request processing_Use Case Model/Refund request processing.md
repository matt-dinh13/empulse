# Refund request processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund request processing/Use Case Model
- **Diagram ID**: 164247
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    Refunds_Refunds["Refunds : Refunds"]
    Logical_Data_Model_Refunds_domain_model["Logical Data Model : Refunds domain model"]
    Local_System[/"Local System"/]
    Process_Refund_Request_with_external_identifiers(("Process Refund Request with external identifiers"))
    Local_System --> Process_Refund_Request_with_external_identifiers
    Process_Refund_Request_with_external_identifiers -->|unnamed| Logical_Data_Model_Refunds_domain_model
    Process_Refund_Request_with_external_identifiers -->|unnamed| Refunds_Refunds
```
