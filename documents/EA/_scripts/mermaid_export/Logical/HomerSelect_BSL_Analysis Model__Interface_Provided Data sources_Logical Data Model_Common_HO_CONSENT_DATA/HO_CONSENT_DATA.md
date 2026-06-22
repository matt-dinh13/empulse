# HO_CONSENT_DATA

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONSENT_DATA
- **Diagram ID**: 158051
- **Elements**: 22
- **Connectors**: 21

```mermaid
classDiagram
    class DocumentFileContent["DocumentFileContent"]
    class DocumentTypeType["DocumentTypeType"]
    class DocumentTypeGroup["DocumentTypeGroup"]
    class DocumentAttributeBaseType["DocumentAttributeBaseType"]
    class PersonNameWithSuffixType["PersonNameWithSuffixType"]
    class PersonNameSuffixGroup["PersonNameSuffixGroup"]
    class PersonNameGroup["PersonNameGroup"]
    class DocumentAttributesDataType["DocumentAttributesDataType"]
    class DocumentDataType["DocumentDataType"]
    class DocumentsDataType["DocumentsDataType"]
    class LanguageType["LanguageType"]
    class RootType["RootType"]
    class ContactsType["ContactsType"]
    class MOD_DocumentFile["{MOD}DocumentFile"]
    class VerificationType["VerificationType"]
    class FullLanguageType["FullLanguageType"]
    class consentData["consentData"]
    class DocumentsType["DocumentsType"]
    class PersonDataType["PersonDataType"]
    class AddressType["AddressType"]
    class MOD_NameType["{MOD}NameType"]
    class ConsentDocumentType["ConsentDocumentType"]
    PersonDataType ..> PersonNameWithSuffixType : {ADD LOR-9328/}
    DocumentAttributesDataType ..> DocumentAttributeBaseType : unnamed
    DocumentTypeType <|-- DocumentDataType : unnamed
    DocumentDataType ..> DocumentAttributesDataType : unnamed
    DocumentsDataType ..> DocumentDataType : unnamed
    ConsentDocumentType <|-- consentData : unnamed
    ConsentDocumentType ..> PersonDataType : unnamed
    PersonDataType ..> MOD_NameType : {DEL LOR-9328/}
    PersonDataType ..> DocumentsType : unnamed
    PersonDataType ..> ContactsType : {DEL LOR-9328/}
    PersonDataType ..> FullLanguageType : unnamed
    PersonDataType ..> DocumentsDataType : {ADD LOR-9328/}
    ConsentDocumentType ..> AddressType : unnamed
    ConsentDocumentType ..> MOD_DocumentFile : {DEL LOR-9328/}
    ConsentDocumentType ..> VerificationType : unnamed
    ConsentDocumentType ..> DocumentFileContent : {DEL LOR-9359/}
    RootType <|-- consentData : unnamed
    RootType ..> LanguageType : unnamed
    DocumentTypeType o-- DocumentTypeGroup : unnamed
    PersonNameWithSuffixType o-- PersonNameGroup : unnamed
    PersonNameWithSuffixType o-- PersonNameSuffixGroup : unnamed
```
