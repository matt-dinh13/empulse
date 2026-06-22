# Contracts validation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts validation/v1/Contracts validation
- **Diagram ID**: 156252
- **Elements**: 8
- **Connectors**: 8

```mermaid
classDiagram
    class ADD_ServiceDto["{ADD}ServiceDto"]
    class ValidationErrorsDto["ValidationErrorsDto"]
    class ValidationErrorDto["ValidationErrorDto"]
    class ContractValidationResponseDto["ContractValidationResponseDto"]
    class ValidationCriteriaDto["ValidationCriteriaDto"]
    class MOD_Contracts_validation["{MOD}Contracts validation"]
    class contracts_validation["contracts-validation"]
    class ContractValidationRequestDto["ContractValidationRequestDto"]
    contracts_validation ..> ContractValidationRequestDto : unnamed
    contracts_validation ..> MOD_Contracts_validation : unnamed
    ContractValidationRequestDto ..> ValidationCriteriaDto : unnamed
    contracts_validation ..> ContractValidationResponseDto : unnamed
    ValidationErrorsDto ..> ValidationErrorDto : unnamed
    ContractValidationResponseDto ..> ValidationErrorsDto : unnamed
    ValidationCriteriaDto ..> ADD_ServiceDto : unnamed
    ValidationCriteriaDto ..> ADD_ServiceDto : unnamed
```
