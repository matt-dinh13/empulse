# Contracts validation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v2/Contracts validation
- **Diagram ID**: 156254
- **Elements**: 13
- **Connectors**: 15

```mermaid
classDiagram
    class ServicesAssignmentValidationErrorDto["ServicesAssignmentValidationErrorDto"]
    class ContractStatusValidationErrorDto["ContractStatusValidationErrorDto"]
    class BasicValidationErrorDto["BasicValidationErrorDto"]
    class ValidationError["ValidationError"]
    class ValidationErrorsDto["ValidationErrorsDto"]
    class ContractValidationResponseDto["ContractValidationResponseDto"]
    class ServiceStatuses["ServiceStatuses"]
    class ServiceAssignmentDto["ServiceAssignmentDto"]
    class ContractStatuses["ContractStatuses"]
    class ValidationCriteriaDto["ValidationCriteriaDto"]
    class ContractValidationRequestDto["ContractValidationRequestDto"]
    class ADD_Contracts_validation_v2["{ADD}Contracts validation v2"]
    class ADD_contracts_validation["{ADD}contracts-validation"]
    ADD_contracts_validation ..> ADD_Contracts_validation_v2 : unnamed
    ADD_contracts_validation ..> ContractValidationRequestDto : unnamed
    ContractValidationRequestDto ..> ValidationCriteriaDto : unnamed
    ContractStatusValidationErrorDto ..> ContractStatuses : unnamed
    ValidationCriteriaDto ..> ContractStatuses : unnamed
    ValidationCriteriaDto ..> ServiceAssignmentDto : unnamed
    ValidationCriteriaDto ..> ServiceAssignmentDto : unnamed
    ServiceAssignmentDto ..> ServiceStatuses : unnamed
    ServicesAssignmentValidationErrorDto ..> ServiceStatuses : unnamed
    ADD_contracts_validation ..> ContractValidationResponseDto : unnamed
    ContractValidationResponseDto ..> ValidationErrorsDto : unnamed
    ValidationErrorsDto ..> ValidationError : unnamed
    ValidationError ..> BasicValidationErrorDto : unnamed
    ValidationError ..> ContractStatusValidationErrorDto : unnamed
    ValidationError ..> ServicesAssignmentValidationErrorDto : unnamed
```
