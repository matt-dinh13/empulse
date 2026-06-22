# BSL integration proposal - impacted components

- **Diagram Type**: Component
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/BSL integration proposal - Component model
- **Diagram ID**: 160125
- **Elements**: 18
- **Connectors**: 13

```mermaid
graph TD
    NTF[["NTF"]]
    INSR[["INSR"]]
    Payments[["Payments"]]
    Contract[["Contract"]]
    Loan_Origination[["Loan Origination"]]
    External_consuments[["External consuments"]]
    RMQ_messaging[["RMQ (messaging)"]]
    Installment_Schedule[["Installment Schedule"]]
    User_Interface[["User Interface"]]
    VAS_Deals[["VAS Deals"]]
    Product_Catalog[["Product Catalog"]]
    CS_exchange[["CS.exchange"]]
    AM_exchange[["AM.exchange"]]
    RMQ_messaging["RMQ (messaging)"]
    Account_Management[["Account Management"]]
    Contract_Service_management[["Contract Service management"]]
    BSL["BSL"]
    Contract_Services_REL[["Contract Services (REL)"]]
    VAS_Deals -->|InsuranceProgram setting/validation| INSR
    RMQ_messaging -->|CFI| External_consuments
    RMQ_messaging -->|ContractService notif| External_consuments
    RMQ_messaging -->|unnamed| NTF
    Contract_Services_REL -->|REL Insurance Services management| VAS_Deals
    RMQ_messaging -->|ContractServiceNotif| Contract_Services_REL
    Contract -->|unnamed| Contract_Service_management
    User_Interface -->|unnamed| Contract_Service_management
    Contract_Service_management -->|REL Services management| Contract_Services_REL
    Loan_Origination -->|unnamed| Contract_Service_management
    Contract_Service_management -->|unnamed| Installment_Schedule
    CS_exchange -->|unnamed| Account_Management
    AM_exchange -->|Response Notif| Contract_Services_REL
```
