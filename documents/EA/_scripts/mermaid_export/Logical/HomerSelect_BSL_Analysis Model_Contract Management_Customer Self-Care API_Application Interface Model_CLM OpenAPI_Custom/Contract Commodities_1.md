# Contract Commodities

```mermaid
classDiagram
    class MOD_01_758_Get_contract_commodities_for_self_care["{MOD}01.758 Get contract commodities for self-care"]
    class customer["customer"]
    class GetContractCommoditiesResponse["GetContractCommoditiesResponse"]
    class MOD_customers["(MOD)customers"]
    class Commodity["Commodity"]
    class BSL_OpenAPI["BSL OpenAPI"]
    class contract["contract"]
    class MOD_contracts["(MOD)contracts"]
    Commodity --> GetContractCommoditiesResponse : unnamed
    customer --> MOD_contracts : /contracts
    MOD_contracts --> contract : /{contractNumber}
    MOD_customers --> customer : /{cuid}
    BSL_OpenAPI --> MOD_customers : /customers
```
