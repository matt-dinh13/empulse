# Bank management navigation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface
- **Diagram ID**: 152615
- **Elements**: 6
- **Connectors**: 10

```mermaid
graph TD
    Create_Update_bank_branch["Create/Update bank branch"]
    Bank_branch_detail["Bank branch detail"]
    Find_bank_branch["Find bank branch"]
    Bank_Detail["Bank Detail"]
    Create_Update_bank["Create/Update bank"]
    Find_bank["Find bank"]
    Find_bank -->|Create| Create_Update_bank
    Bank_Detail -->|Update| Create_Update_bank
    Find_bank -->|Show detail| Bank_Detail
    Create_Update_bank -->|Confirm| Bank_Detail
    Bank_branch_detail -->|Show bank detail| Bank_Detail
    Find_bank_branch -->|Show detail| Bank_branch_detail
    Bank_Detail -->|Show bank branch| Bank_branch_detail
    Create_Update_bank_branch -->|Confirm| Bank_branch_detail
    Bank_branch_detail -->|Update| Create_Update_bank_branch
    Bank_Detail -->|Create / Update branch| Create_Update_bank_branch
```
