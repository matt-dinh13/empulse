# LoanApplicationData_v1

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/LoanApplicationData/LoanApplicationData_v1
- **Diagram ID**: 150380
- **Elements**: 24
- **Connectors**: 30

```mermaid
classDiagram
    class BankBranch["BankBranch"]
    class Commodity["Commodity"]
    class ApplicationProcessingPhase["ApplicationProcessingPhase"]
    class ClientAddress["ClientAddress"]
    class RelatedPersonAddress["RelatedPersonAddress"]
    class Address["Address"]
    class PersonCustomAttribute["PersonCustomAttribute"]
    class Employment["Employment"]
    class Remittance["Remittance"]
    class RelatedPerson["RelatedPerson"]
    class ExternalIdentifier["ExternalIdentifier"]
    class DocumentVerification["DocumentVerification"]
    class ContactVerification["ContactVerification"]
    class DocumentAttribute["DocumentAttribute"]
    class Document["Document"]
    class Contact["Contact"]
    class BankAccount["BankAccount"]
    class PaymentChannel["PaymentChannel"]
    class Card["Card"]
    class ClientPossession["ClientPossession"]
    class SecurityQuestion["SecurityQuestion"]
    class PreferredLanguage["PreferredLanguage"]
    class Application["Application"]
    class LoanApplicationData_v1["LoanApplicationData_v1"]
    Contact ..> ContactVerification : unnamed
    Application ..> Commodity : unnamed
    LoanApplicationData_v1 ..> ApplicationProcessingPhase : unnamed
    Application ..> ClientAddress : unnamed
    RelatedPerson ..> RelatedPersonAddress : unnamed
    ClientAddress ..> Address : unnamed
    RelatedPersonAddress ..> Address : unnamed
    Employment ..> Address : unnamed
    Application ..> PersonCustomAttribute : unnamed
    Application ..> Employment : unnamed
    RelatedPerson ..> Employment : unnamed
    RelatedPerson ..> Remittance : unnamed
    Application ..> RelatedPerson : unnamed
    BankAccount ..> BankBranch : unnamed
    Document ..> DocumentVerification : unnamed
    LoanApplicationData_v1 ..> Application : unnamed
    Document ..> DocumentAttribute : unnamed
    RelatedPerson ..> Document : unnamed
    Application ..> Document : unnamed
    Application ..> Contact : unnamed
    RelatedPerson ..> Contact : unnamed
    Employment ..> Contact : unnamed
    PaymentChannel ..> BankAccount : unnamed
    Application ..> PaymentChannel : unnamed
    Application ..> PaymentChannel : unnamed
    Application ..> Card : unnamed
    Application ..> ClientPossession : unnamed
    Application ..> SecurityQuestion : unnamed
    Application ..> PreferredLanguage : unnamed
    Application ..> ExternalIdentifier : unnamed
```
