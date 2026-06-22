# Offer Result Transaction

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result
- **Diagram ID**: 94204
- **Elements**: 6
- **Connectors**: 3

```mermaid
classDiagram
    class MOD_Mapping_of_Offer_Result_Transaction_to_OFP["{MOD}Mapping of Offer Result Transaction to OFP"]
    class Offer_Result_Transaction_Repayment["Offer Result Transaction Repayment"]
    class Offer_Result["Offer Result"]
    class Offer_Result_Transaction_Subvention["Offer Result Transaction Subvention"]
    class Offer_Result_Transaction["Offer Result Transaction"]
    class Offer_Result["Offer Result"]
    Offer_Result_Transaction o-- Offer_Result_Transaction_Repayment : unnamed
    Offer_Result_Transaction o-- Offer_Result_Transaction_Subvention : unnamed
    Offer_Result o-- Offer_Result_Transaction : unnamed
```
