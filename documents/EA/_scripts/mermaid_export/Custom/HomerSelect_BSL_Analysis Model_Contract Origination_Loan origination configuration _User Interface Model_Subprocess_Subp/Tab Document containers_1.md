# Tab Document containers

```mermaid
graph TD
    Personal_Document_Container_Detail["Personal Document Container Detail"]
    Cancel["Cancel"]
    Add["Add"]
    Document_container["Document container"]
    Add_document_container["Add document container"]
    Add_existing_container["Add existing container"]
    List_of_personal_document_containers["List of personal document containers"]
    Tab_Document_containers["Tab Document containers"]
    Cancel -->|unnamed| Tab_Document_containers
    Add -->|unnamed| Tab_Document_containers
    Add_existing_container -->|unnamed| Add_document_container
    List_of_personal_document_containers -->|unnamed| Personal_Document_Container_Detail
```
