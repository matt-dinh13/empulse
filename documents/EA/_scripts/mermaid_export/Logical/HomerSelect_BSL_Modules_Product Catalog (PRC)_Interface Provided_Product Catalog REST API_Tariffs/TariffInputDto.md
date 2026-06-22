# TariffInputDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs
- **Diagram ID**: 163132
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class LocalizedString["LocalizedString"]
    class MOD_TariffItemDto["{MOD}TariffItemDto"]
    class TariffInputDtoTariffItems["TariffInputDtoTariffItems"]
    class TariffInputDto["TariffInputDto"]
    TariffInputDto ..> TariffInputDtoTariffItems : unnamed
    TariffInputDtoTariffItems --> MOD_TariffItemDto : unnamed
    MOD_TariffItemDto ..> LocalizedString : unnamed
    TariffInputDto ..> LocalizedString : unnamed
```
