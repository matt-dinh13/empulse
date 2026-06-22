# CommonRegisterResponseMessage

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/RCM/rcmWS/Types/Common (v2)
- **Diagram ID**: 113926
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class BasicRegisterResponseHeader["BasicRegisterResponseHeader"]
    class CommonRegisterResponseMessage["CommonRegisterResponseMessage"]
    class RegisterResponseHeader["RegisterResponseHeader"]
    class Result["Result"]
    class ResultDescription["ResultDescription"]
    class FoundIn["FoundIn"]
    BasicRegisterResponseHeader ..> FoundIn : unnamed
    BasicRegisterResponseHeader ..> ResultDescription : unnamed
    BasicRegisterResponseHeader ..> Result : unnamed
    CommonRegisterResponseMessage ..> RegisterResponseHeader : unnamed
    BasicRegisterResponseHeader <|-- RegisterResponseHeader : unnamed
```
