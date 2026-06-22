# Common - request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CSD/Common
- **Diagram ID**: 122080
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class orderAdapted["orderAdapted"]
    class sortAdapted["sortAdapted"]
    class pageableAdapted["pageableAdapted"]
    class abstractListRequest["abstractListRequest"]
    abstractListRequest ..> pageableAdapted : unnamed
    pageableAdapted ..> sortAdapted : unnamed
    sortAdapted ..> orderAdapted : unnamed
```
