# BITE

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-6304 (CBL-31820) Migrate BSL Bank Account Validation from Artajasa Integration to BITE System/BITE
- **Diagram ID**: 164322
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class ADD_PAYM_6304_validateAccountRequest["{ADD PAYM-6304}validateAccountRequest"]
    class ADD_PAYM_6304_validateAccountResponse["{ADD PAYM-6304}validateAccountResponse"]
    class ADD_PAYM_6304_Validate_Account["{ADD PAYM-6304}Validate Account"]
    ADD_PAYM_6304_Validate_Account --> ADD_PAYM_6304_validateAccountResponse : unnamed
    ADD_PAYM_6304_Validate_Account --> ADD_PAYM_6304_validateAccountRequest : unnamed
```
