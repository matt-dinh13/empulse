# HO_CONTRACT_PACKAGE

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_PACKAGE
- **Diagram ID**: 111702
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class MOD_NameType["{MOD}NameType"]
    class Generate_barcode["Generate barcode"]
    class AddressType["AddressType"]
    class DocumentType["DocumentType"]
    class PackageItemType["PackageItemType"]
    class DocumentData["DocumentData"]
    class contractPackage["contractPackage"]
    DocumentData <|-- contractPackage : unnamed
    DocumentData ..> PackageItemType : unnamed
    PackageItemType ..> DocumentType : unnamed
    DocumentData ..> AddressType : unnamed
    DocumentData ..> Generate_barcode : unnamed
    PackageItemType ..> MOD_NameType : unnamed
```
