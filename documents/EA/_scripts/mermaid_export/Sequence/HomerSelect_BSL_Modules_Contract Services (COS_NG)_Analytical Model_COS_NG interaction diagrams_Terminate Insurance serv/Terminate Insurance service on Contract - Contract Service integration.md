# Terminate Insurance service on Contract - Contract Service integration

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/COS_NG interaction diagrams/Terminate Insurance service on Contract - Contract Service integration
- **Diagram ID**: 160174
- **Elements**: 11
- **Connectors**: 15

```mermaid
sequenceDiagram
    participant RMQ_AM as RMQ.AM
    participant Contract_Service as Contract Service
    participant RMQ_CSI_contractservice as RMQ.CSI contractservice
    participant Account_Management as Account Management
    participant VAS_Deals as VAS Deals
    participant RMQ_AM_account_closure as RMQ.AM account.closure
    participant Close_Account_event as Close Account event
    participant PCG as PCG
    participant Actor1 as Actor1
    RMQ_AM->>+Contract_Service: Sequence
    Contract_Service->>+Contract_Service: CreateLSROperationStatus
    RMQ_CSI_contractservice->>+Account_Management: Sequence
    Contract_Service->>+VAS_Deals: TerminateDeal
    RMQ_AM_account_closure->>+Contract_Service: AccountClosure
    Close_Account_event->>+RMQ_AM_account_closure: Sequence
    Contract_Service->>+RMQ_CSI_contractservice: ContractInsuranceServiceTerminated
    VAS_Deals->>+Contract_Service: Sequence
    Account_Management->>+RMQ_AM: Sequence
    Contract_Service->>+PCG: GetServiceDefinition
    VAS_Deals->>+VAS_Deals: Sequence
    Actor1->>+Contract_Service: TerminateContractInsuranceService
    Contract_Service->>+Contract_Service: ExecuteLSROperationStatus
    Contract_Service->>+Contract_Service: Sequence
    Contract_Service->>+Contract_Service: Sequence
```
