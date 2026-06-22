# tab Contact Persons

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Contact Person/User Interface
- **Diagram ID**: 72004
- **Elements**: 9
- **Connectors**: 6

```mermaid
graph TD
    Create_Update_contact_person["Create/Update contact person"]
    Contact_persons["Contact persons"]
    n_09_340_Show_contact_person["09.340 Show contact person"]
    n_09_200_Remove_contact_person["09.200 Remove contact person"]
    n_09_190_Update_contact_person["09.190 Update contact person"]
    n_09_180_Create_contact_person["09.180 Create contact person"]
    n_09_030_Show_partner["09.030 Show partner"]
    Create_contact_person["Create contact person"]
    tab_Contact_Persons["tab Contact Persons"]
    Create_contact_person -->|unnamed| Create_Update_contact_person
    Contact_persons -->|unnamed| n_09_200_Remove_contact_person
    Contact_persons -->|unnamed| n_09_340_Show_contact_person
    Contact_persons -->|unnamed| n_09_190_Update_contact_person
    tab_Contact_Persons -->|unnamed| n_09_030_Show_partner
    Create_contact_person -->|unnamed| n_09_180_Create_contact_person
```
