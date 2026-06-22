# ContractRegistrationEvent

```mermaid
classDiagram
    class ADD_Action["{ADD}Action"]
    class ValidationCommodity["ValidationCommodity"]
    class Validation["Validation"]
    class Header["Header"]
    class ADD_ContractRegistrationEvent["{ADD}ContractRegistrationEvent"]
    class Contract["Contract"]
    class User["User"]
    class Body["Body"]
    ADD_ContractRegistrationEvent --> Body : unnamed
    Body --> User : unnamed
    Body --> Contract : unnamed
    ADD_ContractRegistrationEvent --> Header : unnamed
    Body --> Validation : unnamed
    Validation --> ValidationCommodity : unnamed
    Body --> ADD_Action : unnamed
```
