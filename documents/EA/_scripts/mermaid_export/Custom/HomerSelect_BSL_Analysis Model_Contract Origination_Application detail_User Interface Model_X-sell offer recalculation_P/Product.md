# Product

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/X-sell offer recalculation/Product
- **Diagram ID**: 159108
- **Elements**: 14
- **Connectors**: 1

```mermaid
graph TD
    Send_information_to_client["Send information to client"]
    n_01_061_Send_information_to_client_by_sms_to_process_applic["01.061 Send information to client by sms to process application form"]
    Information_received["Information received"]
    MOD_Primary_mobile["{MOD}Primary mobile"]
    Salary_Payment_Method["Salary Payment Method"]
    Countdown["Countdown"]
    Verification_code["Verification code"]
    MOD_Contact_under_verification["{MOD}Contact under verification"]
    Generate_verification_code["Generate verification code"]
    Verify_code["Verify code"]
    Result["Result"]
    Income["Income"]
    OTP["OTP"]
    X_sell_offer_recalculation["X-sell offer recalculation"]
    Send_information_to_client -->|unnamed| n_01_061_Send_information_to_client_by_sms_to_process_applic
```
