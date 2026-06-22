# Employment information

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Employment information
- **Diagram ID**: 126984
- **Elements**: 25
- **Connectors**: 24

```mermaid
graph TD
    Length_of_empl_YY["Length of empl (YY)"]
    Must_be_between_0_and_11["Must be between 0 and 11"]
    Length_of_empl_MM["Length of empl (MM)"]
    Phone_Extension["Phone Extension"]
    Type_of_Employment["Type of Employment"]
    Mandatory_for_economical_status["Mandatory for economical status"]
    General_phone_number["General phone number"]
    Max_length_60["Max length 60"]
    ASCII_32_to_ASCII_126["ASCII 32 to ASCII 126"]
    Profession["Profession"]
    Name["Name"]
    Industry["Industry"]
    Employment_phone_extension["Employment phone extension"]
    Employment_phone["Employment phone"]
    Economical_status["Economical status"]
    Type_of_employment["Type of employment"]
    n_1_28["1-28"]
    Financial_amount_0["Financial amount ›= 0"]
    Mandatory["Mandatory"]
    Optional["Optional"]
    Salary_frequency["Salary frequency"]
    Salary_day["Salary day"]
    Net_income["Net income"]
    Monthly_amount_of_other_debts["Monthly amount of other debts"]
    Additional_net_income["Additional net income"]
    Length_of_empl_MM -->|unnamed| Mandatory
    Employment_phone_extension -->|unnamed| Phone_Extension
    Type_of_employment -->|unnamed| Type_of_Employment
    Employment_phone -->|unnamed| Mandatory_for_economical_status
    Employment_phone -->|unnamed| General_phone_number
    Name -->|unnamed| Max_length_60
    Name -->|unnamed| ASCII_32_to_ASCII_126
    Salary_day -->|unnamed| n_1_28
    Additional_net_income -->|unnamed| Financial_amount_0
    Monthly_amount_of_other_debts -->|unnamed| Financial_amount_0
    Length_of_empl_MM -->|unnamed| Must_be_between_0_and_11
    Economical_status -->|unnamed| Mandatory
    Additional_net_income -->|unnamed| Optional
    Profession -->|unnamed| Mandatory
    Name -->|unnamed| Mandatory
    Industry -->|unnamed| Mandatory
    Employment_phone -->|unnamed| Mandatory
    Length_of_empl_YY -->|unnamed| Mandatory
    Salary_frequency -->|unnamed| Mandatory
    Net_income -->|unnamed| Mandatory
    Monthly_amount_of_other_debts -->|unnamed| Mandatory
    Employment_phone_extension -->|unnamed| Optional
    Salary_day -->|unnamed| Optional
    Net_income -->|unnamed| Financial_amount_0
```
