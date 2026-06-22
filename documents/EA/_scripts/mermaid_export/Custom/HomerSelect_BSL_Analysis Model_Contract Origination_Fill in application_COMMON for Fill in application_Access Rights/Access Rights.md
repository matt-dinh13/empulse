# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Access Rights
- **Diagram ID**: 156936
- **Elements**: 22
- **Connectors**: 11

```mermaid
graph TD
    n_01_055_Send_person_photo_for_face_recognition_processing["01.055 Send person photo for face recognition processing"]
    n_01_065_Verify_bank_account_for_application_Application_det["01.065 Verify bank account for application (Application detail)"]
    n_01_139_Verify_card_data["01.139 Verify card data"]
    MOD_01_139_Verify_card_data["{MOD} 01.139 Verify card data"]
    n_01_055_Send_person_photo_for_face_recognition_processing["01.055 Send person photo for face recognition processing"]
    n_01_065_Verify_bank_account_for_application["01.065 Verify bank account for application"]
    MOD_01_065_Verify_bank_account_for_application["{MOD}01.065 Verify bank account for application"]
    DEL_01_141_Save_card_data_to_external_module_from_applicatio["{DEL}01.141 Save card data to external module from application form"]
    n_01_061_Send_information_to_client_by_sms_to_process_applic["01.061 Send information to client by sms to process application form"]
    n_01_061_Send_information_to_client_by_sms_to_process_applic["01.061 Send information to client by sms to process application form"]
    n_01_080_Fill_in_application_skip_remotely_created_contracts["01.080 Fill in application - skip remotely created contracts"]
    n_01_087_Print_consent["01.087 Print consent"]
    DEL_01_060_Invoke_external_identity_check["{DEL}01.060 Invoke external identity check"]
    n_01_087_Print_consent["01.087 Print consent"]
    n_01_092_Cancel_contact_validation["01.092 Cancel contact validation"]
    n_01_091_Validate_verification_code_for_contact["01.091 Validate verification code for contact"]
    n_01_090_Generate_verification_code_for_contact_validation["01.090 Generate verification code for contact validation"]
    n_01_092_Cancel_contact_validation["01.092 Cancel contact validation"]
    n_01_091_Validate_verification_code_for_contact["01.091 Validate verification code for contact"]
    n_01_090_Generate_verification_code_for_contact_validation["01.090 Generate verification code for contact validation"]
    n_01_080_Fill_in_application["01.080 Fill in application"]
    n_01_080_Fill_in_application["01.080 Fill in application"]
    n_01_061_Send_information_to_client_by_sms_to_process_applic -->|unnamed| n_01_061_Send_information_to_client_by_sms_to_process_applic
    n_01_055_Send_person_photo_for_face_recognition_processing -->|unnamed| n_01_055_Send_person_photo_for_face_recognition_processing
    n_01_087_Print_consent -->|unnamed| n_01_087_Print_consent
    n_01_080_Fill_in_application -->|unnamed| n_01_080_Fill_in_application_skip_remotely_created_contracts
    n_01_080_Fill_in_application -->|unnamed| n_01_080_Fill_in_application
    MOD_01_139_Verify_card_data -->|unnamed| n_01_139_Verify_card_data
    n_01_092_Cancel_contact_validation -->|unnamed| n_01_092_Cancel_contact_validation
    MOD_01_065_Verify_bank_account_for_application -->|{ADD LOR-7985/}| n_01_065_Verify_bank_account_for_application_Application_det
    MOD_01_065_Verify_bank_account_for_application -->|unnamed| n_01_065_Verify_bank_account_for_application
    n_01_091_Validate_verification_code_for_contact -->|unnamed| n_01_091_Validate_verification_code_for_contact
    n_01_090_Generate_verification_code_for_contact_validation -->|unnamed| n_01_090_Generate_verification_code_for_contact_validation
```
