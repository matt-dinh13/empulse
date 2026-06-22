# Communication records

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/Use Case
- **Diagram ID**: 161770
- **Elements**: 27
- **Connectors**: 29

```mermaid
graph LR
    Assign_tickets_to_communication_Assign_tickets_to_communicat["Assign tickets to communication : Assign tickets to communication V2"]
    List_of_communication_tickets_List_of_communication_tickets_["List of communication tickets : List of communication tickets panel v2"]
    n_07_110_Assign_ticket_to_communication_v2(("07.110 Assign ticket to communication v2"))
    n_07_120_Show_communication_ticket_list_v2(("07.120 Show communication ticket list v2"))
    Blocking_Unblocking_card["Blocking and Unblocking card"]
    Account_Blockage_use_case_model["Account Blockage use case model"]
    External_system[/"External system"/]
    User[/"User"/]
    ADD_Create_communication_via_API(("{ADD}Create communication via API"))
    ADD_07_040_Create_communication_record(("{ADD}07.040 Create communication record"))
    Create_communication_events_from_the_file["Create communication events from the file"]
    Input_values_validation_for_communications["Input values validation for communications"]
    n_07_041_Create_communication_record(("07.041 Create communication record"))
    ADD_07_130_Get_communication_from_external_systems(("{ADD}07.130 Get communication from external systems"))
    List_of_communication_List_of_communication["List of communication : List of communication"]
    Relationships_between_form_fields["Relationships between form fields"]
    Update_communication_Update_communication_record["Update communication :Update communication record"]
    Create_communication_Create_communication["Create communication : Create communication"]
    Prefilled_fields_for_a_new_communication_record["Prefilled fields for a new communication record"]
    Communication_detail_Show_communication_record["Communication detail :Show communication record"]
    Get_communication_contact_algorithm["Get communication contact algorithm"]
    Tab8_List_of_communication_Tab8_List_of_communication["Tab8-List of communication : Tab8-List of communication"]
    Show_client_data_Show_client_detail["Show client data :Show client detail"]
    MOD_07_050_Update_communication_record(("{MOD}07.050 Update communication record"))
    n_07_040_Create_communication_record_manually(("07.040 Create communication record manually"))
    MOD_07_030_Show_communication_record(("{MOD}07.030 Show communication record"))
    MOD_Show_Tab_List_of_communication(("{MOD}Show Tab List of communication"))
    User --- n_07_040_Create_communication_record_manually
    External_system --- ADD_Create_communication_via_API
    MOD_07_030_Show_communication_record -->|unnamed| MOD_07_050_Update_communication_record
    List_of_communication_tickets_List_of_communication_tickets_ -->|unnamed| n_07_110_Assign_ticket_to_communication_v2
    ADD_Create_communication_via_API -.->|include| ADD_07_040_Create_communication_record
    n_07_040_Create_communication_record_manually -.->|include| ADD_07_040_Create_communication_record
    n_07_041_Create_communication_record -->|unnamed| Create_communication_events_from_the_file
    n_07_041_Create_communication_record -->|unnamed| Input_values_validation_for_communications
    Blocking_Unblocking_card -->|unnamed| n_07_041_Create_communication_record
    Account_Blockage_use_case_model -->|unnamed| n_07_041_Create_communication_record
    MOD_Show_Tab_List_of_communication -.->|include| ADD_07_130_Get_communication_from_external_systems
    ADD_07_040_Create_communication_record -->|unnamed| Relationships_between_form_fields
    n_07_040_Create_communication_record_manually -->|unnamed| Relationships_between_form_fields
    MOD_07_030_Show_communication_record -.->|include| n_07_120_Show_communication_ticket_list_v2
    MOD_07_030_Show_communication_record -->|unnamed| Get_communication_contact_algorithm
    n_07_110_Assign_ticket_to_communication_v2 -->|unnamed| Assign_tickets_to_communication_Assign_tickets_to_communicat
    Communication_detail_Show_communication_record -->|unnamed| MOD_07_050_Update_communication_record
    Update_communication_Update_communication_record -->|unnamed| MOD_07_050_Update_communication_record
    List_of_communication_List_of_communication -->|unnamed| n_07_040_Create_communication_record_manually
    Create_communication_Create_communication -->|unnamed| n_07_040_Create_communication_record_manually
    Communication_detail_Show_communication_record -->|unnamed| MOD_07_030_Show_communication_record
    List_of_communication_List_of_communication -->|unnamed| MOD_07_030_Show_communication_record
    List_of_communication_List_of_communication -->|unnamed| MOD_Show_Tab_List_of_communication
    Show_client_data_Show_client_detail -->|unnamed| MOD_Show_Tab_List_of_communication
    Tab8_List_of_communication_Tab8_List_of_communication -->|unnamed| MOD_Show_Tab_List_of_communication
    n_07_120_Show_communication_ticket_list_v2 -->|unnamed| List_of_communication_tickets_List_of_communication_tickets_
    n_07_040_Create_communication_record_manually -->|unnamed| Prefilled_fields_for_a_new_communication_record
    User --- n_07_110_Assign_ticket_to_communication_v2
    User --- MOD_07_030_Show_communication_record
```
