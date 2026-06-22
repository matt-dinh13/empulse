# Contact data

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Contact data
- **Diagram ID**: 139558
- **Elements**: 16
- **Connectors**: 17

```mermaid
graph TD
    Mandatory_for_DBS_application_form["Mandatory for DBS application form"]
    Length50["Length50"]
    Optional["Optional"]
    E_mail["E-mail"]
    Max_1_element["Max 1 element"]
    Twitter["Twitter"]
    Facebook["Facebook"]
    LinkedIn["LinkedIn"]
    Max_8_elements["Max 8 elements"]
    Fix_phone["Fix phone"]
    Mobile_Phone["Mobile Phone"]
    Contact_Fix_Phone["Contact Fix Phone"]
    Contact_Mobile_Phone["Contact Mobile Phone"]
    MOD_Fathers_name["{MOD}Fathers name "]
    Father_s_name_in_related_person["Father's name in related person"]
    E_mail["E-mail"]
    Facebook -->|unnamed| Optional
    E_mail -->|OTHER_EMAIL| Max_8_elements
    E_mail -->|PRIMARY_EMAIL| Mandatory_for_DBS_application_form
    E_mail -->|PRIMARY_EMAIL| Max_1_element
    E_mail -->|OTHER_EMAIL| Optional
    Twitter -->|unnamed| Max_8_elements
    Twitter -->|unnamed| Length50
    E_mail -->|unnamed| E_mail
    Facebook -->|unnamed| Max_8_elements
    Father_s_name_in_related_person -->|unnamed| MOD_Fathers_name
    Facebook -->|unnamed| Length50
    LinkedIn -->|unnamed| Max_8_elements
    LinkedIn -->|unnamed| Optional
    LinkedIn -->|unnamed| Length50
    Contact_Fix_Phone -->|unnamed| Fix_phone
    Contact_Mobile_Phone -->|unnamed| Mobile_Phone
    Twitter -->|unnamed| Optional
```
