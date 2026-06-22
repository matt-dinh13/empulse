# Insurance Contract - Get Insurance Contract data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services
- **Diagram ID**: 162066
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class InsuranceContract["InsuranceContract"]
    class n_11_060_Get_Insurance_Contract_detail_service["11.060 Get Insurance Contract detail service"]
    class InsuranceContract_structure_InsuranceContract_structures["InsuranceContract structure :InsuranceContract structures"]
    class InsuranceContract["InsuranceContract"]
    class GetInsuranceContract["GetInsuranceContract"]
    InsuranceContract ..> GetInsuranceContract : unnamed
    InsuranceContract ..> InsuranceContract : unnamed
    InsuranceContract ..> n_11_060_Get_Insurance_Contract_detail_service : unnamed
    InsuranceContract ..> n_11_060_Get_Insurance_Contract_detail_service : unnamed
```
