# Add Insurance service to Contract - Contract Service integration

```mermaid
sequenceDiagram
    participant Actor1 as Actor1
    participant Contract_Service as Contract Service
    participant VAS_Deals as VAS Deals
    participant RMQ_CSI_contractservice as RMQ.CSI contractservice
    participant Account_Management as Account Management
    participant RMQ_AM as RMQ.AM
    Actor1->>Contract_Service: AddContractInsuranceService
    Contract_Service->>VAS_Deals: CreateDeal
    Contract_Service->>RMQ_CSI_contractservice: Sequence
    Account_Management->>RMQ_AM: Sequence
    Contract_Service->>Contract_Service: aktivace
    RMQ_AM->>Contract_Service: Sequence
    Contract_Service->>Contract_Service: je nutny sign?
    VAS_Deals->>VAS_Deals: CreatedDealService
    RMQ_CSI_contractservice->>Account_Management: Sequence
    Account_Management->>Account_Management: process
```
