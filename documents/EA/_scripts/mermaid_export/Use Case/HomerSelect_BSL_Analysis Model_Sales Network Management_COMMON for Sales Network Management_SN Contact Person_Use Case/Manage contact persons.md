# Manage contact persons

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Contact Person/Use Case
- **Diagram ID**: 71832
- **Elements**: 8
- **Connectors**: 10

```mermaid
graph LR
    Update_contact_person_Contact_person_detail["Update contact person : Contact person detail"]
    User[/"User"/]
    Create_contact_person_Create_Edit_contact_person["Create contact person :Create/Edit contact person"]
    SN_Contact_person_validation_rules_GUI["SN Contact person validation rules - GUI
"]
    n_09_340_Show_contact_person(("09.340 Show contact person"))
    n_09_200_Remove_contact_person(("09.200 Remove contact person"))
    n_09_190_Update_contact_person(("09.190 Update contact person"))
    n_09_180_Create_contact_person(("09.180 Create contact person"))
    Create_contact_person_Create_Edit_contact_person -->|unnamed| n_09_180_Create_contact_person
    Update_contact_person_Contact_person_detail -->|unnamed| n_09_200_Remove_contact_person
    Update_contact_person_Contact_person_detail -->|unnamed| n_09_340_Show_contact_person
    n_09_190_Update_contact_person -->|unnamed| SN_Contact_person_validation_rules_GUI
    n_09_180_Create_contact_person -->|unnamed| SN_Contact_person_validation_rules_GUI
    n_09_190_Update_contact_person -->|unnamed| Create_contact_person_Create_Edit_contact_person
    User --> n_09_180_Create_contact_person
    User --> n_09_190_Update_contact_person
    User --> n_09_340_Show_contact_person
    User --> n_09_200_Remove_contact_person
```
