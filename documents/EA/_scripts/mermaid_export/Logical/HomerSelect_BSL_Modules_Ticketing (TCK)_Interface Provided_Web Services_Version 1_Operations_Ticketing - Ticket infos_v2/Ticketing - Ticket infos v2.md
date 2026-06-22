# Ticketing - Ticket infos v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Ticketing - Ticket infos/v2.0
- **Diagram ID**: 162957
- **Elements**: 24
- **Connectors**: 35

```mermaid
classDiagram
    class ADD_User["{ADD}User"]
    class ActionLabel["ActionLabel"]
    class Flow["Flow"]
    class ADD_RULE_DEFAULT["{ADD}RULE_DEFAULT"]
    class Rule["Rule"]
    class ADD_Transition["{ADD}Transition"]
    class ADD_TRANSITION_DEFAULT["{ADD}TRANSITION_DEFAULT"]
    class ADD_AssignedTo["{ADD}AssignedTo"]
    class ADD_QUEUE_DEFAULT["{ADD}QUEUE_DEFAULT"]
    class RELATED_SUBJECT_DEFAULT["RELATED_SUBJECT_DEFAULT"]
    class ADD_ASSIGNED_TO_DEFAULT["{ADD}ASSIGNED_TO_DEFAULT"]
    class DEFAULT["DEFAULT"]
    class ADD_Queue["{ADD}Queue"]
    class Priority["Priority"]
    class RelatedSubjectType["RelatedSubjectType"]
    class RelatedSubject["RelatedSubject"]
    class Category["Category"]
    class Status["Status"]
    class Type["Type"]
    class Department["Department"]
    class n_10_010_Search_for_tickets["10.010 Search for tickets"]
    class GetTicketInfoRequest["GetTicketInfoRequest"]
    class MOD_TicketInfo["{MOD}TicketInfo"]
    class TicketInfosV2["TicketInfosV2"]
    MOD_TicketInfo ..> Rule : unnamed
    Status ..> DEFAULT : unnamed
    Category ..> DEFAULT : unnamed
    Priority ..> DEFAULT : unnamed
    ADD_User ..> ADD_ASSIGNED_TO_DEFAULT : unnamed
    RelatedSubject ..> RELATED_SUBJECT_DEFAULT : unnamed
    ADD_Queue ..> ADD_QUEUE_DEFAULT : unnamed
    ADD_Transition ..> ADD_User : unnamed
    MOD_TicketInfo ..> ADD_Transition : unnamed
    MOD_TicketInfo ..> ADD_Queue : unnamed
    Rule ..> ADD_RULE_DEFAULT : unnamed
    Rule ..> Flow : unnamed
    Rule ..> ActionLabel : unnamed
    ADD_Transition ..> ADD_User : unnamed
    ADD_Transition ..> ADD_User : unnamed
    MOD_TicketInfo ..> ADD_User : unnamed
    ADD_Transition ..> ADD_TRANSITION_DEFAULT : unnamed
    ADD_Transition ..> Status : unnamed
    TicketInfosV2 ..> GetTicketInfoRequest : unnamed
    TicketInfosV2 ..> n_10_010_Search_for_tickets : unnamed
    ADD_Transition ..> Department : unnamed
    MOD_TicketInfo ..> Department : unnamed
    Rule ..> Department : unnamed
    Rule ..> Department : unnamed
    Department ..> DEFAULT : unnamed
    MOD_TicketInfo ..> Status : unnamed
    Type ..> DEFAULT : unnamed
    Rule ..> Status : unnamed
    Rule ..> Status : unnamed
    MOD_TicketInfo ..> Category : unnamed
    MOD_TicketInfo --> RelatedSubject : unnamed
    RelatedSubject ..> RelatedSubjectType : unnamed
    MOD_TicketInfo --> Priority : unnamed
    TicketInfosV2 ..> MOD_TicketInfo : unnamed
    MOD_TicketInfo ..> Type : unnamed
```
