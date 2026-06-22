# PersonAccountService

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PersonAccountService
- **Diagram ID**: 123043
- **Elements**: 7
- **Connectors**: 8

```mermaid
classDiagram
    class ReserveIbanResponse["ReserveIbanResponse"]
    class ReserveIbanRequest["ReserveIbanRequest"]
    class CreatePersonAccByIbanHoselRequest["CreatePersonAccByIbanHoselRequest"]
    class ErrorCode["ErrorCode"]
    class ResultCode["ResultCode"]
    class CreatePersonAccByIbanHoselResponse["CreatePersonAccByIbanHoselResponse"]
    class PersonAccountService["PersonAccountService"]
    PersonAccountService ..> CreatePersonAccByIbanHoselResponse : unnamed
    ReserveIbanResponse ..> ResultCode : unnamed
    CreatePersonAccByIbanHoselResponse ..> ResultCode : unnamed
    ReserveIbanResponse ..> ErrorCode : unnamed
    CreatePersonAccByIbanHoselResponse ..> ErrorCode : unnamed
    PersonAccountService ..> CreatePersonAccByIbanHoselRequest : unnamed
    PersonAccountService ..> ReserveIbanRequest : unnamed
    PersonAccountService ..> ReserveIbanResponse : unnamed
```
