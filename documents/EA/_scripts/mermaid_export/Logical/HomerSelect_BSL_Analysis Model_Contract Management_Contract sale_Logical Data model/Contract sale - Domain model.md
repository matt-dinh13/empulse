# Contract sale - Domain model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract sale/Logical Data model
- **Diagram ID**: 161595
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class MOD_Contract["{MOD}Contract"]
    class Credit_Owner["Credit Owner"]
    class Contract_Sale["Contract Sale "]
    Contract_Sale --> Credit_Owner : newOwner
    Contract_Sale --> MOD_Contract : unnamed
```
