# Validation rules - ID

```mermaid
graph TD
    Account_holder_validation_ID_special_characters["Account holder validation - ID special characters"]
    Length_100["Length ‹= 100"]
    Mandatory["Mandatory"]
    Bank_name["Bank name"]
    Bank_branch_name["Bank branch name"]
    Account_holder_name["Account holder name"]
    n_6_30_digits["6-30 digits"]
    Account_number["Account number"]
    Account_number_validation["Account number validation"]
    Account_number_validation_ID_specific_error_message["Account number validation - ID specific error message"]
    Bank_Account_Validation_ID["Bank Account Validation - ID"]
    Account_number_validation_ID_specific_error_message -->|unnamed| Account_number_validation
    Account_number -->|unnamed| n_6_30_digits
    Bank_name -->|unnamed| Mandatory
    Bank_branch_name -->|unnamed| Mandatory
    Account_holder_name -->|unnamed| Length_100
    Account_holder_name -->|{ADD CBL-2304 PAYM-741}| Account_holder_validation_ID_special_characters
    Account_number_validation -->|unnamed| Account_number
```
