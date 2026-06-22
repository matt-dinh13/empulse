# Document Types - Assign

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Document Type Assignment/User Interface
- **Diagram ID**: 67631
- **Elements**: 11
- **Connectors**: 3

```mermaid
graph TD
    When_Printable["When Printable"]
    When_Required["When Required"]
    Common_service_properties_header["Common service properties header"]
    OK["OK"]
    User_Interface_Tab_Document_Types["User Interface : Tab Document Types"]
    Cancel["Cancel"]
    Document_type["Document type"]
    Number_of_copies["Number of copies"]
    Printout_template["Printout template"]
    Assign_Document_Type_To_Service["Assign Document Type To Service"]
    DEL_08_310_Assign_Document_type_to_Service["{DEL}08.310 Assign Document type to Service"]
    Assign_Document_Type_To_Service -->|unnamed| DEL_08_310_Assign_Document_type_to_Service
    User_Interface_Tab_Document_Types -->|unnamed| Cancel
    User_Interface_Tab_Document_Types -->|unnamed| OK
```
