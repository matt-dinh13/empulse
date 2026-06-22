# Tariff Versions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Provided Services/Interface Provided/ProvideTariffDataWS/Tariff Versions
- **Diagram ID**: 92427
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class Synchronization_of_Tariff_ProvideTariffDataWS["Synchronization of Tariff :ProvideTariffDataWS"]
    class Tariff_Version["Tariff Version"]
    class GetTariffVersionsResponse["GetTariffVersionsResponse"]
    GetTariffVersionsResponse o-- Tariff_Version : unnamed
```
