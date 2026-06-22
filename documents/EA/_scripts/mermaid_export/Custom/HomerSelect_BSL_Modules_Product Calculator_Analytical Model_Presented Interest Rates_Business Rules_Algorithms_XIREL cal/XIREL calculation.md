# XIREL calculation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms/XIREL calculation
- **Diagram ID**: 89791
- **Elements**: 10
- **Connectors**: 7

```mermaid
graph TD
    Excel_XIREL_simulation["Excel - XIREL simulation"]
    XIREL_Calculation["XIREL Calculation"]
    Calculation_of_Billing_date_for_PIR["Calculation of Billing date for PIR"]
    Collection_of_initial_parameters_for_XIREL_calculation["Collection of initial parameters for XIREL calculation"]
    PIR_Parameter_To_Tariff_Item_Type["PIR Parameter To Tariff Item Type"]
    Algorithms_Algorithms_for_calculation_of_Presented_Interest_["Algorithms : Algorithms for calculation of Presented Interest Rates"]
    Generation_of_cash_flow_for_XIRR_calculation["Generation of cash flow for XIRR calculation"]
    XIRR_algorithm["XIRR algorithm"]
    Calculation_of_IRR_per_Year_for_REL_initial_and_extra_transa["Calculation of IRR per Year for REL - initial and extra transaction (XIREL2)"]
    Calculation_of_IRR_per_Year_for_REL_initial_transaction_only["Calculation of IRR per Year for REL - initial transaction only (XIREL1)"]
    XIREL_Calculation -->|unnamed| XIRR_algorithm
    XIREL_Calculation -->|unnamed| Generation_of_cash_flow_for_XIRR_calculation
    Collection_of_initial_parameters_for_XIREL_calculation -->|unnamed| PIR_Parameter_To_Tariff_Item_Type
    Generation_of_cash_flow_for_XIRR_calculation -->|unnamed| Collection_of_initial_parameters_for_XIREL_calculation
    Collection_of_initial_parameters_for_XIREL_calculation -->|unnamed| Calculation_of_Billing_date_for_PIR
    Calculation_of_IRR_per_Year_for_REL_initial_and_extra_transa -->|unnamed| XIREL_Calculation
    Calculation_of_IRR_per_Year_for_REL_initial_transaction_only -->|unnamed| XIREL_Calculation
```
