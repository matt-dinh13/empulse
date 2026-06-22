# Ticketing - Queue management

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Use Case Model
- **Diagram ID**: 163033
- **Elements**: 20
- **Connectors**: 26

```mermaid
graph LR
    Queue_assignment_modal_ADD_Queue_assignment_modal["Queue assignment modal : {ADD}Queue assignment modal"]
    getTicketQueues_getTicketQueues["getTicketQueues : getTicketQueues"]
    listQueues_listQueues["listQueues : listQueues"]
    assignUserIntoQueue_assignUserIntoQueue["assignUserIntoQueue : assignUserIntoQueue"]
    assignTicketFromQueue_assignTicketFromQueue["assignTicketFromQueue : assignTicketFromQueue"]
    assignTicketToUser_assignTicketToUser["assignTicketToUser : assignTicketToUser"]
    unassignTicketFromUser_unassignTicketFromUser["unassignTicketFromUser : unassignTicketFromUser"]
    Update_assignee["Update assignee"]
    Check_that_an_authenticated_user_exists["Check that an authenticated user exists
"]
    n_10_018_Assign_user_into_queue(("10.018 Assign user into queue"))
    n_10_019_Unassign_user_from_queue(("10.019 Unassign user from queue"))
    n_10_038_Get_department_users(("10.038 Get department users"))
    User[/"User"/]
    n_10_017_Get_available_queues(("10.017 Get available queues"))
    n_10_063_Unassign_ticket_from_user(("10.063 Unassign ticket from user"))
    n_10_062_Assign_ticket_to_user(("10.062 Assign ticket to user"))
    n_10_061_Assign_a_ticket_from_queue(("10.061 Assign a ticket from queue"))
    n_10_033_Remove_ticket_from_queue(("10.033 Remove ticket from queue"))
    n_10_032_Add_ticket_to_queue(("10.032 Add ticket to queue"))
    n_10_031_Get_ticket_queues(("10.031 Get ticket queues"))
    listQueues_listQueues -->|unnamed| n_10_017_Get_available_queues
    n_10_061_Assign_a_ticket_from_queue -->|unnamed| Update_assignee
    n_10_063_Unassign_ticket_from_user -->|unnamed| Update_assignee
    n_10_061_Assign_a_ticket_from_queue -->|unnamed| Check_that_an_authenticated_user_exists
    n_10_063_Unassign_ticket_from_user -->|unnamed| Check_that_an_authenticated_user_exists
    assignUserIntoQueue_assignUserIntoQueue -->|unnamed| n_10_018_Assign_user_into_queue
    assignUserIntoQueue_assignUserIntoQueue -->|unnamed| n_10_019_Unassign_user_from_queue
    n_10_062_Assign_ticket_to_user -->|unnamed| n_10_038_Get_department_users
    n_10_018_Assign_user_into_queue -.->|include| n_10_017_Get_available_queues
    n_10_017_Get_available_queues -->|unnamed| Queue_assignment_modal_ADD_Queue_assignment_modal
    n_10_032_Add_ticket_to_queue -.->|include| n_10_017_Get_available_queues
    getTicketQueues_getTicketQueues -->|unnamed| n_10_031_Get_ticket_queues
    unassignTicketFromUser_unassignTicketFromUser -->|unnamed| n_10_063_Unassign_ticket_from_user
    assignTicketToUser_assignTicketToUser -->|unnamed| n_10_062_Assign_ticket_to_user
    assignTicketFromQueue_assignTicketFromQueue -->|unnamed| n_10_061_Assign_a_ticket_from_queue
    Queue_assignment_modal_ADD_Queue_assignment_modal -->|unnamed| n_10_033_Remove_ticket_from_queue
    Queue_assignment_modal_ADD_Queue_assignment_modal -->|unnamed| n_10_032_Add_ticket_to_queue
    User --- n_10_017_Get_available_queues
    User --- n_10_063_Unassign_ticket_from_user
    User --- n_10_033_Remove_ticket_from_queue
    User --- n_10_019_Unassign_user_from_queue
    User --- n_10_061_Assign_a_ticket_from_queue
    User --- n_10_032_Add_ticket_to_queue
    User --- n_10_031_Get_ticket_queues
    User --- n_10_018_Assign_user_into_queue
    User --- n_10_062_Assign_ticket_to_user
```
