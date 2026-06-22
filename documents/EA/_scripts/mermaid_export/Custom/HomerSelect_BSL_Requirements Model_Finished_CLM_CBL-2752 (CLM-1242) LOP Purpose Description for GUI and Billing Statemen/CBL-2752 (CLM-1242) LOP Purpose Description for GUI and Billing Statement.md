# CBL-2752 (CLM-1242) LOP Purpose Description for GUI and Billing Statement

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2752 (CLM-1242) LOP Purpose Description for GUI and Billing Statement
- **Diagram ID**: 104029
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    User_Interface_Model_Cardless_cash_transaction_request_User_["User Interface Model : Cardless cash transaction request - User Interface"]
    n_12_630_Create_request_for_CASH_transaction_without_card["12.630 Create request for CASH transaction without card"]
    REQ_1_add_Loan_purpose_to_Cardless_transaction_request_form_["REQ#1 - add Loan purpose to Cardless transaction request form and to instalmentPlanOffers API"]
    REQ_1_add_Loan_purpose_to_Cardless_transaction_request_form_ -->|unnamed| n_12_630_Create_request_for_CASH_transaction_without_card
    n_12_630_Create_request_for_CASH_transaction_without_card -->|unnamed| User_Interface_Model_Cardless_cash_transaction_request_User_
```
