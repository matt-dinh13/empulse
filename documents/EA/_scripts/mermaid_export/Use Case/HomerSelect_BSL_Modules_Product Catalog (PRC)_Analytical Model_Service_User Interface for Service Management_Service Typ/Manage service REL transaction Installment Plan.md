# Manage service REL transaction Installment Plan

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/Use Case
- **Diagram ID**: 70488
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    Generating_of_RELIP_service_variant_number["Generating of RELIP service variant number"]
    n_08_514_Remove_RELIP_service_variant(("08.514 Remove RELIP service variant"))
    n_08_512_Set_RELIP_service_variant(("08.512 Set RELIP service variant"))
    n_08_510_Show_RELIP_service_variant(("08.510 Show RELIP service variant"))
    User[/"User"/]
    n_08_512_Set_RELIP_service_variant -->|unnamed| Generating_of_RELIP_service_variant_number
    User --- n_08_512_Set_RELIP_service_variant
    User --- n_08_514_Remove_RELIP_service_variant
    User --- n_08_510_Show_RELIP_service_variant
```
