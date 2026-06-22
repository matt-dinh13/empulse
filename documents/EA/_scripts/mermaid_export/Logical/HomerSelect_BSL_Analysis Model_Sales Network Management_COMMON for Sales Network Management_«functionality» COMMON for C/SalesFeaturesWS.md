# SalesFeaturesWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/{ADD}Interface provided
- **Diagram ID**: 148768
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class ADD_DataForProductCalculator_ADD_GetDataForProductCalculator["{ADD}DataForProductCalculator :{ADD}GetDataForProductCalculator"]
    class ADD_IsMarketingOfferAvailableOnSalesroom_ADD_IsMarketingOffe["{ADD}IsMarketingOfferAvailableOnSalesroom :{ADD}IsMarketingOfferAvailableForSalesroom"]
    class ADD_SalesFeaturesWS["{ADD}SalesFeaturesWS"]
    ADD_SalesFeaturesWS --> ADD_IsMarketingOfferAvailableOnSalesroom_ADD_IsMarketingOffe : unnamed
    ADD_SalesFeaturesWS --> ADD_DataForProductCalculator_ADD_GetDataForProductCalculator : unnamed
```
