# Applicant

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1/applicant
- **Diagram ID**: 132775
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class Person["Person"]
    class SocialNetwork["SocialNetwork"]
    class PhoneNumber["PhoneNumber"]
    class EmailAddress["EmailAddress"]
    class Issuer["Issuer"]
    class Audit["Audit"]
    class PostalAddress["PostalAddress"]
    class Document["Document"]
    class ApplicantPersonRelationship["ApplicantPersonRelationship"]
    class Consent["Consent"]
    class CommunicationChannel["CommunicationChannel"]
    class Applicant["Applicant"]
    Applicant --> SocialNetwork : unnamed
    Applicant --> PhoneNumber : unnamed
    Applicant --> EmailAddress : unnamed
    Document --> Issuer : unnamed
    Applicant --> Person : unnamed
    Applicant --> CommunicationChannel : unnamed
    Applicant ..> Audit : unnamed
    Applicant --> PostalAddress : unnamed
    Applicant --> Document : unnamed
    Applicant --> ApplicantPersonRelationship : unnamed
    Applicant --> Consent : unnamed
```
