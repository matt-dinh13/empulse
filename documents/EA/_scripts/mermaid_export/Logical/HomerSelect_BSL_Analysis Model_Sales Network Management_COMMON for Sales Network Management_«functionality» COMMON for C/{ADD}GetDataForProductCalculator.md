# {ADD}GetDataForProductCalculator

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/{ADD}Interface provided/{ADD}GetDataForProductCalculator
- **Diagram ID**: 116148
- **Elements**: 11
- **Connectors**: 9

```mermaid
classDiagram
    class ProductTypeCode["ProductTypeCode"]
    class ResultCode["ResultCode"]
    class CommodityCategory["CommodityCategory"]
    class InitialTransactionType["InitialTransactionType"]
    class ProductType["ProductType"]
    class ResultDataForProductCalculator["ResultDataForProductCalculator"]
    class GetDataForProductCalculatorResponse["GetDataForProductCalculatorResponse"]
    class GetDataForProductCalculatorRequest["GetDataForProductCalculatorRequest"]
    class ADD_09_502_Get_Data_For_Product_Calculator["{ADD}09.502 Get Data For Product Calculator"]
    class ADD_Interface_provided_SalesFeaturesWS["{ADD}Interface provided : SalesFeaturesWS"]
    class ADD_SalesFeaturesWS["{ADD}SalesFeaturesWS"]
    ProductType ..> InitialTransactionType : unnamed
    ResultDataForProductCalculator ..> ProductType : unnamed
    ResultDataForProductCalculator ..> CommodityCategory : unnamed
    GetDataForProductCalculatorResponse ..> ResultDataForProductCalculator : unnamed
    ResultDataForProductCalculator ..> ResultCode : unnamed
    ADD_SalesFeaturesWS ..> ADD_09_502_Get_Data_For_Product_Calculator : unnamed
    ADD_SalesFeaturesWS ..> GetDataForProductCalculatorRequest : unnamed
    ADD_SalesFeaturesWS ..> GetDataForProductCalculatorResponse : unnamed
    ProductType ..> ProductTypeCode : unnamed
```
