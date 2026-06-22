# Access rights - Services

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Definition/Access Rights
- **Diagram ID**: 130005
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    DEL_02_490_Provide_Commodity_Type_Criterion["{DEL}02.490 Provide Commodity Type Criterion"]
    n_02_490_Provide_Commodity_Type_Criterion["02.490 Provide Commodity Type Criterion"]
    DEL_02_480_Provide_Commodity_Category_Data["{DEL}02.480 Provide Commodity Category Data"]
    DEL_02_470_Provide_Commodity_Type_Data["{DEL}02.470 Provide Commodity Type Data"]
    n_02_480_Provide_Bank_Commodity_Category_Data["02.480 Provide Bank Commodity Category Data"]
    n_02_470_Provide_Commodity_Type_Data["02.470 Provide Commodity Type Data"]
    DEL_02_490_Provide_Commodity_Type_Criterion -->|unnamed| n_02_490_Provide_Commodity_Type_Criterion
    DEL_02_470_Provide_Commodity_Type_Data -->|unnamed| n_02_470_Provide_Commodity_Type_Data
    DEL_02_480_Provide_Commodity_Category_Data -->|unnamed| n_02_480_Provide_Bank_Commodity_Category_Data
```
