# Processing Cardless Transaction request (BL)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16152 (CSI-1340) Contract service modularization - analysis/Processing Cardless Transaction request
- **Diagram ID**: 151168
- **Elements**: 31
- **Connectors**: 25

```mermaid
classDiagram
    class Notifications["Notifications"]
    class Document["Document"]
    class Notify_customer_about_result["Notify customer about result"]
    class KAFKA["KAFKA"]
    class Create_Datasource["Create Datasource"]
    class Data_Source_M["Data Source M"]
    class Confirm_transaction["Confirm transaction"]
    class AuthorizeTransaction["AuthorizeTransaction"]
    class Account_Management["Account Management"]
    class Create_transaction_authorization_confirmation["Create transaction authorization/confirmation"]
    class Update_ContractSupplement["Update ContractSupplement"]
    class Create_Contract_Supplement_by_Type["Create Contract Supplement by Type"]
    class Create_Contract_Supplement["Create Contract Supplement"]
    class ContractSupplement["ContractSupplement"]
    class Contract_Supplement_domain["Contract Supplement domain"]
    class Update_Document_File["Update Document File"]
    class Update_transaction_documents["Update transaction documents"]
    class Accept_cardless_transaction["Accept cardless transaction"]
    class Transaction_documents_accepted_by_client["Transaction documents accepted by client"]
    class Show_transaction_documents["Show transaction documents"]
    class Notifications["Notifications"]
    class Generate_transaction_documents["Generate transaction documents"]
    class DMS_CreateDocument["DMS.CreateDocument"]
    class Request_for_Cardless_POS_transaction["Request for Cardless POS transaction"]
    class Client_accept_transaction_documents["Client accept transaction documents"]
    class Client_confirm_offer["Client confirm offer"]
    class Create_Transaction_Supplement_by_type["Create Transaction Supplement by type"]
    class POS_Cash_transaction_origination_process["POS/Cash transaction origination process"]
    class Transaction_Supplement_service["Transaction Supplement service"]
    class DMS["DMS"]
    Create_Contract_Supplement_by_Type ..> Create_Contract_Supplement : unnamed
    DMS_CreateDocument ..> Document : unnamed
    Update_Document_File ..> Document : unnamed
    Notify_customer_about_result ..> KAFKA : unnamed
    Notifications --> KAFKA : unnamed
    Show_transaction_documents ..> KAFKA : unnamed
    Notifications --> KAFKA : unnamed
    Generate_transaction_documents ..> Create_Datasource : unnamed
    Create_transaction_authorization_confirmation ..> Confirm_transaction : POS
    Create_transaction_authorization_confirmation ..> AuthorizeTransaction : CASH
    Update_transaction_documents --> Create_transaction_authorization_confirmation : unnamed
    ContractSupplement --> Notifications : unnamed
    Create_Transaction_Supplement_by_type --> Create_Contract_Supplement_by_Type : unnamed
    Request_for_Cardless_POS_transaction ..> Create_Transaction_Supplement_by_type : unnamed
    Update_ContractSupplement ..> ContractSupplement : unnamed
    Create_Contract_Supplement ..> ContractSupplement : unnamed
    Update_transaction_documents ..> Update_Document_File : unnamed
    Accept_cardless_transaction --> Update_transaction_documents : unnamed
    Transaction_documents_accepted_by_client ..> Accept_cardless_transaction : unnamed
    Client_accept_transaction_documents --> Transaction_documents_accepted_by_client : unnamed
    Generate_transaction_documents --> Notifications : unnamed
    Create_Contract_Supplement_by_Type --> Generate_transaction_documents : unnamed
    Generate_transaction_documents ..> DMS_CreateDocument : unnamed
    Client_confirm_offer --> Request_for_Cardless_POS_transaction : unnamed
    Update_transaction_documents ..> Update_ContractSupplement : unnamed
```
