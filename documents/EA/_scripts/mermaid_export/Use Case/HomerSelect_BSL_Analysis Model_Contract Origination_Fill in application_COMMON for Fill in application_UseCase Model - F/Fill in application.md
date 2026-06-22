# Fill in application

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/UseCase Model - Fill in application
- **Diagram ID**: 158413
- **Elements**: 40
- **Connectors**: 44

```mermaid
graph LR
    System_event_of_opening_and_submitting_application_form["System event of opening and submitting application form"]
    Create_business_events["Create business events"]
    Default_document_container["Default document container"]
    Find_document_based_on_UUID["Find document based on UUID"]
    Get_document_file["Get document file"]
    System_event[/"System event"/]
    n_01_055_Send_person_photo_for_face_recognition_processing(("01.055 Send person photo for face recognition processing"))
    Check_verified_bank_accounts["Check verified bank accounts"]
    User[/"User"/]
    n_12_632_Create_request_for_POS_transaction_without_card(("12.632 Create request for POS transaction without card"))
    Display_revolving_contracts_for_a_repeated_purchase["Display revolving contracts for a repeated purchase"]
    DEL_02_906_Marketing_Offers_Management(("{DEL}02.906 Marketing Offers Management"))
    Application_Processing["Application Processing"]
    DEL_Saving_document_entities["{DEL}Saving document entities"]
    External_Reference["External Reference"]
    Is_Marketing_Offer_to_be_Responded["Is Marketing Offer to be Responded"]
    Save_Marketing_Offer_to_BSL["Save Marketing Offer to BSL"]
    MOD_01_210_Show_contract_detail(("{MOD}01.210 Show contract detail"))
    MOD_01_160_Search_client(("{MOD}01.160 Search client"))
    Display_remotely_created_applications["Display remotely created applications"]
    Validation_by_Document_Type_Validation_Group["Validation by Document Type Validation Group "]
    Document_Type_Validation["Document Type Validation"]
    n_01_087_Print_consent(("01.087 Print consent"))
    n_01_151_Send_to_preliminary_evaluation(("01.151 Send to preliminary evaluation"))
    Technical_account_types["Technical account types"]
    Thumbnail_creation["Thumbnail creation"]
    Check_validated_contacts["Check validated contacts"]
    MOD_Saving_of_Payment_Channels["{MOD}Saving of Payment Channels"]
    Concatenate_person_name_rules["Concatenate person name rules"]
    MOD_ALG_ECS_PROVIDER["{MOD}ALG_ECS_PROVIDER"]
    Algorithm_Generate_DDM_code["Algorithm: Generate DDM code"]
    Algorithm_Find_user_assigned_to_contract_in_2BoD_queue["Algorithm: Find user assigned to contract in 2BoD queue"]
    Algorithm_Decision_of_1SP_or_2SP["Algorithm: Decision of 1SP or 2SP"]
    Add_Edit_document_validations["Add/Edit document validations"]
    Validation_rules_for_AF["Validation rules for AF"]
    MOD_Eligible_Insurance_Service["{MOD}Eligible Insurance Service"]
    n_01_083_Fill_in_application_2BoD(("01.083 Fill in application - 2BoD"))
    MOD_01_082_Fill_in_application_1BoD(("{MOD}01.082 Fill in application - 1BoD"))
    MOD_01_081_Fill_in_application_1SP(("{MOD}01.081 Fill in application - 1SP"))
    n_01_080_Fill_in_application(("01.080 Fill in application"))
    MOD_01_160_Search_client -->|unnamed| Display_revolving_contracts_for_a_repeated_purchase
    MOD_01_160_Search_client -->|unnamed| n_01_080_Fill_in_application
    MOD_01_160_Search_client -->|unnamed| Display_remotely_created_applications
    MOD_01_160_Search_client -->|unnamed| Algorithm_Decision_of_1SP_or_2SP
    n_01_087_Print_consent --> User
    n_01_087_Print_consent -->|unnamed| Validation_by_Document_Type_Validation_Group
    n_01_055_Send_person_photo_for_face_recognition_processing -->|unnamed| Get_document_file
    n_01_055_Send_person_photo_for_face_recognition_processing -->|unnamed| Find_document_based_on_UUID
    n_01_080_Fill_in_application -->|unnamed| Create_business_events
    n_01_080_Fill_in_application -->|unnamed| Save_Marketing_Offer_to_BSL
    n_01_080_Fill_in_application -->|unnamed| Validation_rules_for_AF
    n_01_080_Fill_in_application -->|{ADD LOR-2793/}| Check_verified_bank_accounts
    n_01_080_Fill_in_application -->|unnamed| DEL_Saving_document_entities
    n_01_080_Fill_in_application -->|unnamed| Algorithm_Decision_of_1SP_or_2SP
    n_01_080_Fill_in_application -->|unnamed| Add_Edit_document_validations
    n_01_080_Fill_in_application -->|unnamed| n_01_151_Send_to_preliminary_evaluation
    n_01_080_Fill_in_application -->|unnamed| Application_Processing
    n_01_080_Fill_in_application -->|unnamed| Algorithm_Find_user_assigned_to_contract_in_2BoD_queue
    n_01_080_Fill_in_application -->|unnamed| System_event_of_opening_and_submitting_application_form
    n_01_080_Fill_in_application -->|unnamed| Check_validated_contacts
    n_01_080_Fill_in_application -->|unnamed| MOD_Eligible_Insurance_Service
    n_01_080_Fill_in_application -->|unnamed| DEL_02_906_Marketing_Offers_Management
    MOD_01_081_Fill_in_application_1SP --> n_01_080_Fill_in_application
    MOD_01_082_Fill_in_application_1BoD -.->|include| n_01_080_Fill_in_application
    n_01_083_Fill_in_application_2BoD -->|unnamed| Algorithm_Find_user_assigned_to_contract_in_2BoD_queue
    n_01_083_Fill_in_application_2BoD -.->|include| n_01_080_Fill_in_application
    MOD_Saving_of_Payment_Channels -->|unnamed| Technical_account_types
    n_01_080_Fill_in_application -->|unnamed| Is_Marketing_Offer_to_be_Responded
    Algorithm_Decision_of_1SP_or_2SP -->|unnamed| Default_document_container
    Validation_by_Document_Type_Validation_Group -->|unnamed| Document_Type_Validation
    Application_Processing -->|unnamed| MOD_ALG_ECS_PROVIDER
    Application_Processing -->|unnamed| Concatenate_person_name_rules
    Application_Processing -->|unnamed| MOD_Saving_of_Payment_Channels
    Application_Processing -->|unnamed| Algorithm_Generate_DDM_code
    Application_Processing -->|unnamed| Thumbnail_creation
    Display_remotely_created_applications -->|unnamed| MOD_01_210_Show_contract_detail
    System_event --> n_01_055_Send_person_photo_for_face_recognition_processing
    User --- MOD_01_210_Show_contract_detail
    User --> n_12_632_Create_request_for_POS_transaction_without_card
    User --- n_01_083_Fill_in_application_2BoD
    User --- MOD_01_082_Fill_in_application_1BoD
    User --- DEL_02_906_Marketing_Offers_Management
    User --> MOD_01_081_Fill_in_application_1SP
    User --> MOD_01_160_Search_client
```
