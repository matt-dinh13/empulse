# {ADD LOR-4899/}UMC REST roles

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/UMC/UMC REST
- **Diagram ID**: 130112
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class ApiResponse_Role["ApiResponse ‹Role›"]
    class Enum["Enum"]
    class Error["Error"]
    class Result["Result"]
    class Role["Role"]
    class Roles["Roles"]
    class UMC["UMC"]
    UMC o-- Roles : /roles
    ApiResponse_Role ..> Role : unnamed
    ApiResponse_Role ..> Result : unnamed
    Result ..> Error : unnamed
    Result ..> Enum : unnamed
    Roles ..> ApiResponse_Role : unnamed
```
