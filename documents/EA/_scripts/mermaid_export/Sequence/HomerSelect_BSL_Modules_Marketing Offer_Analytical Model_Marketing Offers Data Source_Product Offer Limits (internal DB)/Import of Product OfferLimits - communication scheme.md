# Import of Product OfferLimits - communication scheme

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Use Case
- **Diagram ID**: 114303
- **Elements**: 7
- **Connectors**: 2

```mermaid
sequenceDiagram
    participant External_system as External system
    participant BSL as BSL
    External_system->>+BSL: importOfferLimits
    BSL->>+External_system: responseOfImportOfferLimits
```
