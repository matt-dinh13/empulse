---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1/applicant"
domain: "Analysis Model"
element_id: 1570687
diagrams: 1
connections: 12
tags:
  - class
  - analysis-model
---

# 🔷 Applicant

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1/applicant

## 🔗 Connections (12)

- → Usage: [[ApplicantPersonRelationship]]
- ← Usage: [[CreateApplicantDataRequest]]
- → Usage: [[CommunicationChannel]]
- → Dependency: [[Audit]]
- → Usage: [[Audit]]
- → Usage: [[SocialNetwork]]
- → Usage: [[Consent]]
- → Usage: [[Person (Class 1570681)]]
- → Usage: [[Document (Class 1570680)]]
- → Usage: [[PhoneNumber]]
- → Usage: [[PostalAddress]]
- → Usage: [[EmailAddress]]

## 📊 Appears In (1 diagrams)

- Logical: Applicant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| version | int |  |
| activeYn | boolean |  |
| originationDate | string <date-time> |  |
| reasonOfChange | string |  |
| audit | Audit |  |
| id | int |  |
| anonymizeYn | boolean |  |
| mysteryShopperYn | boolean |  |
| externalId | int |  |
| customValues | customEntryWrapper |  |
| emailAddresses | EmailAddress |  |
| phoneNumbers | PhoneNumber |  |
| postalAddresses | PostalAddress |  |
| socialNetworks | SocialNetwork |  |
| communicationChannels | CommunicationChannel |  |
| applicantPersonRelationship | CustomerPersonRelationship |  |
| documents | Document |  |
| person | Person |  |
| consents | Consent |  |
| temporaryApplicationCode | string |  |
