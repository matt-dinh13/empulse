# Transaction Supplement detail

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/User Interface model
- **Diagram ID**: 160819
- **Elements**: 12
- **Connectors**: 2

```mermaid
graph TD
    ADD_Commodity_Code_Name["{ADD}Commodity Code - Name"]
    Loan_purpose["Loan purpose"]
    Tab_Contract_supplements["Tab-Contract supplements"]
    Contract_supplement_header_panel["Contract supplement header - panel"]
    MOD_13_122_Show_Transaction_Supplement_detail["{MOD}13.122 Show Transaction Supplement detail"]
    Application_code["Application code"]
    Transaction_status["Transaction status"]
    Amount["Amount"]
    Transaction_type["Transaction type"]
    Close["Close"]
    Register["Register"]
    MOD_Transaction_Supplement_detail["{MOD}Transaction Supplement detail"]
    MOD_Transaction_Supplement_detail -->|unnamed| MOD_13_122_Show_Transaction_Supplement_detail
    MOD_Transaction_Supplement_detail -->|unnamed| Tab_Contract_supplements
```
