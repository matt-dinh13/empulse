# Cardless POS transaction request - User Interface

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model
- **Diagram ID**: 154139
- **Elements**: 30
- **Connectors**: 10

```mermaid
graph TD
    Amount_0_and_Amount_Available_Balance["Amount › 0 and Amount ‹= Available Balance"]
    Mandatory_if_field_is_enabled["Mandatory if field is enabled"]
    Skip_verification["Skip verification"]
    Mandatory["Mandatory"]
    Validation_rules_for_Cardless_POS_transaction["Validation rules for Cardless POS transaction"]
    Confirm_offer["Confirm offer"]
    Cancel["Cancel"]
    List_of_installment_plan_offers["List of installment plan offers"]
    Installment_plan_offers["Installment plan offers"]
    n_12_632_Create_request_for_POS_transaction_without_card["12.632 Create request for POS transaction without card"]
    Confirm_commodity["Confirm commodity"]
    Result["Result"]
    Verification_code["Verification code"]
    Verify_code["Verify code"]
    Generate_verification_code["Generate verification code"]
    Verified_contact["Verified contact"]
    Transaction_verification["Transaction verification"]
    Available_balance["Available balance"]
    Client_full_name["Client full name"]
    Account_number["Account number"]
    Information_area["Information area"]
    IMEI["IMEI"]
    Manufacturer["Manufacturer"]
    Price["Price"]
    Serial_number["Serial number"]
    Model["Model"]
    Commodity_type["Commodity type"]
    Commodity_category["Commodity category"]
    Financed_commodity["Financed commodity"]
    Cardless_POS_transaction_request["Cardless POS transaction request"]
    Cardless_POS_transaction_request -->|unnamed| n_12_632_Create_request_for_POS_transaction_without_card
    Validation_rules_for_Cardless_POS_transaction -->|unnamed| Mandatory
    Price -->|unnamed| Mandatory
    Commodity_type -->|unnamed| Mandatory
    Commodity_category -->|unnamed| Mandatory
    Validation_rules_for_Cardless_POS_transaction -->|unnamed| Mandatory_if_field_is_enabled
    Manufacturer -->|unnamed| Mandatory_if_field_is_enabled
    Model -->|unnamed| Mandatory_if_field_is_enabled
    Validation_rules_for_Cardless_POS_transaction -->|unnamed| Amount_0_and_Amount_Available_Balance
    Price -->|unnamed| Amount_0_and_Amount_Available_Balance
```
