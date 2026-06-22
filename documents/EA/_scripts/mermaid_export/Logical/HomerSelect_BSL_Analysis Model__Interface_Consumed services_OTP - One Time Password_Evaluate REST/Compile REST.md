# Compile REST

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/OTP - One Time Password/Evaluate REST
- **Diagram ID**: 133287
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Compile_response["Compile response"]
    class Compile["Compile"]
    class Compile["Compile"]
    class OTP["OTP"]
    OTP o-- Compile : /compile
    Compile ..> Compile : unnamed
    Compile ..> Compile_response : unnamed
```
