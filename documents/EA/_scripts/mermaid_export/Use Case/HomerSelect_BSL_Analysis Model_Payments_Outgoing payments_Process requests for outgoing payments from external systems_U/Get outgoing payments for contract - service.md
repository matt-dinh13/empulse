# Get outgoing payments for contract - service

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Use case Model
- **Diagram ID**: 142890
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    OutgoingPaymentsWS_OutgoingPaymentsWS["OutgoingPaymentsWS : OutgoingPaymentsWS"]
    External_system[/"External system"/]
    n_05_702_Get_outgoing_payments_for_contract_service(("05.702 Get outgoing payments for contract - service"))
    n_05_702_Get_outgoing_payments_for_contract_service -->|unnamed| OutgoingPaymentsWS_OutgoingPaymentsWS
    External_system --> n_05_702_Get_outgoing_payments_for_contract_service
```
