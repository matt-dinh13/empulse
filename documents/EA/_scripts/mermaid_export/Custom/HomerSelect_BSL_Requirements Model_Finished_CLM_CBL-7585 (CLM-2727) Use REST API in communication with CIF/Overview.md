# Overview

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF
- **Diagram ID**: 127724
- **Elements**: 50
- **Connectors**: 26

```mermaid
graph TD
    n_05_605_Print_incoming_payment_on_POS["05.605 Print incoming payment on POS"]
    MOD_01_920_Synchronize_Client_data_from_Contract["{MOD{01.920 Synchronize Client data from Contract"]
    n_05_605_Print_incoming_payment_on_POS["05.605 Print incoming payment on POS"]
    NOT_IMPL_11_126_Validate_client_eligibility_for_insurance_v2["{NOT_IMPL}11.126 Validate client eligibility for insurance v2"]
    Get_current_party_data_from_CIF["Get current party data from CIF"]
    Get_client_current_data_from_CIF["Get client current data from CIF"]
    MOD_12_506_Internal_card_activation["{MOD}12.506 Internal card activation"]
    Mystery_shopper["Mystery shopper"]
    ADD_Contract_search_filter_Sales_agent_search_rule["{ADD}Contract search filter - Sales agent search rule"]
    Get_contact_from_CIF["Get contact from CIF"]
    Get_client_current_contacts_from_CIF["Get client current contacts from CIF"]
    Customer_s_email_address["Customer's email address"]
    n_01_137_Recalculate_party_s_marketing_offer["01.137 Recalculate party's marketing offer"]
    Primary_mobile["Primary mobile"]
    Fill_contractInstallment_data_source["Fill contractInstallment data source"]
    MOD_01_160_Search_client["{MOD}01.160 Search client"]
    Application_form_prefill_ID["Application form prefill - ID"]
    v1_1_Customer_Data_Requests["v1.1 :Customer Data - Requests"]
    el_1520188["Text"]
    Prefill_application_form["Prefill application form"]
    el_1520182["Text"]
    DEL_02_906_Marketing_Offers_Management["{DEL}02.906 Marketing Offers Management"]
    el_1520183["Text"]
    el_1520180["Text"]
    Primary_mobile["Primary mobile"]
    n_12_603_Print_or_send_statement["12.603 Print or send statement"]
    Safe_guaranty["Safe guaranty"]
    n_12_534_Card_authentication["12.534 Card authentication"]
    MOD_SMS_as_preferred_communication_channel["{MOD}SMS as preferred communication channel"]
    n_12_533_Client_authentication["12.533 Client authentication"]
    MOD_07_050_Update_communication_record["{MOD}07.050 Update communication record"]
    MOD_Call_as_preferred_communication_channel["{MOD}Call as preferred communication channel"]
    n_07_030_Show_detail_of_communication["07.030 Show detail of communication"]
    ContractInstallmentType["ContractInstallmentType"]
    n_06_041_Show_clients_safe_guaranty["06.041 Show clients safe guaranty"]
    n_01_756_Get_client_by_contract_and_phone["01.756 Get client by contract and phone"]
    MOD_06_040_Search_Clients["{MOD}06.040 Search Clients"]
    MOD_Contract_search_filter["{MOD}Contract search filter"]
    MOD_06_030_Show_Client_Data["{MOD}06.030 Show Client Data"]
    MOD_06_010_Identify_Client["{MOD}06.010 Identify Client"]
    n_12_632_Create_request_for_POS_transaction_without_card["12.632 Create request for POS transaction without card"]
    MOD_01_720_Reactivate_finished_contracts["{MOD}01.720 Reactivate finished contracts"]
    n_11_126_Check_client_eligibility_for_insurance["11.126 Check client eligibility for insurance"]
    n_08_344_Generate_insurance_offers_for_contract["08.344 Generate insurance offers for contract"]
    CLM["CLM"]
    LOR["LOR"]
    MOD_06_051_Process_customers_notification_message["{MOD}06.051 Process customers notification message"]
    n_06_020_Update_Client_Data["06.020 Update Client Data"]
    n_05_513_Process_outgoing_payment_for_refund_items["05.513 Process outgoing payment for refund items"]
    n_01_663_Edit_refunds_disbursement_channel["01.663 Edit refunds disbursement channel"]
    el_1520182 -->|unnamed| MOD_01_160_Search_client
    el_1520188 -->|unnamed| MOD_12_506_Internal_card_activation
    el_1520188 -->|unnamed| MOD_07_050_Update_communication_record
    el_1520188 -->|unnamed| n_12_533_Client_authentication
    el_1520182 -->|unnamed| n_12_534_Card_authentication
    el_1520188 -->|unnamed| n_12_603_Print_or_send_statement
    el_1520188 -->|unnamed| n_06_041_Show_clients_safe_guaranty
    el_1520188 -->|unnamed| MOD_01_160_Search_client
    el_1520188 -->|unnamed| n_01_756_Get_client_by_contract_and_phone
    el_1520188 -->|unnamed| Primary_mobile
    el_1520180 -->|unnamed| n_01_137_Recalculate_party_s_marketing_offer
    el_1520188 -->|unnamed| n_01_137_Recalculate_party_s_marketing_offer
    el_1520188 -->|unnamed| Customer_s_email_address
    el_1520188 -->|unnamed| Get_client_current_contacts_from_CIF
    el_1520180 -->|unnamed| MOD_01_720_Reactivate_finished_contracts
    el_1520188 -->|unnamed| ADD_Contract_search_filter_Sales_agent_search_rule
    el_1520188 -->|unnamed| n_08_344_Generate_insurance_offers_for_contract
    el_1520188 -->|unnamed| n_07_030_Show_detail_of_communication
    el_1520188 -->|unnamed| n_11_126_Check_client_eligibility_for_insurance
    el_1520182 -->|unnamed| ADD_Contract_search_filter_Sales_agent_search_rule
    el_1520188 -->|unnamed| n_12_632_Create_request_for_POS_transaction_without_card
    el_1520188 -->|unnamed| MOD_06_010_Identify_Client
    el_1520180 -->|unnamed| MOD_06_010_Identify_Client
    el_1520188 -->|unnamed| MOD_06_030_Show_Client_Data
    el_1520182 -->|unnamed| MOD_06_040_Search_Clients
    el_1520188 -->|unnamed| MOD_06_040_Search_Clients
```
