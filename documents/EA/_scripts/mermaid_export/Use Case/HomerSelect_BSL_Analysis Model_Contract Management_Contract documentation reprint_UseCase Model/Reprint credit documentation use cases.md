# Reprint credit documentation use cases

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract documentation reprint/UseCase Model
- **Diagram ID**: 157863
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    Panel_of_buttons_Panel_of_buttons["Panel of buttons : Panel of buttons"]
    n_01_190_Reprint_credit_documentation(("01.190 Reprint credit documentation"))
    Contract_detail_Contract_detail["Contract detail : Contract detail"]
    MOD_01_210_Show_contract_detail(("{MOD}01.210 Show contract detail"))
    User[/"User"/]
    Contract_detail_Contract_detail -->|unnamed| MOD_01_210_Show_contract_detail
    Panel_of_buttons_Panel_of_buttons -->|unnamed| n_01_190_Reprint_credit_documentation
    User --- MOD_01_210_Show_contract_detail
    User --> n_01_190_Reprint_credit_documentation
```
