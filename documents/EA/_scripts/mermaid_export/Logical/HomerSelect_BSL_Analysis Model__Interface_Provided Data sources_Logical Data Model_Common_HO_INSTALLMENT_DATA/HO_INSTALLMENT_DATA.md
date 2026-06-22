# HO_INSTALLMENT_DATA

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_INSTALLMENT_DATA
- **Diagram ID**: 139140
- **Elements**: 6
- **Connectors**: 6

```mermaid
classDiagram
    class AddressType["AddressType"]
    class MOD_NameType["{MOD}NameType"]
    class contractInstallment["contractInstallment"]
    class MoneyType["MoneyType"]
    class InstallmentType["InstallmentType"]
    class ContractInstallmentType["ContractInstallmentType"]
    ContractInstallmentType <|-- contractInstallment : unnamed
    ContractInstallmentType ..> InstallmentType : unnamed
    InstallmentType ..> MoneyType : unnamed
    ContractInstallmentType ..> MoneyType : unnamed
    ContractInstallmentType ..> MOD_NameType : unnamed
    ContractInstallmentType ..> AddressType : unnamed
```
