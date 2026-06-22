# Create/Update bank branch - VN Specific

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/VN
- **Diagram ID**: 131853
- **Elements**: 15
- **Connectors**: 11

```mermaid
graph TD
    Alphanumeric["Alphanumeric"]
    Unique_value["Unique value"]
    Bank_branch_code["Bank branch code"]
    Mandatory["Mandatory"]
    Bank_branch_district["Bank branch district"]
    Bank_branch_region["Bank branch region"]
    Region_District_relation_and_selection["RegionandDistrict relation and selection"]
    Phone_number_format_VN["Phone number format - VN"]
    Email_format["Email format"]
    Text_with_special_characters_without_asterisk["Text with special characters without asterisk"]
    Street["Street"]
    Ward["Ward"]
    Contact_phone["Contact phone"]
    Contact_email["Contact email"]
    Vietnam_specific_input_fields_for_Create_Update_bank_branch["Vietnam specific input fields for Create/Update bank branch"]
    Ward -->|unnamed| Text_with_special_characters_without_asterisk
    Street -->|unnamed| Text_with_special_characters_without_asterisk
    Contact_email -->|unnamed| Email_format
    Contact_phone -->|unnamed| Phone_number_format_VN
    Bank_branch_district -->|unnamed| Region_District_relation_and_selection
    Bank_branch_region -->|unnamed| Region_District_relation_and_selection
    Bank_branch_district -->|unnamed| Mandatory
    Bank_branch_region -->|unnamed| Mandatory
    Bank_branch_code -->|unnamed| Mandatory
    Bank_branch_code -->|{DEL IAVN-468}| Unique_value
    Bank_branch_code -->|unnamed| Alphanumeric
```
