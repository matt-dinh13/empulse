# Create/Update contact person

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Contact Person/User Interface
- **Diagram ID**: 72002
- **Elements**: 12
- **Connectors**: 2

```mermaid
graph TD
    el_924291["Text"]
    Document_attributes["Document attributes"]
    Create_Edit_Contact_person_name["Create/Edit Contact person name"]
    n_09_190_Update_contact_person["09.190 Update contact person"]
    n_09_180_Create_contact_person["09.180 Create contact person"]
    Cancel["Cancel"]
    OK["OK"]
    Registration_date["Registration date"]
    Document_type["Document type"]
    Birth_date["Birth date"]
    Type["Type"]
    Create_Contact_person["Create Contact person"]
    Create_Contact_person -->|unnamed| n_09_180_Create_contact_person
    Create_Contact_person -->|unnamed| n_09_190_Update_contact_person
```
