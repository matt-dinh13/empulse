# REQ #1 - Migrate full person update to PIF REST

```mermaid
graph TD
    Logical_Data_Model_Document["Logical Data Model : Document "]
    Access_Rights_Access_Rights["Access Rights : Access Rights"]
    ADD_06_021_Update_client_data_from_contract["{ADD}06.021 Update client data from contract"]
    UseCase_Model_Contract_signing["UseCase Model : Contract signing"]
    UseCase_Model_Contract_registration["UseCase Model : Contract registration"]
    el_1688810["Note"]
    Person_customerPersonUpdate["Person : customerPersonUpdate"]
    v1_CustomerPerson_Person["v1 : CustomerPerson - Person"]
    BSL_to_CIF_data_conversion_PH["BSL-to-CIF data conversion - PH"]
    BSL_to_CIF_data_conversion_KZ["BSL-to-CIF data conversion - KZ"]
    BSL_to_CIF_mapping["BSL-to-CIF mapping"]
    Decide_about_customer_data_verification_level["Decide about customer data verification level"]
    MOD_Sign_contract_finalization["{MOD}Sign contract finalization"]
    n_06_021_Update_client_data_from_contract["06.021 Update client data from contract"]
    n_06_020_Update_Client_Data["06.020 Update Client Data"]
    MOD_01_187_Sign_contract["{MOD}01.187 Sign contract"]
    REQ_1_Migrate_full_person_update_to_PIF_REST["REQ #1 - Migrate full person update to PIF REST"]
    Full_person_update_on_contract_sign_registration["Full person update on contract sign/registration"]
    External_Reference["External Reference"]
    el_1688810 -->|unnamed| REQ_1_Migrate_full_person_update_to_PIF_REST
    BSL_to_CIF_mapping -->|unnamed| BSL_to_CIF_data_conversion_KZ
    BSL_to_CIF_mapping -->|unnamed| BSL_to_CIF_data_conversion_PH
    n_06_020_Update_Client_Data -->|unnamed| BSL_to_CIF_mapping
    n_06_020_Update_Client_Data -->|{ADD LOR-4814/}| Decide_about_customer_data_verification_level
    n_06_021_Update_client_data_from_contract -->|unnamed| ADD_06_021_Update_client_data_from_contract
    n_06_021_Update_client_data_from_contract -->|unnamed| BSL_to_CIF_data_conversion_KZ
    n_06_021_Update_client_data_from_contract -->|unnamed| BSL_to_CIF_data_conversion_PH
    MOD_01_187_Sign_contract -->|unnamed| MOD_Sign_contract_finalization
    MOD_Sign_contract_finalization -->|unnamed| n_06_021_Update_client_data_from_contract
```
