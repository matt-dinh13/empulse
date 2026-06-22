# Contract Services

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v10.0/Contract Services
- **Diagram ID**: 159617
- **Elements**: 9
- **Connectors**: 7

```mermaid
classDiagram
    class Service["Service"]
    class GetContractServicesResponse["GetContractServicesResponse"]
    class n_01_759_Get_contract_services_for_self_care["01.759 Get contract services for self-care"]
    class services["services"]
    class customer["customer"]
    class MOD_customers["(MOD)customers"]
    class BSL_OpenAPI["BSL OpenAPI"]
    class contract["contract"]
    class MOD_contracts["(MOD)contracts"]
    GetContractServicesResponse o-- Service : unnamed
    contract ..> services : /services
    customer ..> MOD_contracts : /contracts
    MOD_contracts ..> contract : /{contractNumber}
    MOD_customers ..> customer : /{cuid}
    BSL_OpenAPI ..> MOD_customers : /customers
    services ..> n_01_759_Get_contract_services_for_self_care : unnamed
```
