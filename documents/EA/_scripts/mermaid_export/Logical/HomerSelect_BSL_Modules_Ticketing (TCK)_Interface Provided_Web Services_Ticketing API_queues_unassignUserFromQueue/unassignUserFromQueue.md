# unassignUserFromQueue

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/queues/unassignUserFromQueue
- **Diagram ID**: 159995
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class n_400["400"]
    class n_200["200"]
    class ADD_QueueExtendedUser["{ADD}QueueExtendedUser"]
    class ADD_ErrorMessageRestApi["{ADD}ErrorMessageRestApi"]
    class queues_queueCode_user_userLogin["/queues/{queueCode}/user/{userLogin}"]
    queues_queueCode_user_userLogin ..> ADD_ErrorMessageRestApi : unnamed
    queues_queueCode_user_userLogin ..> ADD_ErrorMessageRestApi : unnamed
    queues_queueCode_user_userLogin ..> ADD_QueueExtendedUser : unnamed
    queues_queueCode_user_userLogin ..> n_200 : unnamed
```
