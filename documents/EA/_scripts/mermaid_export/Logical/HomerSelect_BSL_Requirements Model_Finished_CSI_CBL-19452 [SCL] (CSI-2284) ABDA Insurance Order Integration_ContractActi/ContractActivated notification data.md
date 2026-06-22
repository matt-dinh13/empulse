# ContractActivated notification data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/ContractActivated notification data
- **Diagram ID**: 150492
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ProductPayload["ProductPayload"]
    class StatusTransitionPayload["StatusTransitionPayload"]
    class DocumentPayload["DocumentPayload"]
    class ContractActivatedPayload["ContractActivatedPayload"]
    class Receive_coma_contract_event_v1_notification["Receive coma.contract.event.v1 notification"]
    Receive_coma_contract_event_v1_notification <|.. ContractActivatedPayload : unnamed
    ContractActivatedPayload --> DocumentPayload : unnamed
    ContractActivatedPayload --> StatusTransitionPayload : unnamed
    ContractActivatedPayload --> ProductPayload : unnamed
```
