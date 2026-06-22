# CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- **Diagram ID**: 144837
- **Elements**: 53
- **Connectors**: 42

```mermaid
graph TD
    User_Interface_Model_Collection_tools_overview["User Interface Model : Collection tools overview"]
    n_06_030_Show_client_s_phone_Client_detail["06.030 Show client´s phone (Client detail)"]
    ADD_01_210_Show_client_s_phone_Tab_Client_on_Contract_detail["{ADD} 01.210 Show client´s phone (Tab Client on Contract detail)"]
    Phone["Phone"]
    Primary_mobile["Primary mobile"]
    MOD_Primary_mobile["{MOD}Primary mobile"]
    MOD_Phone["{MOD}Phone"]
    MOD_Phone_number_visibility_setting["{MOD}Phone number visibility setting"]
    ADD_08_900_Show_available_collection_tools_for_client_s_cont["{ADD}08.900 Show available collection tools for client's contracts (show client´s phone)"]
    MOD_08_900_Show_available_collection_tools_for_client_s_cont["{MOD}08.900 Show available collection tools for client's contracts (show documents)"]
    DEL_08_900_Show_available_collection_tools_for_client_s_cont["{DEL}08.900 Show available collection tools for client's contracts (display additional client data)"]
    ADD_08_900_Show_available_collection_tools_for_client_s_cont["{ADD}08.900 Show available collection tools for client's contracts (show client address data)"]
    ADD_08_900_Show_available_collection_tools_for_client_s_cont["{ADD}08.900 Show available collection tools for client's contracts (show unmasked client email)"]
    n_08_900_Show_available_collection_tools_for_client_s_contra["08.900 Show available collection tools for client's contracts"]
    MOD_06_030_Show_client_data_show_documents["{MOD}06.030 Show client data (show documents)"]
    MOD_06_030_Show_Client_Data["{MOD}06.030 Show Client Data"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    MOD_Show_documents_based_on_security_level["{MOD}Show documents based on security level"]
    MOD_Identification_documents["{MOD}Identification documents"]
    VN_Client_detail_VN["VN : Client detail - VN"]
    DEL_06_030_Show_client_data_display_additional_client_data["{DEL}06.030 Show client data (display additional client data)"]
    DEL_01_210_Show_contract_detail_display_additional_client_da["{DEL}01.210 Show contract detail (display additional client data)"]
    MOD_Gender["{MOD}Gender"]
    MOD_Birth_date["{MOD}Birth date"]
    MOD_Father_full_name["{MOD}Father full name"]
    ADD_06_030_Show_client_data_show_client_address_data["{ADD}06.030 Show client data (show client address data)"]
    n_01_210_Show_contract_detail_show_client_address_data["01.210 Show contract detail (show client address data)"]
    MOD_Concatenate_address_parts["{MOD}Concatenate address parts"]
    Permanent_address["Permanent address"]
    Contact_address["Contact address"]
    ADD_06_030_Show_client_data_show_unmasked_client_email["{ADD}06.030 Show client data (show unmasked client email)"]
    n_01_210_Show_contract_detail_show_unmasked_client_email["01.210 Show contract detail (show unmasked client email)"]
    ADD_Email_visibility_setting["{ADD}Email visibility setting"]
    Email_visibility_setting["Email visibility setting"]
    MOD_Primary_e_mail["{MOD}Primary e-mail"]
    PH_Client_detail_PH["PH : Client detail - PH"]
    Client_addtional_data["Client addtional data"]
    Marital_status["Marital status"]
    Gender["Gender"]
    Birth_date["Birth date"]
    Parent_full_name["Parent full name"]
    Client_address["Client address"]
    Primary_email["Primary email"]
    Landmark["Landmark"]
    Street_name["Street name"]
    REQ_1_Hiding_of_personal_data_Changes_in_Client_Detail["REQ #1 - Hiding of personal data - Changes in Client Detail"]
    Tab_Client_Tab_Client["Tab-Client : Tab-Client"]
    Client_email["Client email"]
    Client_identification_documents["Client identification documents"]
    Client_phone["Client phone"]
    Contract_detail["Contract detail"]
    Collection_tools_overview["Collection tools overview"]
    Client_center["Client center"]
    MOD_Identification_documents -->|unnamed| MOD_06_030_Show_client_data_show_documents
    ADD_Email_visibility_setting -->|unnamed| ADD_08_900_Show_available_collection_tools_for_client_s_cont
    MOD_Concatenate_address_parts -->|unnamed| ADD_08_900_Show_available_collection_tools_for_client_s_cont
    MOD_Gender -->|unnamed| DEL_08_900_Show_available_collection_tools_for_client_s_cont
    MOD_Birth_date -->|unnamed| DEL_06_030_Show_client_data_display_additional_client_data
    n_08_900_Show_available_collection_tools_for_client_s_contra -->|unnamed| DEL_08_900_Show_available_collection_tools_for_client_s_cont
    MOD_06_030_Show_Client_Data -->|unnamed| DEL_06_030_Show_client_data_display_additional_client_data
    n_08_900_Show_available_collection_tools_for_client_s_contra -->|unnamed| MOD_08_900_Show_available_collection_tools_for_client_s_cont
    MOD_Identification_documents -->|unnamed| MOD_08_900_Show_available_collection_tools_for_client_s_cont
    MOD_Concatenate_address_parts -->|unnamed| ADD_06_030_Show_client_data_show_client_address_data
    ADD_Email_visibility_setting -->|unnamed| ADD_06_030_Show_client_data_show_unmasked_client_email
    Landmark -->|{ADD LOR-6612/}| n_01_210_Show_contract_detail_show_client_address_data
    Parent_full_name -->|unnamed| DEL_01_210_Show_contract_detail_display_additional_client_da
    Birth_date -->|unnamed| DEL_01_210_Show_contract_detail_display_additional_client_da
    Gender -->|unnamed| DEL_01_210_Show_contract_detail_display_additional_client_da
    Marital_status -->|unnamed| DEL_01_210_Show_contract_detail_display_additional_client_da
    MOD_Father_full_name -->|unnamed| DEL_06_030_Show_client_data_display_additional_client_data
    MOD_Gender -->|unnamed| DEL_06_030_Show_client_data_display_additional_client_data
    Street_name -->|{ADD LOR-6612/}| n_01_210_Show_contract_detail_show_client_address_data
    MOD_06_030_Show_Client_Data -->|unnamed| MOD_Phone_number_visibility_setting
    MOD_06_030_Show_Client_Data -->|unnamed| ADD_06_030_Show_client_data_show_client_address_data
    MOD_06_030_Show_Client_Data -->|unnamed| MOD_06_030_Show_client_data_show_documents
    MOD_06_030_Show_Client_Data -->|unnamed| n_06_030_Show_client_s_phone_Client_detail
    MOD_06_030_Show_Client_Data -->|unnamed| ADD_06_030_Show_client_data_show_unmasked_client_email
    MOD_01_210_Show_contract_detail -->|unnamed| n_01_210_Show_contract_detail_show_client_address_data
    MOD_01_210_Show_contract_detail -->|unnamed| MOD_Phone_number_visibility_setting
    MOD_01_210_Show_contract_detail -->|unnamed| n_01_210_Show_contract_detail_show_unmasked_client_email
    MOD_01_210_Show_contract_detail -->|unnamed| DEL_01_210_Show_contract_detail_display_additional_client_da
    MOD_01_210_Show_contract_detail -->|unnamed| ADD_01_210_Show_client_s_phone_Tab_Client_on_Contract_detail
    MOD_01_210_Show_contract_detail -->|unnamed| MOD_Show_documents_based_on_security_level
    n_08_900_Show_available_collection_tools_for_client_s_contra -->|unnamed| ADD_08_900_Show_available_collection_tools_for_client_s_cont
    n_08_900_Show_available_collection_tools_for_client_s_contra -->|unnamed| MOD_Phone_number_visibility_setting
    n_08_900_Show_available_collection_tools_for_client_s_contra -->|unnamed| ADD_08_900_Show_available_collection_tools_for_client_s_cont
    n_08_900_Show_available_collection_tools_for_client_s_contra -->|unnamed| ADD_08_900_Show_available_collection_tools_for_client_s_cont
    Email_visibility_setting -->|unnamed| n_01_210_Show_contract_detail_show_unmasked_client_email
    MOD_Phone_number_visibility_setting -->|unnamed| ADD_08_900_Show_available_collection_tools_for_client_s_cont
    Primary_email -->|{ADD LOR-6611/}| Email_visibility_setting
    MOD_Father_full_name -->|unnamed| DEL_08_900_Show_available_collection_tools_for_client_s_cont
    MOD_Primary_e_mail -->|unnamed| ADD_Email_visibility_setting
    MOD_Birth_date -->|unnamed| DEL_08_900_Show_available_collection_tools_for_client_s_cont
    Contact_address -->|unnamed| MOD_Concatenate_address_parts
    Permanent_address -->|unnamed| MOD_Concatenate_address_parts
```
