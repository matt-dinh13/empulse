# HO_DIRECT_DEBIT_MANDATE_FORM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_DIRECT_DEBIT_MANDATE_FORM
- **Diagram ID**: 158394
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class ExtendedProperties["ExtendedProperties"]
    class ExtendedProperty["ExtendedProperty"]
    class ContactsType["ContactsType"]
    class AddressesType["AddressesType"]
    class ContactType["ContactType"]
    class AddressType["AddressType"]
    class LanguageType["LanguageType"]
    class RootType["RootType"]
    class MoneyType["MoneyType"]
    class documentData["documentData"]
    class directDebitMandateForm["directDebitMandateForm"]
    documentData <|-- directDebitMandateForm : unnamed
    documentData ..> MoneyType : unnamed
    RootType <|-- directDebitMandateForm : unnamed
    AddressesType ..> AddressType : unnamed
    ContactsType ..> ContactType : unnamed
    documentData ..> AddressesType : unnamed
    documentData ..> ContactsType : unnamed
    documentData ..> ExtendedProperties : unnamed
    RootType ..> LanguageType : unnamed
    ExtendedProperties ..> ExtendedProperty : unnamed
```
