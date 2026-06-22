# LOR-9328 - Remove unused HO_CONSENT_DATA elements

```mermaid
graph TD
    NameBaseType["NameBaseType"]
    MOD_DocumentAttributeType["{MOD}DocumentAttributeType"]
    MOD_DocumentType["{MOD}DocumentType"]
    PersonFullNameType["PersonFullNameType"]
    PersonFullNameBaseType["PersonFullNameBaseType"]
    AdditionalNameGroup["AdditionalNameGroup"]
    MOD_AdditionalPersonType["{MOD}AdditionalPersonType"]
    MOD_PersonalDetailsType["{MOD}PersonalDetailsType"]
    SellerType["SellerType"]
    DocumentFileContent["DocumentFileContent"]
    DocumentTypeType["DocumentTypeType"]
    DocumentTypeGroup["DocumentTypeGroup"]
    DocumentAttributeBaseType["DocumentAttributeBaseType"]
    PersonNameWithSuffixType["PersonNameWithSuffixType"]
    PersonNameSuffixGroup["PersonNameSuffixGroup"]
    PersonNameGroup["PersonNameGroup"]
    DocumentAttributesDataType["DocumentAttributesDataType"]
    DocumentDataType["DocumentDataType"]
    DocumentsDataType["DocumentsDataType"]
    ContactsType["ContactsType"]
    MOD_DocumentFile["{MOD}DocumentFile"]
    FullLanguageType["FullLanguageType"]
    DocumentsType["DocumentsType"]
    PersonDataType["PersonDataType"]
    AddressType["AddressType"]
    MOD_NameType["{MOD}NameType"]
    ConsentDocumentType["ConsentDocumentType"]
    LOR_9328_Remove_unused_HO_CONSENT_DATA_elements["LOR-9328 - Remove unused HO_CONSENT_DATA elements"]
    LOR_6201_Separate_DSM_from_BSL["LOR-6201 - Separate DSM from BSL"]
    DocumentsDataType -->|unnamed| DocumentDataType
    PersonDataType -->|{ADD LOR-9328/}| DocumentsDataType
    DocumentDataType -->|unnamed| DocumentAttributesDataType
    DocumentAttributesDataType -->|unnamed| DocumentAttributeBaseType
    DocumentDataType -->|unnamed| DocumentTypeType
    PersonDataType -->|unnamed| FullLanguageType
    PersonDataType -->|{DEL LOR-9328/}| ContactsType
    PersonDataType -->|unnamed| DocumentsType
    ConsentDocumentType -->|unnamed| PersonDataType
    PersonDataType -->|{DEL LOR-9328/}| MOD_NameType
    PersonDataType -->|{ADD LOR-9328/}| PersonNameWithSuffixType
    ConsentDocumentType -->|{DEL LOR-9359/}| DocumentFileContent
    ConsentDocumentType -->|{DEL LOR-9328/}| MOD_DocumentFile
    ConsentDocumentType -->|unnamed| AddressType
    DocumentTypeGroup -->|unnamed| DocumentTypeType
    AdditionalNameGroup -->|unnamed| PersonFullNameBaseType
    AdditionalNameGroup -->|unnamed| PersonFullNameType
    PersonNameGroup -->|unnamed| PersonNameWithSuffixType
    PersonNameSuffixGroup -->|unnamed| PersonNameWithSuffixType
    PersonNameGroup -->|unnamed| PersonFullNameBaseType
    PersonNameGroup -->|unnamed| PersonFullNameType
    DocumentTypeGroup -->|unnamed| MOD_DocumentType
    MOD_DocumentType -->|unnamed| MOD_DocumentFile
    PersonNameSuffixGroup -->|unnamed| PersonFullNameType
    MOD_DocumentFile -->|unnamed| DocumentFileContent
    MOD_DocumentAttributeType -->|unnamed| DocumentAttributeBaseType
    MOD_PersonalDetailsType -->|unnamed| MOD_NameType
    MOD_PersonalDetailsType -->|unnamed| PersonFullNameType
    MOD_AdditionalPersonType -->|unnamed| PersonFullNameBaseType
    MOD_AdditionalPersonType -->|unnamed| NameBaseType
    SellerType -->|{DEL LOR-9328/}| MOD_NameType
    SellerType -->|{ADD LOR-9328/}| PersonFullNameType
```
