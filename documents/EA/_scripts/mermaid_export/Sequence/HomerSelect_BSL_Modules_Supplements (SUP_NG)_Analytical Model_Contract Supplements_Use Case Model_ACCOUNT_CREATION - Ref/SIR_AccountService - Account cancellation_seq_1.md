# SIR_AccountService - Account cancellation_seq

```mermaid
sequenceDiagram
    participant ORP as ORP
    participant SUP as SUP
    participant COMA as COMA
    participant RMQ_am_event_notification as RMQ
am.event.notification
    participant External_System as External System
    participant RQM_csi_am_processservice_operationnotification as RQM.csi.am. 
processservice
operationnotification
    participant COS as COS
    participant RMQ_cos_contractservice as RMQ
cos.contractservice
    participant RMQ_sup_contract_supplement as RMQ
sup.contract.supplement
    participant AccountManagement as AccountManagement
    ORP->>SUP: ContractSupplement/acceptation
    COMA->>COMA: Cancel Contract
    RMQ_am_event_notification->>ORP: EventInfo
    External_System->>ORP: Refuse sign
    RQM_csi_am_processservice_operationnotification->>COS: ProcessServiceOperationNotification 
    COMA->>COMA: Evaluate Account to cancel
    SUP->>COS: ContractService/cancel
    COS->>RMQ_cos_contractservice: ContractServiceCancelled
    SUP->>RMQ_sup_contract_supplement: ContractSupplementCancelled
    ORP->>External_System: Sequence
    RMQ_am_event_notification->>COMA: EventInfo
    COS->>COS: Get Contract/Account services
    SUP->>SUP: Cancel ContractSupplement
    RMQ_sup_contract_supplement->>ORP: ContractSupplementCancelled
    COS->>COS: Confirm
    SUP->>SUP: Process rejection
    AccountManagement->>RMQ_am_event_notification: EventInfo
    COS->>SUP: Sequence
    RMQ_cos_contractservice->>AccountManagement: Sequence
    AccountManagement->>AccountManagement: Cancel Service
    SUP->>ORP: Sequence
    AccountManagement->>AccountManagement: Cancel Account
    AccountManagement->>RQM_csi_am_processservice_operationnotification: Sequence
```
