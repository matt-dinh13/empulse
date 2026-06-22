# LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents
- **Diagram ID**: 148151
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph TD
    DocumentsType["DocumentsType"]
    DocumentsType["DocumentsType"]
    MOD_PersonalDetailsType["{MOD}PersonalDetailsType"]
    ContractDocumentType["ContractDocumentType"]
    DocumentWithBarCodePrefixType["DocumentWithBarCodePrefixType"]
    MOD_DocumentType["{MOD}DocumentType"]
    LOR_8940_Extend_HO_CONTRACT_DATA_with_barcode_prefix_of_incl["LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents"]
    MOD_PersonalDetailsType -->|unnamed| DocumentsType
    DocumentsType -->|unnamed| DocumentWithBarCodePrefixType
    MOD_PersonalDetailsType -->|{DEL LOR-8940/}| DocumentsType
    DocumentWithBarCodePrefixType -->|unnamed| MOD_DocumentType
    DocumentsType -->|unnamed| MOD_DocumentType
```
