# Contract Supplement screen flow

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP/Contract Supplement screen flow
- **Diagram ID**: 136892
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    Contract_supplement_registration["Contract supplement registration"]
    Close["Close"]
    Register["Register"]
    MOD_Transaction_Supplement_detail["{MOD}Transaction Supplement detail"]
    List_of_contract_supplements["List of contract supplements"]
    Add["Add"]
    Tab_Contract_supplements["Tab-Contract supplements"]
    Close -->|unnamed| Tab_Contract_supplements
    List_of_contract_supplements -->|unnamed| MOD_Transaction_Supplement_detail
    Contract_supplement_registration -->|unnamed| Tab_Contract_supplements
```
