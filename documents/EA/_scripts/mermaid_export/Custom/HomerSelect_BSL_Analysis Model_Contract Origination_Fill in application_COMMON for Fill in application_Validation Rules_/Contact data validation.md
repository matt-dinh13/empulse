# Contact data validation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Contact data validation
- **Diagram ID**: 101044
- **Elements**: 25
- **Connectors**: 40

```mermaid
graph TD
    Length_100["Length ‹= 100"]
    Land_line_phone_number["Land line phone number"]
    Allowed_characters["Allowed characters"]
    Home_phone["Home phone"]
    Secondary_mobile["Secondary mobile"]
    Full_name["Full name"]
    Length50["Length50"]
    WhatsUp["WhatsUp"]
    Skype["Skype"]
    Max_1_elements["Max 1 elements"]
    Optional["Optional"]
    Yahoo_Messenger["Yahoo Messenger"]
    Twitter["Twitter"]
    MSN_Messenger["MSN Messenger"]
    Google_Talk["Google Talk"]
    Facebook["Facebook"]
    Friendster["Friendster"]
    BlackBerry["BlackBerry"]
    Max_elements["Max elements"]
    Contact_value["Contact value"]
    E_mail["E-mail"]
    General_phone_number["General phone number"]
    Mobile_phone_number["Mobile phone number"]
    Any_phone["Any phone"]
    Mobile_phone["Mobile phone"]
    Skype -->|unnamed| Length50
    Full_name -->|unnamed| Length_100
    Facebook -->|unnamed| Optional
    E_mail -->|unnamed| Optional
    BlackBerry -->|unnamed| Optional
    E_mail -->|PRIMARY_EMAIL| Max_1_elements
    Secondary_mobile -->|unnamed| Max_1_elements
    Home_phone -->|unnamed| Max_1_elements
    Skype -->|unnamed| Optional
    WhatsUp -->|unnamed| Length50
    Twitter -->|unnamed| Optional
    MSN_Messenger -->|unnamed| Length50
    BlackBerry -->|unnamed| Length50
    Facebook -->|unnamed| Length50
    Friendster -->|unnamed| Length50
    Google_Talk -->|unnamed| Length50
    Yahoo_Messenger -->|unnamed| Length50
    Full_name -->|unnamed| Allowed_characters
    Home_phone -->|unnamed| Land_line_phone_number
    Twitter -->|unnamed| Length50
    Twitter -->|unnamed| Max_elements
    E_mail -->|unnamed| Contact_value
    BlackBerry -->|unnamed| Max_elements
    Friendster -->|unnamed| Max_elements
    Facebook -->|unnamed| Max_elements
    E_mail -->|OTHER EMAIL| Max_elements
    Google_Talk -->|unnamed| Max_elements
    MSN_Messenger -->|unnamed| Optional
    MSN_Messenger -->|unnamed| Max_elements
    Mobile_phone -->|unnamed| Mobile_phone_number
    Skype -->|unnamed| Max_elements
    Yahoo_Messenger -->|unnamed| Max_elements
    Home_phone -->|unnamed| Optional
    Google_Talk -->|unnamed| Optional
    Secondary_mobile -->|unnamed| Optional
    Friendster -->|unnamed| Optional
    WhatsUp -->|unnamed| Optional
    Yahoo_Messenger -->|unnamed| Optional
    WhatsUp -->|unnamed| Max_elements
    Any_phone -->|unnamed| General_phone_number
```
