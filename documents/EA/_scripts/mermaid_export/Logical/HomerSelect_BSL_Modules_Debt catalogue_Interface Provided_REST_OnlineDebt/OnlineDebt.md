# OnlineDebt

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/OnlineDebt
- **Diagram ID**: 155681
- **Elements**: 15
- **Connectors**: 14

```mermaid
classDiagram
    class GetOnlineDebt["GetOnlineDebt"]
    class GetDebtStatRequest["GetDebtStatRequest"]
    class GetOnlineDebtRequest["GetOnlineDebtRequest"]
    class CalculateDebtResponse["CalculateDebtResponse"]
    class FeeDebt["FeeDebt"]
    class GetDebtStatResponse["GetDebtStatResponse"]
    class GetOnlineDebtResponse["GetOnlineDebtResponse"]
    class CalculateDebtRequest["CalculateDebtRequest"]
    class n_01_483_Calculate_debt_on_external_request["01.483 Calculate debt on external request"]
    class n_01_471_Get_debt_catalogue_for_external_system["01.471 Get debt catalogue for external system"]
    class n_01_481_Get_debt_statistics["01.481 Get debt statistics"]
    class External_system["External system"]
    class Collection_system["Collection system"]
    class CaBus_AM["CaBus-AM"]
    class UseCase_Model_Calculate_debt_on_external_request["UseCase Model : Calculate debt on external request"]
    GetOnlineDebt ..> GetOnlineDebtResponse : unnamed
    GetOnlineDebt ..> GetDebtStatResponse : unnamed
    CalculateDebtResponse ..> FeeDebt : unnamed
    GetOnlineDebt ..> CalculateDebtResponse : unnamed
    GetOnlineDebt ..> GetOnlineDebtRequest : unnamed
    GetOnlineDebt ..> GetDebtStatRequest : unnamed
    GetOnlineDebt ..> CalculateDebtRequest : unnamed
    GetOnlineDebt ..> n_01_481_Get_debt_statistics : unnamed
    GetOnlineDebt ..> n_01_471_Get_debt_catalogue_for_external_system : unnamed
    GetOnlineDebt ..> n_01_483_Calculate_debt_on_external_request : unnamed
    Collection_system --> n_01_471_Get_debt_catalogue_for_external_system : unnamed
    External_system --> n_01_483_Calculate_debt_on_external_request : unnamed
    External_system --> n_01_471_Get_debt_catalogue_for_external_system : unnamed
    CaBus_AM --> n_01_481_Get_debt_statistics : unnamed
```
