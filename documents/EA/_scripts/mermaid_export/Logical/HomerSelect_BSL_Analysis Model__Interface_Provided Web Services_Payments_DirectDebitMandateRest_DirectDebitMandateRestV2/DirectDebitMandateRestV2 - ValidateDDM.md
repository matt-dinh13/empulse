# DirectDebitMandateRestV2 - ValidateDDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2
- **Diagram ID**: 158063
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class BaseDirectDebitMandateResponse["BaseDirectDebitMandateResponse"]
    class ValidateDDMResponse["ValidateDDMResponse"]
    class ValidateDDM["ValidateDDM"]
    class n_14_435_POST_ValidateDDM_Validate_direct_debit_mandate_data["14.435 POST ValidateDDM (Validate direct debit mandate data)"]
    class DDM["DDM"]
    class BSL["BSL"]
    BSL o-- DDM : /v2.0/ddm
    n_14_435_POST_ValidateDDM_Validate_direct_debit_mandate_data <|.. ValidateDDM : unnamed
    DDM o-- ValidateDDM : /validate/{ddmCode}
    ValidateDDM --> ValidateDDMResponse : unnamed
    BaseDirectDebitMandateResponse <|-- ValidateDDMResponse : unnamed
```
