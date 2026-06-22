# Tariff data synchronization mapping

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Provided Services/Interface Provided/ProvideTariffDataWS/Tariff Data
- **Diagram ID**: 92411
- **Elements**: 7
- **Connectors**: 31

```mermaid
classDiagram
    class Synchronization_of_Tariff_ProvideTariffDataWS["Synchronization of Tariff :ProvideTariffDataWS"]
    class MoneyType["MoneyType"]
    class MOD_Tariff["{MOD}Tariff"]
    class Tariff["Tariff"]
    class Tariff_Item["Tariff Item"]
    class GetTariffDataResponse["GetTariffDataResponse"]
    class MOD_Tariff_Item["{MOD}Tariff Item"]
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff ..> MOD_Tariff : unnamed
    Tariff ..> MOD_Tariff : unnamed
    Tariff ..> MOD_Tariff : unnamed
    Tariff ..> MOD_Tariff : unnamed
    Tariff ..> MOD_Tariff : unnamed
    Tariff ..> MOD_Tariff : unnamed
    Tariff ..> MOD_Tariff : unnamed
    Tariff_Item --> Tariff : unnamed
    Tariff --> GetTariffDataResponse : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MoneyType : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    Tariff_Item ..> MOD_Tariff_Item : unnamed
    MOD_Tariff o-- MOD_Tariff_Item : unnamed
```
