# Get Application - client data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types
- **Diagram ID**: 158292
- **Elements**: 19
- **Connectors**: 23

```mermaid
classDiagram
    class FileDetail["FileDetail"]
    class FileList["FileList"]
    class CreatedDocumentAttribute["CreatedDocumentAttribute"]
    class ApplicationManagementWS_v19_ApplicationManagementWS_v21_GetA["ApplicationManagementWS_v19 :ApplicationManagementWS_v21 - GetApplicationData"]
    class Language["Language"]
    class FinancialData["FinancialData"]
    class DocumentBase["DocumentBase"]
    class CreatedDocument["CreatedDocument"]
    class PersonAddressType["PersonAddressType"]
    class PersonAddress["PersonAddress"]
    class ContactRole["ContactRole"]
    class Contact["Contact"]
    class Employment["Employment"]
    class ClientAddress["ClientAddress"]
    class Address["Address"]
    class PersonInformation["PersonInformation"]
    class NameType["NameType"]
    class ClientData["ClientData"]
    class ApplicationDetail["ApplicationDetail"]
    ClientData ..> Contact : unnamed
    CreatedDocument ..> FileList : unnamed
    CreatedDocument ..> CreatedDocumentAttribute : unnamed
    ApplicationDetail --> ApplicationManagementWS_v19_ApplicationManagementWS_v21_GetA : unnamed
    ClientData ..> Language : unnamed
    ClientData ..> FinancialData : unnamed
    ClientData ..> CreatedDocument : unnamed
    PersonAddress ..> PersonAddressType : unnamed
    PersonInformation ..> PersonAddress : unnamed
    FileList ..> FileDetail : unnamed
    Employment ..> Contact : unnamed
    ApplicationDetail ..> ClientData : unnamed
    PersonInformation ..> Contact : unnamed
    PersonInformation ..> Employment : unnamed
    ClientData ..> Employment : unnamed
    ClientData ..> ClientAddress : unnamed
    Employment ..> Address : unnamed
    ClientAddress ..> Address : unnamed
    PersonAddress ..> Address : unnamed
    ClientData ..> PersonInformation : unnamed
    ClientData ..> NameType : unnamed
    PersonInformation ..> NameType : unnamed
    Contact ..> ContactRole : unnamed
```
