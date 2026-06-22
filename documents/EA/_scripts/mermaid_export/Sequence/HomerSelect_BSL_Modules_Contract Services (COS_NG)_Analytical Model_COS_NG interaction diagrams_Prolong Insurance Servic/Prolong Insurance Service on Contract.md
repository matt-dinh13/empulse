# Prolong Insurance Service on Contract

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/COS_NG interaction diagrams/Prolong Insurance Service on Contract
- **Diagram ID**: 160173
- **Elements**: 13
- **Connectors**: 20

```mermaid
sequenceDiagram
    participant Contract_Service as Contract Service
    participant RMQ_CSI_contractservice as RMQ.CSI contractservice
    participant PCG as PCG
    participant RMQ_AM as RMQ.AM
    participant Account_Management as Account Management
    participant EoM_Billing as EoM Billing
    participant RMQ_AM as RMQ.AM
    participant VAS_Deals as VAS Deals
    participant EoM_Billing as EoM Billing
    Contract_Service->>+RMQ_CSI_contractservice: ContractInsuranceServiceTermination
    Contract_Service->>+PCG: GetServiceSetting
    RMQ_AM->>+Contract_Service: processServiceOperationNotification
    Contract_Service->>+Contract_Service: GetInsuranceServiceList
    Contract_Service->>+Contract_Service: ExecuteLSROperationStatus
    RMQ_CSI_contractservice->>+Account_Management: Sequence
    Contract_Service->>+Contract_Service: CreateBusinessEvent
    EoM_Billing->>+RMQ_AM: Sequence
    RMQ_AM->>+Contract_Service: AccountBalanceChange
    RMQ_AM->>+Contract_Service: ContractInsuranceDto
    VAS_Deals->>+Contract_Service: Sequence
    Contract_Service->>+Contract_Service: EvaluateProlongationResponse
    Account_Management->>+Account_Management: TerminateService
    EoM_Billing->>+RMQ_AM: Sequence
    Contract_Service->>+VAS_Deals: TerminateDeal
    Contract_Service->>+Contract_Service: ValidationsRelatedToContract
    Account_Management->>+RMQ_AM: Sequence
    Contract_Service->>+VAS_Deals: ProlongInsurancePeriod
    Contract_Service->>+Contract_Service: CreateLSROperationStatus
    Contract_Service->>+Contract_Service: EvaluateInsuranceSetting
```
