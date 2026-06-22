# Determine installment schedule processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model
- **Diagram ID**: 164460
- **Elements**: 15
- **Connectors**: 13

```mermaid
graph LR
    MOD_Process_CashDisbursementConfirmedSE(("{MOD}Process CashDisbursementConfirmedSE"))
    Use_Case_Model_Processing_disbursement_confirmation_message["Use Case Model : Processing disbursement confirmation message"]
    Use_Case_Model_Disbursement_confirmations["Use Case Model : Disbursement confirmations"]
    Account_Notifications_CEL_Consumed_JMS_messages_Account_Open["Account  Notifications (CEL) : Consumed JMS messages - Account Opened"]
    Calculation_of_ExpectedEndDate["Calculation of ExpectedEndDate"]
    n_01_474_Calculate_CEL_debt_info(("01.474 Calculate CEL debt info"))
    MOD_Evaluate_First_Installment_Due_Date["{MOD}Evaluate First Installment Due Date"]
    Total_Payment_Per_Credit["Total Payment Per Credit"]
    Total_Monthly_Payment_definition["Total Monthly Payment definition"]
    MOD_Annuity_base_amount_definition["{MOD}Annuity base amount definition"]
    Annuity_calculation["Annuity calculation"]
    UseCase_Model_Contract_signing["UseCase Model : Contract signing"]
    MOD_Update_data_in_contract_related_structures["{MOD}Update data in contract related structures"]
    System_event[/"System event"/]
    MOD_01_191_Process_installment_schedule_generation_after_dis(("{MOD}01.191 Process installment schedule generation after disbursement"))
    MOD_01_191_Process_installment_schedule_generation_after_dis -->|unnamed| Calculation_of_ExpectedEndDate
    MOD_01_191_Process_installment_schedule_generation_after_dis -->|unnamed| n_01_474_Calculate_CEL_debt_info
    MOD_01_191_Process_installment_schedule_generation_after_dis -->|unnamed| MOD_Evaluate_First_Installment_Due_Date
    MOD_01_191_Process_installment_schedule_generation_after_dis -->|unnamed| Annuity_calculation
    MOD_01_191_Process_installment_schedule_generation_after_dis -->|unnamed| Total_Monthly_Payment_definition
    MOD_01_191_Process_installment_schedule_generation_after_dis -->|unnamed| MOD_Annuity_base_amount_definition
    System_event --- MOD_Process_CashDisbursementConfirmedSE
    MOD_Update_data_in_contract_related_structures -->|unnamed| n_01_474_Calculate_CEL_debt_info
    UseCase_Model_Contract_signing -->|unnamed| MOD_Update_data_in_contract_related_structures
    Total_Payment_Per_Credit -->|unnamed| Total_Monthly_Payment_definition
    Account_Notifications_CEL_Consumed_JMS_messages_Account_Open -->|unnamed| MOD_01_191_Process_installment_schedule_generation_after_dis
    Use_Case_Model_Disbursement_confirmations -->|unnamed| MOD_01_191_Process_installment_schedule_generation_after_dis
    Use_Case_Model_Processing_disbursement_confirmation_message -->|unnamed| MOD_01_191_Process_installment_schedule_generation_after_dis
```
