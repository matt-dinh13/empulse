# Authentication questions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Logical data model
- **Diagram ID**: 134516
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class AccountTypeDto["AccountTypeDto"]
    class Authentication_Question["Authentication Question"]
    class Authentication_Question_Type["Authentication Question Type"]
    class Authentication_questions["Authentication questions"]
    Authentication_Question ..> Authentication_Question_Type : unnamed
    Authentication_Question ..> AccountTypeDto : unnamed
    Authentication_questions ..> Authentication_Question : unnamed
```
