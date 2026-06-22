# OVERVIEW - Installment Schedule

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Installment Schedule
- **Diagram ID**: 147413
- **Elements**: 143
- **Connectors**: 148

```mermaid
graph LR
    MOD_01_715_Finish_contract_automatically["{MOD}01.715 Finish contract automatically"]
    n_04_110_Process_charging_requests(("04.110 Process charging requests"))
    MOD_04_140_Charge_fees(("{MOD}04.140 Charge fees"))
    n_04_150_Charge_Penalty_Registered_Over_Limit(("04.150 Charge Penalty Registered Over Limit"))
    Set_contract_status_to_paid_off_rule["Set contract status to paid-off rule"]
    DEL_01_550_Process_request_for_contract_write_off["{DEL}01.550 Process request for contract write-off "]
    Calculate_Tariff_Item_amount_for_period_from_debt["Calculate Tariff Item amount for period from debt"]
    DEL_05_500_Create_refund_automatically(("{DEL} 05.500 Create refund automatically"))
    n_05_047_Perform_incoming_payment_cancellation_tasks["05.047 Perform  incoming payment cancellation tasks"]
    n_05_080_Create_incoming_payment_manually["05.080 Create incoming payment manually"]
    n_05_040_Cancel_incoming_payment_manually["05.040 Cancel incoming payment manually"]
    External_Reference["External Reference"]
    n_05_183_Process_batch_of_incoming_payment_processing_reques["05.183 Process batch of incoming payment processing requests"]
    External_Reference["External Reference"]
    External_Reference["External Reference"]
    n_05_295_Pair_incoming_payments_from_file["05.295 Pair incoming payments from file"]
    n_05_010_Import_incoming_payments_file["05.010 Import incoming payments file"]
    n_05_602_Create_incoming_payment_on_POS["05.602 Create incoming payment on POS"]
    n_05_290_Confirm_incoming_payment_file["05.290 Confirm incoming payment file"]
    ADD_01_563_Process_contract_write_off["{ADD}01.563 Process contract write-off "]
    Structure_of_success_message_for_disbursement_confirmation["Structure of success message for disbursement confirmation"]
    n_05_300_Import_disbursement_confirmations(("05.300 Import disbursement confirmations"))
    MOD_05_310_Process_disbursement_confirmations(("{MOD}05.310 Process disbursement confirmations"))
    MOD_Structure_of_message_and_error_report_for_disbursement_c["{MOD}Structure of message and error report for disbursement confirmations"]
    Update_Overdue_Debt_job["Update Overdue Debt job"]
    DEL_DPD_statistics_recalculation_job["{DEL}DPD statistics recalculation job"]
    Debt_catalog_values_on_contract_cancellation["Debt catalog values on contract cancellation "]
    Debt_catalogue_calculation_formula["Debt catalogue calculation formula"]
    Calculate_debt_on_interest_to_the_passed_date_from_installme["Calculate debt on interest to the passed date (from installment schedule)"]
    n_01_479_Show_supposed_debt_for_REL_contract(("01.479 Show supposed debt for REL contract"))
    n_01_478_Show_supposed_debt_for_CEL_contract(("01.478 Show supposed debt for CEL contract"))
    n_01_485_Publish_debt_full_info_job(("01.485 Publish debt full info job"))
    DEL_01_482_Update_debt_statistics(("{DEL}01.482 Update debt statistics"))
    n_01_470_Update_contract_debt_catalog(("01.470 Update contract debt catalog"))
    n_01_476_Process_contract_debt_change_request(("01.476 Process contract debt change request"))
    MOD_01_473_Show_debt_catalogue_detail(("{MOD}01.473 Show debt catalogue detail"))
    n_01_472_Push_debt_catalogue_to_external_system(("01.472 Push debt catalogue to external system"))
    n_01_474_Calculate_CEL_debt_info(("01.474 Calculate CEL debt info"))
    MOD_01_475_Update_overdue_debt_in_job(("{MOD}01.475 Update overdue debt in job"))
    n_01_483_Calculate_debt_on_external_request(("01.483 Calculate debt on external request"))
    n_01_481_Get_debt_statistics(("01.481 Get debt statistics"))
    n_01_471_Get_debt_catalogue_for_external_system(("01.471 Get debt catalogue for external system"))
    n_11_121_Terminate_insurance_contract_manually(("11.121 Terminate insurance contract manually"))
    MOD_11_111_Cancel_insurance_contract_manually(("{MOD}11.111 Cancel insurance contract manually"))
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service(("08.409 Evaluate Checking Terms of Loan Service"))
    MOD_08_362_Process_payment_holiday_request(("{MOD}08.362 Process payment holiday request"))
    MOD_08_280_Check_and_process_CET_request(("{MOD}08.280 Check and process CET request"))
    n_08_262_Process_Fees_back_service(("08.262 Process Fees-back service"))
    MOD_08_252_Process_cooling_off_period(("{MOD}08.252 Process cooling-off period"))
    n_08_063_Process_request_for_change_due_date(("08.063 Process request for change due date"))
    n_08_057_Perform_Partial_early_repayment(("08.057 Perform Partial early repayment"))
    n_03_100_Check_and_process_Early_repayment_request(("03.100 Check and process Early repayment request"))
    NotImplemented_08_100_Process_Full_early_repayment(("{NotImplemented}08.100 Process Full early repayment"))
    MOD_08_220_Check_and_process_Grace_period(("{MOD}08.220 Check and process Grace period"))
    MOD_08_060_Change_Due_Date(("{MOD}08.060 Change Due Date"))
    MOD_08_406_Process_request_for_loan_restructuring(("{MOD}08.406 Process request for loan restructuring"))
    n_01_901_Perform_contract_sale(("01.901 Perform contract sale"))
    n_01_486_Calculate_debt_full_info(("01.486 Calculate debt full info"))
    MOD_01_186_Prepare_documentation(("{MOD}01.186 Prepare documentation"))
    n_08_230_Process_Gift_payment_automatically(("08.230 Process Gift payment automatically"))
    MOD_08_210_Check_and_process_Gift_payment(("{MOD}08.210 Check and process Gift payment"))
    n_08_202_Evaluate_status_of_Gift_payment(("08.202 Evaluate status of Gift payment"))
    MOD_05_200_Perform_decoupling(("{MOD}05.200 Perform decoupling"))
    n_05_060_Decouple_incoming_payment_manually(("05.060 Decouple incoming payment manually"))
    n_05_030_Couple_incoming_payment_manually(("05.030 Couple incoming payment manually"))
    n_05_185_Prepare_payments_to_pairing(("05.185 Prepare payments to pairing"))
    n_05_061_Decouple_incoming_payments_from_IS_on_local_request(("05.061 Decouple incoming payments from IS on local request"))
    n_05_031_Couple_incoming_payments_with_IS_on_local_request(("05.031 Couple incoming payments with IS on local request"))
    MOD_05_184_Reflect_change_of_balance(("{MOD}05.184 Reflect change of balance"))
    Pairing_priority_methods_examples["Pairing priority methods examples"]
    Pairing_priority_for_suppress_due_date_method_example["Pairing priority for suppress due date method example"]
    Initial_setting_of_priority_pairing_for_countries["Initial setting of priority pairing for countries"]
    Exclude_specific_installment_parts_from_pairing_KZ["Exclude specific installment parts from pairing - KZ"]
    ADD_Unpair_payment_request_validation["{ADD}Unpair payment request validation"]
    MOD_Pair_payment_request_validation["{MOD}Pair payment request validation"]
    Find_contract_by_transaction_ID_of_paired_payment["Find contract by transaction ID of paired payment"]
    Standard_priority_pairing_method_for_particular_T_C["Standard priority pairing method for particular TandC"]
    Standard_priority_pairing_method["Standard priority pairing method"]
    Highest_DPD_priority_pairing_method_for_particular_T_C["Highest DPD priority pairing method for particular TandC"]
    Highest_DPD_priority_pairing_method["Highest DPD priority pairing method"]
    Exclude_specific_installment_parts_from_pairing_DC["Exclude specific installment parts from pairing - DC"]
    Exclude_specific_installment_parts_from_pairing["Exclude specific installment parts from pairing"]
    DPD_priority_pairing_method_for_particular_T_C["DPD priority pairing method for particular TandC"]
    DPD_priority_pairing_method["DPD priority pairing method"]
    ALG_Get_sorted_installment_parts_by_specific_date["ALG_Get sorted installment parts by specific date"]
    ALG_Get_sorted_installment_parts["ALG_Get sorted installment parts"]
    MOD_Contract_pairing_allowed["{MOD}Contract pairing allowed"]
    n_03_140_Recalculate_accrued_income(("03.140 Recalculate accrued income"))
    Terminated_installment_parts_recalculation_algorithm["Terminated installment parts recalculation algorithm"]
    Calculate_accrued_income_algorithm["Calculate accrued income algorithm"]
    MOD_ALG_Pay_off_value_calculation["{MOD}ALG_Pay off value calculation"]
    Example_of_IS_generating_Extended1_algorithm["Example of IS generating - Extended1 algorithm"]
    Example_of_IS_generating_Basic_algorithm["Example of IS generating - Basic algorithm"]
    MOD_03_037_Deduct_interest_overcharge_while_shortening_first(("{MOD}03.037 Deduct interest overcharge while shortening first interest period"))
    n_03_095_Remove_installment(("03.095 Remove installment "))
    n_03_090_Remove_installment_manually(("03.090 Remove installment manually"))
    n_03_040_Print_selected_version_of_IS(("03.040 Print selected version of IS"))
    n_03_030_Regenerate_installment_schedule(("03.030 Regenerate installment schedule"))
    n_03_020_Show_installment_schedule(("03.020 Show installment schedule"))
    n_03_010_Generate_installment_schedule(("03.010 Generate installment schedule"))
    MOD_Generate_installment_schedule_Equal_principal["{MOD}Generate installment schedule - Equal principal"]
    Generate_installment_schedule_Annuity_principal["Generate installment schedule - Annuity principal"]
    DEL_Interest_ACT365_coefficient_algorithm["{DEL}Interest ACT365 coefficient algorithm"]
    ADD_Calculate_amount_to_repay_installment_schedule["{ADD}Calculate amount to repay installment schedule"]
    Recalculate_Presented_Interest_rates_on_financial_parameters["Recalculate Presented Interest rates on financial parameters change"]
    Partially_regenerate_installment_schedule_algorithm["Partially regenerate installment schedule algorithm"]
    MOD_Generate_installment_schedule_algorithm["{MOD}Generate installment schedule algorithm"]
    Generate_installment_schedule_Extended1_algorithm["Generate installment schedule - Extended1 algorithm"]
    Generate_installment_schedule_Basic_algorithm["Generate installment schedule - Basic algorithm"]
    MOD_03_701_Trigger_sending_SMS_to_client(("{MOD}03.701 Trigger sending SMS to client"))
    n_03_702_Compose_and_send_notification_message(("03.702 Compose and send notification message"))
    Initial_setting_for_future_installments["Initial setting for future installments"]
    Maximal_Version_of_Installment_Schedule["Maximal Version of Installment Schedule"]
    Installment_Installment_priority_validation["Installment - Installment priority - validation"]
    Check_if_Installment_Schedule_is_Closed["Check if Installment Schedule is Closed"]
    ALG_Get_involved_Installment_part["ALG_Get involved Installment part"]
    Fill_contractInstallment_data_source["Fill contractInstallment data source"]
    n_03_042_Process_IS_printouts_generating_in_bulk(("03.042 Process IS printouts generating in bulk"))
    n_03_045_Generate_IS_printout(("03.045 Generate IS printout"))
    MOD_05_183_Process_batch_of_incoming_payment_processing_requ(("{MOD}05.183 Process batch of incoming payment processing requests"))
    Recalling_of_terminated_Installment_schedule["Recalling of terminated Installment schedule"]
    n_01_360_Cancel_contract(("01.360 Cancel contract"))
    n_01_500_Pay_off_contracts_from_file(("01.500 Pay-off contracts from file"))
    n_01_740_Process_notification_about_credit_account_closure(("01.740 Process notification about credit account closure "))
    Calculate_pay_off_installment_date["Calculate pay-off installment date"]
    n_01_410_Pay_off_contract_manually(("01.410 Pay-off contract manually"))
    n_01_730_Finish_contract_manually(("01.730 Finish contract manually"))
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    MOD_03_091_Remove_installment_by_external_system(("{MOD}03.091 Remove installment by external system"))
    MOD_03_080_Add_installment(("{MOD}03.080 Add installment"))
    n_01_502_Pay_off_CEL_contract(("01.502 Pay-off CEL contract"))
    n_03_150_Regenerate_terminated_installment_schedule(("03.150 Regenerate terminated installment schedule"))
    MOD_03_120_Pay_off_installment_schedule(("{MOD}03.120 Pay off installment schedule"))
    MOD_01_766_Simulate_CEL_service_application_to_IS_on_local_r(("{MOD}01.766 Simulate CEL service application to IS on local request"))
    ServiceParamDto["ServiceParamDto"]
    CalculationInfoDto["CalculationInfoDto"]
    ServiceSimulationResponse["ServiceSimulationResponse"]
    ServiceSimulationRequest["ServiceSimulationRequest"]
    InstallmentServiceWS["InstallmentServiceWS"]
    MOD_05_033_Compute_amount_avaiable_to_pair_with_IS_on_local_(("{MOD}05.033 Compute amount avaiable to pair with IS on local request"))
    n_03_170_Get_Next_Regular_Installment(("03.170 Get Next Regular Installment"))
    n_03_160_Get_Installment_Schedule(("03.160 Get Installment Schedule"))
    MOD_08_210_Check_and_process_Gift_payment -.->|include| n_03_095_Remove_installment
    MOD_05_184_Reflect_change_of_balance -.->|include| n_03_100_Check_and_process_Early_repayment_request
    MOD_08_060_Change_Due_Date -.->|include| MOD_05_200_Perform_decoupling
    n_03_100_Check_and_process_Early_repayment_request -.->|include| MOD_08_210_Check_and_process_Gift_payment
    n_03_100_Check_and_process_Early_repayment_request -.->|include| n_08_202_Evaluate_status_of_Gift_payment
    MOD_08_060_Change_Due_Date -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service -->|unnamed| MOD_03_080_Add_installment
    InstallmentServiceWS -->|unnamed| ServiceSimulationResponse
    ServiceSimulationResponse -->|unnamed| CalculationInfoDto
    ServiceSimulationRequest -->|unnamed| ServiceParamDto
    InstallmentServiceWS -->|unnamed| MOD_01_766_Simulate_CEL_service_application_to_IS_on_local_r
    MOD_08_210_Check_and_process_Gift_payment -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_08_060_Change_Due_Date -->|unnamed| Check_if_Installment_Schedule_is_Closed
    n_01_901_Perform_contract_sale -.->|include| n_05_182_Pair_payment_with_contract
    MOD_08_060_Change_Due_Date -->|unnamed| MOD_Generate_installment_schedule_algorithm
    InstallmentServiceWS -->|unnamed| ServiceSimulationRequest
    MOD_08_060_Change_Due_Date -->|unnamed| Maximal_Version_of_Installment_Schedule
    MOD_08_210_Check_and_process_Gift_payment -.->|include| n_05_182_Pair_payment_with_contract
    n_01_901_Perform_contract_sale -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_01_186_Prepare_documentation -.->|include| n_03_010_Generate_installment_schedule
    n_01_410_Pay_off_contract_manually -.->|include| n_01_502_Pay_off_CEL_contract
    n_01_500_Pay_off_contracts_from_file -.->|include| MOD_03_120_Pay_off_installment_schedule
    n_01_500_Pay_off_contracts_from_file -.->|include| n_01_502_Pay_off_CEL_contract
    n_01_502_Pay_off_CEL_contract -->|unnamed| Calculate_pay_off_installment_date
    n_01_502_Pay_off_CEL_contract -.->|include| MOD_03_120_Pay_off_installment_schedule
    n_03_140_Recalculate_accrued_income -->|unnamed| Calculate_accrued_income_algorithm
    n_03_150_Regenerate_terminated_installment_schedule -.->|include| n_03_140_Recalculate_accrued_income
    MOD_03_120_Pay_off_installment_schedule -.->|include| n_03_140_Recalculate_accrued_income
    MOD_03_120_Pay_off_installment_schedule -.->|include| MOD_05_200_Perform_decoupling
    MOD_03_120_Pay_off_installment_schedule -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_03_120_Pay_off_installment_schedule -->|unnamed| n_03_042_Process_IS_printouts_generating_in_bulk
    MOD_03_120_Pay_off_installment_schedule -->|unnamed| Calculate_pay_off_installment_date
    MOD_03_120_Pay_off_installment_schedule -->|unnamed| MOD_ALG_Pay_off_value_calculation
    MOD_03_120_Pay_off_installment_schedule -->|unnamed| ALG_Get_involved_Installment_part
    n_03_150_Regenerate_terminated_installment_schedule -->|unnamed| n_03_042_Process_IS_printouts_generating_in_bulk
    n_03_150_Regenerate_terminated_installment_schedule -->|unnamed| ALG_Get_involved_Installment_part
    n_03_150_Regenerate_terminated_installment_schedule -->|unnamed| Terminated_installment_parts_recalculation_algorithm
    n_03_100_Check_and_process_Early_repayment_request -->|unnamed| Check_if_Installment_Schedule_is_Closed
    n_03_100_Check_and_process_Early_repayment_request -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    NotImplemented_08_100_Process_Full_early_repayment -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    NotImplemented_08_100_Process_Full_early_repayment -->|unnamed| Check_if_Installment_Schedule_is_Closed
    n_01_730_Finish_contract_manually -.->|include| MOD_08_220_Check_and_process_Grace_period
    n_01_730_Finish_contract_manually -.->|include| MOD_08_280_Check_and_process_CET_request
    MOD_08_280_Check_and_process_CET_request -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_08_280_Check_and_process_CET_request -->|unnamed| Check_if_Installment_Schedule_is_Closed
    MOD_08_252_Process_cooling_off_period -->|unnamed| Check_if_Installment_Schedule_is_Closed
    n_01_360_Cancel_contract -.->|include| n_01_474_Calculate_CEL_debt_info
    n_01_360_Cancel_contract -->|unnamed| Recalling_of_terminated_Installment_schedule
    n_01_740_Process_notification_about_credit_account_closure -.->|include| n_01_360_Cancel_contract
    n_08_409_Evaluate_Checking_Terms_of_Loan_Service -->|unnamed| Check_if_Installment_Schedule_is_Closed
    MOD_05_180_Perform_coupling_payments_with_instalments -->|unnamed| Exclude_specific_installment_parts_from_pairing
    MOD_05_180_Perform_coupling_payments_with_instalments -.->|include| MOD_05_200_Perform_decoupling
    MOD_05_180_Perform_coupling_payments_with_instalments -->|unnamed| ALG_Get_sorted_installment_parts
    MOD_05_180_Perform_coupling_payments_with_instalments -.->|include| n_01_474_Calculate_CEL_debt_info
    MOD_05_180_Perform_coupling_payments_with_instalments -.->|include| n_03_095_Remove_installment
    n_05_060_Decouple_incoming_payment_manually -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_05_180_Perform_coupling_payments_with_instalments -->|unnamed| ALG_Get_sorted_installment_parts_by_specific_date
    MOD_05_184_Reflect_change_of_balance -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    n_05_030_Couple_incoming_payment_manually -.->|include| n_05_182_Pair_payment_with_contract
    n_05_030_Couple_incoming_payment_manually -.->|include| MOD_05_184_Reflect_change_of_balance
    n_05_030_Couple_incoming_payment_manually -->|unnamed| MOD_Contract_pairing_allowed
    n_05_030_Couple_incoming_payment_manually -.->|include| n_05_185_Prepare_payments_to_pairing
    MOD_05_184_Reflect_change_of_balance -.->|include| n_03_140_Recalculate_accrued_income
    MOD_05_184_Reflect_change_of_balance -.->|include| MOD_08_280_Check_and_process_CET_request
    MOD_05_200_Perform_decoupling -.->|include| n_03_095_Remove_installment
    n_05_060_Decouple_incoming_payment_manually -.->|include| n_03_140_Recalculate_accrued_income
    Pairing_priority_for_suppress_due_date_method_example -->|unnamed| Standard_priority_pairing_method
    Standard_priority_pairing_method -->|unnamed| ALG_Get_sorted_installment_parts
    Pairing_priority_methods_examples -->|unnamed| Standard_priority_pairing_method
    Initial_setting_of_priority_pairing_for_countries -->|unnamed| ALG_Get_sorted_installment_parts
    Highest_DPD_priority_pairing_method -->|unnamed| ALG_Get_sorted_installment_parts
    DPD_priority_pairing_method -->|unnamed| ALG_Get_sorted_installment_parts
    Highest_DPD_priority_pairing_method_for_particular_T_C -->|unnamed| ALG_Get_sorted_installment_parts_by_specific_date
    Pairing_priority_methods_examples -->|unnamed| DPD_priority_pairing_method
    Exclude_specific_installment_parts_from_pairing_KZ -->|unnamed| Exclude_specific_installment_parts_from_pairing
    Exclude_specific_installment_parts_from_pairing_DC -->|unnamed| Exclude_specific_installment_parts_from_pairing
    DPD_priority_pairing_method_for_particular_T_C -->|unnamed| ALG_Get_sorted_installment_parts_by_specific_date
    Standard_priority_pairing_method_for_particular_T_C -->|unnamed| ALG_Get_sorted_installment_parts_by_specific_date
    Generate_installment_schedule_Extended1_algorithm -->|unnamed| Partially_regenerate_installment_schedule_algorithm
    Generate_installment_schedule_Extended1_algorithm -->|unnamed| MOD_Generate_installment_schedule_algorithm
    Generate_installment_schedule_Basic_algorithm -->|unnamed| Partially_regenerate_installment_schedule_algorithm
    MOD_Generate_installment_schedule_Equal_principal -->|unnamed| MOD_Generate_installment_schedule_algorithm
    Generate_installment_schedule_Annuity_principal -->|unnamed| MOD_Generate_installment_schedule_algorithm
    Generate_installment_schedule_Basic_algorithm -->|unnamed| MOD_Generate_installment_schedule_algorithm
    n_03_030_Regenerate_installment_schedule -->|unnamed| MOD_Generate_installment_schedule_algorithm
    n_03_040_Print_selected_version_of_IS -.->|include| n_03_045_Generate_IS_printout
    n_03_042_Process_IS_printouts_generating_in_bulk -.->|include| n_03_045_Generate_IS_printout
    n_03_010_Generate_installment_schedule -->|unnamed| MOD_Generate_installment_schedule_algorithm
    Example_of_IS_generating_Extended1_algorithm -->|unnamed| Generate_installment_schedule_Extended1_algorithm
    n_03_045_Generate_IS_printout -->|unnamed| Fill_contractInstallment_data_source
    Example_of_IS_generating_Basic_algorithm -->|unnamed| Generate_installment_schedule_Basic_algorithm
    MOD_03_037_Deduct_interest_overcharge_while_shortening_first -->|unnamed| Recalculate_Presented_Interest_rates_on_financial_parameters
    MOD_03_080_Add_installment -.->|include| MOD_05_200_Perform_decoupling
    MOD_03_091_Remove_installment_by_external_system -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_03_091_Remove_installment_by_external_system -.->|include| MOD_05_200_Perform_decoupling
    n_03_090_Remove_installment_manually -.->|include| MOD_05_200_Perform_decoupling
    n_03_090_Remove_installment_manually -.->|include| MOD_05_184_Reflect_change_of_balance
    n_08_057_Perform_Partial_early_repayment -->|unnamed| MOD_Generate_installment_schedule_algorithm
    n_08_057_Perform_Partial_early_repayment -->|unnamed| Maximal_Version_of_Installment_Schedule
    n_08_057_Perform_Partial_early_repayment -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    n_08_057_Perform_Partial_early_repayment -->|unnamed| Check_if_Installment_Schedule_is_Closed
    n_08_057_Perform_Partial_early_repayment -.->|include| MOD_05_200_Perform_decoupling
    MOD_08_362_Process_payment_holiday_request -.->|include| MOD_05_200_Perform_decoupling
    MOD_08_362_Process_payment_holiday_request -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_08_362_Process_payment_holiday_request -->|unnamed| Check_if_Installment_Schedule_is_Closed
    MOD_08_406_Process_request_for_loan_restructuring -.->|include| MOD_05_200_Perform_decoupling
    MOD_08_406_Process_request_for_loan_restructuring -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_08_406_Process_request_for_loan_restructuring -->|unnamed| Check_if_Installment_Schedule_is_Closed
    n_08_063_Process_request_for_change_due_date -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    n_08_063_Process_request_for_change_due_date -->|unnamed| Check_if_Installment_Schedule_is_Closed
    n_08_063_Process_request_for_change_due_date -->|unnamed| n_03_042_Process_IS_printouts_generating_in_bulk
    n_08_063_Process_request_for_change_due_date -.->|include| MOD_05_200_Perform_decoupling
    MOD_05_310_Process_disbursement_confirmations -->|unnamed| MOD_Structure_of_message_and_error_report_for_disbursement_c
    MOD_05_310_Process_disbursement_confirmations -.->|include| MOD_03_037_Deduct_interest_overcharge_while_shortening_first
    MOD_05_310_Process_disbursement_confirmations -->|unnamed| Structure_of_success_message_for_disbursement_confirmation
    n_05_300_Import_disbursement_confirmations -->|unnamed| MOD_05_310_Process_disbursement_confirmations
    n_01_486_Calculate_debt_full_info -->|unnamed| MOD_05_180_Perform_coupling_payments_with_instalments
    n_01_486_Calculate_debt_full_info -->|unnamed| MOD_05_200_Perform_decoupling
    MOD_08_220_Check_and_process_Grace_period -->|unnamed| Check_if_Installment_Schedule_is_Closed
    MOD_08_220_Check_and_process_Grace_period -.->|include| n_03_030_Regenerate_installment_schedule
    MOD_08_220_Check_and_process_Grace_period -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    n_08_230_Process_Gift_payment_automatically -.->|include| MOD_08_210_Check_and_process_Gift_payment
    n_08_202_Evaluate_status_of_Gift_payment -->|unnamed| Check_if_Installment_Schedule_is_Closed
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Check_if_Installment_Schedule_is_Closed
    MOD_08_210_Check_and_process_Gift_payment -.->|include| n_03_030_Regenerate_installment_schedule
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Maximal_Version_of_Installment_Schedule
    MOD_03_701_Trigger_sending_SMS_to_client -.->|include| n_03_702_Compose_and_send_notification_message
    n_04_110_Process_charging_requests -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    n_04_110_Process_charging_requests -.->|include| MOD_03_080_Add_installment
    MOD_04_140_Charge_fees -.->|include| MOD_03_080_Add_installment
    MOD_04_140_Charge_fees -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_04_140_Charge_fees -->|unnamed| Calculate_Tariff_Item_amount_for_period_from_debt
    n_01_740_Process_notification_about_credit_account_closure -->|unnamed| Set_contract_status_to_paid_off_rule
    n_08_262_Process_Fees_back_service -->|unnamed| Check_if_Installment_Schedule_is_Closed
    n_08_262_Process_Fees_back_service -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    n_08_262_Process_Fees_back_service -.->|include| n_03_030_Regenerate_installment_schedule
    n_03_090_Remove_installment_manually -.->|include| n_04_150_Charge_Penalty_Registered_Over_Limit
    MOD_03_091_Remove_installment_by_external_system -.->|include| n_04_150_Charge_Penalty_Registered_Over_Limit
    Initial_setting_for_future_installments -->|unnamed| ALG_Get_involved_Installment_part
    n_01_478_Show_supposed_debt_for_CEL_contract -->|unnamed| Calculate_Tariff_Item_amount_for_period_from_debt
    DEL_05_500_Create_refund_automatically -.->|include| n_05_182_Pair_payment_with_contract
    DEL_05_500_Create_refund_automatically -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
```
