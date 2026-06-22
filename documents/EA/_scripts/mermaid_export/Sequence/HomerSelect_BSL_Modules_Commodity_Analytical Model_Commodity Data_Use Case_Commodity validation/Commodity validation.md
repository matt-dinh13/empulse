# Commodity validation

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case/Commodity validation
- **Diagram ID**: 161076
- **Elements**: 7
- **Connectors**: 9

```mermaid
sequenceDiagram
    participant Commodity as Commodity
    participant OSB as OSB
    participant External_system as External system
    participant HomeSIS as HomeSIS
    Commodity->>+Commodity: Validate commodity
    Commodity->>+Commodity: Skip validation
    Commodity->>+Commodity: Log result
    OSB->>+Commodity: Validation result
    External_system->>+Commodity: Validate commodity
    Commodity->>+OSB: Validate commodity externaly
    Commodity->>+HomeSIS: Get salesroom data
    Commodity->>+External_system: Validation result
    HomeSIS->>+Commodity: feature flags
```
