# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-16225 (CSI-1363) Replacement ContractDocumentWS methods/Logical Data Model
- **Diagram ID**: 143305
- **Elements**: 11
- **Connectors**: 8

```mermaid
classDiagram
    class Document_Attribute["Document Attribute"]
    class DocumentFile["DocumentFile"]
    class ADD_Document_DMS_File["{ADD}Document DMS File"]
    class MOD_Contract["{MOD}Contract"]
    class MOD_Client_Snapshot["{MOD}Client Snapshot"]
    class Contract_Document["Contract Document"]
    class Client_Document["Client Document"]
    class Document["Document"]
    class DMS["DMS"]
    class COMMA["COMMA"]
    class CAB["CAB"]
    DMS --> DocumentFile : unnamed
    Document_Attribute --> Document : unnamed
    Contract_Document --> Document : unnamed
    MOD_Contract o-- Contract_Document : unnamed
    MOD_Contract --> MOD_Client_Snapshot : unnamed
    MOD_Client_Snapshot o-- Client_Document : unnamed
    Client_Document --> Document : unnamed
    Document o-- ADD_Document_DMS_File : unnamed
```
