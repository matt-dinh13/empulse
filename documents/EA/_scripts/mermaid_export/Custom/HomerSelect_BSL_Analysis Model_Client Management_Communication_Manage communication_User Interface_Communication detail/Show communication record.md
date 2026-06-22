# Show communication record

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Communication detail
- **Diagram ID**: 147689
- **Elements**: 23
- **Connectors**: 6

```mermaid
graph TD
    List_of_communication_tickets_panel_v2["List of communication tickets panel v2"]
    Subtype_Subspecification["Subtype Subspecification"]
    Subtype_Specification["Subtype Specification"]
    MOD_Origin_System["{MOD}Origin System"]
    Update_communication_record["Update communication record"]
    Get_communication_contact_algorithm["Get communication contact algorithm"]
    n_07_030_Show_detail_of_communication["07.030 Show detail of communication"]
    MOD_07_050_Update_communication_record["{MOD}07.050 Update communication record"]
    Field_value_for_result_part["Field value for result part"]
    Field_name_for_result_part["Field name for  result part"]
    MOD_Result["{MOD}Result"]
    hline1["hline1"]
    MOD_Note["{MOD}Note"]
    Contract_number["Contract number"]
    MOD_Subtype["{MOD}Subtype"]
    MOD_Type["{MOD}Type"]
    MOD_Contact["{MOD}Contact"]
    MOD_Status["{MOD}Status"]
    MOD_Channel["{MOD}Channel"]
    MOD_Client_name["{MOD}Client name"]
    Communication_detail["Communication detail"]
    Update["Update"]
    Show_communication_record["Show communication record"]
    Update -->|unnamed| Update_communication_record
    MOD_Contact -->|unnamed| Get_communication_contact_algorithm
    Show_communication_record -->|unnamed| n_07_030_Show_detail_of_communication
    n_07_030_Show_detail_of_communication -->|unnamed| MOD_07_050_Update_communication_record
    n_07_030_Show_detail_of_communication -->|unnamed| Get_communication_contact_algorithm
    MOD_07_050_Update_communication_record -->|unnamed| Update
```
