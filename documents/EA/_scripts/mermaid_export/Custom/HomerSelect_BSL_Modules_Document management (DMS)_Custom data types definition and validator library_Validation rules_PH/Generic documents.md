# Generic documents

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Custom data types definition and validator library/Validation rules/PH/Generic
- **Diagram ID**: 139491
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
    Payment_card -->|unnamed| Valid_to
    Payment_card -->|unnamed| Card_Number
    Postal_ID -->|unnamed| ID_Number
    Postal_ID -->|unnamed| Valid_until
    NBI_Clereance -->|unnamed| Reference_Number
    NBI_Clereance -->|unnamed| Date_Issued
    Employer_s_ID -->|unnamed| Employer_name
    Employer_s_ID -->|unnamed| ID_Number
    Employer_s_ID -->|unnamed| Position
    Health_card -->|unnamed| ID_Number
```
