# CustomerPerson

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1
- **Diagram ID**: 151926
- **Elements**: 15
- **Connectors**: 13

```mermaid
classDiagram
    class ReferenceInfo["ReferenceInfo"]
    class v1_1_CustomerPerson_Person["v1.1 :CustomerPerson - Person"]
    class RoleStatus["RoleStatus"]
    class v1_1_CustomerPerson_Person["v1.1 :CustomerPerson - Person"]
    class v1_1_CustomerPerson_Person["v1.1 :CustomerPerson - Person"]
    class SocialNetwork["SocialNetwork"]
    class PhoneNumber["PhoneNumber"]
    class EmailAddress["EmailAddress"]
    class Audit["Audit"]
    class Person["Person"]
    class Document["Document"]
    class CustomerPersonRelationship["CustomerPersonRelationship"]
    class Consent["Consent"]
    class CommunicationChannel["CommunicationChannel"]
    class CustomerPerson["CustomerPerson"]
    CustomerPerson --> RoleStatus : unnamed
    CustomerPerson --> Document : unnamed
    CustomerPerson --> PhoneNumber : unnamed
    CustomerPerson --> CustomerPersonRelationship : unnamed
    CustomerPerson --> ReferenceInfo : unnamed
    CustomerPerson --> Consent : unnamed
    CustomerPerson --> CommunicationChannel : unnamed
    CustomerPerson --> EmailAddress : unnamed
    CustomerPerson --> SocialNetwork : unnamed
    CustomerPerson --> Person : unnamed
    Person --> v1_1_CustomerPerson_Person : unnamed
    Person --> Document : unnamed
    CustomerPersonRelationship --> v1_1_CustomerPerson_Person : unnamed
```
