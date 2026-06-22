# Tab-Contract supplements

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Contract supplements
- **Diagram ID**: 160817
- **Elements**: 9
- **Connectors**: 5

```mermaid
graph TD
    Contract_supplement_registration_UI["Contract supplement registration - UI"]
    Transaction_Supplement_detail["Transaction Supplement detail"]
    Cancel_unprocessed_contract_supplement_UI["Cancel unprocessed contract supplement - UI"]
    User_Interface_Model_Contract_detail["User Interface Model : Contract detail"]
    Create_credit_limit_change_request_manually_UI["Create credit limit change request manually - UI"]
    Show_credit_limit_change_request_detail_UI["Show credit limit change request detail - UI"]
    Add["Add"]
    List_of_contract_supplements["List of contract supplements"]
    Tab_Contract_supplements["Tab-Contract supplements"]
    List_of_contract_supplements -->|unnamed| Show_credit_limit_change_request_detail_UI
    Add -->|unnamed| Create_credit_limit_change_request_manually_UI
    List_of_contract_supplements -->|unnamed| Cancel_unprocessed_contract_supplement_UI
    List_of_contract_supplements -->|unnamed| Transaction_Supplement_detail
    List_of_contract_supplements -->|unnamed| Contract_supplement_registration_UI
```
