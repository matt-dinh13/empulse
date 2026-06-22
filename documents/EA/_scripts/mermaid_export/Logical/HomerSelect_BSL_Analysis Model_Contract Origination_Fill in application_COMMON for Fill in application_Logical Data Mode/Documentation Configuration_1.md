# Documentation Configuration

```mermaid
classDiagram
    class Document_Content_Check_Moment["Document Content Check Moment"]
    class Product_Profile_2_Documentation_Configuration["Product Profile 2 Documentation Configuration"]
    class Documentation_Configuration["Documentation Configuration"]
    class Product_Profile["Product Profile"]
    class Logical_Data_Model_Document_Type["Logical Data Model : Document Type"]
    class Related_To_Type["Related To Type"]
    class Profile_Document_Rule_Print_Moment["Profile Document Rule Print Moment"]
    class Profile_Document_Rule_Check_Moment["Profile Document Rule Check Moment"]
    class MOD_Check_Moment_Type["{MOD}Check Moment Type"]
    class Product_Profile_Document_Rule["Product Profile Document Rule"]
    class Document_Type["Document Type"]
    class Logical_Data_Model_Product_Profile["Logical Data Model :Product Profile"]
    Product_Profile_Document_Rule --> Document_Type : unnamed
    Profile_Document_Rule_Print_Moment --> Product_Profile_Document_Rule : When Printable
    Document_Content_Check_Moment --> Product_Profile_Document_Rule : When content required
    Profile_Document_Rule_Check_Moment --> Product_Profile_Document_Rule : When Required
    Profile_Document_Rule_Print_Moment --> MOD_Check_Moment_Type : unnamed
    Profile_Document_Rule_Check_Moment --> MOD_Check_Moment_Type : unnamed
    Document_Content_Check_Moment --> MOD_Check_Moment_Type : unnamed
    Product_Profile_Document_Rule --> Related_To_Type : unnamed
    Product_Profile_Document_Rule --> Documentation_Configuration : unnamed
    Product_Profile_2_Documentation_Configuration --> Product_Profile : unnamed
    Product_Profile_2_Documentation_Configuration --> Documentation_Configuration : unnamed
```
