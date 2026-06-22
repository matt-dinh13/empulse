# Client Search Form - VN

```mermaid
graph TD
    Date_after_1_1_1900_and_not_in_future["Date after 1.1.1900 and not in future"]
    ADD_Birth_Date["{ADD} Birth Date"]
    Length_30["Length ‹= 30"]
    Document_Number["Document Number"]
    ADD_Birth_Date -->|unnamed| Date_after_1_1_1900_and_not_in_future
    Document_Number -->|unnamed| Length_30
```
