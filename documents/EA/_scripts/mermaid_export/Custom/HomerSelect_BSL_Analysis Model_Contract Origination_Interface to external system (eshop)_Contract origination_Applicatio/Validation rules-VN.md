# Validation rules-VN

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN
- **Diagram ID**: 153768
- **Elements**: 34
- **Connectors**: 41

```mermaid
graph TD
    Separation_symbols["Separation symbols"]
    Latin_extended_characters["Latin extended characters"]
    Alphabetical_string["Alphabetical string"]
    Email["Email"]
    Total_number_of_related_persons["Total number of related persons"]
    Length_30["Length ‹= 30"]
    Length_256["Length 256"]
    Length60["Length60"]
    Text_with_special_characters["Text with special characters"]
    VN_chars["VN chars"]
    Length_22["Length 22"]
    Commodity_validation_rule_VN["Commodity validation rule-VN"]
    Payment_provider_validation["Payment provider validation"]
    Account_number_validation["Account number validation"]
    PaymentChannel_validation_rule_VN["PaymentChannel validation rule-VN"]
    Length_9["Length 9"]
    Date_in_past["Date in past"]
    Length_6_digits["Length 6 digits"]
    Employment_validation_rule_VN["Employment validation rule-VN"]
    Length_90["Length 90"]
    Person_validation_rule_VN["Person validation rule-VN"]
    Length_2["Length 2"]
    Number_format["Number format"]
    Length_40["Length 40"]
    Address_validation_rule_VN["Address validation rule-VN"]
    Length_20["Length 20"]
    Length50["Length50"]
    Max_elements["Max elements"]
    Length8_11_digits["Length8-11 digits"]
    Contact_validation_rule_VN["Contact validation rule-VN"]
    Date_after_1_1_1900_and_not_in_future["Date after 1.1.1900 and not in future"]
    Date_format["Date format"]
    Text["Text"]
    Application_validation_rule_VN["Application validation rule-VN"]
    Person_validation_rule_VN -->|unnamed| VN_chars
    Contact_validation_rule_VN -->|unnamed| Max_elements
    Address_validation_rule_VN -->|unnamed| Length_40
    Address_validation_rule_VN -->|unnamed| Length_20
    Address_validation_rule_VN -->|unnamed| Text
    Person_validation_rule_VN -->|unnamed| Alphabetical_string
    Person_validation_rule_VN -->|unnamed| Length_30
    Person_validation_rule_VN -->|unnamed| Contact_validation_rule_VN
    Commodity_validation_rule_VN -->|unnamed| Length_22
    Person_validation_rule_VN -->|unnamed| Separation_symbols
    Contact_validation_rule_VN -->|unnamed| Email
    Person_validation_rule_VN -->|unnamed| Latin_extended_characters
    Employment_validation_rule_VN -->|unnamed| Text
    Employment_validation_rule_VN -->|unnamed| Length60
    Employment_validation_rule_VN -->|unnamed| Date_in_past
    PaymentChannel_validation_rule_VN -->|unnamed| Account_number_validation
    PaymentChannel_validation_rule_VN -->|unnamed| Payment_provider_validation
    Commodity_validation_rule_VN -->|unnamed| Length50
    Commodity_validation_rule_VN -->|unnamed| Text_with_special_characters
    Person_validation_rule_VN -->|unnamed| Length_90
    Application_validation_rule_VN -->|unnamed| Date_after_1_1_1900_and_not_in_future
    Application_validation_rule_VN -->|unnamed| Employment_validation_rule_VN
    Application_validation_rule_VN -->|unnamed| Commodity_validation_rule_VN
    Application_validation_rule_VN -->|unnamed| Person_validation_rule_VN
    Application_validation_rule_VN -->|unnamed| Contact_validation_rule_VN
    Application_validation_rule_VN -->|unnamed| Length_256
    Application_validation_rule_VN -->|unnamed| Address_validation_rule_VN
    Application_validation_rule_VN -->|unnamed| Alphabetical_string
    Application_validation_rule_VN -->|unnamed| Text
    Contact_validation_rule_VN -->|unnamed| Length_6_digits
    Application_validation_rule_VN -->|unnamed| Date_format
    Contact_validation_rule_VN -->|unnamed| Length8_11_digits
    Application_validation_rule_VN -->|unnamed| Length_30
    Application_validation_rule_VN -->|unnamed| Length_9
    Application_validation_rule_VN -->|unnamed| VN_chars
    Application_validation_rule_VN -->|unnamed| Number_format
    Application_validation_rule_VN -->|unnamed| Total_number_of_related_persons
    Contact_validation_rule_VN -->|unnamed| Number_format
    Contact_validation_rule_VN -->|unnamed| Length50
    Application_validation_rule_VN -->|unnamed| PaymentChannel_validation_rule_VN
    Application_validation_rule_VN -->|unnamed| Length_2
```
