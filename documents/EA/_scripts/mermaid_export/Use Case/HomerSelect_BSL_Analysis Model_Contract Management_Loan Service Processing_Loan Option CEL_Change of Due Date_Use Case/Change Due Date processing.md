# Change Due Date processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/Use Case
- **Diagram ID**: 136738
- **Elements**: 14
- **Connectors**: 12

```mermaid
graph LR
    MOD_Calculation_of_Loan_Service_parameters["{MOD}Calculation of Loan Service parameters"]
    Calculation_of_ExpectedEndDate["Calculation of ExpectedEndDate"]
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    Calculation_of_Presented_IR_types["Calculation of Presented IR types"]
    MOD_Generate_installment_schedule_algorithm["{MOD}Generate installment schedule algorithm"]
    Annuity_calculation["Annuity calculation"]
    Maximal_Version_of_Installment_Schedule["Maximal Version of Installment Schedule"]
    MOD_05_200_Perform_decoupling(("{MOD}05.200 Perform decoupling"))
    Decisive_dates_for_New_Due_Date["Decisive dates for New Due Date"]
    User_Interface_Change_Due_Date["User Interface :Change Due Date"]
    Allow_Change_of_Due_Day["Allow Change of Due Day"]
    Tab9_Services_Contract_detail_Tab_Services["Tab9-Services : Contract detail - Tab Services"]
    User[/"User"/]
    MOD_08_060_Change_Due_Date(("{MOD}08.060 Change Due Date"))
    MOD_08_060_Change_Due_Date -->|unnamed| Allow_Change_of_Due_Day
    MOD_08_060_Change_Due_Date -->|unnamed| User_Interface_Change_Due_Date
    MOD_08_060_Change_Due_Date -->|unnamed| Decisive_dates_for_New_Due_Date
    MOD_08_060_Change_Due_Date -.->|include| MOD_05_200_Perform_decoupling
    MOD_08_060_Change_Due_Date -->|unnamed| Maximal_Version_of_Installment_Schedule
    MOD_08_060_Change_Due_Date -->|unnamed| Annuity_calculation
    MOD_08_060_Change_Due_Date -->|unnamed| MOD_Generate_installment_schedule_algorithm
    MOD_08_060_Change_Due_Date -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_08_060_Change_Due_Date -->|unnamed| Calculation_of_ExpectedEndDate
    MOD_08_060_Change_Due_Date -->|unnamed| MOD_Calculation_of_Loan_Service_parameters
    User --- MOD_08_060_Change_Due_Date
    MOD_05_180_Perform_coupling_payments_with_instalments -.->|include| MOD_05_200_Perform_decoupling
```
