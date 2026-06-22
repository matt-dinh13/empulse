# Product Calculator API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator
- **Diagram ID**: 164376
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class POST_recalculation["POST recalculation"]
    class POST_calculation["POST calculation"]
    class POST_alternatives["POST alternatives"]
    class Product_calculator_API["Product calculator API"]
    class alternatives["alternatives"]
    class recalculation["recalculation"]
    class calculation["calculation"]
    class offers["offers"]
    Product_calculator_API ..> offers : /offers
    offers ..> calculation : /calculation
    offers ..> recalculation : /recalculation
    offers ..> alternatives : /alternatives
    alternatives ..> POST_alternatives : unnamed
    calculation ..> POST_calculation : unnamed
    recalculation ..> POST_recalculation : unnamed
```
