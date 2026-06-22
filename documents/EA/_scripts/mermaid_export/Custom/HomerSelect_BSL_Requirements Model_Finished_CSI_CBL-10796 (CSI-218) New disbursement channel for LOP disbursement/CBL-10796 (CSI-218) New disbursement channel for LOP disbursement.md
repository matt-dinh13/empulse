# CBL-10796 (CSI-218) New disbursement channel for LOP disbursement

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10796 (CSI-218) New disbursement channel for LOP disbursement
- **Diagram ID**: 136451
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    User_Interface_Model_Cardless_cash_transaction_request_User_["User Interface Model : Cardless cash transaction request - User Interface"]
    REQ_1_Redesign_of_the_LOP_transaction_request_function["REQ #1 - Redesign of the LOP transaction request function"]
    n_12_630_Create_request_for_CASH_transaction_without_card["12.630 Create request for CASH transaction without card"]
    Use_case_model_Cardless_transaction_request_Use_case_model["Use case model : Cardless transaction request - Use case model"]
    Use_case_model_Cardless_transaction_request_Use_case_model -->|unnamed| REQ_1_Redesign_of_the_LOP_transaction_request_function
    User_Interface_Model_Cardless_cash_transaction_request_User_ -->|unnamed| REQ_1_Redesign_of_the_LOP_transaction_request_function
```
