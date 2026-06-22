# Partners

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/HomeSIS API/Partners
- **Diagram ID**: 132241
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class DisbursementChannelApiTO["DisbursementChannelApiTO"]
    class PartnerResponseTO["PartnerResponseTO"]
    class partners["partners"]
    class HomeSIS_API["HomeSIS API"]
    PartnerResponseTO ..> DisbursementChannelApiTO : unnamed
    partners ..> PartnerResponseTO : unnamed
    HomeSIS_API ..> partners : /partners
```
