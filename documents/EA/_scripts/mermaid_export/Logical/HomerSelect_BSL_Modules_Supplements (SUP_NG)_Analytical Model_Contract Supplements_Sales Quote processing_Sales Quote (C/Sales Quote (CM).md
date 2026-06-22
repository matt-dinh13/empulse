# Sales Quote (CM)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Sales Quote processing/Sales Quote (CM)
- **Diagram ID**: 160122
- **Elements**: 13
- **Connectors**: 9

```mermaid
classDiagram
    class ServiceParameters["ServiceParameters"]
    class ServiceArangement["ServiceArangement"]
    class Enumeration["Enumeration"]
    class Subvention["Subvention"]
    class Specification["Specification"]
    class FeeArangement["FeeArangement"]
    class InterestArangement["InterestArangement"]
    class AmountArangement["AmountArangement"]
    class SalesQuote["SalesQuote"]
    SalesQuote --> ServiceArangement : unnamed
    ServiceArangement o-- ServiceParameters : unnamed
    Specification --> Enumeration : unnamed
    unnamed --> Enumeration : unnamed
    SalesQuote --> Subvention : unnamed
    SalesQuote --> Specification : unnamed
    SalesQuote --> FeeArangement : unnamed
    SalesQuote --> InterestArangement : unnamed
    SalesQuote --> AmountArangement : unnamed
```
