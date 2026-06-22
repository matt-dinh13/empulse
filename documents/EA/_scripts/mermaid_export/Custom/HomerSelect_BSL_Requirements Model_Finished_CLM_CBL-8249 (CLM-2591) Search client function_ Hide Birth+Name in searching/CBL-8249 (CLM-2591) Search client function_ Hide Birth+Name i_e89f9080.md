# CBL-8249 (CLM-2591) Search client function: Hide Birth+Name in searching criteria

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8249 (CLM-2591) Search client function: Hide Birth+Name in searching criteria
- **Diagram ID**: 123526
- **Elements**: 4
- **Connectors**: 1

```mermaid
graph TD
    Default_Search_criteria_Default["Default : Search criteria - Default"]
    ADD_06_040_Search_clients_by_Name_and_Date_of_birth["{ADD}06.040 Search clients by Name and Date of birth"]
    MOD_06_040_Search_Clients["{MOD}06.040 Search Clients"]
    REQ_1_Hide_Birth_Names_fields_in_Client_search_according_to_["REQ#1 - Hide Birth+Names fields in Client search according to the new user right"]
    MOD_06_040_Search_Clients -->|unnamed| ADD_06_040_Search_clients_by_Name_and_Date_of_birth
```
