# Show credit limit change request

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model
- **Diagram ID**: 164251
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    Tab_Contract_supplements_Tab_Contract_supplements["Tab-Contract supplements : Tab-Contract supplements"]
    User_Interface_Show_credit_limit_change_request_detail_UI["User Interface  :Show credit limit change request detail - UI"]
    User[/"User"/]
    n_13_061_Show_credit_limit_change_request_detail(("13.061 Show credit limit change request detail"))
    n_13_061_Show_credit_limit_change_request_detail -->|unnamed| User_Interface_Show_credit_limit_change_request_detail_UI
    n_13_061_Show_credit_limit_change_request_detail -->|unnamed| Tab_Contract_supplements_Tab_Contract_supplements
    User --> n_13_061_Show_credit_limit_change_request_detail
```
