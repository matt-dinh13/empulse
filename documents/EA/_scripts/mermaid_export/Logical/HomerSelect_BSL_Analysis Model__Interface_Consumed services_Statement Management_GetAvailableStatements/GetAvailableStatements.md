# GetAvailableStatements

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Statement Management/GetAvailableStatements
- **Diagram ID**: 99195
- **Elements**: 6
- **Connectors**: 3

```mermaid
classDiagram
    class DateRangeDto["DateRangeDto"]
    class StatementInfoDto["StatementInfoDto"]
    class GetAvailableStatementsPeriodFilter["GetAvailableStatementsPeriodFilter"]
    class GetAvailableStatementsResponse["GetAvailableStatementsResponse"]
    class GetAvailableStatementsRequest["GetAvailableStatementsRequest"]
    class StatementManagementWebService["StatementManagementWebService"]
    GetAvailableStatementsRequest --> GetAvailableStatementsPeriodFilter : unnamed
    GetAvailableStatementsResponse --> StatementInfoDto : unnamed
    GetAvailableStatementsPeriodFilter --> DateRangeDto : unnamed
```
