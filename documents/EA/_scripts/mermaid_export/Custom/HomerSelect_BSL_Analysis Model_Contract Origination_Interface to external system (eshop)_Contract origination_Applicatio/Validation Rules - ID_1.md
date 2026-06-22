# Validation Rules - ID

```mermaid
graph TD
    Allowed_character_set_Account_holder_name_ID["Allowed character set (Account holder name - ID)"]
    Length_100["Length ‹= 100"]
    n_0_99["0-99"]
    Land_line_phone_number["Land line phone number"]
    Length_30["Length ‹= 30"]
    Allowed_characters["Allowed characters"]
    Account_number_validation["Account number validation"]
    n_6_30_digits["6-30 digits"]
    PaymentChannelType_validation_rule_ID["PaymentChannelType validation rule - ID"]
    Latin_alphabet_character_set["Latin alphabet character set"]
    Length_256["Length 256"]
    Commodity_validation_rule_ID["Commodity validation rule - ID"]
    Length50["Length50"]
    Non_negative_number_up_to_99_999_999["Non-negative number up to 99 999 999  "]
    Salary_day["Salary day"]
    EmploymentType_validation_rule_ID["EmploymentType validation rule - ID"]
    General_phone_number["General phone number"]
    PersonType_validation_rule_ID["PersonType validation rule - ID"]
    Length_5["Length 5"]
    Numbers_only["Numbers only"]
    MOD_Length_3["{MOD}Length 3"]
    Address_validation_rule_ID["Address validation rule - ID"]
    No_special_characters["No special characters"]
    Contact_value["Contact value"]
    ContactType_validation_rule_ID["ContactType validation rule - ID"]
    Mobile_phone_number["Mobile phone number"]
    Must_be_in_future["Must be in future"]
    KTP_number_length["KTP number length"]
    KTP_number["KTP number"]
    KTP_validation_rule["KTP validation rule"]
    Length_50["Length 50"]
    Extended_text_character_set["Extended text character set"]
    Date["Date"]
    Cannot_be_in_future["Cannot be in future"]
    Text_containing_a_zA_Z["Text containing [a-zA-Z\-\.' ]+"]
    MOD_Application_validation_rule_ID["{MOD}Application validation rule-ID"]
    Application_validation_rule["Application validation rule"]
    MOD_Application_validation_rule_ID -->|unnamed| PaymentChannelType_validation_rule_ID
    PaymentChannelType_validation_rule_ID -->|unnamed| Allowed_character_set_Account_holder_name_ID
    PersonType_validation_rule_ID -->|unnamed| General_phone_number
    ContactType_validation_rule_ID -->|unnamed| General_phone_number
    MOD_Application_validation_rule_ID -->|{ADD LOR-4195/}| General_phone_number
    EmploymentType_validation_rule_ID -->|unnamed| Salary_day
    MOD_Application_validation_rule_ID -->|unnamed| Non_negative_number_up_to_99_999_999
    Commodity_validation_rule_ID -->|unnamed| Length50
    EmploymentType_validation_rule_ID -->|unnamed| Length50
    MOD_Application_validation_rule_ID -->|unnamed| Commodity_validation_rule_ID
    Address_validation_rule_ID -->|unnamed| Length_5
    PaymentChannelType_validation_rule_ID -->|{DEL LOR-2381/}| Latin_alphabet_character_set
    Address_validation_rule_ID -->|unnamed| Numbers_only
    PaymentChannelType_validation_rule_ID -->|unnamed| n_6_30_digits
    PaymentChannelType_validation_rule_ID -->|unnamed| Account_number_validation
    PersonType_validation_rule_ID -->|unnamed| Allowed_characters
    MOD_Application_validation_rule_ID -->|unnamed| Length_30
    ContactType_validation_rule_ID -->|unnamed| Land_line_phone_number
    MOD_Application_validation_rule_ID -->|unnamed| n_0_99
    MOD_Application_validation_rule_ID -->|unnamed| Length_100
    PaymentChannelType_validation_rule_ID -->|unnamed| Length_100
    PersonType_validation_rule_ID -->|unnamed| Length_100
    Address_validation_rule_ID -->|unnamed| Length_100
    MOD_Application_validation_rule_ID -->|unnamed| Length_256
    MOD_Application_validation_rule_ID -->|unnamed| Text_containing_a_zA_Z
    MOD_Application_validation_rule_ID -->|unnamed| Cannot_be_in_future
    MOD_Application_validation_rule_ID -->|unnamed| Date
    Commodity_validation_rule_ID -->|unnamed| Extended_text_character_set
    MOD_Application_validation_rule_ID -->|unnamed| Extended_text_character_set
    EmploymentType_validation_rule_ID -->|unnamed| Extended_text_character_set
    Address_validation_rule_ID -->|unnamed| Extended_text_character_set
    MOD_Application_validation_rule_ID -->|unnamed| Length_50
    MOD_Application_validation_rule_ID -->|unnamed| PersonType_validation_rule_ID
    MOD_Application_validation_rule_ID -->|unnamed| KTP_validation_rule
    MOD_Application_validation_rule_ID -->|unnamed| Application_validation_rule
    ContactType_validation_rule_ID -->|unnamed| Mobile_phone_number
    MOD_Application_validation_rule_ID -->|unnamed| ContactType_validation_rule_ID
    ContactType_validation_rule_ID -->|unnamed| Contact_value
    EmploymentType_validation_rule_ID -->|unnamed| No_special_characters
    Address_validation_rule_ID -->|unnamed| No_special_characters
    EmploymentType_validation_rule_ID -->|unnamed| Address_validation_rule_ID
    MOD_Application_validation_rule_ID -->|unnamed| Address_validation_rule_ID
    Address_validation_rule_ID -->|unnamed| MOD_Length_3
    Address_validation_rule_ID -->|unnamed| Length_50
    KTP_validation_rule -->|unnamed| Must_be_in_future
    KTP_validation_rule -->|unnamed| KTP_number
    KTP_validation_rule -->|unnamed| Date
    KTP_validation_rule -->|unnamed| KTP_number_length
```
