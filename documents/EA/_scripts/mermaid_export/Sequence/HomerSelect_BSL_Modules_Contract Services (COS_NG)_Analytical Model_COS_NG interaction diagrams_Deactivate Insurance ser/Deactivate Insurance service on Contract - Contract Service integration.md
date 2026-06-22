# Deactivate Insurance service on Contract - Contract Service integration

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/COS_NG interaction diagrams/Deactivate Insurance service on Contract - Contract Service integration
- **Diagram ID**: 160172
- **Elements**: 10
- **Connectors**: 16

```mermaid
sequenceDiagram
    participant Actor1 as Actor1
    participant Contract_Service as Contract Service
    participant RMQ_AM as RMQ.AM
    participant VAS_Deals as VAS Deals
    participant RMQ_AM_account_closure as RMQ.AM account.closure
    participant Account_Management as Account Management
    participant Account_Paidoff_WrittenOff_event as Account Paidoff/WrittenOff event
    participant PCG as PCG
    participant RMQ_CSI_contractservice as RMQ.CSI contractservice
    Actor1->>+Contract_Service: DeactivateContractInsuranceService
    Contract_Service->>+Contract_Service: EvaluateInsurance ServiceDeactivation
    RMQ_AM->>+Contract_Service: processServiceOperationNotification
    Contract_Service->>+Contract_Service: CreateLSROperationStatus
    Contract_Service->>+VAS_Deals: ConfirmDealAction
    Contract_Service->>+Contract_Service: ExecuteLSROperationStatus
    RMQ_AM_account_closure->>+Contract_Service: AccountClosure
    Account_Management->>+RMQ_AM: Sequence
    Account_Paidoff_WrittenOff_event->>+RMQ_AM_account_closure: Sequence
    Contract_Service->>+PCG: GetServiceDefinition
    Contract_Service->>+RMQ_CSI_contractservice: ContractInsuranceServiceDeactivated
    Contract_Service->>+VAS_Deals: DeactivateVasDeal
    Account_Management->>+Account_Management: SwitchOffService
    RMQ_CSI_contractservice->>+Account_Management: Sequence
    Contract_Service->>+Contract_Service: ProcessAccountClosureNotif
    Contract_Service->>+Contract_Service: EvaluateServiceDefinition
```
