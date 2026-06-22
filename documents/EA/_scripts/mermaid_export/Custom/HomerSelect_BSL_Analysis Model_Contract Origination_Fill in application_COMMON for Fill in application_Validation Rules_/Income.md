# Income

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/VN/Employment/Income
- **Diagram ID**: 43748
- **Elements**: 11
- **Connectors**: 13

```mermaid
graph TD
    Optional["Optional"]
    Number1_31["Number1-31"]
    Optional_for_unemployed["Optional for unemployed "]
    Salary_frequency["Salary frequency"]
    Salary_day["Salary day"]
    Other_loans["Other loans"]
    Other_income["Other income"]
    Main_income["Main income"]
    Number_format["Number format"]
    Length_9["Length 9"]
    Mandatory["Mandatory"]
    Other_loans -->|unnamed| Mandatory
    Other_loans -->|unnamed| Length_9
    Other_income -->|unnamed| Length_9
    Main_income -->|unnamed| Length_9
    Salary_day -->|unnamed| Number_format
    Other_loans -->|unnamed| Number_format
    Other_income -->|unnamed| Number_format
    Main_income -->|unnamed| Number_format
    Other_income -->|unnamed| Optional_for_unemployed
    Main_income -->|unnamed| Optional_for_unemployed
    Salary_day -->|unnamed| Number1_31
    Salary_frequency -->|unnamed| Optional
    Salary_day -->|unnamed| Optional
```
