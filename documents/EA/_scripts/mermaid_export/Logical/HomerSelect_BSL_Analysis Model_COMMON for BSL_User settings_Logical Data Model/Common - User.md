# Common - User

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/User settings/Logical Data Model
- **Diagram ID**: 132931
- **Elements**: 8
- **Connectors**: 6

```mermaid
classDiagram
    class File_descriptor["File descriptor"]
    class User_Inbox_Attachment["User Inbox Attachment"]
    class UserToSupervisor["UserToSupervisor"]
    class System_Language["System Language"]
    class User_Inbox["User Inbox"]
    class User_Setting["User Setting"]
    class User["User"]
    class User_Setting_Item["User Setting Item"]
    User_Setting ..> User_Setting_Item : unnamed
    User_Inbox --> User : unnamed
    User --> User : unnamed
    User --> User_Setting : unnamed
    User_Inbox --> User_Inbox_Attachment : unnamed
    User_Inbox_Attachment --> File_descriptor : unnamed
```
