# Service interpreter

- **Diagram Type**: Analysis
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16152 (CSI-1340) Contract service modularization - analysis/Service interpreter (proposal)
- **Diagram ID**: 151179
- **Elements**: 18
- **Connectors**: 19

```mermaid
graph TD
    Calculate_a_Service_fee["Calculate a Service fee"]
    Contract["Contract"]
    Create_account["Create account"]
    Insurance_Contract["Insurance Contract"]
    Add_Insurance_to_Loan["Add Insurance to Loan"]
    InsuranceContract_ExtendedService["InsuranceContract (ExtendedService)"]
    LoanService["LoanService"]
    Application_storage_ADS["Application storage (ADS)"]
    Create_frame_contract["Create frame contract"]
    Calculate_sales_quotes_for_client_ASQ["Calculate sales quotes for client (ASQ)"]
    el_1748603["Note"]
    Loan_Service_storage["Loan Service storage"]
    Account["Account"]
    el_1748601["Note"]
    Services_Offers_SQS["Services Offers (SQS)"]
    AP["AP"]
    Sales_process_orchestrator["Sales process orchestrator"]
    Process_service_offer["Process service offer"]
    LoanService -->|unnamed| Loan_Service_storage
    Process_service_offer -->|Create account (if it doesn't exist)| Create_account
    InsuranceContract_ExtendedService -->|unnamed| Insurance_Contract
    Process_service_offer -->|unnamed| Add_Insurance_to_Loan
    Add_Insurance_to_Loan -->|Create Insurance contract| InsuranceContract_ExtendedService
    Process_service_offer -->|Add Loan Service| LoanService
    InsuranceContract_ExtendedService -->|unnamed| LoanService
    Add_Insurance_to_Loan -->|Add insurance service| LoanService
    Process_service_offer -->|unnamed| Calculate_a_Service_fee
    Sales_process_orchestrator -->|Calculate sales quotes basen on marketing offer| Calculate_sales_quotes_for_client_ASQ
    Services_Offers_SQS -->|Get service offer| Process_service_offer
    Create_account -->|unnamed| Account
    Process_service_offer -->|Authorize transaction| Account
    Contract -->|unnamed| Account
    el_1748601 -->|unnamed| Services_Offers_SQS
    Calculate_sales_quotes_for_client_ASQ -->|Store sales quotes| Services_Offers_SQS
    Process_service_offer -->|Add service/Switch on service| AP
    Sales_process_orchestrator -->|request for service offer processing| Process_service_offer
    Process_service_offer -->|Create contract (if it doesn't exist)| Create_frame_contract
```
