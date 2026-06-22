# SIR_AccountService - Account cancellation_seq

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model/Service Interpreter (SIR_NG) - interaction diagrams/SIR_AccountService - Account cancellation
- **Diagram ID**: 163894
- **Elements**: 16
- **Connectors**: 23

```mermaid
sequenceDiagram
    participant COMA as COMA
    participant COS as COS
    participant SIR as SIR
    participant ORP as ORP
    participant SUP as SUP
    participant PRC as PRC
    participant RMQ_cos_contractservice as RMQ
cos.contractservice
    participant AccountManagement as AccountManagement
    participant RMQ_am_event_notification as RMQ
am.event.notification
    participant RMQ_sup_contract_supplement as RMQ
sup.contract.supplement
    participant RQM_csi_am_processservice_operationnotification as RQM.csi.am. 
processservice
operationnotification
    participant External_System as External System
    COMA->>+COMA: Cancel Contract
    COS->>+COS: Confirm
    SIR->>+SIR: Evaluate notification
    SIR->>+COS: ContractService/cancel
    ORP->>+SUP: ContractSupplement/acceptation
    COMA->>+COMA: Evaluate Account to cancel
    SIR->>+SIR: Get MTCACC service
    SIR->>+PRC: GET prc.sc-services
    RMQ_cos_contractservice->>+AccountManagement: Sequence
    SIR->>+SIR: Event evaluation
    SIR->>+COMA: Sequence
    COS->>+RMQ_cos_contractservice: ContractServiceCancelled
    COMA->>+COMA: Cancel Contract
    RMQ_am_event_notification->>+SIR: EventInfo
    RMQ_sup_contract_supplement->>+SIR: ContractSupplementCancelled
    SUP->>+RMQ_sup_contract_supplement: ContractSupplementCancelled
    AccountManagement->>+RQM_csi_am_processservice_operationnotification: Sequence
    SIR->>+COS: getContractService
    External_System->>+ORP: Refuse sign
    RQM_csi_am_processservice_operationnotification->>+COS: ProcessServiceOperationNotification 
    RMQ_am_event_notification->>+COMA: EventInfo
    AccountManagement->>+RMQ_am_event_notification: EventInfo
    SUP->>+SUP: Process rejection
```
