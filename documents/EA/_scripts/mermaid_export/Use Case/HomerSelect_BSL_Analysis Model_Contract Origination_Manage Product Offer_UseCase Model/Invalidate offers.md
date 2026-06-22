# Invalidate offers

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model
- **Diagram ID**: 159093
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    Invalidate_Product_Offers_job["Invalidate Product Offers - job"]
    MOD_01_681_Invalidate_offers(("{MOD}01.681 Invalidate offers"))
    Time[/"Time"/]
    n_01_360_Cancel_contract(("01.360 Cancel contract"))
    MOD_01_681_Invalidate_offers -.->|include| n_01_360_Cancel_contract
    MOD_01_681_Invalidate_offers --- Time
    MOD_01_681_Invalidate_offers -->|unnamed| Invalidate_Product_Offers_job
```
