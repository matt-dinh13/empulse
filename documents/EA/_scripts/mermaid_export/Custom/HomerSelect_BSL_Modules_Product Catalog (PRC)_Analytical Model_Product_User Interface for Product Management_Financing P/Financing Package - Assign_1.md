# Financing Package - Assign

```mermaid
graph TD
    Filter_By_Selection_Type["Filter By Selection Type"]
    Filter_by_Selection["Filter by Selection"]
    Filter_by_Text["Filter by Text"]
    Clear_Filter["Clear Filter"]
    Filter["Filter"]
    Filter_list_of_Financing_Packages["Filter list of Financing Packages"]
    Filter["Filter"]
    Tab_Financing_Package["Tab Financing Package"]
    DEL_02_642_Assign_Financial_Packages_to_Product["{DEL}02.642 Assign Financial Packages to Product"]
    Common_product_properties_header["Common product properties header"]
    Deselect_all["Deselect all"]
    Cancel["Cancel"]
    OK["OK"]
    Assign_Financing_Packages["Assign Financing Packages"]
    Assign_Financing_Packages["Assign Financing Packages"]
    Assign_Financing_Packages -->|unnamed| DEL_02_642_Assign_Financial_Packages_to_Product
    Cancel -->|unnamed| Tab_Financing_Package
    OK -->|unnamed| Tab_Financing_Package
    Filter -->|unnamed| Filter_list_of_Financing_Packages
    Filter_by_Selection -->|unnamed| Filter_By_Selection_Type
```
