# unassignTicketFromUser

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/assignments/unassignTicketFromUser
- **Diagram ID**: 159945
- **Elements**: 7
- **Connectors**: 4

```mermaid
classDiagram
    class n_10_063_Unassign_ticket_from_user["10.063 Unassign ticket from user"]
    class ADD_DeleteTicketAssignment["{ADD}DeleteTicketAssignment"]
    class ADD_PropertyError["{ADD}PropertyError"]
    class ADD_ErrorMessageRestApi["{ADD}ErrorMessageRestApi"]
    class assignments_tickets_ticketCode["/assignments/tickets/{ticketCode}"]
    class n_400["400"]
    class n_200["200"]
    assignments_tickets_ticketCode ..> n_200 : unnamed
    assignments_tickets_ticketCode ..> ADD_ErrorMessageRestApi : unnamed
    assignments_tickets_ticketCode ..> n_10_063_Unassign_ticket_from_user : unnamed
    ADD_ErrorMessageRestApi ..> ADD_PropertyError : unnamed
```
