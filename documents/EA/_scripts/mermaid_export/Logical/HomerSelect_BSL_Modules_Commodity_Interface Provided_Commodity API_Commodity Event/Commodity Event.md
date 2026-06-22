# Commodity Event

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity Event
- **Diagram ID**: 143856
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class POST_commodities_event["POST commodities event"]
    class EventType["EventType"]
    class CommoditiesEventResponse["CommoditiesEventResponse"]
    class Commodity_API_Commodity_REST_API["Commodity API :Commodity REST API"]
    class commodities_event["commodities-event"]
    commodities_event ..> POST_commodities_event : unnamed
    commodities_event ..> EventType : unnamed
    commodities_event ..> CommoditiesEventResponse : unnamed
```
