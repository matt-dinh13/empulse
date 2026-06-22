# Campaign processing result - LDM

```mermaid
classDiagram
    class Campaign_Result_Item["Campaign Result Item"]
    class Credit_Limit_Change_Result_Item["Credit Limit Change Result Item"]
    class Credit_Limit_Change_Result["Credit Limit Change Result"]
    class Campaign_Processing_Result["Campaign Processing Result"]
    class Dataset_Type["Dataset Type"]
    class Batch_Status_Type["Batch Status Type"]
    class Data_Processed_Batch["Data Processed Batch"]
    Campaign_Processing_Result --> Data_Processed_Batch : unnamed
    Data_Processed_Batch --> Batch_Status_Type : unnamed
    Data_Processed_Batch --> Dataset_Type : unnamed
    Credit_Limit_Change_Result --> Campaign_Processing_Result : unnamed
    Credit_Limit_Change_Result --> Credit_Limit_Change_Result_Item : unnamed
    Campaign_Processing_Result --> Campaign_Result_Item : unnamed
```
