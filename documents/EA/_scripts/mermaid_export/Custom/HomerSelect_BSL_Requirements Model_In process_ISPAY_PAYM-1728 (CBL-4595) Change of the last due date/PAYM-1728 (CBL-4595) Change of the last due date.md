# PAYM-1728 (CBL-4595) Change of the last due date

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1728 (CBL-4595) Change of the last due date
- **Diagram ID**: 113098
- **Elements**: 14
- **Connectors**: 9

```mermaid
graph TD
    User_Interface_Model_Back_Office_panel["User Interface Model : Back Office panel"]
    Back_Office_Installments["Back Office Installments"]
    Contract_Management_Contract_Management_Global_Parameter["Contract Management : Contract Management Global Parameter"]
    Use_Case_Model_PER_request_processing["Use Case Model : PER request processing"]
    REQ_3_Display_original_last_due_date_in_GUI["REQ#3 Display original last due date in GUI"]
    n_08_057_Perform_Partial_early_repayment["08.057 Perform Partial early repayment"]
    el_1366142["Text"]
    ADD_Process_newly_imported_non_working_days["{ADD}Process newly imported non-working days"]
    Non_working_Day["Non-working Day"]
    Use_Case_Model_Generate_installment_schedule["Use Case Model : Generate installment schedule"]
    REQ_2_Shift_last_installment_due_date_during_IS_generation["REQ#2 Shift last installment due date during IS generation"]
    REQ_1_XLSX_structure_and_mBean_for_import_of_non_working_day["REQ#1 XLSX structure and mBean for import of non-working days"]
    PAYM_1728_CBL_4595_Change_of_the_last_duedate["PAYM-1728 (CBL-4595) Change of the last duedate"]
    MOD_Generate_installment_schedule_algorithm["{MOD}Generate installment schedule algorithm"]
    REQ_1_XLSX_structure_and_mBean_for_import_of_non_working_day -->|unnamed| PAYM_1728_CBL_4595_Change_of_the_last_duedate
    REQ_2_Shift_last_installment_due_date_during_IS_generation -->|unnamed| PAYM_1728_CBL_4595_Change_of_the_last_duedate
    REQ_2_Shift_last_installment_due_date_during_IS_generation -->|unnamed| Use_Case_Model_Generate_installment_schedule
    REQ_3_Display_original_last_due_date_in_GUI -->|unnamed| PAYM_1728_CBL_4595_Change_of_the_last_duedate
    REQ_3_Display_original_last_due_date_in_GUI -->|unnamed| User_Interface_Model_Back_Office_panel
    Use_Case_Model_PER_request_processing -->|unnamed| REQ_2_Shift_last_installment_due_date_during_IS_generation
    Contract_Management_Contract_Management_Global_Parameter -->|unnamed| REQ_2_Shift_last_installment_due_date_during_IS_generation
    n_08_057_Perform_Partial_early_repayment -->|unnamed| MOD_Generate_installment_schedule_algorithm
    ADD_Process_newly_imported_non_working_days -->|unnamed| Non_working_Day
```
