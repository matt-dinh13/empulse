# Debt Catalogue Component Model

- **Diagram Type**: Component
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Component Model
- **Diagram ID**: 141868
- **Elements**: 21
- **Connectors**: 8

```mermaid
graph TD
    DebtCatalogueREST(("DebtCatalogueREST"))
    DebtCatalogueREST(("DebtCatalogueREST"))
    LAP[["LAP"]]
    GetDebtCatalogueDetail(("GetDebtCatalogueDetail"))
    Update_overdue_debt_data_loader(("Update overdue debt data loader"))
    CreateDebtCatalogueRecalculationRequest(("CreateDebtCatalogueRecalculationRequest"))
    DebtCatalogueREST(("DebtCatalogueREST"))
    DebtCatalogueREST(("DebtCatalogueREST"))
    Debt_Catalogue_module[["Debt Catalogue module"]]
    GetDebtCatalogueDetail(("GetDebtCatalogueDetail"))
    Update_overdue_debt_data_loader(("Update overdue debt data loader"))
    CreateDebtCatalogueRecalculationRequest(("CreateDebtCatalogueRecalculationRequest"))
    BSL[["BSL"]]
    LCS[["LCS"]]
    DebtCatalogManagementWS(("DebtCatalogManagementWS"))
    CaBus_AM[["CaBus AM"]]
    OnlineDebtWS(("OnlineDebtWS"))
    DebtNotificationService(("DebtNotificationService"))
    DebtCatalogManagementWS(("DebtCatalogManagementWS"))
    OnlineDebtWS(("OnlineDebtWS"))
    DebtNotificationService(("DebtNotificationService"))
    GetDebtCatalogueDetail -->|unnamed| GetDebtCatalogueDetail
    OnlineDebtWS -->|unnamed| OnlineDebtWS
    DebtNotificationService -->|unnamed| DebtNotificationService
    DebtCatalogManagementWS -->|unnamed| DebtCatalogManagementWS
    Update_overdue_debt_data_loader -->|unnamed| Update_overdue_debt_data_loader
    DebtCatalogueREST -->|unnamed| DebtCatalogueREST
    DebtCatalogueREST -->|unnamed| DebtCatalogueREST
    CreateDebtCatalogueRecalculationRequest -->|unnamed| CreateDebtCatalogueRecalculationRequest
```
