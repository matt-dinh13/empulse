# PartyContactNotification

```mermaid
classDiagram
    class Create_PartyContactNotification["Create PartyContactNotification"]
    class PartyRoleType["PartyRoleType"]
    class PartyContactNotification["PartyContactNotification"]
    class BusinessProcessDetails["BusinessProcessDetails"]
    class ChannelDetails["ChannelDetails"]
    class BusinessProcess["BusinessProcess"]
    class ContactType["ContactType"]
    class Channel["Channel"]
    class ContactEvent["ContactEvent"]
    class EventInfo["EventInfo"]
    ContactEvent --> EventInfo : unnamed
    PartyContactNotification --> ContactEvent : unnamed
    ContactEvent --> Channel : unnamed
    ContactEvent --> ContactType : unnamed
    ContactEvent --> BusinessProcess : unnamed
    Channel --> ChannelDetails : unnamed
    BusinessProcess --> BusinessProcessDetails : unnamed
    ContactEvent --> PartyRoleType : unnamed
    BusinessProcessDetails --> Create_PartyContactNotification : unnamed
    ChannelDetails --> Create_PartyContactNotification : unnamed
    Channel --> Create_PartyContactNotification : unnamed
```
