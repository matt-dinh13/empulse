# CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC

```mermaid
graph TD
    CLM_Feature_Flags_CLM_Feature_Flags["CLM Feature Flags : CLM Feature Flags"]
    User_Interface_Model_Collection_tools_overview["User Interface Model : Collection tools overview"]
    Create_communication_Create_communication["Create communication : Create communication"]
    MOD_Back["{MOD}Back"]
    MOD_Finish["{MOD}Finish"]
    MOD_Switch_to_client["{MOD}Switch to client"]
    User_interface_Show_account_detail["User interface : Show account detail"]
    MOD_Client_full_name["{MOD}Client full name"]
    Communication_detail_Show_communication_record["Communication detail : Show communication record"]
    MOD_Client_name["{MOD}Client name"]
    User_Interface_Model_Contract_detail_header["User Interface Model : Contract detail - header"]
    General_parts_of_the_application_Main_menu["General parts of the application : Main menu"]
    MOD_Client_full_name["{MOD}Client full name"]
    MOD_06_040_Search_Clients["{MOD}06.040 Search Clients"]
    MOD_Search_clients["{MOD}Search clients"]
    Actors_Actors["Actors : Actors"]
    CLC["CLC"]
    Validation_rules_Validation_rules["Validation rules : Validation rules"]
    UseCase_Model_Client_management["UseCase Model : Client management"]
    MOD_Select_Client_center_for_user["{MOD}Select Client center for user"]
    MOD_06_030_Show_Client_Data["{MOD}06.030 Show Client Data"]
    CLM_11677_Client_center_BSL_Redirection_to_CLC["CLM-11677 -  Client center - BSL - Redirection to CLC"]
    MOD_Back -->|unnamed| MOD_Select_Client_center_for_user
    MOD_Finish -->|unnamed| MOD_Select_Client_center_for_user
    MOD_Switch_to_client -->|unnamed| MOD_Select_Client_center_for_user
    MOD_Client_name -->|unnamed| MOD_Select_Client_center_for_user
    MOD_Client_full_name -->|unnamed| MOD_Select_Client_center_for_user
    MOD_Search_clients -->|unnamed| MOD_Select_Client_center_for_user
    MOD_06_040_Search_Clients -->|unnamed| CLC
    MOD_06_040_Search_Clients -->|unnamed| MOD_Select_Client_center_for_user
    MOD_06_030_Show_Client_Data -->|unnamed| CLC
    MOD_06_030_Show_Client_Data -->|unnamed| MOD_Select_Client_center_for_user
    MOD_Client_full_name -->|unnamed| MOD_Select_Client_center_for_user
```
