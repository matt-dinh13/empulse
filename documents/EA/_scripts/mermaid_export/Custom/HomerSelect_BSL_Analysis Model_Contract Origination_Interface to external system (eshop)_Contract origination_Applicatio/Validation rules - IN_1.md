# Validation rules - IN

```mermaid
graph TD
    ADD_Length70["{ADD}Length70"]
    Text_character_set_without_space["Text character set without space"]
    Date["Date"]
    Validation_rule_filter_for_extended_information["Validation rule filter for extended information"]
    Extended_information_validation_rule_IN["Extended information validation rule-IN"]
    Length_30["Length ‹= 30"]
    Length_256["Length 256"]
    Date_in_past["Date in past"]
    Length60["Length60"]
    Length50["Length50"]
    Numbers_only["Numbers only"]
    Length_50["Length 50"]
    Cross_validation["Cross validation"]
    Code_validation_rule_IN["Code validation rule - IN"]
    DocumentAttribute_validation_rule_IN["DocumentAttribute validation rule-IN"]
    Number["Number"]
    Number["Number"]
    Issue_date["Issue date"]
    Number["Number"]
    ID_Number["ID Number"]
    E_mail["E-mail"]
    Max_1_element["Max 1 element"]
    Max_8_elements["Max 8 elements"]
    Must_be_in_the_future["Must be in the future"]
    Text_character_set["Text character set"]
    Date_format["Date format"]
    Person_Age["Person Age"]
    Number_of_dependets["Number of dependets"]
    Length_20["Length ‹= 20"]
    Length_50["Length ‹= 50"]
    PaymentChannel_validation_rule_IN["PaymentChannel validation rule-IN"]
    Salary_day["Salary day"]
    Equal_or_greater_then_zero["Equal or greater then zero"]
    Greater_than_zero["Greater than zero"]
    Total_Household_Income["Total Household Income"]
    Additional_Net_Income["Additional Net Income"]
    Length40["Length40"]
    Length60["Length60"]
    Length10["Length10"]
    MOD_Address_validation_rule_IN["{MOD}Address validation rule-IN"]
    Document_validation_rule_IN["Document validation rule-IN"]
    Character_set_with_space["Character set (with space)"]
    Employment_validation_rule_IN["Employment validation rule-IN"]
    Fix_phone["Fix phone"]
    Mobile_Phone["Mobile Phone"]
    Contact_validation_rule_IN["Contact validation rule-IN"]
    Person_validation_rule_IN["Person validation rule - IN"]
    Character_set["Character set"]
    Commodity_validation_rule_IN["Commodity validation rule-IN"]
    MOD_Application_validation_rule_IN["{MOD}Application validation rule - IN"]
    MOD_Address_validation_rule_IN -->|{DEL LOR-10356}| Length_50
    MOD_Application_validation_rule_IN -->|{ADD LOR-4724/}| Text_character_set_without_space
    MOD_Application_validation_rule_IN -->|unnamed| Must_be_in_the_future
    Contact_validation_rule_IN -->|unnamed| Max_8_elements
    Contact_validation_rule_IN -->|unnamed| Max_1_element
    Contact_validation_rule_IN -->|unnamed| E_mail
    DocumentAttribute_validation_rule_IN -->|unnamed| ID_Number
    DocumentAttribute_validation_rule_IN -->|unnamed| Number
    DocumentAttribute_validation_rule_IN -->|unnamed| Issue_date
    DocumentAttribute_validation_rule_IN -->|unnamed| Number
    DocumentAttribute_validation_rule_IN -->|unnamed| Number
    Document_validation_rule_IN -->|unnamed| DocumentAttribute_validation_rule_IN
    MOD_Application_validation_rule_IN -->|unnamed| Date_format
    MOD_Address_validation_rule_IN -->|unnamed| Cross_validation
    MOD_Application_validation_rule_IN -->|unnamed| Person_Age
    MOD_Address_validation_rule_IN -->|unnamed| Numbers_only
    Contact_validation_rule_IN -->|unnamed| Length50
    Commodity_validation_rule_IN -->|unnamed| Length50
    Employment_validation_rule_IN -->|unnamed| Length60
    Employment_validation_rule_IN -->|unnamed| Date_in_past
    MOD_Application_validation_rule_IN -->|unnamed| Length_256
    MOD_Application_validation_rule_IN -->|unnamed| Length_30
    Commodity_validation_rule_IN -->|unnamed| Length_30
    MOD_Application_validation_rule_IN -->|unnamed| Extended_information_validation_rule_IN
    Extended_information_validation_rule_IN -->|unnamed| Validation_rule_filter_for_extended_information
    Employment_validation_rule_IN -->|unnamed| Date
    MOD_Application_validation_rule_IN -->|unnamed| Code_validation_rule_IN
    MOD_Address_validation_rule_IN -->|unnamed| Length10
    MOD_Application_validation_rule_IN -->|unnamed| Commodity_validation_rule_IN
    Commodity_validation_rule_IN -->|unnamed| Character_set
    MOD_Application_validation_rule_IN -->|unnamed| Person_validation_rule_IN
    Person_validation_rule_IN -->|unnamed| Contact_validation_rule_IN
    MOD_Application_validation_rule_IN -->|unnamed| Contact_validation_rule_IN
    Contact_validation_rule_IN -->|unnamed| Mobile_Phone
    Contact_validation_rule_IN -->|unnamed| Fix_phone
    MOD_Application_validation_rule_IN -->|unnamed| Employment_validation_rule_IN
    Employment_validation_rule_IN -->|unnamed| Character_set_with_space
    MOD_Application_validation_rule_IN -->|unnamed| Character_set_with_space
    MOD_Application_validation_rule_IN -->|unnamed| Document_validation_rule_IN
    MOD_Application_validation_rule_IN -->|unnamed| Text_character_set
    MOD_Application_validation_rule_IN -->|unnamed| MOD_Address_validation_rule_IN
    MOD_Address_validation_rule_IN -->|{ADD LOR-10356}| ADD_Length70
    MOD_Address_validation_rule_IN -->|{DEL LOR-10356}| Length60
    MOD_Address_validation_rule_IN -->|{DEL LOR-10356}| Length40
    MOD_Application_validation_rule_IN -->|unnamed| Additional_Net_Income
    MOD_Application_validation_rule_IN -->|unnamed| Total_Household_Income
    MOD_Application_validation_rule_IN -->|unnamed| Greater_than_zero
    MOD_Application_validation_rule_IN -->|unnamed| Equal_or_greater_then_zero
    MOD_Application_validation_rule_IN -->|unnamed| Salary_day
    MOD_Application_validation_rule_IN -->|unnamed| PaymentChannel_validation_rule_IN
    PaymentChannel_validation_rule_IN -->|unnamed| Length_50
    PaymentChannel_validation_rule_IN -->|unnamed| Length_20
    MOD_Application_validation_rule_IN -->|unnamed| Number_of_dependets
    Employment_validation_rule_IN -->|unnamed| MOD_Address_validation_rule_IN
```
