# Document Type Services - Interface Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Type Services
- **Diagram ID**: 164331
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class n_14_120_Get_Document_Type["14.120 Get Document Type"]
    class AttributeRuleType["AttributeRuleType"]
    class CustomDataType["CustomDataType"]
    class AttributeDataType["AttributeDataType"]
    class AttributeType["AttributeType"]
    class PageSpecificationType["PageSpecificationType"]
    class FlagType["FlagType"]
    class DocumentType["DocumentType"]
    class GetDocumentTypeRequest["GetDocumentTypeRequest"]
    class GetDocumentTypeResponse["GetDocumentTypeResponse"]
    class DocumentTypes["DocumentTypes"]
    DocumentTypes ..> GetDocumentTypeResponse : unnamed
    DocumentTypes ..> GetDocumentTypeRequest : unnamed
    GetDocumentTypeResponse ..> DocumentType : unnamed
    DocumentType ..> FlagType : unnamed
    DocumentType ..> PageSpecificationType : unnamed
    DocumentType ..> AttributeType : unnamed
    AttributeType ..> AttributeDataType : unnamed
    AttributeDataType ..> CustomDataType : unnamed
    AttributeType ..> AttributeRuleType : unnamed
    DocumentTypes ..> n_14_120_Get_Document_Type : unnamed
```
