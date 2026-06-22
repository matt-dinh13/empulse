# Get Application - client data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types
- **Diagram ID**: 158252
- **Elements**: 15
- **Connectors**: 21

```mermaid
classDiagram
    class Document["Document"]
    class ApplicationManagementWS_v22_ApplicationManagementWS_v22_GetA["ApplicationManagementWS_v22 :ApplicationManagementWS_v22 - GetApplicationData"]
    class Language["Language"]
    class FinancialData["FinancialData"]
    class PersonAddressType["PersonAddressType"]
    class PersonAddress["PersonAddress"]
    class ContactRole["ContactRole"]
    class Contact["Contact"]
    class Employment["Employment"]
    class ClientAddress["ClientAddress"]
    class Address["Address"]
    class PersonInformation["PersonInformation"]
    class NameType["NameType"]
    class MOD_ClientData["{MOD}ClientData"]
    class ApplicationDetail["ApplicationDetail"]
    PersonInformation ..> Employment : unnamed
    MOD_ClientData ..> Document : unnamed
    ApplicationDetail --> ApplicationManagementWS_v22_ApplicationManagementWS_v22_GetA : unnamed
    MOD_ClientData ..> Language : unnamed
    MOD_ClientData ..> FinancialData : unnamed
    PersonAddress ..> PersonAddressType : unnamed
    PersonInformation ..> PersonAddress : unnamed
    Contact ..> ContactRole : unnamed
    MOD_ClientData ..> Contact : unnamed
    ApplicationDetail ..> Document : unnamed
    Employment ..> Contact : unnamed
    ApplicationDetail ..> MOD_ClientData : unnamed
    MOD_ClientData ..> Employment : unnamed
    MOD_ClientData ..> ClientAddress : unnamed
    ClientAddress ..> Address : unnamed
    Employment ..> Address : unnamed
    PersonAddress ..> Address : unnamed
    MOD_ClientData ..> PersonInformation : unnamed
    PersonInformation ..> NameType : unnamed
    MOD_ClientData ..> NameType : unnamed
    PersonInformation ..> Contact : unnamed
```
