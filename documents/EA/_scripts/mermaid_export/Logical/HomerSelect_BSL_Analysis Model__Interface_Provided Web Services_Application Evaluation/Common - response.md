# Common - response

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application Evaluation
- **Diagram ID**: 112077
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class BaseFault["BaseFault"]
    class DataType["DataType"]
    class Pair["Pair"]
    class BaseResponse["BaseResponse"]
    BaseResponse ..> Pair : unnamed
    Pair ..> DataType : unnamed
```
