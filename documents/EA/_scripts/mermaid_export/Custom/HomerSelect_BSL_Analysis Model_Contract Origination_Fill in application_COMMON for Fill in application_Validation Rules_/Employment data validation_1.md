# Employment data validation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Employment data validation
- **Diagram ID**: 153550
- **Elements**: 23
- **Connectors**: 18

```mermaid
graph TD
    Date_in_past["Date in past"]
    Length60["Length60"]
    Character_set_with_space["Character set (with space)"]
    Department["Department"]
    Name["Name"]
    Residence_cum_office["Residence cum office"]
    Type_of_employment["Type of employment"]
    Profession["Profession"]
    Employer_industry["Employer industry"]
    University_course["University course"]
    Work_phone_ownership["Work phone ownership"]
    Mandatory_for_Employment_phone["Mandatory for Employment phone"]
    Any_phone["Any phone"]
    Employment_any_phone["Employment any phone"]
    Mandatory_for_economical_status["Mandatory for economical status"]
    Mandatory_for_economical_status["Mandatory for economical status"]
    Phone_Extension["Phone Extension"]
    Employment_Phone_Extension["Employment Phone Extension"]
    Phone_Extension_only_with_Phone_Number["Phone Extension only with Phone Number "]
    Employment_fix_phone["Employment fix phone"]
    Fix_phone["Fix phone"]
    Mandatory["Mandatory"]
    Employed_from["Employed from"]
    University_course -->|unnamed| Length60
    Department -->|unnamed| Mandatory
    Name -->|unnamed| Mandatory
    Name -->|unnamed| Character_set_with_space
    Name -->|unnamed| Length60
    Residence_cum_office -->|unnamed| Mandatory
    Type_of_employment -->|unnamed| Mandatory
    Department -->|unnamed| Length60
    Employer_industry -->|unnamed| Mandatory
    Employed_from -->|unnamed| Date_in_past
    University_course -->|unnamed| Mandatory
    Work_phone_ownership -->|unnamed| Mandatory_for_Employment_phone
    Employment_any_phone -->|unnamed| Any_phone
    Mandatory_for_economical_status -->|unnamed| Mandatory_for_economical_status
    Employment_Phone_Extension -->|unnamed| Phone_Extension
    Employment_Phone_Extension -->|unnamed| Phone_Extension_only_with_Phone_Number
    Employment_fix_phone -->|unnamed| Fix_phone
    Profession -->|unnamed| Mandatory
```
