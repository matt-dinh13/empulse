# ApplicationManagementWS_v21 - UpdateOfferToApplicationAndEvaluate

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21
- **Diagram ID**: 158287
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class n_01_311_Update_offer_to_application_and_evaluate["01.311 Update offer to application and evaluate"]
    class UpdateOfferToApplicationAndEvaluateResultCode["UpdateOfferToApplicationAndEvaluateResultCode"]
    class UpdateOfferToApplicationAndEvaluateFault["UpdateOfferToApplicationAndEvaluateFault"]
    class UpdateOfferToApplicationAndEvaluateResponse["UpdateOfferToApplicationAndEvaluateResponse"]
    class UpdateOfferToApplicationAndEvaluateRequest["UpdateOfferToApplicationAndEvaluateRequest"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    UpdateOfferToApplicationAndEvaluateFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
    ApplicationManagementWS_v21 ..> UpdateOfferToApplicationAndEvaluateRequest : unnamed
    ApplicationManagementWS_v21 ..> UpdateOfferToApplicationAndEvaluateResponse : unnamed
    ApplicationManagementWS_v21 ..> UpdateOfferToApplicationAndEvaluateFault : unnamed
    UpdateOfferToApplicationAndEvaluateFault ..> UpdateOfferToApplicationAndEvaluateResultCode : unnamed
    n_01_311_Update_offer_to_application_and_evaluate <|.. ApplicationManagementWS_v21 : unnamed
```
