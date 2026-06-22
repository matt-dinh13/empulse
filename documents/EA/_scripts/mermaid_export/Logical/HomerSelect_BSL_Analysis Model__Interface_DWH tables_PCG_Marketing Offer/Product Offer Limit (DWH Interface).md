# Product Offer Limit (DWH Interface)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Marketing Offer
- **Diagram ID**: 94000
- **Elements**: 3
- **Connectors**: 3

```mermaid
classDiagram
    class HOM_PROD_OFR_LIMIT2PRD_001["HOM_PROD_OFR_LIMIT2PRD_001"]
    class HOM_PROD_OFFER_LIMIT_001["HOM_PROD_OFFER_LIMIT_001"]
    class HOM_PROD_OFR_LIMIT_COM_001["HOM_PROD_OFR_LIMIT_COM_001"]
    HOM_PROD_OFR_LIMIT_COM_001 o-- HOM_PROD_OFR_LIMIT2PRD_001 : unnamed
    HOM_PROD_OFR_LIMIT_COM_001 o-- HOM_PROD_OFFER_LIMIT_001 : unnamed
    HOM_PROD_OFFER_LIMIT_001 o-- HOM_PROD_OFR_LIMIT2PRD_001 : unnamed
```
