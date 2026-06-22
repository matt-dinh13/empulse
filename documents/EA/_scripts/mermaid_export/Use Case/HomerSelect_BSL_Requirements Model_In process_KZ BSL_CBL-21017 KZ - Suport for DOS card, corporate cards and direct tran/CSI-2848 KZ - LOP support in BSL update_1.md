# CSI-2848 KZ - LOP support in BSL update

```mermaid
graph TD
    Account_Transactions_AuthorizeTransactionWithIPVariant["Account Transactions : AuthorizeTransactionWithIPVariant"]
    Repeated_cash_transaction_creation_rule["Repeated cash transaction creation rule"]
    User_Interface_Model_Cardless_cash_transaction_request_User_["User Interface Model :Cardless cash transaction request - User Interface"]
    User_interface_Show_account_detail["User interface : Show account detail"]
    CaBus_AM["CaBus-AM"]
    User["User"]
    Account_detail["Account detail"]
    n_12_630_Create_request_for_CASH_transaction_without_card["12.630 Create request for CASH transaction without card"]
    Consumed_services_Get_instalmentPlanOffers["Consumed services : Get instalmentPlanOffers"]
    Account_Transactions_AuthorizeTransactionWithIPVariant -->|unnamed| n_12_630_Create_request_for_CASH_transaction_without_card
    User_Interface_Model_Cardless_cash_transaction_request_User_ -->|unnamed| n_12_630_Create_request_for_CASH_transaction_without_card
    User_interface_Show_account_detail -->|unnamed| Account_detail
    n_12_630_Create_request_for_CASH_transaction_without_card -->|unnamed| Account_detail
    n_12_630_Create_request_for_CASH_transaction_without_card -->|unnamed| Repeated_cash_transaction_creation_rule
    User -->|unnamed| n_12_630_Create_request_for_CASH_transaction_without_card
    CaBus_AM -->|unnamed| n_12_630_Create_request_for_CASH_transaction_without_card
```
