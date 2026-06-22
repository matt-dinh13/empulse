# Prolong Insurance Service on Contract

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/COS interaction diagrams/Prolong Insurance Service on Contract
- **Diagram ID**: 158329
- **Elements**: 13
- **Connectors**: 20

```mermaid
sequenceDiagram
    participant RMQ_AM as RMQ.AM
    participant Contract_Service as Contract Service
    participant RMQ_CSI_contractservice as RMQ.CSI contractservice
    participant Account_Management as Account Management
    participant VAS_Deals as VAS Deals
    participant RMQ_AM as RMQ.AM
    participant PCG as PCG
    participant EoM_Billing as EoM Billing
    participant EoM_Billing as EoM Billing
    RMQ_AM->>+Contract_Service: ContractInsuranceDto
    RMQ_CSI_contractservice->>+Account_Management: Sequence
    VAS_Deals->>+Contract_Service: Sequence
    Contract_Service->>+Contract_Service: ExecuteLSROperationStatus
    Contract_Service->>+Contract_Service: EvaluateInsuranceSetting
    Contract_Service->>+Contract_Service: GetInsuranceServiceList
    Contract_Service->>+VAS_Deals: TerminateDeal
    Contract_Service->>+RMQ_CSI_contractservice: ContractInsuranceServiceTermination
    Contract_Service->>+Contract_Service: CreateBusinessEvent
    Contract_Service->>+Contract_Service: EvaluateProlongationResponse
    Account_Management->>+Account_Management: TerminateService
    RMQ_AM->>+Contract_Service: processServiceOperationNotification
    Contract_Service->>+PCG: GetServiceSetting
    Contract_Service->>+Contract_Service: ValidationsRelatedToContract
    RMQ_AM->>+Contract_Service: AccountBalanceChange
    Account_Management->>+RMQ_AM: Sequence
    EoM_Billing->>+RMQ_AM: Sequence
    Contract_Service->>+VAS_Deals: ProlongInsurancePeriod
    Contract_Service->>+Contract_Service: CreateLSROperationStatus
    EoM_Billing->>+RMQ_AM: Sequence
```
