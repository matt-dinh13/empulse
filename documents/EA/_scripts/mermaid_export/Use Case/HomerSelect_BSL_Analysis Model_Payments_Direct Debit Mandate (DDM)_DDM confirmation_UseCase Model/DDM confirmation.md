# DDM confirmation

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM confirmation/UseCase Model
- **Diagram ID**: 164126
- **Elements**: 21
- **Connectors**: 21

```mermaid
graph LR
    Set_parameters_for_file_upload["Set parameters for file upload"]
    HO_DIRECT_DEBIT_MANDATE_FORM_HO_DIRECT_DEBIT_MANDATE_FORM["HO_DIRECT_DEBIT_MANDATE_FORM : HO_DIRECT_DEBIT_MANDATE_FORM"]
    IncomingDirectDebitMandates_IncomingDirectDebitMandates["IncomingDirectDebitMandates : IncomingDirectDebitMandates"]
    OutgoingDirectDebitMandates_OutgoingDirectDebitMandates["OutgoingDirectDebitMandates : OutgoingDirectDebitMandates"]
    n_01_009_Upload_file_to_document_archive(("01.009 Upload file to document archive"))
    diagram_F07CB0A2_92D4_40d8_895E_35E27DFCCED0["$diagram://{F07CB0A2-92D4-40d8-895E-35E27DFCCED0}"]
    External_system[/"External system"/]
    n_01_585_Automatic_import_DDM_confirmation_result(("01.585 Automatic import DDM confirmation result"))
    Tab7_Direct_debit_mandates_Tab7_Direct_debit_mandates["Tab7-Direct debit mandates : Tab7-Direct debit mandates"]
    n_01_435_Print_DDM(("01.435 Print DDM"))
    Plan_import_of_DDM_confirmation_results_Plan_import_of_DDM_c["Plan import of DDM confirmation results : Plan import of DDM confirmation results"]
    Time[/"Time"/]
    System_messages_format_for_exporting_DDM_for_confirmation["System messages format for exporting DDM for confirmation"]
    System_messages_format["System messages format"]
    Import_file_format_for_importing_DDM_confirmation_result["Import file format for importing DDM confirmation result"]
    Export_file_format["Export file format"]
    User[/"User"/]
    MOD_01_540_Export_DDM_for_confirmation(("{MOD}01.540 Export DDM for confirmation"))
    n_01_580_Import_DDM_confirmation_result(("01.580 Import DDM confirmation result"))
    n_01_570_Plan_import_of_DDM_confirmation_results(("01.570 Plan import of DDM confirmation results"))
    n_01_530_Plan_export_of_DDM_for_confirmation(("01.530 Plan export of DDM for confirmation"))
    n_01_530_Plan_export_of_DDM_for_confirmation -.->|include| MOD_01_540_Export_DDM_for_confirmation
    MOD_01_540_Export_DDM_for_confirmation -->|unnamed| OutgoingDirectDebitMandates_OutgoingDirectDebitMandates
    n_01_435_Print_DDM -.->|include| n_01_009_Upload_file_to_document_archive
    n_01_585_Automatic_import_DDM_confirmation_result -->|unnamed| diagram_F07CB0A2_92D4_40d8_895E_35E27DFCCED0
    n_01_435_Print_DDM -->|unnamed| Tab7_Direct_debit_mandates_Tab7_Direct_debit_mandates
    HO_DIRECT_DEBIT_MANDATE_FORM_HO_DIRECT_DEBIT_MANDATE_FORM -->|unnamed| n_01_435_Print_DDM
    System_messages_format_for_exporting_DDM_for_confirmation -->|unnamed| MOD_01_540_Export_DDM_for_confirmation
    n_01_435_Print_DDM -->|unnamed| Set_parameters_for_file_upload
    Export_file_format -->|unnamed| MOD_01_540_Export_DDM_for_confirmation
    n_01_585_Automatic_import_DDM_confirmation_result -->|unnamed| n_01_580_Import_DDM_confirmation_result
    IncomingDirectDebitMandates_IncomingDirectDebitMandates -->|unnamed| n_01_580_Import_DDM_confirmation_result
    Import_file_format_for_importing_DDM_confirmation_result -->|unnamed| n_01_580_Import_DDM_confirmation_result
    n_01_570_Plan_import_of_DDM_confirmation_results -->|unnamed| n_01_580_Import_DDM_confirmation_result
    System_messages_format -->|unnamed| n_01_580_Import_DDM_confirmation_result
    Plan_import_of_DDM_confirmation_results_Plan_import_of_DDM_c -->|unnamed| n_01_570_Plan_import_of_DDM_confirmation_results
    External_system --- n_01_585_Automatic_import_DDM_confirmation_result
    Time --- MOD_01_540_Export_DDM_for_confirmation
    Time --> n_01_580_Import_DDM_confirmation_result
    User --- n_01_435_Print_DDM
    User --> n_01_570_Plan_import_of_DDM_confirmation_results
    User --> n_01_530_Plan_export_of_DDM_for_confirmation
```
