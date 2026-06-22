# Deactivate Insurance service on Contract - Contract Service integration

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/COS interaction diagrams/Deactivate Insurance service on Contract - Contract Service integration
- **Diagram ID**: 158605
- **Elements**: 10
- **Connectors**: 16

```mermaid
sequenceDiagram
    participant Contract_Service as Contract Service
    participant RMQ_AM as RMQ.AM
    participant PCG as PCG
    participant RMQ_CSI_contractservice as RMQ.CSI contractservice
    participant Account_Management as Account Management
    participant VAS_Deals as VAS Deals
    participant RMQ_AM_account_closure as RMQ.AM account.closure
    participant Actor1 as Actor1
    participant Account_Paidoff_WrittenOff_event as Account Paidoff/WrittenOff event
    Contract_Service->>+Contract_Service: EvaluateInsurance ServiceDeactivation
    Contract_Service->>+Contract_Service: ProcessAccountClosureNotif
    RMQ_AM->>+Contract_Service: processServiceOperationNotification
    Contract_Service->>+Contract_Service: EvaluateServiceDefinition
    Contract_Service->>+PCG: GetServiceDefinition
    Contract_Service->>+RMQ_CSI_contractservice: ContractInsuranceServiceDeactivated
    Account_Management->>+Account_Management: SwitchOffService
    Contract_Service->>+VAS_Deals: DeactivateVasDeal
    Account_Management->>+RMQ_AM: Sequence
    RMQ_AM_account_closure->>+Contract_Service: AccountClosure
    Contract_Service->>+VAS_Deals: ConfirmDealAction
    Contract_Service->>+Contract_Service: CreateLSROperationStatus
    Actor1->>+Contract_Service: DeactivateContractInsuranceService
    Account_Paidoff_WrittenOff_event->>+RMQ_AM_account_closure: Sequence
    RMQ_CSI_contractservice->>+Account_Management: Sequence
    Contract_Service->>+Contract_Service: ExecuteLSROperationStatus
```
