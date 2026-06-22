# Contract signing

```mermaid
graph TD
    ADD_Check_if_contract_is_purchased["{ADD}Check if contract is purchased"]
    Logical_Data_Model_Service_Processing_Setting["Logical Data Model : Service Processing Setting"]
    MOD_Save_signing_method_for_documents_signed_paperlessly["{MOD}Save signing method for documents signed paperlessly"]
    Get_contract_documentation_documents["Get contract documentation documents"]
    n_06_021_Update_client_data_from_contract["06.021 Update client data from contract"]
    Validate_IMEI_internally["Validate IMEI internally"]
    Select_application_commodities_for_IMEI_validation["Select application commodities for IMEI validation"]
    Commodity_module["Commodity module"]
    ADD_Determine_whether_RELIP_or_Financing_Scheme_is_used["{ADD}Determine whether RELIP or Financing Scheme is used"]
    n_01_180_Sign_contract_manually["01.180 Sign contract manually"]
    Document_attribute_validation_for_sign["Document attribute validation for sign"]
    MOD_01_187_Sign_contract["{MOD}01.187 Sign contract"]
    n_01_149_Generate_verification_code_for_client_s_documentati["01.149 Generate verification code for client's documentation"]
    n_01_148_Validate_verification_code_for_client_s_documentati["01.148 Validate verification code for client's documentation"]
    Get_consolidation_amounts_for_internal_refinanced_contracts["Get consolidation amounts for internal refinanced contracts"]
    MOD_Update_data_in_contract_related_structures["{MOD}Update data in contract related structures"]
    Commodity_Validation_algorithm["Commodity Validation algorithm"]
    Use_Case_Interface_to_external_system_eshop["Use Case : Interface to external system (eshop)"]
    Loyalty_system_LoyaltyManagementWS["Loyalty system : LoyaltyManagementWS"]
    Loyalty_program["Loyalty program"]
    Card_Management_Card_management_Interface_diagram["Card Management : Card management - Interface diagram"]
    CaBus_CMS["CaBus-CMS"]
    n_06_020_Update_Client_Data["06.020 Update Client Data"]
    n_01_184_Process_ContractSignTransactionsSE_event["01.184 Process ContractSignTransactionsSE event"]
    Account_Management_AccountManagementWS_Interface_diagram_Con["Account Management : AccountManagementWS - Interface diagram - Contract signing"]
    Calculation_of_ExpectedEndDate["Calculation of ExpectedEndDate"]
    MOD_Calculation_of_Loan_Service_parameters["{MOD}Calculation of Loan Service parameters"]
    n_01_474_Calculate_CEL_debt_info["01.474 Calculate CEL debt info"]
    CaBus_AM["CaBus-AM"]
    Initial_transaction_creation_rule["Initial transaction creation rule"]
    Copy_chosen_offer_financial_parameters_to_contract["Copy chosen offer financial parameters to contract"]
    Find_documents_unprinted_during_contract_sign["Find documents unprinted during contract sign"]
    MOD_01_183_Print_documents_for_contract_sign["{MOD}01.183 Print documents for contract sign"]
    Use_Case_Model_Generate_and_Cancel_outgoing_payments["Use Case Model : Generate and Cancel outgoing payments"]
    DDM_attributes_validation["DDM attributes validation"]
    MOD_Sign_contract_finalization["{MOD}Sign contract finalization"]
    n_11_090_Delete_insurance_contract_draft["11.090 Delete insurance contract draft"]
    Deleting_prepared_documentation_rule["Deleting prepared documentation rule"]
    n_11_030_Sign_insurance_contract["11.030 Sign insurance contract"]
    MOD_05_091_Generate_outgoing_payment_insurance["{MOD}05.091 Generate outgoing payment - insurance"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    MOD_05_090_Generate_outgoing_payment_for_contract["{MOD}05.090 Generate outgoing payment for contract"]
    User["User"]
    MOD_05_090_Generate_outgoing_payment_for_contract -->|unnamed| Commodity_module
    n_01_148_Validate_verification_code_for_client_s_documentati -->|unnamed| n_01_180_Sign_contract_manually
    Loyalty_system_LoyaltyManagementWS -->|unnamed| Loyalty_program
    MOD_01_187_Sign_contract -->|unnamed| MOD_Update_data_in_contract_related_structures
    n_01_180_Sign_contract_manually -->|unnamed| MOD_01_187_Sign_contract
    MOD_01_187_Sign_contract -->|unnamed| n_01_184_Process_ContractSignTransactionsSE_event
    MOD_01_187_Sign_contract -->|unnamed| ADD_Determine_whether_RELIP_or_Financing_Scheme_is_used
    MOD_01_187_Sign_contract -->|{ADD LOR-6252/}| Select_application_commodities_for_IMEI_validation
    MOD_01_187_Sign_contract -->|{ADD LOR-6252/}| Validate_IMEI_internally
    n_01_148_Validate_verification_code_for_client_s_documentati -->|unnamed| Get_contract_documentation_documents
    MOD_01_187_Sign_contract -->|unnamed| Get_contract_documentation_documents
    MOD_01_187_Sign_contract -->|unnamed| Document_attribute_validation_for_sign
    MOD_01_187_Sign_contract -->|unnamed| DDM_attributes_validation
    MOD_Sign_contract_finalization -->|unnamed| ADD_Check_if_contract_is_purchased
    Use_Case_Model_Generate_and_Cancel_outgoing_payments -->|unnamed| MOD_05_090_Generate_outgoing_payment_for_contract
    Use_Case_Model_Generate_and_Cancel_outgoing_payments -->|unnamed| MOD_05_091_Generate_outgoing_payment_insurance
    n_01_180_Sign_contract_manually -->|unnamed| Deleting_prepared_documentation_rule
    MOD_01_187_Sign_contract -->|unnamed| MOD_Sign_contract_finalization
    MOD_01_183_Print_documents_for_contract_sign -->|unnamed| Find_documents_unprinted_during_contract_sign
    MOD_01_187_Sign_contract -->|unnamed| Initial_transaction_creation_rule
    Account_Management_AccountManagementWS_Interface_diagram_Con -->|unnamed| CaBus_AM
    Logical_Data_Model_Service_Processing_Setting -->|unnamed| MOD_Calculation_of_Loan_Service_parameters
    n_06_021_Update_client_data_from_contract -->|unnamed| ADD_Check_if_contract_is_purchased
    Deleting_prepared_documentation_rule -->|unnamed| n_11_090_Delete_insurance_contract_draft
    Deleting_prepared_documentation_rule -->|unnamed| Get_contract_documentation_documents
    MOD_Save_signing_method_for_documents_signed_paperlessly -->|unnamed| Get_contract_documentation_documents
    MOD_Sign_contract_finalization -->|unnamed| MOD_Save_signing_method_for_documents_signed_paperlessly
    MOD_Sign_contract_finalization -->|unnamed| MOD_01_183_Print_documents_for_contract_sign
    MOD_Sign_contract_finalization -->|unnamed| MOD_05_090_Generate_outgoing_payment_for_contract
    MOD_Sign_contract_finalization -->|unnamed| n_06_021_Update_client_data_from_contract
    MOD_Sign_contract_finalization -->|unnamed| MOD_05_091_Generate_outgoing_payment_insurance
    MOD_Sign_contract_finalization -->|unnamed| n_11_030_Sign_insurance_contract
    MOD_Update_data_in_contract_related_structures -->|unnamed| Copy_chosen_offer_financial_parameters_to_contract
    MOD_Update_data_in_contract_related_structures -->|unnamed| MOD_Calculation_of_Loan_Service_parameters
    MOD_Update_data_in_contract_related_structures -->|unnamed| Calculation_of_ExpectedEndDate
    MOD_Update_data_in_contract_related_structures -->|unnamed| n_01_474_Calculate_CEL_debt_info
    CaBus_CMS -->|unnamed| MOD_01_187_Sign_contract
    Loyalty_program -->|unnamed| MOD_01_187_Sign_contract
    User -->|unnamed| n_01_180_Sign_contract_manually
    User -->|unnamed| MOD_01_210_Show_contract_detail
    User -->|unnamed| n_01_148_Validate_verification_code_for_client_s_documentati
    User -->|unnamed| MOD_01_183_Print_documents_for_contract_sign
    User -->|unnamed| n_01_149_Generate_verification_code_for_client_s_documentati
    CaBus_AM -->|unnamed| MOD_01_210_Show_contract_detail
    CaBus_AM -->|unnamed| MOD_01_187_Sign_contract
    CaBus_CMS -->|unnamed| Card_Management_Card_management_Interface_diagram
```
