# Application

```mermaid
classDiagram
    class PaymentChannels["PaymentChannels"]
    class ExtendedProperties["ExtendedProperties"]
    class ExtendedProperty["ExtendedProperty"]
    class RefinancedContractBase["RefinancedContractBase"]
    class PersonCustomAttribute["PersonCustomAttribute"]
    class ClientAddressType["ClientAddressType"]
    class ExternalIdentificationAttributes["ExternalIdentificationAttributes"]
    class Remittance_Data["Remittance Data"]
    class SecurityQuestion["SecurityQuestion"]
    class CardService["CardService"]
    class ExtendedInformation["ExtendedInformation"]
    class PersonAddress["PersonAddress"]
    class PersonAddressType["PersonAddressType"]
    class ContactRole["ContactRole"]
    class Person["Person"]
    class Address["Address"]
    class ClientAddress["ClientAddress"]
    class Contact["Contact"]
    class Language["Language"]
    class InsuranceCustomData["InsuranceCustomData"]
    class InsuranceService["InsuranceService"]
    class Service["Service"]
    class userStatistics["userStatistics"]
    class Commodity["Commodity"]
    class Employment["Employment"]
    class Document["Document"]
    class MOD_Application["{MOD}Application"]
    ClientAddress --> Address : unnamed
    MOD_Application --> ExtendedProperties : unnamed
    ExtendedProperties --> ExtendedProperty : unnamed
    MOD_Application --> RefinancedContractBase : unnamed
    MOD_Application --> PersonCustomAttribute : unnamed
    ClientAddress --> ClientAddressType : unnamed
    MOD_Application --> ExternalIdentificationAttributes : unnamed
    Person --> Remittance_Data : unnamed
    MOD_Application --> SecurityQuestion : unnamed
    MOD_Application --> ExtendedInformation : unnamed
    Person --> PersonAddress : unnamed
    PersonAddress --> PersonAddressType : unnamed
    Contact --> ContactRole : unnamed
    MOD_Application --> PaymentChannels : unnamed
    PersonAddress --> Address : unnamed
    MOD_Application --> Document : unnamed
    Employment --> Address : unnamed
    MOD_Application --> ClientAddress : unnamed
    Employment --> Contact : unnamed
    MOD_Application --> Contact : unnamed
    Person --> Contact : unnamed
    MOD_Application --> Language : unnamed
    InsuranceService --> InsuranceCustomData : unnamed
    CardService --> Service : unnamed
    InsuranceService --> Service : unnamed
    MOD_Application --> Service : unnamed
    MOD_Application --> userStatistics : unnamed
    MOD_Application --> Commodity : unnamed
    MOD_Application --> Employment : unnamed
    MOD_Application --> Person : unnamed
```
