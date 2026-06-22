# Generic documents

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Instances/Validation rules/PH/Generic
- **Diagram ID**: 90364
- **Elements**: 15
- **Connectors**: 10

```mermaid
graph TD
    ID_Number["ID Number"]
    Health_card["Health card"]
    Position["Position"]
    Employer_name["Employer name"]
    ID_Number["ID Number"]
    Date_Issued["Date Issued"]
    Reference_Number["Reference Number"]
    ID_Number["ID Number"]
    Valid_until["Valid until"]
    Valid_to["Valid to"]
    Card_Number["Card Number"]
    Employer_s_ID["Employer's ID"]
    NBI_Clereance["NBI Clereance"]
    Postal_ID["Postal ID"]
    Payment_card["Payment card"]
    Health_card -->|unnamed| ID_Number
    Payment_card -->|unnamed| Card_Number
    Payment_card -->|unnamed| Valid_to
    Postal_ID -->|unnamed| Valid_until
    Postal_ID -->|unnamed| ID_Number
    NBI_Clereance -->|unnamed| Reference_Number
    NBI_Clereance -->|unnamed| Date_Issued
    Employer_s_ID -->|unnamed| ID_Number
    Employer_s_ID -->|unnamed| Employer_name
    Employer_s_ID -->|unnamed| Position
```
