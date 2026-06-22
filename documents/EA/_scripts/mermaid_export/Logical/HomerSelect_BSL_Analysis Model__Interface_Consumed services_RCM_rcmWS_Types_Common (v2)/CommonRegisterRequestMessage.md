# CommonRegisterRequestMessage

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/RCM/rcmWS/Types/Common (v2)
- **Diagram ID**: 113925
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class CommonRegisterRequestMessage["CommonRegisterRequestMessage"]
    class RegisterRequestHeader["RegisterRequestHeader"]
    class BasicRegisterRequestHeader["BasicRegisterRequestHeader"]
    class CacheSearchType["CacheSearchType"]
    class CacheBehaviour["CacheBehaviour"]
    RegisterRequestHeader ..> CacheBehaviour : unnamed
    RegisterRequestHeader ..> CacheSearchType : unnamed
    BasicRegisterRequestHeader <|-- RegisterRequestHeader : unnamed
    CommonRegisterRequestMessage ..> RegisterRequestHeader : unnamed
```
