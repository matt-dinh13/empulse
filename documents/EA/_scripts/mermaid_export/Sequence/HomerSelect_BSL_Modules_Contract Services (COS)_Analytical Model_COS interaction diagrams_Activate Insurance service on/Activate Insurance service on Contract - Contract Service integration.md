# Activate Insurance service on Contract - Contract Service integration

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/COS interaction diagrams/Activate Insurance service on Contract - Contract Service integration
- **Diagram ID**: 158330
- **Elements**: 18
- **Connectors**: 27

```mermaid
sequenceDiagram
    participant unnamed as unnamed
    participant VAS_Deals as VAS Deals
    participant unnamed as unnamed
    participant ContractActiveEvent as ContractActiveEvent
    participant ContractSignEvent as ContractSignEvent
    participant Actor1 as Actor1
    participant Contract_Service as Contract Service
    participant RMQ_AM as RMQ.AM
    participant FirstTransactionEvent as FirstTransactionEvent
    participant RMQ_JMS_ContractNotifications as RMQ/JMS. ContractNotifications
    participant Account_Management as Account Management
    participant RMQ_AM as RMQ.AM
    participant RMQ_CSI_contractservice as RMQ.CSI contractservice
    participant EoM_billing as EoM billing
    participant PCG as PCG
    unnamed->>VAS_Deals: NoteLink
    unnamed->>ContractActiveEvent: NoteLink
    unnamed->>ContractSignEvent: NoteLink
    Actor1->>+Contract_Service: ActivateInsuranceOnContract
    Contract_Service->>+Contract_Service: GetInsuranceServiceList
    Contract_Service->>+Contract_Service: ExecuteLSROperationStatus
    RMQ_AM->>+Contract_Service: ProcessFirstTransactionNotification
    Contract_Service->>+Contract_Service: CreateLSROperationStatus
    FirstTransactionEvent->>+RMQ_AM: Sequence
    ContractActiveEvent->>+RMQ_JMS_ContractNotifications: Sequence
    RMQ_JMS_ContractNotifications->>+Contract_Service: Sequence
    Account_Management->>+RMQ_AM: Sequence
    VAS_Deals->>+VAS_Deals: SetDealStatus
    RMQ_CSI_contractservice->>+Account_Management: Sequence
    Contract_Service->>+RMQ_CSI_contractservice: ContractInsuranceServiceActivated
    RMQ_AM->>+Contract_Service: AccountBalanceChange
    EoM_billing->>+RMQ_AM: Sequence
    RMQ_JMS_ContractNotifications->>+Contract_Service: Sequence
    Contract_Service->>+Contract_Service: ValidationsRelatedToContract
    RMQ_AM->>+Contract_Service: processServiceOperationNotification 
    Contract_Service->>+VAS_Deals: ConfirmDealAction
    ContractSignEvent->>+RMQ_JMS_ContractNotifications: Sequence
    Contract_Service->>+PCG: GetServiceSetting
    Contract_Service->>+VAS_Deals: ActivateDeal
    Contract_Service->>+Contract_Service: EvaluateResponse
    Contract_Service->>+Contract_Service: EvaluateInsuranceSetting
    Account_Management->>+Account_Management: SwitchOnService
```
