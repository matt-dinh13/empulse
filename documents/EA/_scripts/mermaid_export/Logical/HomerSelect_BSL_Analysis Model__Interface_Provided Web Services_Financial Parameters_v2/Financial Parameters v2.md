# Financial Parameters v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Financial Parameters/v2
- **Diagram ID**: 164370
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class FinancialParametersItems["FinancialParametersItems"]
    class TariffVersion["TariffVersion"]
    class TariffDto["TariffDto"]
    class ProductVersion["ProductVersion"]
    class FpAdditionalAttributes["FpAdditionalAttributes"]
    class FinancingScheme["FinancingScheme"]
    class FinancingPackage["FinancingPackage"]
    class ContractStructuredParameters["ContractStructuredParameters"]
    class ContractPresentedInterestRate["ContractPresentedInterestRate"]
    class getDetailResponse["getDetailResponse"]
    class getDetailRequest["getDetailRequest"]
    class Financial_Parameters["Financial Parameters"]
    Financial_Parameters ..> getDetailRequest : unnamed
    Financial_Parameters ..> getDetailResponse : unnamed
    getDetailResponse ..> ContractPresentedInterestRate : unnamed
    getDetailResponse ..> ContractStructuredParameters : unnamed
    getDetailResponse ..> FinancingPackage : unnamed
    getDetailResponse ..> FinancingScheme : unnamed
    getDetailResponse ..> FpAdditionalAttributes : unnamed
    getDetailResponse ..> ProductVersion : unnamed
    getDetailResponse ..> TariffDto : unnamed
    getDetailResponse ..> TariffVersion : unnamed
    getDetailResponse ..> FinancialParametersItems : unnamed
```
