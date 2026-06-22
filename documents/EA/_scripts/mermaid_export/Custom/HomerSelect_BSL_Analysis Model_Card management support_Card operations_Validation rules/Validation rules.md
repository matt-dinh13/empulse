# Validation rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Validation rules
- **Diagram ID**: 79759
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    Mandatory_when_visible["Mandatory when visible"]
    Mandatory["Mandatory"]
    Card_pick_up_salesroom["Card pick-up salesroom"]
    Delivery_option["Delivery option"]
    Delivery_option -->|unnamed| Mandatory
    Card_pick_up_salesroom -->|unnamed| Mandatory_when_visible
```
