# Cardless transaction request - Use case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/Use case model
- **Diagram ID**: 154140
- **Elements**: 17
- **Connectors**: 18

```mermaid
graph LR
    ResultCodeCreate_enumeration_localization["ResultCodeCreate enumeration localization"]
    User_Interface_Model_Cardless_POS_transaction_request_User_I["User Interface Model : Cardless POS transaction request - User Interface"]
    CIF[/"CIF"/]
    One_Time_Password_module[/"One Time Password module"/]
    Repeated_POS_transaction_creation_rule["Repeated POS transaction creation rule"]
    Commodity_module[/"Commodity module"/]
    Loan_Origination[/"Loan Origination"/]
    n_12_632_Create_request_for_POS_transaction_without_card(("12.632 Create request for POS transaction without card"))
    Account_Transactions_AuthorizeTransactionWithIPVariant["Account Transactions : AuthorizeTransactionWithIPVariant"]
    Consumed_services_Get_instalmentPlanOffers["Consumed services : Get instalmentPlanOffers"]
    Repeated_cash_transaction_creation_rule["Repeated cash transaction creation rule"]
    User_Interface_Model_Cardless_cash_transaction_request_User_["User Interface Model :Cardless cash transaction request - User Interface"]
    User_interface_Show_account_detail["User interface : Show account detail"]
    CaBus_AM[/"CaBus-AM"/]
    User[/"User"/]
    Account_detail["Account detail"]
    n_12_630_Create_request_for_CASH_transaction_without_card(("12.630 Create request for CASH transaction without card"))
    n_12_632_Create_request_for_POS_transaction_without_card -->|unnamed| Repeated_POS_transaction_creation_rule
    User_Interface_Model_Cardless_POS_transaction_request_User_I -->|unnamed| n_12_632_Create_request_for_POS_transaction_without_card
    n_12_632_Create_request_for_POS_transaction_without_card -->|unnamed| ResultCodeCreate_enumeration_localization
    Consumed_services_Get_instalmentPlanOffers -->|unnamed| n_12_632_Create_request_for_POS_transaction_without_card
    Account_Transactions_AuthorizeTransactionWithIPVariant -->|unnamed| n_12_632_Create_request_for_POS_transaction_without_card
    n_12_630_Create_request_for_CASH_transaction_without_card -->|unnamed| Repeated_cash_transaction_creation_rule
    n_12_630_Create_request_for_CASH_transaction_without_card -->|unnamed| Account_detail
    User_interface_Show_account_detail -->|unnamed| Account_detail
    Account_Transactions_AuthorizeTransactionWithIPVariant -->|unnamed| n_12_630_Create_request_for_CASH_transaction_without_card
    User_Interface_Model_Cardless_cash_transaction_request_User_ -->|unnamed| n_12_630_Create_request_for_CASH_transaction_without_card
    Loan_Origination --> n_12_632_Create_request_for_POS_transaction_without_card
    One_Time_Password_module --> n_12_632_Create_request_for_POS_transaction_without_card
    User --> n_12_630_Create_request_for_CASH_transaction_without_card
    User --> n_12_632_Create_request_for_POS_transaction_without_card
    Commodity_module --> n_12_632_Create_request_for_POS_transaction_without_card
    CaBus_AM --> n_12_632_Create_request_for_POS_transaction_without_card
    CaBus_AM --> n_12_630_Create_request_for_CASH_transaction_without_card
    CIF --> n_12_632_Create_request_for_POS_transaction_without_card
```
