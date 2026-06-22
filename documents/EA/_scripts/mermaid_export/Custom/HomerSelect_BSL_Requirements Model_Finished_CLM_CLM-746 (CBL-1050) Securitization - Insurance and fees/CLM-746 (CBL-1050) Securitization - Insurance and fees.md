# CLM-746 (CBL-1050) Securitization - Insurance and fees

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-746 (CBL-1050) Securitization - Insurance and fees
- **Diagram ID**: 103350
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    Debt_Securitization_Debt_Securitization["Debt Securitization : Debt Securitization"]
    Contract_Securitization_Generated_JMS_messages_Contract_Secu["Contract Securitization : Generated JMS messages - Contract Securitization"]
    Req_2_ContractSecuritizationNotification_message_extension["Req#2 - ContractSecuritizationNotification message extension"]
    Req_1_New_items_calculated_for_contract_securitization["Req#1 - New items calculated for contract securitization"]
    Use_case_model_Contract_securitization["Use case model : Contract securitization"]
    Logical_Data_model_Contract_securitization_LDM["Logical Data model : Contract securitization - LDM"]
    Req_1_New_items_calculated_for_contract_securitization -->|unnamed| Use_case_model_Contract_securitization
    Req_1_New_items_calculated_for_contract_securitization -->|unnamed| Logical_Data_model_Contract_securitization_LDM
    Contract_Securitization_Generated_JMS_messages_Contract_Secu -->|unnamed| Req_2_ContractSecuritizationNotification_message_extension
    Debt_Securitization_Debt_Securitization -->|unnamed| Req_1_New_items_calculated_for_contract_securitization
```
