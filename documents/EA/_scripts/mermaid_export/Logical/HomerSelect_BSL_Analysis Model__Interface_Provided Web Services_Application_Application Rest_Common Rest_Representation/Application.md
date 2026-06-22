# Application

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Common Rest/Representation
- **Diagram ID**: 158547
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class Relationships["Relationships"]
    class Party["Party"]
    class Relationship["Relationship"]
    class Service["Service"]
    class RefinancedContract["RefinancedContract"]
    class CardService["CardService"]
    class ClientData["ClientData"]
    class AbstractApplicationRestTO["AbstractApplicationRestTO"]
    AbstractApplicationRestTO ..> Service : unnamed
    AbstractApplicationRestTO ..> ClientData : unnamed
    AbstractApplicationRestTO ..> RefinancedContract : unnamed
    AbstractApplicationRestTO ..> Relationships : unnamed
    Service <|-- CardService : unnamed
    Relationship --> Party : unnamed
    Relationships --> Relationship : unnamed
```
