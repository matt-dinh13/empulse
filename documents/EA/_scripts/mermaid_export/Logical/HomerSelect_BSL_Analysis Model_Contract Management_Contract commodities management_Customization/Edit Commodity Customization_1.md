# Edit Commodity Customization

```mermaid
classDiagram
    class Edit_commodity_modal_window_Edit_commodity["Edit commodity (modal window) : Edit commodity"]
    class ADD_Commodity_Data_Validation_Parameters["{ADD}Commodity Data Validation Parameters"]
    class User_Interface_Model_Edit_commodity["User Interface Model : Edit commodity"]
    class Commodity_Data_Visibility_Parameters["Commodity Data Visibility Parameters"]
    Edit_commodity_modal_window_Edit_commodity --> Commodity_Data_Visibility_Parameters : unnamed
    ADD_Commodity_Data_Validation_Parameters --> User_Interface_Model_Edit_commodity : unnamed
    User_Interface_Model_Edit_commodity --> Commodity_Data_Visibility_Parameters : unnamed
```
