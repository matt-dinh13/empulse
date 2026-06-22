# Application Rest - Entity streaming

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Entity streaming
- **Diagram ID**: 149809
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Stream_entity["Stream entity"]
    class StreamApplicationData["StreamApplicationData"]
    class Stream["Stream"]
    class BSL["BSL"]
    Stream ..> StreamApplicationData : unnamed
    Stream ..> Stream_entity : unnamed
    BSL o-- Stream : /v1.0/application/stream
```
