# PartyContactNotification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Application/PartyContactNotification
- **Diagram ID**: 138521
- **Elements**: 10
- **Connectors**: 8

```mermaid
classDiagram
    class PartyContactNotification_data_mapping["PartyContactNotification data mapping"]
    class PartyRoleType["PartyRoleType"]
    class PartyContactNotification["PartyContactNotification"]
    class BusinessProcessDetails["BusinessProcessDetails"]
    class ChannelDetails["ChannelDetails"]
    class BusinessProcess["BusinessProcess"]
    class ContactType["ContactType"]
    class Channel["Channel"]
    class ContactEvent["ContactEvent"]
    class EventInfo["EventInfo"]
    ContactEvent ..> EventInfo : unnamed
    PartyContactNotification ..> ContactEvent : unnamed
    ContactEvent ..> Channel : unnamed
    ContactEvent ..> ContactType : unnamed
    ContactEvent ..> BusinessProcess : unnamed
    Channel ..> ChannelDetails : unnamed
    BusinessProcess ..> BusinessProcessDetails : unnamed
    ContactEvent ..> PartyRoleType : unnamed
```
