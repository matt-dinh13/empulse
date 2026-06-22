# CreditLimitChangeSupplements - Get supplement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Web Services/CreditLimitChangeSupplements/CreditLimitChangeSupplements_v1
- **Diagram ID**: 162781
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class ScoringAdditionalData["ScoringAdditionalData"]
    class SupplementDocument["SupplementDocument"]
    class CustomData["CustomData"]
    class RelatedSubject["RelatedSubject"]
    class SupplementTypeSpecificData["SupplementTypeSpecificData"]
    class CreditLimitChangeSupplement["CreditLimitChangeSupplement"]
    class SupplementData["SupplementData"]
    class CreditLimitChangeType["CreditLimitChangeType"]
    class ContractSupplementStatusTransition["ContractSupplementStatusTransition"]
    class ADD_13_078_Get_CreditLimitChange_Supplement_detail_service["{ADD}13.078 Get CreditLimitChange Supplement detail service"]
    class GetCreditLimitChangeSupplement["GetCreditLimitChangeSupplement"]
    class CreditLimitChangeSupplements["CreditLimitChangeSupplements"]
    CreditLimitChangeSupplements ..> SupplementData : unnamed
    CreditLimitChangeSupplements ..> ADD_13_078_Get_CreditLimitChange_Supplement_detail_service : unnamed
    CreditLimitChangeSupplements ..> GetCreditLimitChangeSupplement : unnamed
    SupplementData --> RelatedSubject : unnamed
    CreditLimitChangeSupplement --> ScoringAdditionalData : unnamed
    CreditLimitChangeSupplement --> CreditLimitChangeType : unnamed
    SupplementData --> SupplementDocument : unnamed
    SupplementData --> CustomData : unnamed
    SupplementData --> SupplementTypeSpecificData : unnamed
    SupplementTypeSpecificData <|-- CreditLimitChangeSupplement : unnamed
    SupplementData --> ContractSupplementStatusTransition : unnamed
```
