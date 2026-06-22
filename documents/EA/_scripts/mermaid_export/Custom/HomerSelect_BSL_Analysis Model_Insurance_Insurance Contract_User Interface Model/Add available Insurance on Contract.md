# Add available Insurance on Contract

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/User Interface Model
- **Diagram ID**: 153463
- **Elements**: 10
- **Connectors**: 4

```mermaid
graph TD
    Printable_text_0_255_char["Printable text 0 - 255 char"]
    Notice["Notice"]
    Tab_Insurance["Tab-Insurance"]
    Switch_insurance_on["Switch insurance on"]
    Cancel["Cancel"]
    List_of_available_insurances["List of available insurances"]
    Add_insurance["Add insurance"]
    n_08_345_Add_Insurance_on_Contract["08.345 Add Insurance on Contract"]
    n_08_340_Show_Insurance_offers_for_loan_contract["08.340 Show Insurance offers for loan contract"]
    Add_available_Insurance_on_Contract["Add available Insurance on Contract"]
    Add_available_Insurance_on_Contract -->|unnamed| n_08_340_Show_Insurance_offers_for_loan_contract
    Add_insurance -->|unnamed| n_08_345_Add_Insurance_on_Contract
    Add_available_Insurance_on_Contract -->|unnamed| Tab_Insurance
    Notice -->|unnamed| Printable_text_0_255_char
```
