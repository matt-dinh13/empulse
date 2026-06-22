# Create/Update address

```mermaid
graph TD
    tab_Addresses["tab Addresses"]
    Edit_Address["Edit Address"]
    Cancel["Cancel"]
    OK["OK"]
    n_09_100_Update_address["09.100 Update address"]
    n_09_090_Create_address["09.090 Create address"]
    Address_type["Address type"]
    Edit_Address["Edit Address"]
    Edit_Address -->|unnamed| n_09_090_Create_address
    Edit_Address -->|unnamed| n_09_100_Update_address
    OK -->|unnamed| tab_Addresses
    Cancel -->|unnamed| tab_Addresses
```
