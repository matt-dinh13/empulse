# Qualification criteria - Assign

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/{ADD}Qualification criteria/User Interface
- **Diagram ID**: 117028
- **Elements**: 8
- **Connectors**: 3

```mermaid
graph TD
    ADD_Qualification_criteria_attribute["{ADD}Qualification criteria attribute"]
    ADD_Qualification_criteria_type["{ADD}Qualification criteria type"]
    DEL_08_430_Assign_Qualification_criteria_to_Service["{DEL}08.430 Assign Qualification criteria to Service"]
    User_Interface_Tab_Qualification_criteria["User Interface : Tab Qualification criteria"]
    Cancel["Cancel"]
    OK["OK"]
    Common_service_properties_header["Common service properties header"]
    ADD_Assign_Qualification_criteria_to_service["{ADD}Assign Qualification criteria to service"]
    ADD_Assign_Qualification_criteria_to_service -->|unnamed| DEL_08_430_Assign_Qualification_criteria_to_Service
    OK -->|unnamed| User_Interface_Tab_Qualification_criteria
    Cancel -->|unnamed| User_Interface_Tab_Qualification_criteria
```
