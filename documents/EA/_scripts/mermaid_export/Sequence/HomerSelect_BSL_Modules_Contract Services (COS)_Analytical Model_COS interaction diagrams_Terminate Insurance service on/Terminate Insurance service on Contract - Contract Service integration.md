# Terminate Insurance service on Contract - Contract Service integration

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/COS interaction diagrams/Terminate Insurance service on Contract - Contract Service integration
- **Diagram ID**: 158606
- **Elements**: 11
- **Connectors**: 15

```mermaid
sequenceDiagram
    participant Contract_Service as Contract Service
    participant VAS_Deals as VAS Deals
    participant RMQ_AM as RMQ.AM
    participant RMQ_AM_account_closure as RMQ.AM account.closure
    participant PCG as PCG
    participant Actor1 as Actor1
    participant RMQ_CSI_contractservice as RMQ.CSI contractservice
    participant Account_Management as Account Management
    participant Close_Account_event as Close Account event
    Contract_Service->>+Contract_Service: CreateLSROperationStatus
    Contract_Service->>+VAS_Deals: TerminateDeal
    VAS_Deals->>+Contract_Service: Sequence
    Contract_Service->>+Contract_Service: Sequence
    RMQ_AM->>+Contract_Service: Sequence
    RMQ_AM_account_closure->>+Contract_Service: AccountClosure
    Contract_Service->>+PCG: GetServiceDefinition
    Actor1->>+Contract_Service: TerminateContractInsuranceService
    Contract_Service->>+RMQ_CSI_contractservice: ContractInsuranceServiceTerminated
    VAS_Deals->>+VAS_Deals: Sequence
    Account_Management->>+RMQ_AM: Sequence
    Contract_Service->>+Contract_Service: ExecuteLSROperationStatus
    Close_Account_event->>+RMQ_AM_account_closure: Sequence
    RMQ_CSI_contractservice->>+Account_Management: Sequence
    Contract_Service->>+Contract_Service: Sequence
```
