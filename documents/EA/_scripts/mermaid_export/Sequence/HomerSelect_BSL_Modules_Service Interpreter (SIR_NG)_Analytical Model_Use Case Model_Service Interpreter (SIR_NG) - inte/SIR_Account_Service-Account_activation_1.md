# SIR_Account_Service-Account_activation

```mermaid
sequenceDiagram
    participant unnamed as unnamed
    participant SIR as SIR
    participant unnamed as unnamed
    participant PRC as PRC
    participant COS as COS
    participant AccountManagement as AccountManagement
    participant RQM_csi_am_processservice_operationnotification as RQM.csi.am. 
processservice
operationnotification
    participant External_System as External System
    participant ORP as ORP
    participant RMQ_am_event_notification as RMQ
am.event.notification
    participant SUP as SUP
    participant COMA as COMA
    participant RMQ_sup_contract_supplement as RMQ
sup.contract.supplement
    participant RMQ_cos_contractservice as RMQ
cos.contractservice
    unnamed->>SIR: NoteLink
    unnamed->>SIR: NoteLink
    SIR->>PRC: GET prc.sc-services
    SIR->>SIR: Check ContractSupplement type = ACCOUNT_CREATION
    SIR->>PRC: GET prc.sc-services
    COS->>COS: Activate Service
    AccountManagement->>RQM_csi_am_processservice_operationnotification: Sequence
    SIR->>COS: getContractService
    External_System->>ORP: Sign
    AccountManagement->>AccountManagement: Switch-on Service
    RMQ_am_event_notification->>SIR: EventInfo
    SIR->>COS: ContractService/activate
    SIR->>SIR: Check MTCACC service operation status
    SIR->>SIR: Get MTCACC service
    COS->>COS: Sequence
    SIR->>SIR: Get ContractServices to Activation
    COS->>COS: Confirm
    SIR->>COS: getContractService
    RQM_csi_am_processservice_operationnotification->>COS: ProcessServiceOperationNotification 
    ORP->>ORP: Request Validation
    SIR->>COS: ContractService/activate
    ORP->>SUP: ContractSupplement/acceptation
    SUP->>SUP: Process Acceptation
    SIR->>COMA: coma.contract/sign
    SIR->>SUP: GetContractSupplement
    COMA->>COMA: Evaluate Contract Activation
    AccountManagement->>AccountManagement: ActivateAccount
    RMQ_am_event_notification->>COMA: Sequence
    RMQ_sup_contract_supplement->>SIR: ContractSupplementSigned
    COS->>RMQ_cos_contractservice: ContractServiceActivated
    SUP->>RMQ_sup_contract_supplement: ContractSupplementSigned
    RMQ_cos_contractservice->>AccountManagement: ContractServiceActivated
    SIR->>SIR: Evaluate notification
    SIR->>SIR: Sequence
    AccountManagement->>RMQ_am_event_notification: EventInfo
    COS->>RMQ_cos_contractservice: ContractServiceActivated
    RMQ_cos_contractservice->>AccountManagement: Sequence
```
