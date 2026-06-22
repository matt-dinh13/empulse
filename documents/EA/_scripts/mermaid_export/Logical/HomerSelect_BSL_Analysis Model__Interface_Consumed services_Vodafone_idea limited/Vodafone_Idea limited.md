# Vodafone/Idea limited

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Vodafone/idea limited
- **Diagram ID**: 131155
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class VilConsentsRestService_v1["VilConsentsRestService_v1"]
    class OSB["OSB"]
    class createConsentAndCheckEligibilityResponse["createConsentAndCheckEligibilityResponse"]
    class createConsentAndCheckEligibilityRequest["createConsentAndCheckEligibilityRequest"]
    VilConsentsRestService_v1 ..> createConsentAndCheckEligibilityRequest : unnamed
    VilConsentsRestService_v1 ..> createConsentAndCheckEligibilityResponse : unnamed
    OSB o-- VilConsentsRestService_v1 : /IN_BSL/VilConsentsRestService_v1
```
