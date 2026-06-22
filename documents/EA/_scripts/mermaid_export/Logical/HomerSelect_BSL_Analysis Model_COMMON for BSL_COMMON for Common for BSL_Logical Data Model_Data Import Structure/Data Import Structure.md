# Data Import Structure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Logical Data Model/Data Import Structure
- **Diagram ID**: 93351
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class Data_transfer_item_status_type["Data transfer item status type"]
    class Data_transfer_status_type["Data transfer status type"]
    class Data_exchange_direction_type["Data exchange direction type"]
    class Data_exchange["Data exchange"]
    class Data_transfer_item["Data transfer item"]
    class Data_transfer["Data transfer"]
    class File_descriptor["File descriptor"]
    Data_transfer o-- Data_transfer_item : unnamed
    Data_transfer ..> Data_exchange : unnamed
    Data_exchange ..> Data_exchange_direction_type : unnamed
    Data_transfer ..> Data_transfer_status_type : unnamed
    Data_transfer_item ..> Data_transfer_item_status_type : unnamed
    File_descriptor --> Data_transfer : unnamed
```
