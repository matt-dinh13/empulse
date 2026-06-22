# Tariffs

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Use Case
- **Diagram ID**: 162289
- **Elements**: 22
- **Connectors**: 26

```mermaid
graph LR
    Time[/"Time"/]
    User[/"User"/]
    Account_Management_AccountManagementWS["Account Management : AccountManagementWS"]
    User_Interface_Set_main_Tariff_properties["User Interface : Set main Tariff properties"]
    User_Interface_Create_Tariff["User Interface : Create Tariff"]
    Automatic_Version_activation_processing["Automatic Version activation processing"]
    Evaluate_Tariff_search_criteria["Evaluate Tariff search criteria"]
    Version_number["Version number"]
    DEL_04_170_Cancel_Tariff_version(("{DEL}04.170 Cancel Tariff version"))
    DEL_04_160_Create_Tariff_version(("{DEL}04.160 Create Tariff version"))
    Version_activation_procedure["Version activation procedure"]
    MOD_Tariff_activation_validation_rules["{MOD}Tariff activation validation rules"]
    n_04_190_Activate_Tariff_version_automatically(("04.190 Activate Tariff version automatically"))
    DEL_04_180_Activate_Tariff_version_manually(("{DEL}04.180 Activate Tariff version manually"))
    Activate_Tariff_version_job["Activate Tariff version - job"]
    User_Interface_Search_for_tariffs["User Interface : Search for tariffs"]
    DEL_04_070_Show_Tariff_version_detail(("{DEL}04.070 Show Tariff version detail"))
    DEL_04_015_Create_Tariff_by_copy(("{DEL}04.015 Create Tariff by copy"))
    Tariff_detail_form_Show_Tariff["Tariff detail form :Show Tariff"]
    DEL_04_090_Search_for_Tariffs(("{DEL}04.090 Search for Tariffs"))
    DEL_04_060_Set_main_Tariff_properties(("{DEL}04.060 Set main Tariff properties"))
    DEL_04_010_Create_Tariff(("{DEL}04.010 Create Tariff"))
    Automatic_Version_activation_processing -->|unnamed| MOD_Tariff_activation_validation_rules
    DEL_04_180_Activate_Tariff_version_manually -->|unnamed| Account_Management_AccountManagementWS
    DEL_04_060_Set_main_Tariff_properties -->|unnamed| User_Interface_Set_main_Tariff_properties
    DEL_04_010_Create_Tariff -->|unnamed| User_Interface_Create_Tariff
    DEL_04_015_Create_Tariff_by_copy -->|unnamed| User_Interface_Create_Tariff
    n_04_190_Activate_Tariff_version_automatically -->|unnamed| Automatic_Version_activation_processing
    DEL_04_090_Search_for_Tariffs -->|unnamed| Evaluate_Tariff_search_criteria
    DEL_04_015_Create_Tariff_by_copy -->|unnamed| Version_number
    DEL_04_010_Create_Tariff -->|unnamed| Version_number
    DEL_04_160_Create_Tariff_version -->|unnamed| Version_number
    n_04_190_Activate_Tariff_version_automatically -->|unnamed| Account_Management_AccountManagementWS
    DEL_04_180_Activate_Tariff_version_manually -->|unnamed| Version_activation_procedure
    DEL_04_180_Activate_Tariff_version_manually -->|unnamed| MOD_Tariff_activation_validation_rules
    n_04_190_Activate_Tariff_version_automatically -->|unnamed| Activate_Tariff_version_job
    DEL_04_070_Show_Tariff_version_detail -->|unnamed| Tariff_detail_form_Show_Tariff
    User_Interface_Search_for_tariffs -->|unnamed| DEL_04_090_Search_for_Tariffs
    Time --- n_04_190_Activate_Tariff_version_automatically
    User --- DEL_04_015_Create_Tariff_by_copy
    User --- DEL_04_070_Show_Tariff_version_detail
    User --- DEL_04_170_Cancel_Tariff_version
    User --- DEL_04_010_Create_Tariff
    User --- DEL_04_060_Set_main_Tariff_properties
    User --- DEL_04_180_Activate_Tariff_version_manually
    User --- DEL_04_160_Create_Tariff_version
    User --> DEL_04_090_Search_for_Tariffs
    User --- DEL_04_090_Search_for_Tariffs
```
