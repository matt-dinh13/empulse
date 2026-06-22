# Contact to client

```mermaid
graph TD
    Max_length_50["Max length 50"]
    Mandatory_for_Facebook_connection_Other_contact["Mandatory for Facebook connection (Other contact)"]
    Facebook_connection["Facebook connection"]
    Extended_text_character_set["Extended text character set"]
    Max_8_elements["Max 8 elements"]
    Yahoo_messenger["Yahoo messenger"]
    Viber["Viber"]
    Twitter["Twitter"]
    Skype["Skype"]
    Facebook["Facebook"]
    Chikka["Chikka"]
    LinkedIn["LinkedIn"]
    Land_phone_number["Land phone number"]
    Mobile_phone["Mobile phone"]
    Unique_client_phones["Unique client phones"]
    E_mail_format["E-mail format"]
    Mandatory["Mandatory"]
    Optional["Optional"]
    Mobile_phone_2["Mobile phone 2"]
    Mobile_phone_1["Mobile phone 1"]
    Home_phone["Home phone"]
    E_mail["E-mail"]
    Skype -->|unnamed| Extended_text_character_set
    Twitter -->|unnamed| Max_length_50
    Chikka -->|unnamed| Max_8_elements
    Skype -->|unnamed| Max_8_elements
    Twitter -->|unnamed| Max_8_elements
    Yahoo_messenger -->|unnamed| Extended_text_character_set
    Viber -->|unnamed| Extended_text_character_set
    Facebook -->|unnamed| Extended_text_character_set
    Facebook -->|unnamed| Max_8_elements
    Chikka -->|unnamed| Extended_text_character_set
    Yahoo_messenger -->|unnamed| Max_8_elements
    Twitter -->|unnamed| Extended_text_character_set
    Facebook -->|unnamed| Mandatory_for_Facebook_connection_Other_contact
    LinkedIn -->|unnamed| Max_length_50
    Chikka -->|unnamed| Max_length_50
    Facebook -->|unnamed| Max_length_50
    Viber -->|unnamed| Max_length_50
    Yahoo_messenger -->|unnamed| Max_length_50
    Skype -->|unnamed| Max_length_50
    LinkedIn -->|unnamed| Extended_text_character_set
    E_mail -->|unnamed| Mandatory
    Facebook_connection -->|unnamed| Optional
    Twitter -->|unnamed| Optional
    Chikka -->|unnamed| Optional
    Mobile_phone_2 -->|unnamed| Optional
    Viber -->|unnamed| Optional
    Yahoo_messenger -->|unnamed| Optional
    Home_phone -->|unnamed| Optional
    LinkedIn -->|unnamed| Max_8_elements
    Mobile_phone_1 -->|unnamed| Mandatory
    LinkedIn -->|unnamed| Optional
    E_mail -->|unnamed| E_mail_format
    Mobile_phone_2 -->|unnamed| Unique_client_phones
    Mobile_phone_1 -->|unnamed| Unique_client_phones
    Home_phone -->|unnamed| Unique_client_phones
    Mobile_phone_2 -->|unnamed| Mobile_phone
    Mobile_phone_1 -->|unnamed| Mobile_phone
    Home_phone -->|unnamed| Land_phone_number
    Viber -->|unnamed| Max_8_elements
    Skype -->|unnamed| Optional
```
