# Loan Services

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Services
- **Diagram ID**: 148101
- **Elements**: 11
- **Connectors**: 9

```mermaid
classDiagram
    class SubjectType["SubjectType"]
    class CreationMoment["CreationMoment"]
    class LoanServiceStatus["LoanServiceStatus"]
    class OperationStatusType["OperationStatusType"]
    class Tariff["Tariff"]
    class Service["Service"]
    class RelatedSubject["RelatedSubject"]
    class CardService["CardService"]
    class LoanServiceParameter["LoanServiceParameter"]
    class LoanService["LoanService"]
    LoanService ..> LoanServiceParameter : unnamed
    LoanService ..> CardService : unnamed
    LoanService ..> RelatedSubject : unnamed
    LoanService ..> Service : unnamed
    LoanService ..> Tariff : unnamed
    LoanService ..> OperationStatusType : unnamed
    LoanService ..> LoanServiceStatus : unnamed
    LoanService ..> CreationMoment : unnamed
    RelatedSubject ..> SubjectType : unnamed
```
