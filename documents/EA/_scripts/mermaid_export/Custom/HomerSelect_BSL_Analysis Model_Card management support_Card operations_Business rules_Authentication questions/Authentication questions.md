# Authentication questions

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions
- **Diagram ID**: 134511
- **Elements**: 17
- **Connectors**: 16

```mermaid
graph TD
    Get_Commodity_Type_data_by_code["Get Commodity Type data by code"]
    Get_Commodity_data_by_commodityId["Get Commodity data by commodityId"]
    Company_name_during_application_origination["Company name during application origination"]
    Customer_s_email_address["Customer's email address"]
    Date_of_card_contract_signing["Date of card contract signing"]
    Last_4_digits_of_credit_card["Last 4 digits of credit card"]
    Mobile_phone_number["Mobile phone number"]
    Credit_card_limit["Credit card limit"]
    Name_of_goods_purchased["Name of goods purchased"]
    Place_where_the_contract_was_signed["Place where the contract was signed"]
    Work_phone_number["Work phone number"]
    Home_phone_number["Home phone number"]
    Company_name_job_and_address["Company name, job and address"]
    Contact_address["Contact address"]
    Permanent_address["Permanent address"]
    Possession_of_the_card["Possession of the card"]
    Authentication_questions["Authentication questions"]
    Work_phone_number -->|unnamed| Authentication_questions
    Name_of_goods_purchased -->|unnamed| Get_Commodity_Type_data_by_code
    Place_where_the_contract_was_signed -->|unnamed| Authentication_questions
    Possession_of_the_card -->|unnamed| Authentication_questions
    Permanent_address -->|unnamed| Authentication_questions
    Contact_address -->|unnamed| Authentication_questions
    Name_of_goods_purchased -->|unnamed| Get_Commodity_data_by_commodityId
    Home_phone_number -->|unnamed| Authentication_questions
    Date_of_card_contract_signing -->|unnamed| Authentication_questions
    Customer_s_email_address -->|unnamed| Authentication_questions
    Company_name_during_application_origination -->|unnamed| Authentication_questions
    Name_of_goods_purchased -->|unnamed| Authentication_questions
    Credit_card_limit -->|unnamed| Authentication_questions
    Mobile_phone_number -->|unnamed| Authentication_questions
    Last_4_digits_of_credit_card -->|unnamed| Authentication_questions
    Company_name_job_and_address -->|unnamed| Authentication_questions
```
