# LOR-9145 - Revamp customer loan journey

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9145 - Revamp customer loan journey
- **Diagram ID**: 150806
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph TD
    n_01_311_Update_offer_to_application_and_evaluate["01.311 Update offer to application and evaluate"]
    Save_Lender_party_to_application["Save Lender party to application"]
    Save_Lender_from_offer_to_application["Save Lender from offer to application"]
    Application_Processing["Application Processing"]
    n_01_450_Receive_evaluation_result["01.450 Receive evaluation result"]
    LOR_9145_Revamp_customer_loan_journey["LOR-9145 - Revamp customer loan journey"]
    LOR_9258_Save_LENDER_code_obtained_in_scoring_vector["LOR-9258 - Save LENDER code obtained in scoring vector"]
    LOR_9258_Save_LENDER_code_obtained_in_scoring_vector -->|unnamed| LOR_9145_Revamp_customer_loan_journey
    Application_Processing -->|unnamed| Save_Lender_from_offer_to_application
    Save_Lender_from_offer_to_application -->|{ADD LOR-9258/}| Save_Lender_party_to_application
    n_01_311_Update_offer_to_application_and_evaluate -->|unnamed| Save_Lender_from_offer_to_application
    n_01_450_Receive_evaluation_result -->|{ADD LOR-9258/}| Save_Lender_party_to_application
```
