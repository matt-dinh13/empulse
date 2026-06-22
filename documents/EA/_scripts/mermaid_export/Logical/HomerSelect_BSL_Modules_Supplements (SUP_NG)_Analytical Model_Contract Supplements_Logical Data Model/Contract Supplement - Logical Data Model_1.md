# Contract Supplement - Logical Data Model

```mermaid
classDiagram
    class Document["Document"]
    class Supplement["Supplement"]
    class Sales_Quote_Item["Sales Quote Item"]
    class SQ_Relationship["SQ Relationship"]
    class Sales_Quote_Applied["Sales Quote Applied"]
    class Transaction_Change_Request["Transaction Change Request"]
    class Request_Source_Id["Request Source Id"]
    class Account_Transaction["Account Transaction"]
    class Account_Transaction_Supplement["Account Transaction Supplement"]
    class Client_Supplement_Document["Client Supplement Document"]
    class Contract_Supplement_Status_Transitions_Reason["Contract Supplement Status Transitions Reason"]
    class Contract_Supplement_Registration_Status_Transition["Contract Supplement Registration Status Transition"]
    class Contract_Supplement_Status_Type["Contract Supplement Status Type"]
    class Contract_Supplement_Custom_Data["Contract Supplement Custom Data"]
    class Contract_Supplement_Document["Contract Supplement Document"]
    class Contract_Supplement_Status_Transition["Contract Supplement Status Transition"]
    class Contract_Supplement["Contract Supplement"]
    class MOD_Contract["{MOD}Contract"]
    Contract_Supplement_Status_Transition --> Contract_Supplement_Status_Transitions_Reason : unnamed
    Contract_Supplement --> Supplement : unnamed
    Account_Transaction --> Sales_Quote_Item : unnamed
    Sales_Quote_Item --> Sales_Quote_Applied : unnamed
    Sales_Quote_Applied --> Sales_Quote_Applied : unnamed
    Contract_Supplement --> Request_Source_Id : unnamed
    Transaction_Change_Request --> Account_Transaction : unnamed
    Transaction_Change_Request --> Account_Transaction_Supplement : unnamed
    Client_Supplement_Document --> Document : unnamed
    unnamed --> Account_Transaction_Supplement : unnamed
    Contract_Supplement_Status_Transition --> Contract_Supplement : unnamed
    Contract_Supplement_Status_Transitions_Reason --> Contract_Supplement_Status_Type : unnamed
    Contract_Supplement_Status_Transition --> Contract_Supplement_Status_Type : unnamed
    Contract_Supplement --> Contract_Supplement_Status_Type : unnamed
    Client_Supplement_Document --> Contract_Supplement : unnamed
    Account_Transaction_Supplement --> Contract_Supplement : unnamed
    Contract_Supplement_Registration_Status_Transition --> Contract_Supplement : unnamed
    Contract_Supplement_Custom_Data --> Contract_Supplement : unnamed
    Contract_Supplement_Document --> Contract_Supplement : unnamed
    Sales_Quote_Applied --> Account_Transaction_Supplement : unnamed
```
