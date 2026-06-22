# PAYM-1520 (CBL-4166) FER - separation of interest and future interest

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- **Diagram ID**: 109285
- **Elements**: 27
- **Connectors**: 21

```mermaid
graph TD
    InstallmentPartDto["InstallmentPartDto"]
    Debt_on_interest_calculation["Debt on interest calculation"]
    Debt_on_other_installments_calculation["Debt on other installments calculation"]
    InstallmentPartTypeDto["InstallmentPartTypeDto"]
    Installment_Included_In_Operation["Installment Included In Operation"]
    InstallmentServiceWS_InstallmentServiceWS["InstallmentServiceWS : InstallmentServiceWS"]
    InstallmentScheduleWS_InstallmentScheduleWS["InstallmentScheduleWS : InstallmentScheduleWS"]
    InstallmentPartDto["InstallmentPartDto"]
    JMS_messages_CEL_Installment_schedule_JMS_messages["JMS messages : CEL Installment schedule - JMS messages"]
    Installment_schedule_Generated_JMS_messages_WriteOffNotifica["Installment schedule : Generated JMS messages - WriteOffNotification"]
    Installment_schedule_Generated_JMS_messages_Installment_Sche["Installment schedule : Generated JMS messages - Installment Schedule Info Request"]
    PayableItem["PayableItem"]
    InstallmentItem["InstallmentItem"]
    InstallmentPartTypeDto["InstallmentPartTypeDto"]
    Contract_Management_Global_Parameter["Contract Management Global Parameter"]
    Initial_setting_of_priority_pairing_for_countries["Initial setting of priority pairing for countries"]
    ALG_Get_sorted_installment_parts["ALG_Get sorted installment parts"]
    Full_early_repayment_processing["Full early repayment processing"]
    MOD_03_110_Perform_early_repayment_installment_schedule["{MOD} 03.110 Perform early repayment installment schedule"]
    Installment_Part_Type["Installment Part Type"]
    MOD_ALG_Early_repayment_calculation_A1["{MOD}ALG_Early repayment calculation A1"]
    Change_the_calculation_of_interest_to_accrued_interest_and_f["Change the calculation of interest to accrued interest and future interest"]
    Use_Case_model_Common_for_Early_repayment_Request_and_Proces["Use Case model : Common for Early repayment Request and Processing "]
    Early_repayment_result_Early_repayment_result["Early repayment result : Early repayment result"]
    MOD_03_070_Calculate_early_repayment_amount["{MOD}03.070 Calculate early repayment amount"]
    REQ2_FER_with_gift_payment_divide_the_charged_interest_into_["REQ2: FER with gift payment - divide the charged interest into accrued interest and future interest for the IS recalculation reason EG"]
    REQ1_FER_in_moratorium_divide_the_charged_interest_into_accr["REQ1: FER in moratorium - divide the charged interest into accrued interest and future interest for the IS recalculation reason EM"]
    Change_the_calculation_of_interest_to_accrued_interest_and_f -->|Add new global parameter SeparateFutureInterest| Contract_Management_Global_Parameter
    Change_the_calculation_of_interest_to_accrued_interest_and_f -->|Pairing priority for new Instalment Part Type IF (future interest) to be specified| Initial_setting_of_priority_pairing_for_countries
    Change_the_calculation_of_interest_to_accrued_interest_and_f -->|Include new instalment part type IF (future interest) in the ER instalment part types generating UC| MOD_03_110_Perform_early_repayment_installment_schedule
    Change_the_calculation_of_interest_to_accrued_interest_and_f -->|Adds new InstalmentPartType IF (Future Interest)| Installment_Part_Type
    Change_the_calculation_of_interest_to_accrued_interest_and_f -->|Divide the Interest calculation| MOD_ALG_Early_repayment_calculation_A1
    REQ2_FER_with_gift_payment_divide_the_charged_interest_into_ -->|unnamed| Change_the_calculation_of_interest_to_accrued_interest_and_f
    InstallmentScheduleWS_InstallmentScheduleWS -->|unnamed| InstallmentItem
    Change_the_calculation_of_interest_to_accrued_interest_and_f -->|Adds new InstalmentPartType IF (Future Interest)| InstallmentItem
    Change_the_calculation_of_interest_to_accrued_interest_and_f -->|Adds new InstalmentPartType IF (Future Interest)| PayableItem
    InstallmentServiceWS_InstallmentServiceWS -->|unnamed| PayableItem
    JMS_messages_CEL_Installment_schedule_JMS_messages -->|unnamed| InstallmentPartDto
    Change_the_calculation_of_interest_to_accrued_interest_and_f -->|Adds new Instalment PartType IF (Future Interest) - type 25| InstallmentPartDto
    REQ1_FER_in_moratorium_divide_the_charged_interest_into_accr -->|unnamed| Change_the_calculation_of_interest_to_accrued_interest_and_f
    Change_the_calculation_of_interest_to_accrued_interest_and_f -->|Instalment part type IF (future interest) to be added as included in operation| Installment_Included_In_Operation
    MOD_03_070_Calculate_early_repayment_amount -->|unnamed| MOD_ALG_Early_repayment_calculation_A1
    InstallmentPartDto -->|unnamed| InstallmentPartTypeDto
    Initial_setting_of_priority_pairing_for_countries -->|unnamed| ALG_Get_sorted_installment_parts
    Installment_Included_In_Operation -->|installmentPartType| Installment_Part_Type
    InstallmentPartDto -->|unnamed| InstallmentPartTypeDto
    Early_repayment_result_Early_repayment_result -->|unnamed| MOD_03_070_Calculate_early_repayment_amount
    MOD_03_070_Calculate_early_repayment_amount -->|unnamed| Use_Case_model_Common_for_Early_repayment_Request_and_Proces
```
