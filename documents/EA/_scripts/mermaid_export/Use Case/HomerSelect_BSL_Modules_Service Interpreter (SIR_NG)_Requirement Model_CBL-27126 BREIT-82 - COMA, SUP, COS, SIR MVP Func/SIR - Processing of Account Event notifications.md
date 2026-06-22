# SIR - Processing of Account Event notifications

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-27126 BREIT-82 - COMA, SUP, COS, SIR MVP Functionalities
- **Diagram ID**: 161634
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph LR
    MOD_SIR_Create_Contract_Service_in_COS["{MOD}SIR - Create Contract Service in COS"]
    MOD_SIR_Adding_Sales_Quote_to_Contract_Supplement_in_SUP["{MOD}SIR - Adding Sales Quote to Contract Supplement in SUP"]
    MOD_Get_Contract_Service_by_Contract_code_from_COS["{MOD}Get Contract Service by Contract code from COS"]
    SIR_Get_Sales_Quotes_by_codes_from_SQS["SIR - Get Sales Quotes by codes from SQS"]
    MOD_SIR_Get_Contract_Supplements_by_Contract_from_SUP["{MOD}SIR - Get Contract Supplements by Contract from SUP"]
    SIR_Get_Application_data_by_code_from_ADS["SIR - Get Application data by code from ADS"]
    ADD_16_022_Process_Sales_Quotes_for_Transaction(("{ADD}16.022 Process Sales Quotes for Transaction"))
    AM_Account[/"AM.Account"/]
    MOD_16_040_Process_Account_Event_notifications(("{MOD}16.040 Process Account Event notifications"))
    ADD_16_022_Process_Sales_Quotes_for_Transaction -->|unnamed| MOD_SIR_Adding_Sales_Quote_to_Contract_Supplement_in_SUP
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| MOD_SIR_Adding_Sales_Quote_to_Contract_Supplement_in_SUP
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| SIR_Get_Sales_Quotes_by_codes_from_SQS
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| MOD_SIR_Get_Contract_Supplements_by_Contract_from_SUP
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| MOD_Get_Contract_Service_by_Contract_code_from_COS
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| MOD_SIR_Create_Contract_Service_in_COS
    MOD_16_040_Process_Account_Event_notifications -->|unnamed| SIR_Get_Application_data_by_code_from_ADS
    AM_Account --- MOD_16_040_Process_Account_Event_notifications
```
