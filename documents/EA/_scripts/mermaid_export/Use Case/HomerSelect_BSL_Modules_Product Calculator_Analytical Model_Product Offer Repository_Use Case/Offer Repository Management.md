# Offer Repository Management

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Use Case
- **Diagram ID**: 99979
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    Delete_Expired_Offers_job["Delete Expired Offers - job"]
    Time[/"Time"/]
    n_02_001_Delete_Expired_Offers(("02.001 Delete Expired Offers"))
    Time --- n_02_001_Delete_Expired_Offers
    n_02_001_Delete_Expired_Offers -->|unnamed| Delete_Expired_Offers_job
```
