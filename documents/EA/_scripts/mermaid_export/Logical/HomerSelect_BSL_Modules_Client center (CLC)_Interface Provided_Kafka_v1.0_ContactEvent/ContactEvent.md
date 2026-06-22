# ContactEvent

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/ContactEvent
- **Diagram ID**: 156294
- **Elements**: 9
- **Connectors**: 10

```mermaid
classDiagram
    class Create_PartyContactNotification["Create PartyContactNotification"]
    class PartyRoleType["PartyRoleType"]
    class BusinessProcessDetails["BusinessProcessDetails"]
    class ChannelDetails["ChannelDetails"]
    class BusinessProcess["BusinessProcess"]
    class ContactType["ContactType"]
    class Channel["Channel"]
    class ADD_ContactEvent["{ADD}ContactEvent"]
    class EventInfo["EventInfo"]
    ADD_ContactEvent ..> EventInfo : unnamed
    ADD_ContactEvent ..> Channel : unnamed
    ADD_ContactEvent ..> ContactType : unnamed
    ADD_ContactEvent ..> BusinessProcess : unnamed
    Channel ..> ChannelDetails : unnamed
    BusinessProcess ..> BusinessProcessDetails : unnamed
    ADD_ContactEvent ..> PartyRoleType : unnamed
    BusinessProcessDetails ..> Create_PartyContactNotification : unnamed
    ChannelDetails ..> Create_PartyContactNotification : unnamed
    Channel ..> Create_PartyContactNotification : unnamed
```
