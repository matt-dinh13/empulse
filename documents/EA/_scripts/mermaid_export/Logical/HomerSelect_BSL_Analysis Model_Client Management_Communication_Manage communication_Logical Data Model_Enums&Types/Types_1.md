# Types

```mermaid
classDiagram
    class Communication_Event["Communication Event"]
    class Communication_Channel["Communication Channel"]
    class Communication_Processing_Status["Communication Processing Status"]
    class Direction_Type["Direction Type"]
    class Communication_Contact_Type["Communication Contact Type"]
    Communication_Channel --> Communication_Contact_Type : unnamed
    Communication_Channel --> Direction_Type : unnamed
    Communication_Event --> Communication_Processing_Status : unnamed
```
