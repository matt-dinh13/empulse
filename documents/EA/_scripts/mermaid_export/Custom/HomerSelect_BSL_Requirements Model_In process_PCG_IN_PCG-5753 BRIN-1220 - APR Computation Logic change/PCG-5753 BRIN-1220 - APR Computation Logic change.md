# PCG-5753 BRIN-1220 - APR Computation Logic change

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/IN/PCG-5753 BRIN-1220 - APR Computation Logic change
- **Diagram ID**: 164637
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    MOD_Calculation_of_Presented_Interest_Rate_Type["{MOD}Calculation of Presented Interest Rate Type"]
    ADD_Calculation_of_Nominal_XIRR_XIRR_N["{ADD}Calculation of Nominal XIRR (XIRR_N)"]
    Calculation_of_XIRR_XIRR["Calculation of XIRR (XIRR) "]
    Algorithms_Algorithms_for_calculation_of_Presented_Interest_["Algorithms : Algorithms for calculation of Presented Interest Rates"]
    PCG_5753_BRIN_1220_APR_Computation_Logic_change["PCG-5753 BRIN-1220 - APR Computation Logic change"]
    Calculation_of_XIRR_XIRR -->|unnamed| MOD_Calculation_of_Presented_Interest_Rate_Type
    ADD_Calculation_of_Nominal_XIRR_XIRR_N -->|unnamed| MOD_Calculation_of_Presented_Interest_Rate_Type
    ADD_Calculation_of_Nominal_XIRR_XIRR_N -->|unnamed| Calculation_of_XIRR_XIRR
```
