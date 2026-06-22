# CBL-5562 (CLM-1908) Update visibilty of Sum Insured and Premium values for future insurance period

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5562 (CLM-1908) Update visibilty of Sum Insured and Premium values for future insurance period
- **Diagram ID**: 128497
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    Insurance_services["Insurance services"]
    Tab_Insurance_Tab_Insurance["Tab-Insurance : Tab-Insurance"]
    REQ_1_Show_Sum_Insured_and_Premium_values_also_for_future_in["REQ#1 - Show Sum Insured and Premium values also for future insurance period if no active period exists"]
    REQ_1_Show_Sum_Insured_and_Premium_values_also_for_future_in -->|unnamed| Tab_Insurance_Tab_Insurance
    Tab_Insurance_Tab_Insurance -->|unnamed| Insurance_services
```
